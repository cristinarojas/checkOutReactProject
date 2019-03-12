// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Header.scss';
import logo from '@images/logo.jpg';

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <Fragment>
        <nav className={styles.menu}>
          <img className={styles.logo} src={logo} alt="Cristina Rojas" />
          <p className={styles.agencyName}>
            <a href="#">
              <span>Check Out React Project</span>
               easy payment
            </a>
          </p>
        </nav>
      </Fragment>
    </header>
  );
}

export default Header;
