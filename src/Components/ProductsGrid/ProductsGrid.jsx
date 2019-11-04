import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Product from './Product'
import {mockProducts} from '../../utils/mockingValues'

const useStyles = makeStyles(theme => ({
    container: {
        margin: '10px',
    },
    paper: {
        height: 340,
      width: 360,
    },
  }));
  
export default function ProductsGrid() {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2}>
                {mockProducts.map( (product) => {
                    return <Product content={product}/>
                })}
            </Grid>
        </div>
    )

}
