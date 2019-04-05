// Dependencies
import React, { Component, Fragment } from 'react';
import { string } from 'prop-types';

// Styles
import styles from './Weather.scss';

class Weather extends Component {
  constructor(props) { // If I want to use the prop object of this component I need to passing as a parameter.
    super(props); // If I want to use the prop object of this component I need to use super(props)

    console.log('1 this.props->', this.props);
    this.state = {
      results: false,
      city: ''
    };

    // Binding methods
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // object where you need to define the types of props you will pass.
  static propTypes = {
    title: string.isRequired // if I don't sendint nothing in this component <Weather /> I will have this The prop `title` is marked as required in `Weather`, but its value is `undefined`
  };  // I need to do this in the component <Weather title="data here" />

  // Using this method way
  // we need to bind the method in the constructor
  handleSubmit(e) {
    e.preventDefault();
    const { city } = this.state;
    const apiKey = '6844b24412a14adf733d233afead26d8';
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log('result', result);
      });

  }

  // We could use arrow functions
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // Render Method
  render() {
    // obtaining title from this.props.
    const { // Im using destructuring to obtain title prop from the prop object of this component.
      title = 'Example of propTypes 1' // be default this title If im not passing nothing where I call this component <Weather title="passing data here" />
    } = this.props; // this is the prop object of this componet that will save all the data that we are receiving in <Weather title="" />

    console.log('1.- this.props-->', this.props);

    return(
      <>
        <div className={styles.weatherContainer}>
          <h2>{title}</h2>
          <h1>Insert the city</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="city"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              className={styles.city} />
            <input type="submit" value="Search" id="submitCity" className={styles.submitCity} />
          </form>

          <section className={styles.weatherInfo}>
            <p>Searched results</p>
            {
              this.state.results ?
              <>
                <h2>Name of the city:</h2>
                <p>Temperature:</p>
              </>
              :
                ''
            }
          </section>
        </div>
      </>
    );
  }
}

export default Weather;
