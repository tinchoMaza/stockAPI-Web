import React, { Component } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Body from './Components/Body/Body'
import './App.css';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        menuIsVisible: true,
    }
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this)
}

toggleMenuVisibility() {
  this.setState({menuIsVisible : !this.state.menuIsVisible})
  console.log(this.state.menuIsVisible)
}

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <NavBar toggleMenuVisibility={this.toggleMenuVisibility} />
        </header>
        <Body menuIsVisible={this.state.menuIsVisible}/>
      </div>
    )
  }
}