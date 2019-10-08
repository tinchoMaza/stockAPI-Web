import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from 'mdi-react/MenuIcon';

import './navBar.css';

const styles = {
    appBar:{
        width: '100%',
        background: '#222222',
        color: 'white',
        position: 'absolute',
        top: 0,
    },
    toolBar:{
        color: '#2DA7CB',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

const NavBar = () => {
  return (
    <div className="nav-bar-wrapper">
      <AppBar position="static" color="inherit" style={styles.appBar}>
        <Toolbar style={styles.toolBar}>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h8" >
            Stock App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar
