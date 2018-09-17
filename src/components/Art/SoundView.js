import React, {Component} from 'react';

class SoundView extends Component {
  render() {
    let src = "";
    const sound = this.props.sound;
    if (sound && sound.state === "loaded") {
      src = URL.createObjectURL(sound.data);
    }
    return (
      <div className={this.props.className}>
        <audio src={src} controls autoPlay loop/>
      </div>
    );
  }
}

export default SoundView;