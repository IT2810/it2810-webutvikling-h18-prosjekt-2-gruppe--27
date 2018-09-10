import {Component} from 'react';
import React from "react";

class Test extends Component{
  render() {
    return(
      <div>
        <p>This is a container for {this.props.name}</p>
        <p>Here you can write anything and generate anything</p>
      </div>
    )
  }
}

export default Test;