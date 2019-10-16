import React, { Component } from 'react'
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import './mainContainer.css'

export default class MainContainer extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="sorting-selection">
                    <p>Ordenar por:  Fecha ▼ </p>
                </div>
                <ProductsGrid/>
            </div>
        )
    }
}
