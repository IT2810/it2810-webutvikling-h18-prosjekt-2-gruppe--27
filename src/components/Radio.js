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
      <div className={this.props.className}>
        <form>
          <div id="picture" className={"image"}>
            <p>Image genre:</p>
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
          <br/>
          <div id="text" className={"text"}>
            <p>Text genre:</p>
            <label>
              <input
                name={"texts"}
                type="radio"
                value="dog"
                onChange={this.handleChange}
              />
              dog
            </label>
            <label>
              <input
                name={"texts"}
                type="radio"
                value="internet"
                onChange={this.handleChange}
              />
              internet
            </label>

            <label>
              <input
                name={"texts"}
                type="radio"
                value="music"
                onChange={this.handleChange}
              />
              music
            </label>
          </div>
          <br/>
          <div id="sound" className={"sound"}>
            <p>Sound genre:</p>
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
        </form>
      </div>
    );
  }
}

export default Radio;

//kilde: https://magnusbenoni.com/radio-buttons-react/