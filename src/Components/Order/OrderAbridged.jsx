import React from 'react'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import OrderDataColumn from './OrderDataColumn'
import { makeStyles } from '@material-ui/core/styles'
import { timeConverter } from '../../utils/timeManagement'

const useStyles = makeStyles(theme => ({
    container: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: theme.spacing(0, 2),
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      },
    dataGroup:{
      alignItems: 'center',
    }
  }));

export default function OrderAbridged(props) {
    const classes = useStyles(props)
    var departureDate = timeConverter(props.content.departure_date.$date.$numberLong/1000)

    return (
        <div>
            <Grid className={classes.container} container >
                <Grid className={classes.dataGroup} container justify={'flex-start'}>
                    <Avatar alt="Cindy Baker" src="https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg" />
                    <OrderDataColumn>{[props.content._id.$oid,props.content.id_employee.$oid]}</OrderDataColumn>
                </Grid>
                <Grid className={classes.dataGroup} container justify={'center'}>
                    <OrderDataColumn>{['Departure Date',departureDate]}</OrderDataColumn>
                </Grid>
                <Grid className={classes.dataGroup} container justify={'flex-end'}>
                    <OrderDataColumn>{['Status',props.content.status]}</OrderDataColumn>
                </Grid>
            </Grid>   
        </div>
    )
}
