import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './containers/App/App';
import reportWebVitals from './reportWebVitals';
import store from "./store";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './doc/styles/default-css.css';
import './doc/styles/typography.css';
import './doc/styles/styles.css';
import './doc/styles/responsive.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
