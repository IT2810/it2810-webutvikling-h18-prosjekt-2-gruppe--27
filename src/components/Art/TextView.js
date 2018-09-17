import React, { Component } from 'react';

class TextView extends Component {
  render() {
    let textVal = "";
    const text = this.props.text;
    if (text && text.state === "loaded") {
      textVal = text.data.text;
    }
    return (
      <div className={this.props.className}>
        <h3>{textVal}</h3>
      </div>
    );
  }
}

export default TextView;