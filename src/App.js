import React, { Component } from 'react';
import './App.css';
import Radio from './components/Radio';
import Tabs from './components/Tabs.js';
import Art from "./components/Art/Art";
import Resource from "./resource";
import importedResources from "./resources";
import shuffleArray from "./utils/shuffle";

class App extends Component {
  constructor(props) {
    super(props);
    const state = {};

    // deep copy resources to avoid state changes from module scope
    const resources = JSON.parse(JSON.stringify(importedResources));

    // store each file as an object
    Object.keys(resources).forEach(fileType => {
      Object.keys(resources[fileType]).forEach(category => {
        resources[fileType][category] = resources[fileType][category].map((filename, index) => {
          return new Resource(index, fileType, category, filename)
        });
      });
    });
    state.resources = resources;

    state.activeTab = 0;
    state.activeCategory = {images: "", sounds: "", texts: ""};

    // generate a random permutation for each file type
    state.permutation = {};
    Object.keys(resources).forEach(type => {
      state.permutation[type] = shuffleArray([0, 1, 2, 3]);
    });

    this.state = state;

    // bind this to functions
    this.handleActiveTabChange = this.handleActiveTabChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleResourceLoading = this.handleResourceLoading.bind(this);
    this.updateResource = this.updateResource.bind(this);
  }

  handleActiveTabChange(tabId) {
    this.setState(prevState => Object.assign({activeTab: tabId}, this.calculateResources(
      prevState.resources,
      tabId,
      prevState.activeCategory,
      this.state.permutation
    )));
  }

  handleCategoryChange({
                         images = this.state.activeCategory.images,
                         sounds = this.state.activeCategory.sounds,
                         texts = this.state.activeCategory.texts
  } = {}) {
    const newState = {activeCategory: {images, sounds, texts}};
    Object.assign(newState, this.calculateResources(
      this.state.resources,
      this.state.activeTab,
      newState.activeCategory,
      this.state.permutation));
    this.setState(prevState => {
      return Object.assign(newState, this.calculateResources(
        prevState.resources,
        prevState.activeTab,
        newState.activeCategory,
        this.state.permutation));
    });
  }

  handleResourceLoading(resourceObject) {
    if (resourceObject.state === "loading" || resourceObject.state === "loaded") return;

    // Update object state to loading
    const clone = resourceObject.clone();
    clone.state = "loading";
    this.updateResource(clone);

    // fetch the object asynchronously
    clone.fetch().then(result => this.updateResource(result));
  }

  updateResource(newResource) {
    this.setState(prevState => {
      const resources = Object.assign({}, prevState.resources);
      resources[newResource.fileType][newResource.category][newResource.id] = newResource;
      // might have to update active resources also
      const calculatedResources = this.calculateResources(
        resources,
        prevState.activeTab,
        prevState.activeCategory,
        prevState.permutation);
      return Object.assign({resources: resources}, calculatedResources);
    });
  };

  calculateResources(resources, activeTab, activeCategory, permutation){
    let image, sound, text;
    if (permutation) {
      if (permutation.images && activeCategory.images) {
        let index = permutation.images[activeTab];
        image = resources.images[activeCategory.images][index];
        if (image.state !== "loading" || image.state !== "loaded") {
          this.handleResourceLoading(image);
        }
      }
      if (permutation.sounds && activeCategory.sounds) {
        let index = permutation.sounds[activeTab];
        sound = resources.sounds[activeCategory.sounds][index];
        if (sound.state !== "loading" || sound.state !== "loaded") {
          this.handleResourceLoading(sound);
        }
      }
      if (permutation.texts && activeCategory.texts) {
        let index = permutation.texts[activeTab];
        text = resources.texts[activeCategory.texts][index];
        if (text.state !== "loading" || text.state !== "loaded") {
          this.handleResourceLoading(text);
        }
      }
    }
    return {image, sound, text};
  }

  render() {
    return (
      <div className="App">
        <Tabs
          onActiveTabChange={this.handleActiveTabChange}
          currentTabId={this.state.activeTab}
          className={"tabs"}
        >
          <div>Art 1</div>
          <div>Art 2</div>
          <div>Art 3</div>
          <div>Art 4</div>
        </Tabs>

        <Radio
          onCategoryChange={this.handleCategoryChange}
          className={"radio"}
        />

        <Art
          className={"art"}
          image={this.state.image}
          sound={this.state.sound}
          text={this.state.text}
        />
      </div>
    );
  }
}

export default App;
