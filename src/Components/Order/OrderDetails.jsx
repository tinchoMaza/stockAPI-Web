import React from 'react'
import ProductContainer from '../Products/ProductContainer'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import OrderDataColumn from './OrderDataColumn'
import CloseIcon from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { hexToRgba } from '../../utils/styling'

export default function OrderDetails(props) {
    const classes = useStyles(props)
    return (
        <>
            <IconButton className={classes.iconButton} aria-label="close" onClick={props.close}>
                <CloseIcon/>
            </IconButton>
            <div className={classes.actionButtonsContainer}>
                <Button variant="contained" className={classes.acceptButton}>Accept</Button>
                <Button variant="contained" className={classes.declineButton}>Decline</Button>
            </div>
            <ul>
                <Grid className={classes.topContainer} container >
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
        </>
    )
}
      

const useStyles = makeStyles(theme => ({
    topContainer: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: theme.spacing(0, 2),
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100px',
        borderBottom: `1px ${theme.palette.grey[200]} solid`,
    },
    iconButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: theme.spacing(2),
        padding: 0,
        edge: 'start', 
        color: 'inherit',
        fontSize: 'inherit' ,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
            transition :'.4s',
        },
    },
    actionButtonsContainer: {
        position: 'absolute',
        top: 50,
        right: 0,
        display: 'flex',
        flexDirection: 'row-reverse',
        margin: theme.spacing(1),
    },
    acceptButton: {
        backgroundColor: theme.palette.action.accept.main,
        color: theme.palette.common.white,
        margin: theme.spacing(1),
        '&:hover': {
            fontWeight: 500,
            backgroundColor: hexToRgba(theme.palette.action.accept.main,theme.palette.action.hoverOpacity),
        }
        },
    declineButton: {
        backgroundColor: theme.palette.action.decline.main,
        color: theme.palette.common.white,
        margin: theme.spacing(1),
        '&:hover': {
            fontWeight: 500,
            backgroundColor: hexToRgba(theme.palette.action.decline.main,theme.palette.action.hoverOpacity),
        }
        },
    productsList: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        padding: theme.spacing(0),
        justifyContent: 'flex-start',
        width: '100%',
        '& li': {
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            color: theme.palette.primary.dark,
            listStyle: 'none',
            borderBottom: `1px ${theme.palette.grey[200]} solid`,
            '&:nth-child(odd)': {
                // background: `linear-gradient(90deg,${theme.palette.background.paper} 0%, ${theme.palette.background.paper} 10%, ${theme.palette.lightblue.main} 40%,  ${theme.palette.lightblue.main} 50%,  ${theme.palette.lightblue.main} 60%, ${theme.palette.background.paper} 90%,  ${theme.palette.background.paper} 100%)`,
            },
            '&:hover': {
                background: hexToRgba(theme.palette.lightblue.hover,.4),
                transition: 'background-color .3s',
            },
        },
    },
    dataGroup:{
        alignItems: 'center',
    }
}));
