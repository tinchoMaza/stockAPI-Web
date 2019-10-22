import React, { Component } from 'react'
import ProductsGrid from "../ProductsGrid/ProductsGrid";

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
    width: 'calc(100%-300px)',
    marginTop: '15px',
    marginLeft: '300px',
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
            // debugger
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
                <div >
                    <p style={this.state.styles.sortingSelection} >Ordenar por:  Fecha ▼ </p>
                </div>
                <ProductsGrid/>
            </div>
        )
    }
}
