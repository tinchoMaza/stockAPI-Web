import React, { Component } from 'react'
import OrderItem from '../Order/OrderItem'

export default class OrderItemContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            opened: false,
        }
        this.toggleOpen = this.toggleOpen.bind(this)
    }

    toggleOpen = () => {
        this.setState({
            opened: !this.state.opened,
        })
    }
    
    render() {
        return (
            <div>
                <OrderItem content={this.props.content} items={this.props.items} opened={this.state.opened} toggleOpen={this.toggleOpen}/>
            </div>
        )
    }
}
