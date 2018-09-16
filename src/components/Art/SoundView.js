import React, { Component } from 'react';

class SoundView extends Component {
  render() {
    let src = "";
    const sound = this.props.sound;
    if (sound) {
      if (sound.state === "loaded") {
        src = URL.createObjectURL(sound.blob);
      }
    }
    return (
      <div className={this.props.className}>
        soundview
        <p>Sound: {this.props.sound ? this.props.sound.state : "No sound assigned"}</p>
        <audio src={src} controls autoPlay loop/>
      </div>
    );
  }
}

export default SoundView;