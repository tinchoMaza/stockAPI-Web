import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'
import MainContainer from '../MainContainer/MainContainer'
import Auth from '../Auth/Auth'

export default class Body extends Component {
    render() {
        return (
        <div className="body-wrapper">
            <SideBar visible={this.props.menuIsVisible}/>
            <MainContainer/>
            <Auth visible={this.props.loginIsVisible}/>
        </div>
        )
    }
}



