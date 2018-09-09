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

    // generate objects for each static resource
    const resources = {};
    for (let fileType in importedResources) {
      resources[fileType] = {};
      for (let cat in importedResources[fileType]) {
        if (importedResources[fileType].hasOwnProperty(cat)) {
          resources[fileType][cat] = [];
          importedResources[fileType][cat].forEach((e, i) => {
            resources[fileType][cat].push({
              id: i,
              url: `${fileType}/${cat}/${e}`,
              loaded: false,
              error: false,
              blob: null
            });
          });
        }
      }
    }
    state.resources = resources;
    console.log(resources);

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
