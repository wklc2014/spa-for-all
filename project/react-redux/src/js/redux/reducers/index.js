'use strict';

import { combineReducers } from 'redux';
import counter from './counter_reducer.js';
import number from './number_reducer.js';
import first from './first_reducer.js';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counter,
  a: number,
  list: first
})

export default rootReducer;
