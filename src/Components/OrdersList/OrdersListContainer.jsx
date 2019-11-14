import React, { Component } from 'react'
import OrdersList from './OrdersList'
import { mockOrdersList } from '../../utils/mockingValues'

export default class OrdersListContainer extends Component {  
  constructor(props) {
    super(props)
    this.state = { 
        displayedOrders: mockOrdersList
    }

  }
  render(){
    return (
      <OrdersList displayedOrders={this.state.displayedOrders}/>
    )
  }
}
