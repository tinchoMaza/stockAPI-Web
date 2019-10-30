import React from 'react'
import Paper from '@material-ui/core/Paper'
import OrderAbridged from './OrderAbridged'
import OrderDetails from './OrderDetails'
import { makeStyles } from '@material-ui/core/styles'
import { inherits } from 'util'

const useStyles = makeStyles(theme => ({
    root: props => ({
      height: props.opened ? (props.items < 15 ? 90+76*props.items : 100+30*props.items ) : 100,
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
      transition: 'height .4s ease',
      // '& div:hover': !props.opened ? { backgroundColor: theme.palette.grey[200], } : { backgroundColor: theme.palette.background.paper, } ,
    }),
    paper: props => ({
      backgroundColor: theme.palette.background.paper,
      height: props.opened? '98%' : '90%',
      width: props.opened ? '100%' :'98%', 
      verticalAlign: 'middle',
      maxWidth: '1900px', 
      minWidth: '600px',
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(1, 2),
      transition: 'width .4s ease',

    }),
  })
)

export default function OrderItem(props){
    const classes = useStyles(props)
    return (
      <div className={classes.root} >
        <Paper className={classes.paper} onClick={props.toggleOpen} >
        { props.opened ? <OrderDetails content={props.content}/> : <OrderAbridged content={props.content} />}
        </Paper>
      </div>
    )
  }
  
  