import React, {Component} from 'react';

class SoundView extends Component {
  render() {
    let src = null;
    let info_text = "No sound selected";
    const sound = this.props.sound;
    if (sound && sound.state === "loaded") {
      src = URL.createObjectURL(sound.data);
      info_text = sound.filename;
    }
    return (
      <div className={this.props.className}>
        <p>Now playing: {info_text}</p>
        <audio src={src} controls autoPlay loop/>
      </div>
    );
  }
}

export default SoundView;