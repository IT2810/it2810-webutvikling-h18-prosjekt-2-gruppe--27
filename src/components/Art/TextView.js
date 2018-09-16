import React, { Component } from 'react';

class TextView extends Component {
  render() {
    return (
      <div className={this.props.className}>
        textview
        <p>Text: {this.props.text ? this.props.text.state : "No text assigned"}</p>
      </div>
    );
  }
}

export default TextView;