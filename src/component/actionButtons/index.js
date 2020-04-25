import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding:5,
    textAlign:'center'
  }
}))

export default (props) => {
  const classes = useStyles();
  const { handleResetClick } = props;
  return (
    <div className={classes.root}>
      <Button variant="contained" color="secondary" onClick={handleResetClick}>
        Reset
      </Button>
    </div>
  )
}
