// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Shared Components
import Header from '@layout/Header/Header';
import Form from '@layout/userForm/userForm';

// Styles
import styles from './App.scss';

// Main layout
const App = props => (
  <div className={styles.container}>
    {/* This Helmet will help us to manage the SEO on internet */}
    <Helmet
      title="Cristina Rojas"
      meta={[
        {
          name: 'title',
          content: 'Cristina Rojas'
        },
        {
          name: 'description',
          content: 'Check Out React Project - Cristina Elizabeth Rojas Zamora'
        }
      ]}
    />

    <Header />
    <Form />
  </div>
);

export default App;
