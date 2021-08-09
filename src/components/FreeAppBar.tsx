import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import useStyles from "./FreeAppBar.style"

const FreeAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" size="large">
          <img src="/assets/logo-free.png" className={classes.logo} alt="logo" />
        </IconButton>
        <Typography variant="h4">Movie Finder</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default FreeAppBar
