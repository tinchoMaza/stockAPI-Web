import React from 'react'
import OrderItemContainer from '../Order/OrderItemContainer'

export default function OrdersList(props) {
    return (
    <ol>
        {props.displayedOrders.map(order => (
            <li key={order._id}>
                <OrderItemContainer content={order} items={order.orderedProducts.length}/>
            </li>
        ))}
      </ol>
    )
  }
  