import React, { Component } from 'react';

class AjaxCall extends Component {
  constructor(props) {
    super(props);
    this.state = {img:null};
  }

  buttonClick = () => {
    fetch("/images/food/Anonymous-burger.svg")
      .then(response => {
          console.log(response);
          console.log(response.headers.get("content-type"));
          console.log(response.ok);
          // if (true === true) {
          //   throw new Error("Testing");
          // }
          return response.blob();
        })
      .catch(response => {
        console.error("Response rejected", response);
        return Promise.reject("Rejected promise due to error...");
      })
      .then(blob => {
        console.log(blob);
        const objUrl = URL.createObjectURL(blob);
        console.log(objUrl);
        this.setState({img: <img src={objUrl} />});
      })
      .catch(r => console.error("Error converting blob", r))
      .finally(() => console.log("This will always run"));
      // .catch(reason => {
      //   console.error("Error caught!", reason);
      // });
    // import("./logo.svg")
    //   .then(response => this.setState({img: <img src={response} />}));
    //todo: Use Fetch API to get burger
    // done, but
    // todo: fetch image, catch if error, catch returns error url?
    // subsequent then takes url and assignes to src
    // TODO: Use img.onload = URL.revokeObjectURL ??
    // probably not, need ObjectURL if file reused?
    // wait, yes! ObjectURL is only a reference to an object.
    // as long as the object is stored in a object, the reference can be dereferenced
    // instead, assign the object to the state
  };

  doneRender = () => {
    if (this.state.img) {
      // todo: remove this, instead handle in img.onload
      URL.revokeObjectURL(this.state.img.src);
      console.log(this.state.img.src);
    }
  };

  render() {
    // TODO: Create a new image component that revokes the object reference when loaded
    const jsx = (
      <div style={{"width": "100%"}}>
        <button onClick={this.buttonClick}>Click me!</button>
        <div style={{"width": "500px", "maxHeight": "500px", "margin": "0 auto"}}>{this.state.img}</div>
      </div>
    );
    this.doneRender();
    return jsx;
  }
}

export default AjaxCall;
