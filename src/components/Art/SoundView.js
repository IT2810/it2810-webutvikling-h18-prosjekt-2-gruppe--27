import React, { Component } from 'react';

class SoundView extends Component {
  render() {
    return (
      <div className={this.props.className}>
        soundview
        <p>Sound: {this.props.sound ? this.props.sound.state : "No sound assigned"}</p>
      </div>
    );
  }
}

export default SoundView;