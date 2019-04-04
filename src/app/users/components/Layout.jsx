import React from 'react';

import Header from '@layout/Header/Header';
import Users from './Users';
import Register from './Register';
import Weather from './Weather/Weather';

/*
<Users {...props} />
<Register users={props.users} />
*/

const Layout = props => {
  return (
    <>
      <Header />
      <Weather />
    </>
  );
};

export default Layout;
