// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Header.scss';
import logo from '@images/logo.png';
import iconmap from '@images/iconmap.png';

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <Fragment>
        <nav className={styles.menu}>
          <img className={styles.logo} src={logo} alt="Asana Pet Adoption" />
          <p className={styles.agencyName}>
            <a href="#">
              <span>Asana</span>
               pet adoption agency
            </a>
          </p>
          <p className={styles.contactus}>
            Contact Us: (800)-555-43-21
            <a href="#">
              <img src={iconmap} alt="Location"/>
            </a>
          </p>
        </nav>
      </Fragment>
    </header>
  );
}

export default Header;
