import React, { Component } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Body from './Components/Body/Body'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import SideBar from './Components/SideBar/SideBar'
import { BrowserRouter as Router } from "react-router-dom";

import './StockApp.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2da7cb',
    },
    secondary: {
      main: '#222',
    },
    lightblue: {
      main: '#EEF8FA',
    },
  },
})

console.log(theme)

export default class StockApp extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        menuIsVisible: true,
        loginIsVisible: false,
    }
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this)
    this.toggleLoginVisibility = this.toggleLoginVisibility.bind(this)
}

toggleMenuVisibility() {
  this.setState({menuIsVisible : !this.state.menuIsVisible})
}

toggleLoginVisibility() {
  this.setState({loginIsVisible:!this.state.loginIsVisible})
}

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="stock-app">
            <header className="stock-app-header">
              <NavBar 
                toggleMenuVisibility={this.toggleMenuVisibility} 
                toggleLoginVisibility={this.toggleLoginVisibility} 
              />
            </header>
            <SideBar visible={this.state.menuIsVisible}/>
            <Body 
              menuIsVisible={this.state.menuIsVisible}
              loginIsVisible={this.state.loginIsVisible}
              toggleLoginVisibility={this.toggleLoginVisibility} 
            />
          </div>
        </MuiThemeProvider>    
      </Router>
    )
  }
}