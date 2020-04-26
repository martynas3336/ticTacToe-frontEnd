import React from 'react';
import { Paper, TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {

  },

  row: {
    borderBottom:'1px solid #515151',
    '&:nth-of-type(3)': {
      borderBottom:0,
      '& > td': {
        borderBottom:0
      }
    },
  },

  cell: {
    borderRight:'1px solid #515151',
    transition:theme.transitions.create(['background-color'], {duration:theme.transitions.duration.complex}),
    '&:nth-of-type(3n)': {
      borderRight:0
    },
    '&:hover, &:focus': {
      backgroundColor: '#515151',
      transition:theme.transitions.create(['background-color'], {duration:theme.transitions.duration.complex}),
    }
  },

  cellDisabled: {
    opacity:0.6
  },

  cellWinning: {
    backgroundColor:'#383838'
  }
}))

export default (props) => {
  const { Tile, tiles, handleTileClick, disabled, winningTiles } = props;
  const classes = useStyles();
  return (
    <TableContainer className={classes.root}>
      <Table>
        <TableBody>
          {[0,1,2].map(i => (
            <TableRow key={i} className={classes.row}>
              {[0,1,2].map(j => (
                <TableCell key={j} align="center" className={`${classes.cell} ${disabled === true ? classes.cellDisabled : ''} ${winningTiles.includes(i*3+j) === true ? classes.cellWinning : ''}`} onClick={handleTileClick(i*3+j)} >
                  <Tile value={tiles.grid[i*3+j]} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
