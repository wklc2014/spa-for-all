import { createReducer } from 'redux-create-reducer';

import actionType from '../actionType/index.js';
import count_init from '../initstate/count_init.js';

const countAdd = (state, { payload }) => {
  return state.update('amount', (v) => v + payload);
}

const countReduce = (state, { payload }) => {
  return state.update('amount', (v) => v - payload);
}

const pageLoading = (state, { payload }) => {
  return state.update('loading', (v) => !v);
}

const showCitys = (state, { payload }) => {
  return state.set('citys', payload);
}

const reducers = createReducer(count_init, {
  [actionType.COUNT_ADD]: countAdd,
  [actionType.COUNT_REDUCE]: countReduce,
  [actionType.LOADING]: pageLoading,
  [actionType.SHOW_CITYS]: showCitys,
});

export default reducers;

