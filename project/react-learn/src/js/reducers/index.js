'use strict';

/* app/reducers/index.js */
 
import { combineReducers } from 'redux';
import counter from './counter_reducer.js';
// import filter from './filter';
 
export default combineReducers({
  counter,
  // filter
});
 
