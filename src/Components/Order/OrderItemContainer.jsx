import React, { Component } from 'react'
import OrderItem from '../Order/OrderItem'

export default class OrderItemContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            opened: false,
        }
        this.openOrder = this.openOrder.bind(this)
        this.closeOrder = this.closeOrder.bind(this)
    }

    openOrder = () => {
        this.setState({
            opened: true,
        })
    }

    closeOrder = () => {
        this.setState({
            opened: false,
        })
    }
    
    render() {
        return (
            <div>
                <OrderItem 
                    content={this.props.content} 
                    items={this.props.items} 
                    opened={this.state.opened} 
                    open={this.openOrder} 
                    close={this.closeOrder}
                />
            </div>
        )
    }
}
