import React, { Component } from 'react';
import init_svg from "../../img/image_unassigned.svg";
import loading_svg from "../../img/loading.svg";
import error_svg from "../../img/error.svg";

class ImageView extends Component {
  render() {
    let src = "";
    let default_src = "";
    let default_className = "img-template";
    const image = this.props.image;
    if (image && image.state === "loaded") {
      src = image.data;
    } else if (image && image.state === "error") {
      default_src = error_svg;
    } else if (image && image.state === "initialized") {
      default_src = init_svg;
    } else if (image && image.state === "loading") {
      default_src = loading_svg;
      default_className += " rotate";
    } else {
      default_src = init_svg;
    }
    if (default_src){
      return (
        <div className={this.props.className}>
          <img className={default_className} src={default_src} alt={"This is the default content"} />
        </div>
      );
    }
    return (
      <div className={this.props.className} dangerouslySetInnerHTML={{__html: src}}/>
    );
  }
}

export default ImageView;