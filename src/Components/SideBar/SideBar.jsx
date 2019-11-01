import React, { Component } from 'react'
import SideBarLinksContainer from './SideBarLinksContainer'
import {withRouter} from 'react-router-dom';

const style = (width) => { 
    return {
        transition: '0.25s width',
        position: 'fixed',
        width: width,
        backgroundColor: '#D9D9D9',
        height: 'calc(100vh - 64px)',
    }
}


class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            visible: true,
            style: style('200px')
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.visible){
            this.setState({ 
                visible: nextProps.visible,
                style: style('200px')
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
                { this.state.visible && <SideBarLinksContainer active={this.props.location.pathname}/> }
            </div>
        )
    }
}

export default withRouter(props => <SideBar {...props}/>);
