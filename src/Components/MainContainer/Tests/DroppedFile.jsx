import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const shortenString = (str) => {
    if(str.length > 40) return str.substring(0,40)+'...';
    return str;
}
const handleUpload = (file) => {
    console.log(file)
    var formData = new FormData();
    formData.append("userFile", file);

    var url = new URL('http://localhost:5000/upload-files');
      fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
        })
      .then( response => {
          console.log(response);
      })
      .catch( err => {
        console.log(err)
      })

}



function bytesToSize(bytes) {
    var sizes = ['Bytes', 'kB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }

export default function DroppedFile(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <p className={classes.fileName}>{shortenString(props.file.name)}</p>
            <p className={classes.fileSize}>{bytesToSize(props.file.size)}</p>
            <Button variant="contained" 
                    color="primary" 
                    className={classes.primaryBtn} 
                    onClick={() => handleUpload(props.file)}
                    children ="Upload"
            />            
            <Button variant="contained" 
            // color="secondary" 
            className={classes.secondaryBtn} 
            onClick={props.handleCancel}
            children ="Cancel"
            />
            
        </div>
    )
}
  
const useStyles = makeStyles(theme => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 4,
        backgroundColor: 'white',
        webkitBoxShadow: '10px 10px 10px -5px rgba(0,0,0,0.29)',
        mozBoxShadow: '10px 10px 10px -5px rgba(0,0,0,0.29)',
        boxShadow: '10px 10px 10px -5px rgba(0,0,0,0.29)',
    },
    fileName:{
        margin: theme.spacing(1,2),
        overflowWrap: 'break-word',
    },
    fileSize:{
        margin: theme.spacing(0,2),
        fontSize: 12,
        color: theme.palette.grey[600],
    },
    primaryBtn: {
        margin: theme.spacing(.5,2),
        color: theme.palette.common.white,
    },
          
    secondaryBtn: {
        margin: theme.spacing(.5,2),
        color: theme.palette.secondary,
      },
}));