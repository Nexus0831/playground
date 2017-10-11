import {
  createStore,
  applyMiddleware
} from 'redux';

import promiseMiddleware from 'redux-promise';

import thunk from 'redux-thunk';

import reducer from './../reducers/app.js';

// const initialState = {
//   app: ''
// }

const middleWare = [
  promiseMiddleware,
  thunk
];

const store = createStore(
  reducer,
  applyMiddleware(...middleWare)
 );

export default store;
