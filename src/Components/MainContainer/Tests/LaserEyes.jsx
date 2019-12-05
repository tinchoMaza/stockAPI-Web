import React from 'react'
import { makeStyles } from '@material-ui/styles';

export default function LaserEyes(props) {
    const face = props.face;
    const size = face.faceRectangle.height/81
    const classes = useStyles(size);

    return (
        <div>
            <div className={classes.redShadow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilLeft.y-2*size,left:face.faceLandmarks.pupilLeft.x-10*size}}></div>
            <div className={classes.redShadow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilRight.y-2*size,left:face.faceLandmarks.pupilRight.x-10*size}}></div>
            
            <div className={classes.center} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilLeft.y-1*size,left:face.faceLandmarks.pupilLeft.x-5*size}}></div>
            <div className={classes.center} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilRight.y-1*size,left:face.faceLandmarks.pupilRight.x-5*size}}></div>
            
            <div className={classes.horizontalGlow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilLeft.y-1*size,left:face.faceLandmarks.pupilLeft.x-40*size}}></div>
            <div className={classes.horizontalGlow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilRight.y-1*size,left:face.faceLandmarks.pupilRight.x-40*size}}></div>
            <div className={classes.verticalGlow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilLeft.y-2*size,left:face.faceLandmarks.pupilLeft.x-1*size}}></div>
            <div className={classes.verticalGlow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilRight.y-2*size,left:face.faceLandmarks.pupilRight.x-1*size}}></div>
        </div>
    )
}


const useStyles = makeStyles(theme =>({
    redShadow: size => ({
        position: 'absolute',
        zIndex: 10,
        background: 'white',
        height: 4*size,
        width: 20*size,
        borderRadius: '50%',
        webkitBoxShadow: `0px 0px ${25*size}px ${25*size}px rgba(255,0,0,0.81)`,
        mozBoxShadow: `0px 0px ${25*size}px ${25*size}px rgba(255,0,0,0.81)`,
        boxShadow: `0px 0px ${25*size}px ${25*size}px rgba(255,0,0,0.81)`,
    }),
    center: size => ({
        position: 'absolute',
        zIndex: 12,
        background: 'white',
        height: 2*size,
        width: 10*size,
        borderRadius: '50%',
        webkitBoxShadow: `0px 0px ${1*size}px ${1*size}px rgba(255,255,255,0.81)`,
        mozBoxShadow: `0px 0px ${1*size}px ${1*size}px rgba(255,255,255,0.81)`,
        boxShadow: `0px 0px ${1*size}px ${1*size}px rgba(255,255,255,0.81)`,
    }),    
    horizontalGlow: size => ({
        position: 'absolute',
        zIndex: 11,
        background: 'rgba(255,255,255,1)',
        height: 2*size,
        width: 80*size,
        borderRadius: '100%',
        webkitBoxShadow: `0px 0px ${2*size}px ${2*size}px rgba(255,255,255,0.81)`,
        mozBoxShadow: `0px 0px ${2*size}px ${2*size}px rgba(255,255,255,0.81)`,
        boxShadow: `0px 0px ${2*size}px ${2*size}px rgba(255,255,255,0.81)`,
    }),  
    verticalGlow: size => ({
        position: 'absolute',
        zIndex: 15,
        background: 'rgba(255,255,255,1)',
        height: 4*size,
        width: 2*size,
        borderRadius: '100%',
        webkitBoxShadow: `0px 0px ${2*size}px ${2*size}px rgba(255,255,255,0.81)`,
        mozBoxShadow: `0px 0px ${2*size}px ${2*size}px rgba(255,255,255,0.81)`,
        boxShadow: `0px 0px ${2*size}px ${2*size}px rgba(255,255,255,0.81)`,
    }),
}));