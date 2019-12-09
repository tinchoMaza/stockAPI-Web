import React from 'react'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const shortenString = (str) => {
    if(str.length > 40) return str.substring(0,40)+'...';
    return str;
}
const handleSend = (file) => {
    console.log(file)
}

export default function DroppedFile(props) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <p className={classes.fileName}>{shortenString(props.file.name)}</p>
            <Button variant="contained" 
                    color="primary" 
                    className={classes.primaryBtn} 
                    onClick={() => handleSend(props.file)}
                    children ="Upload"
            />            
            <Button variant="contained" 
            // color="secondary" 
            className={classes.secondaryBtn} 
            onClick={() => handleSend(props.file)}
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
        // margin: theme.spacing(4),
        width: 200,
        height: 200,
        borderRadius: 4,
        backgroundColor: 'white',
        webkitBoxShadow: '10px 10px 10px -5px rgba(0,0,0,0.29)',
        mozBoxShadow: '10px 10px 10px -5px rgba(0,0,0,0.29)',
        boxShadow: '10px 10px 10px -5px rgba(0,0,0,0.29)',
    },
    fileName:{
        margin: theme.spacing(2,2),
        overflowWrap: 'break-word',
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