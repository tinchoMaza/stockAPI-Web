import React from 'react'
import ProductsGrid from "../ProductsGrid/ProductsGrid"
import Home from '../Home/Home'
import OrdersListContainer from '../OrdersList/OrdersListContainer'
import DetectPage from './Tests/DetectPage'
import PeopleGroupsPage from './Tests/PeopleGroupsPage'
import { Switch, Route } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'

export default function MainContainer(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.container}>
            <Switch>
            <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/detect" exact>
                    <DetectPage/>
                </Route>
                <Route path="/groups">
                    <PeopleGroupsPage/>
                </Route>
                <Route path="/help">
                    <p>Halp please</p>
                </Route>
                <Route path="/orders">
                    <OrdersListContainer/>
                </Route>
                <Route path="/store">
                    <>
                        <div className={classes.mockBreadcrumbs} >
                            <p> Home > Store > Alimentos </p>
                        </div>
                        <div className={classes.mockSort} >
                            <p>Ordenar por:  Fecha ▼ </p>
                        </div>
                        <ProductsGrid/>
                    </>
                </Route>
            </Switch>

        </div>
    )
}

const useStyles = makeStyles( (props) => ({
    container: props => ({
        overflow: 'scroll',
        width: props.isCompressed ? '-webkit-fill-available' : '100%',
        marginTop: '15px',
        marginLeft: props.isCompressed ? '200px' : '0',
        transition: '.4s',
    }),
    mockBreadcrumbs: {
        float: 'left',
        color:'#777',
        margin: '5px 50px',
    },
    mockSort : {
        float: 'right', 
        color:'#777',
        margin: '5px 50px',
    },
  }));