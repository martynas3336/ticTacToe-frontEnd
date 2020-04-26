import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Wrapper from '@src/component/wrapper';
import Card from '@src/component/card';
import Tiles from '@src/component/tiles';
import Tile from '@src/component/tile';
import ActionButtons from '@src/component/actionButtons';

import Spinner from '@src/component/spinner';

import { Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { isTrio, checkGame, isGameCompleted, isGameWon, getWinningTiles, checkWinner } from '@src/asset/utils';

const useStyles = makeStyles(theme => ({
  container: {
    width:'100%',
  },

  spinnerWrapper: {
    height:20,
  },

  logsWrapper: {
    maxHeight:300,
    overflowY:'scroll',
    padding:20,
    marginTop:10
  }
}))

const App = (props) => {
  const classes = useStyles();

  // loading on first page load
  const [ loading, setLoading ] = useState(true);
  const [ actionLoading, setActionLoading ] = useState(false);

  // loading on any other action
  const { tiles, tilesUpdate } = props;
  const { logs, logsUpdate } = props;

  // on tilesUpdate
  useEffect(() => {
    axios.get('/api/tiles/logs').then(res => {
      logsUpdate({list:res.data});
    }).finally(() => {
      setLoading(false);
      setActionLoading(false);
    })
  }, [tiles])

  // componentDidMount
  useEffect(() => {
    axios.get('/api/tiles').then(res => {
      tilesUpdate(res.data);
    }).catch(err => {
      setLoading(false);
    })
  }, [])

  // on Reset button click
  const handleResetClick = () => {
    setActionLoading(true);
    axios.post('/api/tiles/reset').then(res => {
      tilesUpdate(res.data);
    }).catch(err => {
      setLoading(false);
    })
  }

  // on tile click
  const handleTileClick = (i) => () => {
    if(actionLoading === true || tiles.grid[i] !==0 || isGameCompleted(tiles.grid) === true) return;
    setActionLoading(true);
    axios.post(`/api/tiles/clickTile/${i}`).then(res => {
      tilesUpdate(res.data);
    }).catch(err => {
      setLoading(false);
    })
  }

  if(loading === true) return (<Spinner />);

  return (
    <Wrapper render={() => (
      <div className={classes.container}>
        <div className={classes.spinnerWrapper}>
          {actionLoading === true ? <Spinner /> : null}
        </div>
        <Typography variant="h3" align="center">
          TIC TAC TOE
        </Typography>
        <Card render={() => (
          <Tiles Tile={Tile} tiles={tiles} handleTileClick={handleTileClick} disabled={actionLoading || isGameCompleted(tiles.grid) === true} winningTiles={getWinningTiles(tiles.grid)}/>
        )}/>
        <Typography variant="body2" align="center">
          Current player: {(tiles.grid.filter(e => e === 0).length % 2 !== 0) ? 'X' : 'O'}
        </Typography>
        <ActionButtons handleResetClick={handleResetClick} />
        <Paper className={classes.logsWrapper}>
          {logs.list.map(log => (
            <List key={log.id} dense={true}>
              <ListItem>
                <ListItemText primary={log.main} secondary={log.createdAt} align="center"/>
              </ListItem>
            </List>
          ))}
        </Paper>
      </div>
    )}/>
  )
}

const mapStateToProps = (state) => ({
  tiles: state.tiles,
  logs: state.logs
})


const mapDispatchToProps = (dispatch) => ({
  tilesUpdate: (data) => dispatch({type:'TILES_UPDATE', data:data}),
  logsUpdate: (data) => dispatch({type:'LOGS_UPDATE', data:data})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
