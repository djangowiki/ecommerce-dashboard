// Modules.
import React from 'react';
import ReactDOM from 'react-dom';
// Custom Modules.
import Routes from './routes';

// Styles.
import './App.css';
import './seller/css/styles.css';

// Redux
import { Provider } from 'react-redux';
import store from './seller/store';
// require('dotenv').config();

// console.log(process.env.REACT_APP_API_URL);

// Render.
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,

  document.getElementById('root')
);
