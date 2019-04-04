// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Header.scss';

// Images
import idea from './smartphone.svg';

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <Fragment>
        <img src={idea} alt="Idea" className={styles.icon}/>
        <span className={styles.register}>Simplified Check Out</span>
      </Fragment>
    </header>
  );
}

export default Header;
