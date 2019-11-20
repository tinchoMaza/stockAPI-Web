import React from 'react'
import Typography from '@material-ui/core/Typography'
import { IamAuthenticator } from 'ibm-watson/auth'
import fruitbowl from './fruitbowl.jpg'

const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3')

const visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    authenticator: new IamAuthenticator({
        apikey: '8N5iCglc-bsTm-exF-_1vj2Q8Oc22qiz09FqTSm0kput',
    }),
    url: 'https://gateway.watsonplatform.net/visual-recognition/api',
    disableSslVerification: true,
  });

const classifyParams = {
    url: 'https://i.ebayimg.com/images/g/gksAAOSwzXxaIWlD/s-l300.jpg',
    owners: ['me'],
    threshold: 0.6,
};

  
visualRecognition.classify(classifyParams)
    .then(response => {
      const classifiedImages = response.result;
      console.log(JSON.stringify(classifiedImages, null, 2));
    })
    .catch(err => {
      console.log('error:', err);
});

export default function TestingPage() {
    return (
        <div>
            <Typography variant="h1">Testing Page</Typography>
            <div><img src={fruitbowl}></img></div>

        </div>
    )
}
