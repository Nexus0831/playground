import {
  Record,
  List
} from 'immutable';

const Result = Record({
  price: '',
  doll: '',
  divisors: {gcd: '', lcd: ''},
  primeNumbers: List([]).toArray()
});

class Calculation extends Result {
  addTax(state, payload) {
    const newState = state.update('price',
      () => {
        return payload.price;
      });

    return newState;
  }

  dollar(state, payload) {
    const newState = state.update('doll',
      () => {
        return payload.doll;
      });

    return newState;
  }

  euclid(state, payload) {
    const newState = state.update('divisors',
      () => {
        return payload.divisors;
      });
    return newState;
  }

  primes(state, payload) {
    const newState = state.update('primeNumbers',
      () => {
        return payload.primeNumbers;
      });
    return newState;
  }
}

export default Calculation;
