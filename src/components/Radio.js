import React, { Component } from 'react';

class Radio extends Component {
  constructor() {
    super();
    this.state = {
      sgenre: '',
      pgenre: '',
      tgenre: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log(event.target.value);
    console.log(event.target.name);
    console.log({[event.target.name]: event.target.value});
    // x = {a: 1, b: 2}
    // y = "a"
    // x[y] = 4
    // x.a = 4
    this.props.onCategoryChange({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className={this.props.className}>
        <div id="sound" className={"sound"}>
          <label>
            <input
              name={"sound"}
              type="radio"
              value="animal"
              onChange={this.handleChange}
            />
            animal
          </label>

          <label>
            <input
              name={"sound"}
              type="radio"
              value="nature"
              onChange={this.handleChange}
            />
            nature
          </label>

          <label>
            <input
              name={"sound"}
              type="radio"
              value="instrument"
              onChange={this.handleChange}
            />
            instrument
          </label>
        </div>


        <div id="picture" className={"image"}>
          <label>
            <input
              name={"image"}
              type="radio"
              value="food"
              onChange={this.handleChange}
            />
            food
          </label>

          <label>
            <input
              name={"image"}
              type="radio"
              value="instrument"
              onChange={this.handleChange}
            />
            instrument
          </label>

          <label>
            <input
              name={"image"}
              type="radio"
              value="party"
              onChange={this.handleChange}
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
              onChange={this.handleChange}
            />
            poems
          </label>

          <label>
            <input
              name={"text"}
              type="radio"
              value="stars"
              onChange={this.handleChange}
            />
            stars
          </label>

          <label>
            <input
              name={"text"}
              type="radio"
              value="hearts"
              onChange={this.handleChange}
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