import React from 'react';
import { Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth:400,
    minHeight:'100%',
    display:'flex',
    flexDirection:'row',
    flexWrap:'noWrap',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  }
}))

export default (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {!!props.render === true ? props.render() : null}
    </Paper>
  )
}
