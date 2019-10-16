import React, { Component } from 'react'
import AuthTabs from './AuthTabs'
import "./auth.css"

export default class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            visible: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ visible: nextProps.visible });  
    }

    styles = {
        wrapperOn:{
            visibility: 'visible',
            transitionDuration: '.4s',

        },
        overlayOn:{
            backgroundColor: 'rgba(0,41,60,0.75)',
            transform: 'scale(1)',
            transitionDuration: '.4s'
        },
        containerOn:{
            transition: 'opacity .4s ease'
        },
        wrapperOff:{
            visibility: 'hidden',
            transitionDuration: '.4s',
        },
        overlayOff:{
            backgroundColor: 'rgba(0,41,60,0)',
            transform: 'scale(0)',
            transitionDuration: '.4s'
        },
    }

    handleOusideClick = (e) => {
        if(e.target.className === "overlay-layer" || e.target.className === "auth-container" ){
            this.handleClose()
        }
    }   

    handleClose = () => {
        this.props.toggleLoginVisibility()
    }

    render() {
        if(this.state.visible){
            return (
                <div className="auth-wrapper" style={this.styles.wrapperOn} >
                    <div className="overlay-layer" style={this.styles.overlayOn} onClick={this.handleOusideClick}>
                        <div className="auth-container" style={this.styles.containerOn}>
                            <AuthTabs close={this.handleClose}/>
                        </div>
                    </div>
                </div>
                
            )
        }
        else {
            return (                 
                <div className="auth-wrapper" style={this.styles.wrapperOff}>
                    <div className="overlay-layer" style={this.styles.overlayOff}>
                        <div className="auth-container" style={this.styles.containerOff}>
                        </div>
                    </div>
                </div>
            )
        }
    }
}