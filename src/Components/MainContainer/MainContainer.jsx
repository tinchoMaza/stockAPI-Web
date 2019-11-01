import React, { Component } from 'react'
import ProductsGrid from "../ProductsGrid/ProductsGrid"
import Home from '../Home/Home'
import { Switch, Route } from "react-router-dom"
import OrdersListContainer from '../OrdersList/OrdersListContainer'
  
const style = (mainContainerStyle) => { 
    return {
        mainContainer: mainContainerStyle,
        sortingSelection: {
            float: 'left',
            margin: '5px 50px',
        },
    }
}

const expandedStyle = {
    overflow: 'scroll',
    width: '100%',
    marginTop: '15px',
    marginLeft: '0',
    transition: '.4s'

}

const compressedStyle = {
    overflow: 'scroll',
    width: '-webkit-fill-available',
    marginTop: '15px',
    marginLeft: '200px',
    transition: '.4s'

}

export default class MainContainer extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            isCompressed : true,
            styles : style(compressedStyle),
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isCompressed) {
            this.setState({ 
                isCompressed: nextProps.isCompressed,             
                styles : style(compressedStyle)
            })
        }
        else {
            this.setState({ 
                isCompressed: nextProps.isCompressed,             
                styles : style(expandedStyle)
            })        
        }
    }

    render() {
        return (
            <div style={this.state.styles.mainContainer}>
                <Switch>
                    <Route path="/" exact>
                        <Home style={{width:'100%'}}/>
                    </Route>
                    <Route path="/help">
                        <p>Halp please</p>
                    </Route>
                    <Route path="/orders">
                        <OrdersListContainer/>
                    </Route>
                    <Route path="/store">
                        <>
                            <div >
                                <p style={this.state.styles.sortingSelection} >Ordenar por:  Fecha ▼ </p>
                            </div>
                            <ProductsGrid/>
                        </>
                    </Route>
                </Switch>

            </div>
        )
    }
}
