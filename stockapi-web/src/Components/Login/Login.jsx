import React, { Component } from 'react'
import LoginForm from './LoginForm'
import "./login.css"

export default class Login extends Component {
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
        },
        overlayOff:{
            backgroundColor: 'rgba(0,41,60,0)',
            transform: 'scale(0)',
            transitionDuration: '.4s'
        },
    }

    render() {
        if(this.state.visible){
            return (
                <div className="login-wrapper" style={this.styles.wrapperOn}>
                    <div className="overlay-layer" style={this.styles.overlayOn}>
                        <div className="login-container" style={this.styles.containerOn}>
                            <div className="login-inner">

                                
                                <LoginForm/>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        }
        else {
            return (                 
                <div className="login-wrapper" style={this.styles.wrapperOff}>
                    <div className="overlay-layer" style={this.styles.overlayOff}>
                        <div className="login-container" style={this.styles.containerOff}>
                            <div className="login-inner">
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

    }
}