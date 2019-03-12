// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Content.scss';

const Content = () => {
  return (
    <section className={styles.contentText}>
      <Fragment>
        <div className={styles.heroText}>
          <div className={styles.text}>
            <p>Pay here</p>
          </div>
        </div>
      </Fragment>
    </section>
  );
}

export default Content;
