import React, { Component } from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.onCategoryChange({[event.target.name]: event.target.value});
  }

  render() {
    return(
      <form className={this.props.className}>
        <div id="sound" className={"sound"}>
          sound
          <label>
            <input
              name={"sounds"}
              type="radio"
              value="animal"
              onChange={this.handleChange}
            />
            animal
          </label>

          <label>
            <input
              name={"sounds"}
              type="radio"
              value="nature"
              onChange={this.handleChange}
            />
            nature
          </label>

          <label>
            <input
              name={"sounds"}
              type="radio"
              value="instrument"
              onChange={this.handleChange}
            />
            instrument
          </label>
        </div>


        <div id="picture" className={"image"}>
          picture
          <label>
            <input
              name={"images"}
              type="radio"
              value="food"
              onChange={this.handleChange}
            />
            food
          </label>

          <label>
            <input
              name={"images"}
              type="radio"
              value="instrument"
              onChange={this.handleChange}
            />
            instrument
          </label>

          <label>
            <input
              name={"images"}
              type="radio"
              value="party"
              onChange={this.handleChange}
            />
            party
          </label>
        </div>



        <div id="text" className={"text"}>
          text
          <label>
            <input
              name={"texts"}
              type="radio"
              value="poems"
              onChange={this.handleChange}
            />
            poems
          </label>

          <label>
            <input
              name={"texts"}
              type="radio"
              value="stars"
              onChange={this.handleChange}
            />
            stars
          </label>

          <label>
            <input
              name={"texts"}
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