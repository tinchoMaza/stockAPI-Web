import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: '90%',
    minWidth: '600px',
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));


export default class OrdersListContainer extends Component {  
  constructor(props) {
    super(props)
    this.state = { 
        displayedOrders: mockOrdersList
    }
  }

  render(){
    return (
      <OrdersList displayedOrders={this.state.displayedOrders}/>
    )
  }
}
export function OrdersList(props) {
  return (
  <ol>
      {props.displayedOrders.map(order => (
        <li key={order._id}><OrderItem content={order}></OrderItem></li>
      ))}
    </ol>
  )
}

export function OrderItem(props){
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <Avatar alt="Cindy Baker" src="https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg" />
                </Grid>
                <Grid item xs zeroMinWidth>
                <Typography noWrap>{props.content._id.$oid}</Typography>
                </Grid>
                <Grid item xs zeroMinWidth>
                <Typography noWrap>{props.content.status}</Typography>
                </Grid>
            </Grid>
        </Paper>
    </div>
  )
}

const mockOrdersList = [
    {"_id":{"$oid":"5d9f4c815e8b3c272cc09076"},"status":"On Hold","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329315000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}},
    {"_id":{"$oid":"5da9bb7d50a76a293cafb127"},"status":"Accepted","id_employee":{"$oid":"5d9f4cad5e8b3c272cc09077"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1576599715000"}}},
    {"_id":{"$oid":"5da9bbbc50a76a293cafb128"},"status":"Accepted","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1574007715000"}}},
    {"_id":{"$oid":"5da9bbdf50a76a293cafb129"},"status":"Rejected","id_employee":{"$oid":"5da9b90650a76a293cafb121"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1571329375000"}}},
    {"_id":{"$oid":"5da9bc2750a76a293cafb12a"},"status":"On Hold","id_employee":{"$oid":"5da9b9af50a76a293cafb122"},"orderedProducts":[],"arrival_date":{"$date":{"$numberLong":"1571329315000"}},"departure_date":{"$date":{"$numberLong":"1572366115000"}}}
]