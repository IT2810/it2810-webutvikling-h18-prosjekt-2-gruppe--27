import React, { Component } from 'react';

class TextView extends Component {
  render() {
    let textVal = "";
    const text = this.props.text;
    if (text) {
      if (text.state === "loaded") {
        textVal += text.blob.text;
      }
    }
    return (
      <div className={this.props.className}>
        <h3>{textVal}</h3>
        <p>Text: {this.props.text ? this.props.text.state : "No text assigned"}</p>
      </div>
    );
  }
}

export default TextView;