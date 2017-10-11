import * as actions from './../actions/app.js';
import {
  handleActions
} from 'redux-actions';
import Calculation from './../models/app'

const reducer = handleActions({
  [actions.addTax](state, action) {
    return state.addTax(state, action.payload);
  },
  [actions.dollar](state, action) {
    return state.dollar(state, action.payload);
  },
  [actions.euclid](state, action) {
    return state.euclid(state, action.payload);
  },
  [actions.primes](state, action) {
    return state.primes(state, action.payload);
  }
}, new Calculation());

export default reducer;
