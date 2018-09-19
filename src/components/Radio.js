import React, {Component} from 'react';

class Radio extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onCategoryChange({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <div className={this.props.className}>
        <form>
          <h2>Categories</h2>
          <h3>Image genre</h3>
          <p id="imageLabel">Image:</p>
          <div id="image">
            <label>
              <input
                name={"images"}
                type="radio"
                value="food"
                onChange={this.handleChange}
              />
              Food
            </label>
            <label>
              <input
                name={"images"}
                type="radio"
                value="instrument"
                onChange={this.handleChange}
              />
              Instrument
            </label>
            <label>
              <input
                name={"images"}
                type="radio"
                value="party"
                onChange={this.handleChange}
              />
              Party
            </label>
          </div>

          <h3>Text genre</h3>
          <p id="textLabel">Text:</p>
          <div id="text">
            <label>
              <input
                name={"texts"}
                type="radio"
                value="dog"
                onChange={this.handleChange}
              />
              Dog
            </label>
            <label>
              <input
                name={"texts"}
                type="radio"
                value="internet"
                onChange={this.handleChange}
              />
              Internet
            </label>
            <label>
              <input
                name={"texts"}
                type="radio"
                value="music"
                onChange={this.handleChange}
              />
              Music
            </label>
          </div>

          <h3>Sound genre</h3>
          <p id="soundLabel">Sound:</p>
          <div id="sound">
            <label>
              <input
                name={"sounds"}
                type="radio"
                value="animal"
                onChange={this.handleChange}
              />
              Animal
            </label>

            <label>
              <input
                name={"sounds"}
                type="radio"
                value="nature"
                onChange={this.handleChange}
              />
              Nature
            </label>

            <label>
              <input
                name={"sounds"}
                type="radio"
                value="instrument"
                onChange={this.handleChange}
              />
              Instrument
            </label>
          </div>
        </form>
      </div>
    );

  }
}

export default Radio;

//kilde: https://magnusbenoni.com/radio-buttons-react/