import React from 'react'
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import StoreMallDirectoryRoundedIcon from '@material-ui/icons/StoreMallDirectoryRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';


export default function SideBarLinks(props) {
    const classes = useStyles(props)
    return (
        <div >
            <List className={classes.links}>
                <Link to='/store'>
                    <div className={classes.separation}>
                        <ListItem button key='Store' className={classes.storeLink}>
                            <ListItemIcon><StoreMallDirectoryRoundedIcon /></ListItemIcon>
                            <ListItemText primary='Store' />
                        </ListItem>
                    </div>
                </Link>                        
                <Link to='/orders'>
                    <div className={classes.separation}>
                        <ListItem button key='Orders' className={classes.ordersLink}>
                            <ListItemIcon><FormatListBulletedRoundedIcon /></ListItemIcon>
                            <ListItemText primary='Orders' />
                        </ListItem>
                    </div>
                </Link>                        
                <Link to='/cart'>
                    <div className={classes.separation}>
                        <ListItem button key='Cart' className={classes.cartLink}>
                            <ListItemIcon><ShoppingCartRoundedIcon /></ListItemIcon>
                            <ListItemText primary='Cart' />
                        </ListItem>
                    </div>
                </Link>                  
                <Link to='/favorites'>
                    <div className={classes.separation}>
                        <ListItem button key='Favorites'className={classes.favoritesLink}>
                            <ListItemIcon><FavoriteRoundedIcon /></ListItemIcon>
                            <ListItemText primary='Favorites' />
                        </ListItem>
                    </div>
                </Link>        
                <Divider />

                <Link to='/settings'>
                    <div className={classes.separation}>
                        <ListItem button key='Settings' className={classes.settingsLink}>
                            <ListItemIcon><SettingsRoundedIcon /></ListItemIcon>
                            <ListItemText primary='Settings' />
                        </ListItem>
                    </div>
                </Link>
            </List>
        </div>
    )
}


const useStyles = makeStyles(theme => ({
    links: {
        '&a:hover, a:visited, a:link, a:active' :{
            textDecoration: 'none',
        },
    },
    separation: {
        margin: theme.spacing(1),
    },
    storeLink : props => ({
        padding: theme.spacing(.5,1),
        borderRadius: '5px',
        color: props.active === '/store' ? theme.palette.primary.contrastText : theme.palette.grey[700], 
        backgroundColor: props.active === '/store' ? theme.palette.primary.light : null, 
        '&:hover' :{
            backgroundColor: props.active === '/store' ? theme.palette.primary.light : theme.palette.grey[400],
            opacity: props.active === '/store' ? 0.8 : 1,
            transition: '.3s',
        },
        '& svg':{
            color: props.active === '/store' ? theme.palette.primary.contrastText : theme.palette.grey[700],             
            '&:hover' :{
                backgroundColor: props.active === '/store' ? theme.palette.primary.light : theme.palette.grey[400],
                opacity: props.active === '/store' ? 0.8 : 1,
                transition: '.3s',
            },
       },
    }),
    ordersLink : props => ({
        padding: theme.spacing(.5,1),
        borderRadius: '5px',
        color: props.active === '/orders' ? theme.palette.primary.contrastText : theme.palette.grey[700], 
        backgroundColor: props.active === '/orders' ? theme.palette.primary.light : null, 
        '&:hover' :{
            backgroundColor: props.active === '/orders' ? theme.palette.primary.light : theme.palette.grey[400],
            opacity: props.active === '/orders' ? 0.8 : 1,
            transition: '.3s',
        },
        '& svg':{
            color: props.active === '/orders' ? theme.palette.primary.contrastText : theme.palette.grey[700],             
            '&:hover' :{
                backgroundColor: props.active === '/orders' ? theme.palette.primary.light : theme.palette.grey[400],
                opacity: props.active === '/orders' ? 0.8 : 1,
                transition: '.3s',
            },
       },
    }),
    cartLink : props => ({
        padding: theme.spacing(.5,1),
        borderRadius: '5px',
        color: props.active === '/cart' ? theme.palette.primary.contrastText : theme.palette.grey[700], 
        backgroundColor: props.active === '/cart' ? theme.palette.primary.light : null, 
        '&:hover' :{
            backgroundColor: props.active === '/cart' ? theme.palette.primary.light : theme.palette.grey[400],
            opacity: props.active === '/cart' ? 0.8 : 1,
            transition: '.3s',
        },
        '& svg':{
            color: props.active === '/cart' ? theme.palette.primary.contrastText : theme.palette.grey[700],             
            '&:hover' :{
                backgroundColor: props.active === '/cart' ? theme.palette.primary.light : theme.palette.grey[400],
                opacity: props.active === '/cart' ? 0.8 : 1,
                transition: '.3s',
            },
       },
    }),
    favoritesLink : props => ({
        padding: theme.spacing(.5,1),
        borderRadius: '5px',
        color: props.active === '/favorites' ? theme.palette.primary.contrastText : theme.palette.grey[700], 
        backgroundColor: props.active === '/favorites' ? theme.palette.primary.light : null, 
        '&:hover' :{
            backgroundColor: props.active === '/favorites' ? theme.palette.primary.light : theme.palette.grey[400],
            opacity: props.active === '/favorites' ? 0.8 : 1,
            transition: '.3s',
        },
        '& svg':{
            color: props.active === '/favorites' ? theme.palette.primary.contrastText : theme.palette.grey[700],             
            '&:hover' :{
                backgroundColor: props.active === '/favorites' ? theme.palette.primary.light : theme.palette.grey[400],
                opacity: props.active === '/favorites' ? 0.8 : 1,
                transition: '.3s',
            },
       },
    }),
    settingsLink : props => ({
        padding: theme.spacing(.5,1),
        borderRadius: '5px',
        color: props.active === '/settings' ? theme.palette.primary.contrastText : theme.palette.grey[700], 
        backgroundColor: props.active === '/settings' ? theme.palette.primary.light : null, 
        '&:hover' :{
            backgroundColor: props.active === '/settings' ? theme.palette.primary.light : theme.palette.grey[400],
            opacity: props.active === '/settings' ? 0.8 : 1,
            transition: '.3s',
        },
        '& svg':{
            color: props.active === '/settings' ? theme.palette.primary.contrastText : theme.palette.grey[700],             
            '&:hover' :{
                backgroundColor: props.active === '/settings' ? theme.palette.primary.light : theme.palette.grey[400],
                opacity: props.active === '/settings' ? 0.8 : 1,
                transition: '.3s',
            },
       },
    }),
    
    
}))