import React, { Component } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Body from './Components/Body/Body'
import './App.css';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        menuIsVisible: true,
        loginIsVisible: false,
    }
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
}

toggleMenuVisibility() {
  this.setState({menuIsVisible : !this.state.menuIsVisible})
  console.log(this.state.menuIsVisible)
}

handleLogin() {
  this.setState({loginIsVisible:!this.state.loginIsVisible})
  console.log(this.state.loginIsVisible)
}

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <NavBar 
            toggleMenuVisibility={this.toggleMenuVisibility} 
            handleLogin={this.handleLogin} 
          />
        </header>
        <Body 
          menuIsVisible={this.state.menuIsVisible}
          loginIsVisible={this.state.loginIsVisible}
        />
      </div>
    )
  }
}