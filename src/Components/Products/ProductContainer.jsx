import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles(theme => ({
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    thumbnail: {

    },
    media: {
        height: 60,
        width: 60,
        paddingBottom: 0,
        borderRadius: 15,
    },
    details: {
        paddingLeft: '15px',
        color: theme.palette.primary.dark,

        '& .MuiTypography-subtitle2': {
            color: '#707070',
        }
    },
}))

export default function ProductContainer(props) {
    const classes = useStyles(props)
    const product = props.content

    return (
        <div className={classes.row}>
            <CardMedia
                className={classes.media}
                image={product.thumb}
                title="Thumbnail"
            />
            <div className={classes.details}>
                <Typography variant="subtitle1">{product.name}</Typography>
                <Typography variant="subtitle2">{product.description}</Typography>
            </div>
        </div>
    )
}
