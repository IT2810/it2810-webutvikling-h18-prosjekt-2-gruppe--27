import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './Components/Tabs.js';
import Test from './Components/Test.js';

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
          <Test name="Art 1"/>
          <Test name="Art 2"/>
          <Test name="Art 3"/>
          <Test name="Art 4"/>
        </Tabs>
      </div>
    );
  }
}

export default App;
