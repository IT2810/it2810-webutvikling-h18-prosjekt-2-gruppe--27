import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Components/Tabs.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Tabs>
          <div name="Art 1">Container for art 1</div>
          <div name="Art 2">Container for art 2</div>
          <div name="Art 3">Container for art 3</div>
        </Tabs>
      </div>
    );
  }
}

export default App;
