import React, { Component } from 'react'
import JSONPretty from 'react-json-prettify';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import {github} from 'react-json-prettify/dist/themes';

class DrawImage extends Component{

    componentDidMount() {

        const img = this.refs.image
        
        img.onload = () => {
            const canvas = this.refs.canvas;
            const ctx = canvas.getContext("2d");
            const faces = this.props.res;
            var facesCounter = 0;
            var top, left, height, width, rotation;
            ctx.drawImage(img, 0, 0)
            ctx.font = "24px Courier";
            faces.forEach((face)=>{
                top = face.faceRectangle.top;
                left = face.faceRectangle.left;
                height = face.faceRectangle.height;
                width = face.faceRectangle.width;
                rotation = face.faceAttributes.headPose.roll;
                
                ctx.save();
                ctx.fillStyle = colors.vivid[facesCounter%8];
                ctx.strokeStyle = colors.vivid[facesCounter%8];
                ctx.beginPath();
                ctx.lineWidth = "2";
                ctx.translate( left+width/2, top+height/2 );
                ctx.rotate(rotation * Math.PI / 180);
                ctx.rect( -width/2, -height/2, width,height);
                ctx.stroke();
                ctx.fillText(facesCounter+1, +width/2, -height/2 )
                facesCounter++;
                ctx.restore();
            })
        }
    }

    
    render() {
        const { classes } = this.props;
        var facesCounter = -1;
        var faceInfo;
        return(
            <div className={classes.container}>
                <div>
                    <img className={classes.image} ref="image" src={this.props.url}></img>
                    <canvas className={classes.canva} ref="canvas" width={this.props.size.width} height={this.props.size.height} />
                </div>
                <Grid container className={classes.grid} spacing={2}>
                    {this.props.res.map( (face) => {
                        facesCounter++;
                        faceInfo = {
                            faceCounter : facesCounter+1,
                            ...face
                        }
                        return(
                            <Grid item >
                                <JSONPretty json={faceInfo} theme={customTheme(facesCounter%8)}/>
                            </Grid>
                        )
                    })}
                </Grid>


            </div>
        )
    }
}

const colors = {
    vivid:[
        "rgb(255,152,0)",
        "rgb(139,195,74)",
        "rgb(103,58,183)",
        "rgb(33,150,243)",
        "rgb(233,30,99)",
        "rgb(244,67,54)",
        "rgb(0,150,136)",
        "rgb(205,220,57)",
    ],
    transparent:[
        "rgb(255,152,0,0.25)",
        "rgb(139,195,74,0.25)",
        "rgb(103,58,183,0.25)",
        "rgb(33,150,243,0.25)",
        "rgb(233,30,99,0.25)",
        "rgb(244,67,54,0.25)",
        "rgb(0,150,136,0.25)",
        "rgb(205,220,57,0.25)",
    ]
}

const customTheme = (counter) => ({
    ...github,
    background: colors.transparent[counter],
});

const styles = theme => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    grid: {
        margin: 'auto',
        justifyContent: 'center',

    },
    image:{
        display: 'none'
    },
    canva:{
        // border: '1px solid blue',
    }
});

export default withStyles(styles)(DrawImage);
