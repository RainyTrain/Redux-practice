import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './redux/RootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
