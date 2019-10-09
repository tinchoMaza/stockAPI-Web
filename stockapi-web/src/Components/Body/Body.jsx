import React, { Component } from 'react'
import SideBar from '../SideBar/SideBar'
import MainContainer from '../MainContainer/MainContainer'

export default class Body extends Component {
    render() {
        return (
        <div className="body-wrapper">
            <SideBar visible={this.props.menuIsVisible}/>
            <MainContainer/>
        </div>
        )
    }
}



