import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Art from "./components/Art/Art";
import importedResources from "./resources";
import shuffleArray from "./utils/shuffle";

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
    state.permutation = null;
    // {
    //   imageId: [],
    //     soundId: [],
    //     textId: []
    // };

    this.state = state;

    // bind this to functions
    this.handleActiveTabChange = this.handleActiveTabChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleActiveTabChange(tabId) {
    this.setState({activeTab: tabId});
  }

  handleCategoryChange({
                         image = this.state.activeCategory.image,
                         sound = this.state.activeCategory.sound,
                         text = this.state.activeCategory.text
  } = {}) {
    this.setState({activeCategory: {image, sound, text}});
  }

  componentDidUpdate(prevProps, prevState) {
    // calculate new permutation if category changed
    if (this.state.activeCategory.image !== prevState.activeCategory.image
      || this.state.activeCategory.sound !== prevState.activeCategory.sound
      || this.state.activeCategory.text !== prevState.activeCategory.text) {
      // category changed, generate new random permutation
      if (this.state.permutation == null) {
        // initial permutation
        const images = [...this.state.resources.images[this.state.activeCategory.image]];
        const getImageId = img => img.id;
        let imageIds = images.map(getImageId);
        shuffleArray(imageIds);
        imageIds = imageIds.slice(0, 4);
        this.setState({permutation: {
            imageId: imageIds,
            soundId: [],
            textId: []
          }});
      } else {
        // permute previous permutation
        // TODO: make sure permutation has correct length
        const permutationCopy = {
          imageId: [...this.state.permutation.imageId],
          soundId: [...this.state.permutation.soundId],
          textId: [...this.state.permutation.textId]
        };
        for (let key in permutationCopy){
          shuffleArray(permutationCopy[key]);
        }
        this.setState({permutation: permutationCopy});
      }
    }
  }

  render() {
    // calculate correct image
    let imageSrc = "";
    if (this.state.permutation && this.state.permutation.imageId) {
      const images = this.state.resources.images[this.state.activeCategory.image];
      const image = images.find(img => {
        return img.id === this.state.permutation.imageId[this.state.activeTab];
      });
      imageSrc = image.url;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => this.handleActiveTabChange(0)}>Tab 0</button>
        <button onClick={() => this.handleActiveTabChange(1)}>Tab 1</button>
        <button onClick={() => this.handleActiveTabChange(2)}>Tab 2</button>
        <button onClick={() => this.handleActiveTabChange(3)}>Tab 3</button>
        <p>Current tab is {this.state.activeTab}</p>
        <div>
          Image category ({this.state.activeCategory.image}):
          <br />
          <button onClick={() => this.handleCategoryChange({image: "food"})}>food</button>
          <button onClick={() => this.handleCategoryChange({image: "instrument"})}>instrument</button>
          <button onClick={() => this.handleCategoryChange({image: "party"})}>party</button>
        </div>
        <div>
          Sound category ({this.state.activeCategory.sound}):
          <br />
          <button onClick={() => this.handleCategoryChange({sound: "1"})}>1</button>
          <button onClick={() => this.handleCategoryChange({sound: "2"})}>2</button>
          <button onClick={() => this.handleCategoryChange({sound: "3"})}>3</button>
        </div>
        <div>
          Text category ({this.state.activeCategory.text}):
          <br />
          <button onClick={() => this.handleCategoryChange({text: "a"})}>a</button>
          <button onClick={() => this.handleCategoryChange({text: "b"})}>b</button>
          <button onClick={() => this.handleCategoryChange({text: "c"})}>c</button>
        </div>
        <p>Image permutation: {(!!this.state.permutation) ? this.state.permutation.imageId : ""}</p>
        <Art
          imageSrc={imageSrc}
        />
      </div>
    );
  }
}

export default App;
