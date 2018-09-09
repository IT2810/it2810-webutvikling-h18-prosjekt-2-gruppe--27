import React, { Component } from 'react';

class Art extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt={this.props.img} />
        // TODO: Add div for text and for music???
      </div>
    );
  }
}

export default Art;
