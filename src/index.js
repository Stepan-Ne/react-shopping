import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
//import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import createstore from './store';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const store = createstore(); // store is object

// setTimeout(() => {
//     store.dispatch({
//         type: 'SET_BOOKS',
//         payload: [{
//         id: 12,
//         title: 'Anna Karenina'
//     }]
//     })
// }, 1000)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
