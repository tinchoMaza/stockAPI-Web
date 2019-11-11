import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { storeCategories } from '../../../utils/storeCategories'

export default function StoreSubItems() {
    const classes = useStyles();
    return (
        <div className={classes.categories}>
            {
                storeCategories.map( sub => {
                    var pathnames = sub.link.split('/').filter(x => x);
                    return ( 
                        <Link to={sub.link}>
                            <div className={classes[`sub${pathnames.length-1}`]}>
                                <Typography>{sub.label}</Typography>                                
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    categories: {
        margin: theme.spacing(1),
        color: theme.palette.grey[600],
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        }
    },
    sub1: {
        marginLeft: theme.spacing(2),
        color: theme.palette.grey[700],
        '& p':{fontSize: '.95em'},

    },    
    sub2: {
        marginLeft: theme.spacing(4),
        color: theme.palette.grey[600],
        '& p':{fontSize: '.9em'},
    },
}))
