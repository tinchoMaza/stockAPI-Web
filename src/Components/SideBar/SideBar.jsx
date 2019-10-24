import React, { Component } from 'react'
import { Link } from "react-router-dom"

const style = (width) => { 
    return {
        transition: '0.25s width',
        position: 'fixed',
        width: width,
        backgroundColor: '#D9D9D9',
        height: 'calc(100vh - 64px)',
    }
}

export default class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            visible: true,
            style: style('300px')
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.visible){
            this.setState({ 
                visible: nextProps.visible,
                style: style('300px')
            });  
        }
        else {
            this.setState({ 
                visible: nextProps.visible,
                style: style('0')
            });  
        }

    }
    
    render() {
        return (
            <div className="side-bar" style={this.state.style}>
                {this.state.visible?<Link to='/orders'>Orders List</Link>:null}
            </div>
        )
    }
}
