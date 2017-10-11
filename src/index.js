/*
  Playground R'lyeh
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import 'react-hot-loader/patch';
import {
  Provider
} from 'react-redux';
import {
  render
} from 'react-dom';

ReactDOM.render(
  <Provider
    store={store}
  >
    <App />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept(App, () => { render(<App />); });
}
registerServiceWorker();
