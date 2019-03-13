// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Header.scss';

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <Fragment>
        <span className={styles.register}>Cristina Elizabeth Rojas Zamora</span>
      </Fragment>
    </header>
  );
}

export default Header;
