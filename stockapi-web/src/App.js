import React from 'react';
import NavBar from './Components/NavBar/NavBar'
import SideBar from './Components/SideBar/SideBar'
import MainContainer from './Components/MainContainer/MainContainer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <SideBar />
        <MainContainer />
      </body>
    </div>
  );
}

export default App;
