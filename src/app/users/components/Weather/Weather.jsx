// Dependencies
import React, { Component } from 'react';

// Styles
import styles from './Weather.scss';

class Weather extends Component {
  constructor() {
    super(); // I can use this.props in the constructor
  }

  // Render Method
  render() {
    return(
      <>
        <div className={styles.weatherContainer}>
          <h1>Insert the city</h1>

          <form>
            <input type="text" id="city" className={styles.city} />
            <input type="submit" value="Search" id="submitCity" className={styles.submitCity} />
          </form>


        </div>
      </>
    );
  }
}

export default Weather;
