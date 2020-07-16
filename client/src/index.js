import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './Css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store.js';


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
