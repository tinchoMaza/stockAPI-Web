import React from 'react'
import FileUploader from './FileUploader';
import { makeStyles } from '@material-ui/styles';

export default function PeopleGroupsPage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1 className={classes.header}>Upload new File</h1>
            <FileUploader/>
        </div>
    )
}
  
const useStyles = makeStyles(theme => ({
    primaryBtn: {
        margin: theme.spacing(1),
        color: theme.palette.common.white,
    },
    container: {
        margin: 'auto',
        paddingTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'no-wrap',
        width: '100%',
        alignItems: 'center',
        borderRadius: '15px',
        transition: '.4s',
    },
    header: {
        marginBottom: theme.spacing(3)
    },
}));