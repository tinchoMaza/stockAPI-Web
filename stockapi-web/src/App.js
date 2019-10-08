import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import SideBar from './Components/SideBar/SideBar'
import MainContainer from './Components/MainContainer/MainContainer'
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <NavBar />
      </header>
      <body>
        <div className="body-wrapper">
          <SideBar style={{border:"1px solid red"}}/>
          <MainContainer style={{border:"1px solid blue"}} />
        </div>
      </body>
    </div>
  );
}

export default App;
