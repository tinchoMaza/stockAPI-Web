import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

export default function StoreSubItems() {
    const classes = useStyles();
    return (
        <div className={classes.categories}>
            <Typography variant="subtitle2">Oficina</Typography>
            <Typography variant="h6">Alimentos</Typography>
            <Typography className={classes.subcategories} variant="subtitle2">-  Lacteos</Typography>
            <Typography className={classes.subcategories} variant="subtitle2">-  Frutas</Typography>
            <Typography className={classes.subcategories} variant="subtitle2">-  Cereales</Typography>
            <Typography className={classes.subcategories} variant="subtitle2">-  Infusiones</Typography>
            <Typography variant="subtitle2">Tecnología</Typography>
            <Typography variant="subtitle2">Recreación</Typography>
            <Typography variant="subtitle2">Miscelaneo</Typography>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    categories: {
        margin: theme.spacing(1),
        color: theme.palette.grey[600],
    },
    subcategories: {
        marginLeft: theme.spacing(2),
    }
}))
