import React, { Component } from 'react';

class TextView extends Component {
  render() {
    let textVal = "";
    let sourceText = "No text category selected";
    const text = this.props.text;
    if (text && text.state === "loaded") {
      textVal = text.data.text;
      sourceText = "- " + (text.data.source || "Anonymous");
    }
    return (
      <div className={this.props.className}>
        <h3>{textVal}</h3>
        <p className={"text-source"}>{sourceText}</p>
      </div>
    );
  }
}

export default TextView;