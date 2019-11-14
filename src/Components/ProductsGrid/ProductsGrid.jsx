import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ProductItem from './ProductItem'
import {mockProducts} from '../../utils/mockingValues'

const useStyles = makeStyles(theme => ({
    container: {
        margin: 'auto',
        justifyContent: 'center',

    },
  }));
  
export default function ProductsGrid() {
    const classes = useStyles();

    return (
        <div>
            <Grid container className={classes.container} spacing={2}>
                {mockProducts.map( (product) => {
                    return <ProductItem content={product}/>
                })}
            </Grid>
        </div>
    )

}
