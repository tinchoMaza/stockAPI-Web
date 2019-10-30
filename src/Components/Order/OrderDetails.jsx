import React from 'react'
import ProductsContainer from '../Products/ProductsContainer';

export default function OrderDetails(props) {
        return (
        <ol>
            {props.content.orderedProducts.map(product => (
                <li key={product._id}>
                    <ProductsContainer content={product}/>
                </li>
            ))}
          </ol>
        )
      }
      
