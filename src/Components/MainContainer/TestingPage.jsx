import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DrawImage from './Tests/DrawImage';

const subscriptionKey = '1dc43d458b104ca6811f8939b159f451';
const endpoint = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect';

export default function TestingPage() {
    const classes = useStyles();
    const [imageUrl, setImageUrl] = React.useState('https://i.imgur.com/bfJym9mg.jpg');
    const [imageSize, setImageSize] = React.useState({});
    const [res, setRes] = React.useState('');

    const handleSend = (image) =>{
      var params = {
        returnFaceId: "true",
        returnFaceLandmarks: "false",
        returnFaceAttributes:
            "age,gender,headPose,smile,facialHair,glasses,emotion," +
            "hair,makeup,occlusion,accessories,blur,exposure,noise"
      };
      var url = new URL(endpoint);
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
      fetch(url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': subscriptionKey
        },
        body: JSON.stringify({
          url: image,
        })
      })
      .then( response => {
        response.json().then(function(data) {
          console.log(JSON.stringify(data, null, 2));
          setRes(data)
        });
      })
      .catch( err => {
        console.log(err)
      })
    };

    const handleUrlChange = name => event => {
      setImageUrl(event.target.value);
      setRes('')
    };

    const onImgLoad = (ev) => {
      setImageSize({height:ev.target.height,width:ev.target.width});
    }

    return (
        <div className={classes.container}>
            <Typography variant="h6">Testing Face API</Typography>
            <TextField
                id="imageUrl"
                label="Image url"
                value={imageUrl}
                onChange={handleUrlChange("imageUrl")}
                className={classes.textField}
                type="text"      
                margin="normal"
                variant="filled"                
            />
            
            <Button variant="contained" 
                    color="primary" 
                    className={classes.primaryBtn} 
                    onClick={() => handleSend(imageUrl)}
                    children ="Enviar"
            />
            {res!=='' && <DrawImage res={res} url={imageUrl} size={imageSize}/> } 
            <img className={classes.image} src={imageUrl} onLoad={onImgLoad}></img>
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
  textField: {
    width: '80%',
    marginTop: theme.spacing(2),
    borderRadius: '5px',
    '& label.Mui-focused': {
      color: theme.palette.primary,
    },
    '& .MuiFilledInput-underline:after': {
      borderBottomColor: theme.palette.primary.light,
      borderBottomWidth: '4px',
    },
  },
  image:{
    display:'none',
  }
}));