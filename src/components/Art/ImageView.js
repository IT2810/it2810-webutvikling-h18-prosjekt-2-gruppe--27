import React, { Component } from 'react';

class ImageView extends Component {
  render() {
    let src = "";
    const image = this.props.image;
    if (image && image.state === "loaded") {
      src = image.data;
    }
    return (
      <div className={this.props.className} dangerouslySetInnerHTML={{__html: src}}/>
    );
  }
}

export default ImageView;