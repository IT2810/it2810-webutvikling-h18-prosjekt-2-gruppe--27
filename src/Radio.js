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
    this.handleSubmit = this.handleSubmit.bind(this);
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


  //when submitted
  handleSubmit(event) {
    event.preventDefault();
    alert(`You chose the something genre.`);
  }


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div id="sound" className={"sound"}>
          <label>
            <input
              name={"sound"}
              type="radio"
              value="rock"
              checked={this.state.sgenre === "rock"}
              onChange={this.handleChanges}
            />
            rock
          </label>

          <label>
            <input
              name={"sound"}
              type="radio"
              value="dubstep"
              checked={this.state.sgenre === "dubstep"}
              onChange={this.handleChanges}
            />
            dubstep
          </label>

          <label>
            <input
              name={"sound"}
              type="radio"
              value="classical"
              checked={this.state.sgenre === "classical"}
              onChange={this.handleChanges}
            />
            classical
          </label>
        </div>


        <div id="picture" className={"picture"}>
          <label>
            <input
              name={"picture"}
              type="radio"
              value="squares"
              checked={this.state.pgenre === "squares"}
              onChange={this.handleChangep}
            />
            squares
          </label>

          <label>
            <input
              name={"picture"}
              type="radio"
              value="stars"
              checked={this.state.pgenre === "stars"}
              onChange={this.handleChangep}
            />
            stars
          </label>

          <label>
            <input
              name={"picture"}
              type="radio"
              value="hearts"
              checked={this.state.pgenre === "hearts"}
              onChange={this.handleChangep}
            />
            hearts
          </label>
        </div>



        <div id="text" className={"text"}>
          <label>
            <input
              name={"text"}
              type="radio"
              value="squares"
              checked={this.state.tgenre === "squares"}
              onChange={this.handleChanget}
            />
            squares
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



        <button type="submit" className="submit-button">Generate art</button>
        </form>

    );
  }
}

export default Radio;

//kilde: https://magnusbenoni.com/radio-buttons-react/