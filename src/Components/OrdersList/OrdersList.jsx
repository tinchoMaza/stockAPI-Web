import React from 'react'
import OrderItem from '../Order/OrderItem'

export default function OrdersList(props) {
    return (
    <ol>
        {props.displayedOrders.map(order => (
          <li key={order._id}><OrderItem content={order}></OrderItem></li>
        ))}
      </ol>
    )
  }
  