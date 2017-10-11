import app from './app.js';

import {
  combineReducers
} from 'redux';

import {
  reducer as formReducer
} from 'redux-form';


export default combineReducers({
  form: formReducer,
  app
});
