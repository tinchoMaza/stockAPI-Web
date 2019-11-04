import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    container: {
        margin: '10px',
    },
    paper: {
        height: 340,
      width: 360,
    },
  }));
export default function Product(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid item xs={12} justify="center" className={classes.container}>
                <Grid container justify="center" spacing={2}>
                    <Grid key={props.content._id} item>
                        <Paper className={classes.paper}>
                            {props.content.name}
                        </Paper>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}
