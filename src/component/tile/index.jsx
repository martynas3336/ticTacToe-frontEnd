import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    userSelect:'none',
    minHeight:20,
    minWidth:80
  }
}))

export default (props) => {
  const classes = useStyles();
  const { value } = props;

  let visualVal = '';
  if(value === 1) visualVal = 'O';
  if(value === 2) visualVal = 'X';

  return (
    <div className={classes.root}>
      {visualVal}
    </div>
  )
}
