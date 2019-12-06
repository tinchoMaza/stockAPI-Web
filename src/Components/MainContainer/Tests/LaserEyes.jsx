import React from 'react'
import { makeStyles } from '@material-ui/styles';

export default function LaserEyes(props) {
    const face = props.face;
    const sizeMult = face.faceRectangle.height/81
    const classes = useStyles(sizeMult);

    return (
        <div>
            <div className={classes.redShadow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilLeft.y-2*sizeMult,left:face.faceLandmarks.pupilLeft.x-10*sizeMult}}></div>
            <div className={classes.redShadow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilRight.y-2*sizeMult,left:face.faceLandmarks.pupilRight.x-10*sizeMult}}></div>
            
            <div className={classes.center} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilLeft.y-1*sizeMult,left:face.faceLandmarks.pupilLeft.x-5*sizeMult}}></div>
            <div className={classes.center} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilRight.y-1*sizeMult,left:face.faceLandmarks.pupilRight.x-5*sizeMult}}></div>
            
            <div className={classes.horizontalGlow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilLeft.y-1*sizeMult,left:face.faceLandmarks.pupilLeft.x-40*sizeMult}}></div>
            <div className={classes.horizontalGlow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilRight.y-1*sizeMult,left:face.faceLandmarks.pupilRight.x-40*sizeMult}}></div>
            <div className={classes.verticalGlow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilLeft.y-2*sizeMult,left:face.faceLandmarks.pupilLeft.x-1*sizeMult}}></div>
            <div className={classes.verticalGlow} style={{transform: `rotate(${face.faceAttributes.headPose.roll}deg)`,top:face.faceLandmarks.pupilRight.y-2*sizeMult,left:face.faceLandmarks.pupilRight.x-1*sizeMult}}></div>
        </div>
    )
}


const useStyles = makeStyles(theme =>({
    redShadow: sizeMult => ({
        position: 'absolute',
        zIndex: 10,
        background: 'white',
        height: 4*sizeMult,
        width: 20*sizeMult,
        borderRadius: '50%',
        webkitBoxShadow: `0px 0px ${25*sizeMult}px ${25*sizeMult}px rgba(255,0,0,0.81)`,
        mozBoxShadow: `0px 0px ${25*sizeMult}px ${25*sizeMult}px rgba(255,0,0,0.81)`,
        boxShadow: `0px 0px ${25*sizeMult}px ${25*sizeMult}px rgba(255,0,0,0.81)`,
    }),
    center: sizeMult => ({
        position: 'absolute',
        zIndex: 12,
        background: 'white',
        height: 2*sizeMult,
        width: 10*sizeMult,
        borderRadius: '50%',
        webkitBoxShadow: `0px 0px ${1*sizeMult}px ${1*sizeMult}px rgba(255,255,255,0.81)`,
        mozBoxShadow: `0px 0px ${1*sizeMult}px ${1*sizeMult}px rgba(255,255,255,0.81)`,
        boxShadow: `0px 0px ${1*sizeMult}px ${1*sizeMult}px rgba(255,255,255,0.81)`,
    }),    
    horizontalGlow: sizeMult => ({
        position: 'absolute',
        zIndex: 11,
        background: 'rgba(255,255,255,1)',
        height: 2*sizeMult,
        width: 80*sizeMult,
        borderRadius: '100%',
        webkitBoxShadow: `0px 0px ${2*sizeMult}px ${2*sizeMult}px rgba(255,255,255,0.81)`,
        mozBoxShadow: `0px 0px ${2*sizeMult}px ${2*sizeMult}px rgba(255,255,255,0.81)`,
        boxShadow: `0px 0px ${2*sizeMult}px ${2*sizeMult}px rgba(255,255,255,0.81)`,
    }),  
    verticalGlow: sizeMult => ({
        position: 'absolute',
        zIndex: 15,
        background: 'rgba(255,255,255,1)',
        height: 4*sizeMult,
        width: 2*sizeMult,
        borderRadius: '100%',
        webkitBoxShadow: `0px 0px ${2*sizeMult}px ${2*sizeMult}px rgba(255,255,255,0.81)`,
        mozBoxShadow: `0px 0px ${2*sizeMult}px ${2*sizeMult}px rgba(255,255,255,0.81)`,
        boxShadow: `0px 0px ${2*sizeMult}px ${2*sizeMult}px rgba(255,255,255,0.81)`,
    }),
}));