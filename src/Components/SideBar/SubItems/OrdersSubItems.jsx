import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export default function OrdersSubItems() {
    const classes = useStyles();

    return (
        <div className={classes.categories}>
            <Typography>Category 1</Typography>                                
            <Typography>Category 2</Typography>                                
            <Typography>Category 3</Typography>  
                              
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    categories: {
        color: theme.palette.grey[600],
        marginLeft: theme.spacing(3),
        color: theme.palette.grey[700],
        '& p':{fontSize: '.95em'},
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        }
    },
}))
