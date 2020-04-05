import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { combinedReducers } from './store/store';
import createSagaMiddleware from 'redux-saga';
import listPageServices from './pages/ListPage/store/services';
import detailPageServices from './pages/DetailPage/store/services';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducers, applyMiddleware(sagaMiddleware));

function startServices() {
  sagaMiddleware.run(listPageServices);
  sagaMiddleware.run(detailPageServices);
}
startServices();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
