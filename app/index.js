import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { App } from './components';
import store from './redux/store';

const snifr = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default snifr;

AppRegistry.registerComponent('snifr', () => snifr);
