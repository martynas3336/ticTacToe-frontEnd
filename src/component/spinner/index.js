import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { makeStyles, withTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    overflow:'hidden',
    textAlign:'right',
    paddingRight:50
  },
}));

const Spinner = (props) => {

  const { theme } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ClipLoader
        sizeUnit={"px"}
        size={20}
        color={theme.palette.primary.main}
      />
    </div>
  )
}

export default withTheme(Spinner);
