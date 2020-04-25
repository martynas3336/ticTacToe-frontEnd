import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 350,
    maxWidth: 1000,
    width:'100%',
    margin:'10px auto',
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
