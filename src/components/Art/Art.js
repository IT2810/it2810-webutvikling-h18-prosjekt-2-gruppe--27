import React, { Component } from 'react';

class Art extends Component {

  render() {
    return (
      <div>
        <img src={this.props.imageSrc} alt={"This is the category"}
         style={{maxWidth: "400px", maxHeight: "400px"}}
        />
        {/*TODO: Add div for text and for music???*/}
      </div>
    );
  }
}

export default Art;
