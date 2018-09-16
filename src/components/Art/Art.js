import React, { Component } from 'react';
import ImageView from "./ImageView";
import SoundView from "./SoundView";
import TextView from "./TextView";

class Art extends Component {

  render() {

    return (
      <div className={this.props.className}>
        <ImageView
          className={"image"}
          image={this.props.image}
        />
        <TextView
          className={"text"}
          text={this.props.text}
        />
        <SoundView
          className={"sound"}
          sound={this.props.sound}
        />
      </div>
    );
  }
}

export default Art;
