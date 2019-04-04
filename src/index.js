// Dependencies
import React from 'react';
import { render } from 'react-dom';

// Wrapper for the app to insert the store to the app.
import { Provider } from 'react-redux';
// Redux store.
import configureStore from './shared/redux/configureStore';

// Components
import App from './app/App';

// Configuring Redux store
const store = configureStore(window.initialState);

// DOM
const rootElement = document.getElementById('root');

// App wrapper.
const renderApp = Component => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootElement
  );
};

// Rendering our App.
renderApp(App);
