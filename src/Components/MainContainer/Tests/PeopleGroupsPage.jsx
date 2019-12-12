import React from 'react'
import FileUploader from './FileUploader';
import { makeStyles } from '@material-ui/styles';

export default function PeopleGroupsPage() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1 className={classes.header}>Upload new Files</h1>
            <FileUploader/>
        </div>
        // <form action="http://localhost:5000/upload-files" method="post" enctype="multipart/form-data">
        //     Select file to upload:
        //     <input type="file" name="uploadedFile" id="uploadedFile"></input>
        //     <input type="submit" value="Upload File" name="submit"></input>
        // </form>
    
        )
}
  
const useStyles = makeStyles(theme => ({
    primaryBtn: {
        margin: theme.spacing(1),
        color: theme.palette.common.white,
    },
    container: {
        height: '100%',
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