import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btnSignin: {
    marginLeft: theme.spacing(2),
  },
  appBar: {
    background: '#364f6b',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  
  const navStyle = {
    textDecoration: 'none',
    color: 'white'
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            <Link style={navStyle} to="/">
              MovieHub
            </Link>
          </Typography>
          <Link style={navStyle} to="/login">
            <Button variant="contained" color="secondary" className={classes.btnSignin}>Login</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
