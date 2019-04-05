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
      <Weather propOne="" propTwo="" title="Here the data that I want to send inside to this component tags html will use this data" />
    </>
  );
};

export default Layout;
