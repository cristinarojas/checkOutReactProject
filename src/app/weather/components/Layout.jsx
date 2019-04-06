// ESTE LAYOUT INCLUYE EL REDUX STORE Y ACTIONS CREATORS
// EN SU THIS.PROPS
import React from 'react';
import Header from '@layout/Header/Header';
import Weather from './Weather/Weather';

/*
<Users {...props} />
<Register users={props.users} />
*/

const Layout = props => {
  console.log('3 LAYOUT props--->', props);
  return (
    <>
      <Header />
      <Weather {...props} propOne="" propTwo="" title="Here the data that I want to send inside to this component tags html will use this data" />
    </>
  );
};

export default Layout;
