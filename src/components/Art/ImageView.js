import React, { Component } from 'react';

class ImageView extends Component {
  render() {
    let src = "";
    const image = this.props.image;
    if (image) {
      if (image.state === "loaded") {
        src = URL.createObjectURL(image.blob);
      }
    }
    return (
      <div className={this.props.className}>
        <img src={src} alt={"Generated content"}
             onLoad={() => URL.revokeObjectURL(src)}
        />
        <p>Image: {this.props.image ? this.props.image.state : "No image assigned"}</p>
      </div>
    );
  }
}

export default ImageView;