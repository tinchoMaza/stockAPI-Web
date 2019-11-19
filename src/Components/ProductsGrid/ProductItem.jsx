import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import { usePalette } from 'react-palette'

const shortenText = (text,n) => {
    return text.length > n ? text.substring(0,n) + '...' : text
}

export default function ProductItem(props) {
    const product = props.content
    const { data, loading, error } = usePalette(product.thumb)
    const classes = useStyles(data);
    
    return (
        <div>
            <Grid item xs={12} className={classes.container}>
                <Grid container className={classes.container} >
                    <Grid key={product._id} item>
                        <Card className={classes.card}>
                            <div className={classes.thumbnailContainer}>
                                <CardMedia
                                    className={classes.media}
                                    image={product.thumb}
                                    title="Thumbnail"
                                />
                            </div>
                            <Divider/>
                            <div className={classes.details}>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2">{shortenText(product.description,80)}</Typography>
                                <Typography variant="subtitle1">Stock : {product.stock.$numberInt} </Typography>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles(theme => ({
    container: {
        margin:theme.spacing(0),
    },
    card: data => ({
        cursor: 'pointer',
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        height: 340,
        width: 360,
        '&:hover' :{
            transition: '.3s',
            // background:`linear-gradient(180deg, ${theme.palette.lightblue.main} 90%, ${theme.palette.lightblue.hover} 120%)`,
            // background: `linear-gradient(180deg, ${data.lightMuted} 90%, ${data.muted} 120%)`,

        },
        '&:hover .MuiCardMedia-root' :{
            transform: 'scale(1.05)',
            transition: '.4s ease-out',
        },
    }),
    thumbnailContainer: {
        height: 200,
        width: 200,
        margin:  `auto`,
        marginBottom: theme.spacing(2),
        borderRadius: 15,
        zIndex: 99,
        overflow:'hidden'
    },
    media: {
        margin:  `auto`,
        height: 200,
        width: 200,
    },
    details: {
        padding: theme.spacing(1),
        margin: theme.spacing(0),
    },
  }));