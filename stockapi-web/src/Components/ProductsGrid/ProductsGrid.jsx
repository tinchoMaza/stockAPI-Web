import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


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
                <Grid item xs={12} className={classes.container}>
                    <Grid container justify="center" spacing={2}>
                    {[0, 1, 2, 4].map(value => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))}
                    {[0, 1, 2, 4].map(value => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))}
                    {[0, 1, 2, 4].map(value => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))}
                    {[0, 1, 2, 4].map(value => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))}
                    {[0, 1, 2, 4].map(value => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))}
                    {[0, 1, 2, 4].map(value => (
                        <Grid key={value} item>
                        <Paper className={classes.paper} />
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )

}
