import React, { Component } from 'react'
import StoreSubItems from './StoreSubItems'
import OrdersSubItems from './OrdersSubItems'
import SettingsSubItems from './SettingsSubItems'

export default class SubItems extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            id:props.id,
        }
    }

    subItemSelector = (id) => {
        switch(id){
            case 'Store': return <StoreSubItems/>
            case 'Orders': return <OrdersSubItems/>
            case 'Settings': return <SettingsSubItems/>
        }
    }

    render() {
        return (
            <div>
                {this.subItemSelector(this.state.id)}
            </div>
        )
    }
}
