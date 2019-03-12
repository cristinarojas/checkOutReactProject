// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Shared Components
import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';
import Content from '@layout/Content/Content';

// Main layout
const App = props => (
  <div>
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
    <Content />
    <Footer />
  </div>
);

export default App;
