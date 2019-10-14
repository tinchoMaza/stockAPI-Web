import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
    },
    buttonText:{
      padding:'10px'
    }
}

const NavBar = (props) => {
  return (
    <div className="nav-bar-container">
      <AppBar position="static" color="inherit" style={styles.appBar}>
        <Toolbar style={styles.toolBar}>
          <div className="menu-icon-container">
            <IconButton style={styles.iconButton} aria-label="menu" onClick={props.toggleMenuVisibility}>
              <MenuIcon fontSize="inherit" />
            </IconButton>
          </div>
          <div className="logo">
            <Typography variant="h8" >
              <p><a href="https://knowyourmeme.com/memes/stonks">
                Stönks App
              </a></p>
            </Typography>
          </div>
          <div className="top-right-icons-container">
            <ul>
              <li>
                <IconButton style={styles.iconButton} aria-label="search">
                  <SearchIcon fontSize="inherit" />
                </IconButton>
              </li>
              <li>
                <IconButton style={styles.iconButton}  aria-label="help">
                  <HelpOutlineIcon fontSize="inherit"  />
                </IconButton>
              </li>
              <li>
                <IconButton style={styles.iconButton}  aria-label="login" onClick={props.handleLogin}>
                  <PersonIcon fontSize="inherit" />
                  <Typography style={styles.buttonText}>
                  Login
                  </Typography>
                </IconButton>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar
