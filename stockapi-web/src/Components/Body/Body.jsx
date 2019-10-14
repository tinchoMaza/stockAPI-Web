import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'
import MainContainer from '../MainContainer/MainContainer'
import Login from '../Login/Login'
export default class Body extends Component {
    render() {
        return (
        <div className="body-wrapper">
            <SideBar visible={this.props.menuIsVisible}/>
            <MainContainer/>
            <Login visible={this.props.loginIsVisible}/>
        </div>
        )
    }
}



