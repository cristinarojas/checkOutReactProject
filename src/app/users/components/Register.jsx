// Dependencies
import React, { Fragment, Component } from 'react';

// Styles
import styles from './Register.scss';

// Component
import Payment from '@app/payment/components/Payment';

class Register extends Component  {
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
    const { submitUserData } = this.props;

    submitUserData({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    });

    this.setState({
      signUp: !this.state.signUp,
      payment: !this.state.payment
    });
    event.preventDefault();
  }

  render() {
    console.log('USERS DENTRO DE REGISTER===', this.props.users);
    return (
      <section className={styles.containerForm}>
        <Fragment>
          <div className={styles.theForm}>
            <p
              className={this.state.signUp ? `${styles.signUp} ${styles.active}` : `${styles.signUp} ${styles.inactive}` }
            >Sign Up</p>
            <p
              className={this.state.payment ? `${styles.payment} ${styles.active}` : `${styles.payment} ${styles.inactive}` }
              >Payment</p>
            {
              this.state.signUp ?
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
                  value="Continue"
                  className={styles.save} />
              </form>
              :
              <Payment />
            }
            <p className={styles.policy}><a href="#">Privacy Policy</a></p>
          </div>
        </Fragment>
      </section>
    );
  }
}

export default Register;
