import React, { Component } from 'react';

class Art extends Component {

  render() {

    return (
      <div className={this.props.className}>
        <div className={"image"}>
          <img src={this.props.imageSrc} alt={"This is the category"}
               style={{maxWidth: "400px", maxHeight: "400px"}}
          />
        </div>
        <div className={"text"}>textdiv</div>
        <div className={"sound"}>sounddiv</div>
      </div>
    );
  }
}

export default Art;
