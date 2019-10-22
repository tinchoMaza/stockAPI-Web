import React, { Component } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Body from './Components/Body/Body'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './StockApp.css';

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
  console.log(this.state.menuIsVisible)
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
            <Switch>
              <Route path="/" exact>
                <Body 
                  menuIsVisible={this.state.menuIsVisible}
                  loginIsVisible={this.state.loginIsVisible}
                  toggleLoginVisibility={this.toggleLoginVisibility} 
                />
              </Route>
              <Route path="/help">
                <p>Halp please</p>
              </Route>
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
      
    )
  }
}