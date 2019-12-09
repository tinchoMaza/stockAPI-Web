import React, {useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import { makeStyles } from '@material-ui/styles';
import { hexToRgba } from '../../../utils/styling';
import DroppedFile from './DroppedFile';

export default function FileUploader() {
    const [file, setFile] = useState();

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        noClick: file,
        preventDropOnDocument: true,
    });
    const classes = useStyles(isDragActive);

    return (
        <div className={classes.container} {...getRootProps()}>
            <input {...getInputProps()} />
            <div className={classes.innerDiv}>
                {
                file ? 
                    <DroppedFile file={file}/> : 
                    isDragActive ?
                        <p>Drop the file here ...</p> :
                        <p>Drag 'n' drop, or click to upload the file</p>
                }
            </div>
      </div>
    )
  }
  
const useStyles = makeStyles(theme => ({
    primaryBtn: {
        margin: theme.spacing(2),
        color: theme.palette.common.white,
      },
      innerDiv:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },
    container: isDragActive => ({
        margin: 'auto',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: '.4s',
        height: 400,    
        width: 400,
        border: isDragActive ? '2px solid' : '2px dashed',
        borderColor: isDragActive ? theme.palette.primary.main : hexToRgba(theme.palette.primary.main,0.2),
    }),
}));