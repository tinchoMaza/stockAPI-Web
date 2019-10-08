import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from 'mdi-react/MenuIcon';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PersonIcon from '@material-ui/icons/Person';

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
    },
    iconButton:{
      edge: 'start', 
      color: 'inherit',
      fontSize: 'inherit' ,
    }
}

const NavBar = () => {
  return (
    <div className="nav-bar-wrapper">
      <AppBar position="static" color="inherit" style={styles.appBar}>
        <Toolbar style={styles.toolBar}>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon fontSize="inherit" />
          </IconButton>
          <Typography variant="h8" >
            Stock App
          </Typography>
          <div className="iconContainer">
            <IconButton style={styles.iconButton} aria-label="search">
              <SearchIcon fontSize="inherit" />
            </IconButton>
            <IconButton style={styles.iconButton}  aria-label="search">
              <HelpOutlineIcon fontSize="inherit"  />
            </IconButton>
            <IconButton style={styles.iconButton}  aria-label="search">
              <PersonIcon fontSize="inherit" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar
