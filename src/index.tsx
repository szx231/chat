import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/home';
import { store } from './api';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
