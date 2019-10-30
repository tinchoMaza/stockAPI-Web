import React from 'react'
import Paper from '@material-ui/core/Paper'
import OrderAbridged from './OrderAbridged'
import OrderDetails from './OrderDetails'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: props => ({
      height: props.opened ? (props.items < 5 ? 100+60*props.items : 100+30*props.items ) : 100,
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
      transition: 'height .4s ease',
      '& :hover': { 
        backgroundColor: props.opened ? theme.palette.background.paper : theme.palette.grey[200],
      },
    }),
    paper: props => ({
      backgroundColor: props.opened ? theme.palette.background.paper : theme.palette.background.paper,
      height: '90%',
      width: props.opened ? '100%' :'98%', 
      verticalAlign: 'middle',
      maxWidth: '1900px', 
      minWidth: '600px',
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
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
  
  