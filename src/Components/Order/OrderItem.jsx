import React from 'react'
import Paper from '@material-ui/core/Paper'
import OrderAbridged from './OrderAbridged'
import OrderDetails from './OrderDetails'
import { makeStyles } from '@material-ui/core/styles'
import { hexToRgba } from '../../utils/styling'

export default function OrderItem(props){
    const classes = useStyles(props)
    return (
      <div className={classes.root} >
        <Paper className={classes.paper} onClick={ props.opened? null : props.open } >
        { props.opened ? <OrderDetails content={props.content} close={props.close} /> : <OrderAbridged content={props.content} />}
        </Paper>
      </div>
    )
  }

const useStyles = makeStyles(theme => ({
    root: props => ({
      height: props.opened ? (props.items < 15 ? 116+77*props.items : 100+30*props.items ) : 100,
      margin: `${theme.spacing(2)}px auto`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
      transition: 'height .4s ease',
      overflow:'visible',
      // '& div:hover': !props.opened ? { backgroundColor: theme.palette.grey[200], } : { backgroundColor: theme.palette.background.paper, } ,
    }),
    paper: props => ({
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      height: '100%',
      width: '98%', 
      verticalAlign: 'middle',
      maxWidth: '1900px', 
      minWidth: '600px',
      margin: `${theme.spacing(0)}px auto`,
      padding: theme.spacing(2,0),
      transition: 'width .4s ease',
      cursor: props.opened ? null : 'pointer',
      '&:hover' : {
        transition: '.4s ease',
        backgroundColor: props.opened ? theme.palette.background.paper : hexToRgba(theme.palette.lightblue.hover,.4),
      },
    }),
  })
)
  