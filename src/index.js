import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
// import store from './redux/store';
// import { myAction, myActionTwo } from './redux/actions';
import 'modern-normalize/modern-normalize.css';
import './styles/base.scss';

// store.dispatch(myAction(5));
// store.dispatch(myAction(10));
// store.dispatch(myActionTwo);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
