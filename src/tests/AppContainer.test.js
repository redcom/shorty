import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from '../containers';
import configureStore from '../store';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppContainer store={configureStore()} />, div);
});
