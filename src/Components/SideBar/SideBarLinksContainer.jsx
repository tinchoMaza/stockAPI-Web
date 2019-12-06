import React, { Component } from 'react'
import List from '@material-ui/core/List';
import SideBarLink from './SideBarLink'
import {withRouter} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import StoreSubItems from './SubItems/StoreSubItems'
import OrdersSubItems from './SubItems/OrdersSubItems'
import SettingsSubItems from './SubItems/SettingsSubItems'

 class SideBarLinksContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {  }
    }

    static getDerivedStateFromProps(props, state) {
        return ({
            links: [
                {
                    label:"Store",
                    to:"/store",
                    active: props.location.pathname.includes('/store'),
                },
                {
                    label:"Orders",
                    to:"/orders",
                    active: props.location.pathname.includes('/orders'),
                },
                {
                    label:"Cart", 
                    to:"/cart", 
                    active: props.location.pathname.includes('/cart'),
                },
                {
                    label:"Detect Faces", 
                    to:"/detect", 
                    active: props.location.pathname.includes('/detect'),
                },
                {
                    label:"People groups", 
                    to:"/groups", 
                    active: props.location.pathname.includes('/groups'),
                },
            ]
        })
    }

    subItemSelector = (label) => {
        switch(label){
            case 'Store': return <StoreSubItems/>
            case 'Orders': return <OrdersSubItems/>
            case 'Settings': return <SettingsSubItems/>
            default : return null
        }
    }

    render() {
        return (
            <div>
                <List>
                    {this.state.links.map( link => { 
                        return(
                        <SideBarLink 
                            label={link.label} 
                            link={link.to}
                            active={link.active}
                        >
                            {this.subItemSelector(link.label)}
                        </SideBarLink>
                        )
                    })}
                </List>
            </div>
        )
    }
}

export default withRouter(props => <SideBarLinksContainer {...props}/>);
