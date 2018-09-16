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
      <div className={this.props.className}>
        <form onSubmit={this.handleSubmit}>
          <div id="picture" className={"image"}>
            <h3>Image genre</h3>
            <label>
              <input
                name={"image"}
                type="radio"
                value="food"
                onChange={this.handleChange}
              />
              Food
            </label>

              <label>
                <input
                  name={"image"}
                  type="radio"
                  value="instrument"
                  onChange={this.handleChange}
                />
                Instrument
              </label>

              <label>
                <input
                  name={"image"}
                  type="radio"
                  value="party"
                  onChange={this.handleChange}
                />
                Party
              </label>
            </div>
            <br/>

            <div id="text" className={"text"}>
              <h3>Text genre</h3>
              <label>
                <input
                  name={"text"}
                  type="radio"
                  value="dog"
                  onChange={this.handleChange}
                />
                Dog
              </label>
              <label>
                <input
                  name={"text"}
                  type="radio"
                  value="internet"
                  onChange={this.handleChange}
                />
                Internet
              </label>

              <label>
                <input
                  name={"text"}
                  type="radio"
                  value="music"
                  onChange={this.handleChange}
                />
                Music
              </label>
            </div>
            <br/>
            <div id="sound" className={"sound"}>
              <h3>Sound genre</h3>
              <label>
                <input
                  name={"sound"}
                  type="radio"
                  value="animal"
                  onChange={this.handleChange}
                />
                Animal
              </label>

              <label>
                <input
                  name={"sound"}
                  type="radio"
                  value="nature"
                  onChange={this.handleChange}
                />
                Nature
              </label>

              <label>
                <input
                  name={"sound"}
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