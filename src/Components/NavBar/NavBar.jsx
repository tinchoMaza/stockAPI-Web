import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from 'mdi-react/MenuIcon'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import PersonIcon from '@material-ui/icons/Person'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from "react-router-dom"

export default function NavBar(props){
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <AppBar position="static" color="secondary" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <div className={classes.iconsLeft}>
            <IconButton className={classes.iconButton} aria-label="menu" onClick={props.toggleMenuVisibility}>
              <MenuIcon/>
            </IconButton>
          </div>
          <div className={classes.logo}>
            <Link to='/'>
              <Typography variant="h8" >
                <p><span>Stöck App</span></p>
              </Typography>
            </Link>
          </div>
          <div className={classes.iconsRight}>
            <ul>
              <li>
                <IconButton className={classes.iconButton} aria-label="search">
                  <SearchIcon/>
                </IconButton>
              </li>
              <Link to='/help'>
              <li>
                <IconButton className={classes.iconButton}  aria-label="help">
                  <HelpOutlineIcon/>
                </IconButton>
              </li>
              </Link>
              <li>
                <IconButton className={classes.iconButton}  aria-label="login" onClick={props.toggleLoginVisibility}>
                  <PersonIcon/>
                  <Typography className={classes.buttonText}>
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

const useStyles = makeStyles(theme => ({

  container: {
    minHeight: '60px',
    width: '100%',
  },

  logo: {
    transform: 'translateX(-50%)',
    left: '50%',
    position: 'absolute',
    '& a' : {textDecoration: 'none'},
    '& p:hover' :{
      textShadow: " 0 0 3px #fff, 0 0 4px #2da7cb, 0 0 4px #2da7cb, 0 0 8px #2da7cb, 0 0 8px #2da7cb, 0 0 10px #2da7cb",
      color: 'white',
    },
    '& span' :{
      alignItems: 'center',
      color: theme.palette.primary.main,
      textDecoration: 'none',
      transition: '0.2s ease-out' ,
      fontSize: '24px',
      '&:hover' :{
        color: 'white',
      },
    },
  },

  iconsRight :{
    '& li' :{
      display: 'inline-block',
      listStyle: 'none',
    },
    fontSize: '24px',
  },

  iconsLeft :{
    fontSize: '24px',
  },
  
  
  appBar:{
    width: '100%',
    height: '60px',
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
    color: theme.palette.primary.main,
    transition: '0.4s ease-out' ,
    '&:hover' :{
      color: '#fff',
      transition: '0.4s ease-out' ,
    },
  },

  buttonText:{
    padding:'10px'
  },

}))