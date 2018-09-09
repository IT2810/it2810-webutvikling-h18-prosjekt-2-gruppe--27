import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AjaxCall from "./AjaxCall.js";
import Art from "./components/Art/Art";
import importedResources from "./resources";

class App extends Component {
  constructor(props) {
    super(props);
    const state = {};

    // deep copy resources to avoid state changes from module scope
    const resources = JSON.parse(JSON.stringify(importedResources));

    // store each file as an object
    for (let fileType in resources) {
      if (!resources.hasOwnProperty(fileType)) continue;
      for (let category in resources[fileType]) {
        if (!resources[fileType].hasOwnProperty(category)) continue;
        for (let i = 0; i < resources[fileType][category].length; i++) {
          const filename = resources[fileType][category][i];
          resources[fileType][category][i] = {
                      id: i,
                      url: `${fileType}/${category}/${filename}`,
                      loaded: false,
                      error: false,
                      blob: null
          };
        }
      }
    }
    state.resources = resources;

    state.activeTab = 0;
    state.activeCategory = {image: "", sound: "", text: ""};
    state.permutation = {
      imageId: [],
      soundId: [],
      textId: []
    };

    this.state = state;
  }


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
        <AjaxCall />
        <Art />
      </div>
    );
  }
}

export default App;
