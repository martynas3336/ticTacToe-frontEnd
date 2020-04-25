import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Wrapper from '@src/component/wrapper';
import Card from '@src/component/card';
import Tiles from '@src/component/tiles';
import Tile from '@src/component/tile';
import ActionButtons from '@src/component/actionButtons';

import Spinner from '@src/component/spinner';

import { Typography } from '@material-ui/core';

import tilesUpdateAction from '@src/action/tilesUpdateAction';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    width:'100%',
  },

  spinnerWrapper: {
    height:20,
  }
}))

const App = (props) => {
  const classes = useStyles();

  const [ loading, setLoading ] = useState(true);
  const [ actionLoading, setActionLoading ] = useState(false);

  const { tiles, tilesUpdate } = props;

  // componentDidMount
  useEffect(() => {
    axios.get('/api/tiles').then(res => {
      tilesUpdate({
        id:res.data.id,
        grid:res.data.grid.split(',')
      })
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  // on Reset button click
  const handleResetClick = () => {
    setActionLoading(true);
    axios.post('/api/tiles/reset').then(res => {
      tilesUpdate({
        id:res.data.id,
        grid:res.data.grid.split(',')
      })
      setActionLoading(false);
    })
  }

  // on tile click
  const handleTileClick = (i) => () => {
    setActionLoading(true);
    axios.post(`/api/tiles/updateTile/${i}`).then(res => {
      tilesUpdate({
        id:res.data.id,
        grid:res.data.grid.split(',')
      })
      setActionLoading(false);
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
          <Tiles Tile={Tile} tiles={tiles} handleTileClick={handleTileClick}/>
        )}/>
        <Typography variant="body2" align="center">
          Current player: {(tiles.grid.filter(e => e === 0).length % 2 !== 0) ? 'X' : 'O'}
        </Typography>
        <ActionButtons handleResetClick={handleResetClick} />
      </div>
    )}/>
  )
}

const mapStateToProps = (state) => ({
  tiles: state.tiles
})


const mapDispatchToProps = (dispatch) => ({
  tilesUpdate: (data) => dispatch({type:'TILES_UPDATE', data:data})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
