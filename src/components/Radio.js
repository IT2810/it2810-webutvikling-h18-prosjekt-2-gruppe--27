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
        <form onSubmit={this.handleSubmit}>
          <div id="picture" className={"image"}>
            <p>Image genre:</p>
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
          <br/>
          <div id="text" className={"text"}>
            <p>Text genre:</p>
            <label>
              <input
                name={"text"}
                type="radio"
                value="dog"
                onChange={this.handleChange}
              />
              dog
            </label>
            <label>
              <input
                name={"text"}
                type="radio"
                value="internet"
                onChange={this.handleChange}
              />
              internet
            </label>

            <label>
              <input
                name={"text"}
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
        </form>
      </div>
    );
  }
}

export default Radio;

//kilde: https://magnusbenoni.com/radio-buttons-react/