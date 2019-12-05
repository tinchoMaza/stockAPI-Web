import React, { Component } from 'react'
import JSONPretty from 'react-json-prettify';
import { withStyles } from '@material-ui/styles';

const colors = ["lightGreen","red","lightBlue","orange","blue"]

class DrawImage extends Component{

    componentDidMount() {

        const img = this.refs.image
        
        img.onload = () => {
            const canvas = this.refs.canvas
            const ctx = canvas.getContext("2d")
            const faces = this.props.res

            ctx.drawImage(img, 0, 0)
            var facesCounter = 0;
            ctx.font = "18px Courier"
            faces.forEach((face)=>{
                ctx.fillStyle = colors[facesCounter];
                ctx.fillText(face.faceId.substring(24,36), face.faceRectangle.left, face.faceRectangle.top+face.faceRectangle.height+18)
                ctx.beginPath();
                ctx.lineWidth = "2";
                ctx.strokeStyle = colors[facesCounter];
                ctx.rect(face.faceRectangle.left, face.faceRectangle.top, face.faceRectangle.width, face.faceRectangle.height);
                ctx.stroke();
                facesCounter++;
            })
        }
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <div>
                    <img className={classes.image} ref="image" src={this.props.url}></img>
                    <canvas className={classes.canva} ref="canvas" width={this.props.size.width} height={this.props.size.height} />
                </div>
                <JSONPretty json={this.props.res}/>
            </div>
        )
    }
}

const styles = theme => ({
    container:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    image:{
        display: 'none'
    },
    canva:{
        // border: '1px solid blue',
    }
});

export default withStyles(styles)(DrawImage);
