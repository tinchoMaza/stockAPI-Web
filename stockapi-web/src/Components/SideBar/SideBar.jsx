import React, { Component } from 'react'
import './sideBar.css'

export default class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            visible: true,
        }
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ visible: nextProps.visible });  
    }

    toggleVisibility(){
        this.setState({visible: !this.state.visible})
    }
    
    render() {
        if(this.state.visible){
            return (
                <div className="side-bar">
                    <p>something something</p>
                </div>
            )
        }
        else {
            return (                 
                <div className="side-bar" style={{width:0}}>
                </div>
            )
        }

    }
}
