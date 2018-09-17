import React, { Component } from 'react';

class ImageView extends Component {
  render() {
    let src = "";
    const image = this.props.image;
    if (image && image.state === "loaded") {
      src = URL.createObjectURL(image.blob);
    }
    return (
      <div className={this.props.className}>
        <img src={src} alt={"Generated content"}
             onLoad={() => URL.revokeObjectURL(src)}
        />
      </div>
    );
  }
}

export default ImageView;