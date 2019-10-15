import React, { Component } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Body from './Components/Body/Body'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2da7cb',
    },
    secondary: {
      main: '#222',
    },
  },
})

console.log(theme)

export default class App extends Component {
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
  console.log(this.state.menuIsVisible)
}

toggleLoginVisibility() {
  this.setState({loginIsVisible:!this.state.loginIsVisible})
}

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <header className="app-header">
            <NavBar 
              toggleMenuVisibility={this.toggleMenuVisibility} 
              toggleLoginVisibility={this.toggleLoginVisibility} 
            />
          </header>
          <Body 
            menuIsVisible={this.state.menuIsVisible}
            loginIsVisible={this.state.loginIsVisible}
            toggleLoginVisibility={this.toggleLoginVisibility} 
          />
        </div>
      </MuiThemeProvider>
    )
  }
}