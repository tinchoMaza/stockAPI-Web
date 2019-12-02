import React, { useState } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import StoreMallDirectoryRoundedIcon from '@material-ui/icons/StoreMallDirectoryRounded'
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded'
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded'
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Divider from '@material-ui/core/Divider';

import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'

const iconSelector = (label) =>{
    switch(label){
        case 'Store': return <StoreMallDirectoryRoundedIcon/>
        case 'Orders': return <FormatListBulletedRoundedIcon/>
        case 'Cart': return <ShoppingCartRoundedIcon/>
        case 'Testing': return <FavoriteRoundedIcon/>
        case 'Settings': return <SettingsRoundedIcon/>
    }
}

export default function SideBarLink(props) {
    const [openSubcategories, setOpen] = useState(false)
    const classes = useStyles(props,openSubcategories)

    const handleClick = () => {
        props.active ? setOpen(prevOpen => !prevOpen) : setOpen(true)
    }

    const forceClose = () => {
        setOpen(false)
    }   

    const forceOpen = () => {
        setOpen(true)
    }

    return (
        <div>
                <div className={classes.container}>
                    <Link className={classes.link} to={props.link}>
                        <ListItem button key={props.label} className={classes.item}>
                            <div className={classes.linkInfo} onClick={handleClick}>
                                <ListItemIcon>{iconSelector(props.label)}</ListItemIcon>
                                <ListItemText primary={props.label} />
                            </div>
                            {props.children !== null && openSubcategories && <ExpandLessRoundedIcon onClick={forceClose}/>}
                            {props.children !== null && !openSubcategories && <ExpandMoreRoundedIcon onClick={forceOpen}/>}
                        </ListItem>
                    </Link> 
                    {props.children !== null && openSubcategories && 
                        <div className={classes.subcategories}>
                            {props.children}  
                            <Divider style={{margin:'15px 0'}}/>
                        </div>
                    } 
                </div>
   
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    link :{
        textDecoration: 'none',
    },
    linkInfo:{
        display: 'contents',
    },
    container: {
        margin: theme.spacing(1),
    },
    subcategories: {margin:'15px 0'},
    // subcategories : (props) => ({
    //     transition: 'transform .4s ease , max-height .4s ease',
    //     maxHeight: props.active ? 500 : 0, 
    //     transformOrigin:  'top',
    //     transform: props.active ? 'scaleY(1)' : 'scaleY(0)',   
    // }),
    item : props => ({
        padding: theme.spacing(.5,1),
        borderRadius: '5px',
        color: props.active ? theme.palette.primary.contrastText : theme.palette.grey[700], 
        backgroundColor: props.active ? theme.palette.primary.light : null, 
        '&:hover' :{
            backgroundColor: props.active ? theme.palette.primary.light : theme.palette.grey[400],
            opacity: props.active ? 0.8 : 1,
            transition: '.3s',
        },
        '& svg':{
            color: props.active ? theme.palette.primary.contrastText : theme.palette.grey[700],             
            '&:hover' :{
                backgroundColor: props.active ? theme.palette.primary.light : theme.palette.grey[400],
                opacity: props.active ? 0.8 : 1,
                transition: '.3s',
            },
       },
    }),
    
    
}))