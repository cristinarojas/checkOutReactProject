// Dependencies
import React, { Fragment, Component } from 'react';

// Styles
import styles from './userForm.scss';

class userForm extends Component  {
  render() {
    return (
      <section className={styles.containerForm}>
        <Fragment>
          <div className={styles.userForm}>
            <p className={styles.signIn}>Sign In</p>
            <p className={styles.signUp}>Sign Up</p>

            <form className={styles.form}>
              <input
                name='name'
                className={styles.data}
                placeholder="Name" />

              <input
                name='email'
                className={styles.data}
                placeholder="Email" />

                <input
                  name='password'
                  className={styles.data}
                  placeholder="Password" />

              <input
                type="submit"
                value="Submit"
                className={styles.save} />
            </form>

            <p className={styles.policy}><a href="#">Privacy Policy</a></p>
          </div>
        </Fragment>
      </section>
    );
  }
}

export default userForm;
