import React, { useCallback, useState, useMemo} from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/styles';
import { hexToRgba } from '../../../utils/styling';
import DroppedFile from './DroppedFile';

export default function FileUploader() {
    const [file, setFile] = useState();
    const [isSelected, setIsSelected] = useState(false);

    const onDrop = useCallback(acceptedFiles => {
        setFile(acceptedFiles[0]);
        setIsSelected(true);
    }, []);
    const { getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject
    } = useDropzone({   onDrop,
                        noClick: file,
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

    const handleCancel = () => {
        setFile(null);
        setIsSelected(false);
    }

    return (
        <div className={classes.container} {...getRootProps({style})}>
            <input className={classes.input} {...getInputProps()} />
            <div className={classes.innerDiv}>
                {
                    file ?
                        <DroppedFile file={file} handleCancel={handleCancel} /> :
                        isDragActive ?
                            <p>Drop the file here ...</p> :
                            <p>Drag 'n' drop, or click to upload the file</p>
                }
            </div>
        </div>
    )
}

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };  

const useStyles = makeStyles(theme => ({
    primaryBtn: {
        margin: theme.spacing(2),
        color: theme.palette.common.white,
    },
    innerDiv: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },
    input: {
        border: 'none'
    },
    container: ({ isDragActive, isSelected }) => ({
        margin: 'auto',
        cursor: isSelected ? 'default' : 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: '.4s',
        borderRadius: 10,
        height: 400,
        width: 400,
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