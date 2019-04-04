// Dependencies
import React, { Component } from 'react';

// Styles
import styles from './Payment.scss';

// Images
import cards from './visa.png';

class Payment extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      password: '',
      signUp: true,
      payment: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === "name") {
      this.setState({
        name: event.target.value
      });
    } else if (event.target.id === "email") {
      this.setState({
        email: event.target.value
      });
    } else {
      this.setState({
        password: event.target.value
      });
    }
  }

  handleSubmit(event) {
    console.log('submited', this.state);
    this.setState({
      signUp: !this.state.signUp,
      payment: !this.state.payment
    });
    event.preventDefault();
  }

  render() {
    return(
      <>
        <img src={cards} alt="accepted cards" className={styles.cards} />
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <input
            id='name'
            name='name'
            className={styles.data}
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
           />

          <input
            id="email"
            name='email'
            className={styles.data}
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />

            <input
              id="password"
              name='password'
              className={styles.data}
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />

          <input
            type="submit"
            value="Submit"
            className={styles.save} />
        </form>

      </>
    );
  }
}

export default Payment;
