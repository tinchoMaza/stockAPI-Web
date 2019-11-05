import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography'
import { usePalette } from 'react-palette'


const useStyles = makeStyles(theme => ({
    container: {
        margin:theme.spacing(1),
        justifyContent: 'space-evenly',
    },
    card: data => ({
        cursor: 'pointer',
        padding: theme.spacing(2),
        margin: theme.spacing(0.5),
        height: 340,
        width: 360,
        // background: data.vibrant,
        // background: 'white',
        '&:hover' :{
            transition: '.3s',
            background: `linear-gradient(180deg, ${data.lightVibrant} 90%, ${data.vibrant} 120%)`,
        },
    }),
    media: {
        height: 200,
        width: 200,
        margin:  `auto`,
        marginBottom: theme.spacing(2),
        borderRadius: 15,
        '&:hover' :{
            transform: 'scale(1.05)',
            transition: '.3s',
        },
    },
    info: {
        padding: theme.spacing(2),
        margin: theme.spacing(0.5),
    },
  }));
export default function Product(props) {
    const product = props.content
    const { data, loading, error } = usePalette(product.thumb)
    const classes = useStyles(data);
    console.log({product, data, loading , error})
    return (
        <div>
            <Grid item xs={12} className={classes.container}>
                <Grid container className={classes.container} >
                    <Grid key={product._id} item>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={product.thumb}
                                title="Thumbnail"
                            />
                            <Divider/>
                            <div className={classes.details}>
                                <Typography variant="h6">{product.name}</Typography>
                                <Typography variant="body2">{product.description}</Typography>
                                <Typography variant="subtitle1">Stock : {product.stock.$numberInt} </Typography>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}


