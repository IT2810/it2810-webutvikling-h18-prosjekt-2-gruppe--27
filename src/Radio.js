import React, { Component } from 'react';

class Radio extends Component {
  constructor() {
    super();
    this.state = {
      sgenre: '',
      pgenre: '',
      tgenre: ''
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleChangep = this.handleChangep.bind(this);
    this.handleChanget = this.handleChanget.bind(this);
  }

  //when a radiobutton is clicked
  handleChanges(event) {
    this.setState({
      sgenre: event.target.value,
    });
  }

  handleChangep(event) {
    this.setState({
      pgenre: event.target.value,
    });
  }

  handleChanget(event) {
    this.setState({
      tgenre: event.target.value,
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div id="sound" className={"sound"}>
          <label>
            <input
              name={"sound"}
              type="radio"
              value="animal"
              checked={this.state.sgenre === "animal"}
              onChange={this.handleChanges}
            />
            animal
          </label>

          <label>
            <input
              name={"sound"}
              type="radio"
              value="nature"
              checked={this.state.sgenre === "nature"}
              onChange={this.handleChanges}
            />
            nature
          </label>

          <label>
            <input
              name={"sound"}
              type="radio"
              value="instrument"
              checked={this.state.sgenre === "instrument"}
              onChange={this.handleChanges}
            />
            instrument
          </label>
        </div>


        <div id="picture" className={"picture"}>
          <label>
            <input
              name={"picture"}
              type="radio"
              value="food"
              checked={this.state.pgenre === "food"}
              onChange={this.handleChangep}
            />
            food
          </label>

          <label>
            <input
              name={"picture"}
              type="radio"
              value="instrument"
              checked={this.state.pgenre === "instrument"}
              onChange={this.handleChangep}
            />
            instrument
          </label>

          <label>
            <input
              name={"picture"}
              type="radio"
              value="party"
              checked={this.state.pgenre === "party"}
              onChange={this.handleChangep}
            />
            party
          </label>
        </div>



        <div id="text" className={"text"}>
          <label>
            <input
              name={"text"}
              type="radio"
              value="poems"
              checked={this.state.tgenre === "poems"}
              onChange={this.handleChanget}
            />
            poems
          </label>

          <label>
            <input
              name={"text"}
              type="radio"
              value="stars"
              checked={this.state.tgenre === "stars"}
              onChange={this.handleChanget}
            />
            stars
          </label>

          <label>
            <input
              name={"text"}
              type="radio"
              value="hearts"
              checked={this.state.tgenre === "hearts"}
              onChange={this.handleChanget}
            />
            hearts
          </label>
        </div>
      </form>

    );
  }
}

export default Radio;

//kilde: https://magnusbenoni.com/radio-buttons-react/