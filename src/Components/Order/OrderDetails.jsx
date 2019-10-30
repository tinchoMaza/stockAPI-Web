import React from 'react'
import ProductContainer from '../Products/ProductContainer';
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import OrderDataColumn from './OrderDataColumn'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: theme.spacing(0),
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    productsList: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        padding: theme.spacing(0),
        justifyContent: 'flex-start',
        width: '100%',
        '& li': {
            padding: theme.spacing(2),

            color: theme.palette.primary.dark,
            listStyle: 'none',
            '&:nth-child(odd)': {
                backgroundColor: theme.palette.lightblue.main,
            },
            '&:hover': {
                backgroundColor: theme.palette.lightblue.hover,
            },
        },
    },
    dataGroup:{
      alignItems: 'center',
    }
  }));

export default function OrderDetails(props) {
        const classes = useStyles(props)
        return (
        <ul>
            <Grid className={classes.container} container >
                <Grid className={classes.dataGroup} container justify={'flex-start'}>
                    <Avatar alt="Cindy Baker" src="https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg" />
                    <OrderDataColumn>{[props.content._id.$oid,props.content.id_employee.$oid]}</OrderDataColumn>
                </Grid>
            </Grid>  
            <Grid className={classes.productsList} container >
                {props.content.orderedProducts.map(product => (
                    <li key={product._id}>
                        <ProductContainer content={product}/>
                    </li>
                ))}
            </Grid>  

          </ul>
        )
      }
      
