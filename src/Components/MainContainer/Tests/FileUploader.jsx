import React, { useCallback, useState, useMemo, useEffect} from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/styles';
import { hexToRgba } from '../../../utils/styling';
import DroppedFile from './DroppedFile';

export default function FileUploader() {
    const [files, setFiles] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles);
        setIsSelected(true);
    }, []);
    const { getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject
    } = useDropzone({   onDrop,
                        noClick: files,
                        preventDropOnDocument: true,
                        accept: 'application/zip, application/x-zip-compressed'
                        // disabled:true,
    });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragActive,
        isDragReject
      ]);

    const classes = useStyles({ isDragActive, isSelected });

    const handleCancel = (file) => {
        console.log(files)
        var auxFiles = files;
        auxFiles.splice( files.indexOf(file), 1 );
        // debugger;

        if(auxFiles.length === 0){
            setFiles(null);
            setIsSelected(false);
        }
        else setFiles(auxFiles);
    }

    return (
        <div className={classes.container} {...getRootProps({style})}>
            <input className={classes.input} {...getInputProps()} />
            <div className={classes.innerDiv}>
                {
                    files ?
                        files.map( (file) => <DroppedFile file={file} key={file.filename} handleCancel={handleCancel} /> ) :
                        isDragActive ?
                            <p>Drop the files here ...</p> :
                            <p>Drag 'n' drop, or click to upload files</p>
                }
            </div>
        </div>
    )
}

const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ddd',
    borderStyle: 'dashed',
    backgroundColor: 'transparent',
    color: '#555',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#2DCB8B'
  };
  
  const rejectStyle = {
    borderColor: '#F26767'
  };  

const useStyles = makeStyles(theme => ({
    primaryBtn: {
        margin: theme.spacing(2),
        color: theme.palette.common.white,
    },
    innerDiv: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    input: {
        border: 'none'
    },
    container: ({ isDragActive, isSelected }) => ({
        margin: '15px',
        cursor: isSelected ? 'default' : 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: '.4s',
        borderRadius: 10,
        minHeight: 'max-content',
        width: '95%',
        backgroundColor: isSelected ? hexToRgba(theme.palette.primary.main, 0.2) : 'transparent',
        border: isSelected ? '2px solid' : '2px dashed',
        borderColor: isDragActive || isSelected ? theme.palette.primary.main : hexToRgba(theme.palette.primary.main, 0.2),
        webkitBoxShadow: `inset 0px 0px 100px 1px ${hexToRgba(theme.palette.primary.main, 0.2)}`,
        mozBoxShadow: `inset 0px 0px 100px 1px ${hexToRgba(theme.palette.primary.main, 0.2)}`,
        boxShadow: `inset 0px 0px 100px 1px ${hexToRgba(theme.palette.primary.main, 0.2)}`,
        '&:focus':{
            outline:'none'
        }
    }),
}));