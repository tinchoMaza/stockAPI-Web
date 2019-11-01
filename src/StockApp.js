import React, { Component } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Body from './Components/Body/Body'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import SideBar from './Components/SideBar/SideBar'
import { BrowserRouter as Router } from "react-router-dom";

import './StockApp.css';

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


const theme = createMuiTheme({
  palette: {
    action: {
      hoverOpacity: 0.5,
      lightHover: `rgba(0, 0, 0, 0.08)`,
      darkHover: `rgba(0, 0, 0, 0.5)`,
      accept: {
        main: '#2DCB8B',
      },
      decline: {
        main: '#F26767',
      },

    },
    primary: {
      main: '#2da7cb',
    },
    secondary: {
      main: '#222',
    },
    lightblue: {
      main: '#EEF8FA',
      hover: '#c8e9f9',
    },
  },
  typography: {
    h6: {
      fontSize: '1rem',
      fontWeight: '600',
    },
    fontFamily: [
      'Heebo',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

console.log(theme)