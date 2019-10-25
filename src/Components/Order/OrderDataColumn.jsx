import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    column: {
      flexDirection: 'column',
      flexWrap: 'nowrap',
      padding: theme.spacing(0),
      alignItems: 'center'

    },    
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        padding: theme.spacing(1),
      },
  }));

export default function OrderDataColumn(props) {
    const classes = useStyles()

    return (
        <div>
            <Grid className={classes.column} container>
                <Grid className={classes.row} container>
                    <Grid className={classes.column} container>
                        <Grid item md zeroMinWidth>
                            <Typography noWrap>{props.children[0]}</Typography>
                        </Grid>
                        <Grid item xs zeroMinWidth>
                            <Typography noWrap>{props.children[1]}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                </Grid>
        </div>
    )
}
