import {
  createAction
} from 'redux-actions';

import * as apis from './api/math';

import * as actionsName from './actionNames/app';

export const addTax = createAction(
  actionsName.ADD_TAX,
  async (price) => {
    const payload = {};

    try {
      const result = Math.round(price * 1.08);
      payload.price = result + "円";
      return payload;
    } catch (e) {
      return payload;
    }
  }
);

export const dollar = createAction(
  actionsName.DOLLAR,
  async (yen) => {
    const payload = {};

    try {
      const result = Math.floor((yen / 112.6) * Math.pow(10, 2)) / Math.pow(10, 2);
      payload.doll = result + "$";
      return payload;
    } catch(e) {
      return payload;
    }
  }
);

export const euclid = createAction(
  actionsName.EUCLID,
  async (a, b) => {
    const payload = {};

    try {
      const gcd = await apis.gcdMath(a, b);
      const lcd = (a * b) / gcd;
      payload.divisors = {gcd: gcd, lcd: lcd};
      return payload;
    } catch(e) {
      return payload;
    }
  }
);

export const primes = createAction(
  actionsName.PRIME_NUMBER,
  async (limitNumber) => {
    const payload = {};

    try {
      const result = await apis.primesMath(limitNumber);
      payload.primeNumbers = result;
      return payload;
    } catch(e) {
      return payload;
    }
  }
);

// export const articleReadAll = createAction(
//   actionsName.ARTICLE_READ_ALL,
//   async () => {
//     const payload = {};
//
//     try {
//       const result = await asyncReadAll();
//       payload.datas = result;
//       return payload;
//     } catch (e) {
//       return payload;
//     }
//   }
// );
