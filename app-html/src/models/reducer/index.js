import { combineReducers } from 'redux';

import business from './business_reducer.js';
import news from './news_reducer.js';

//合并 reducer
const rootRedux = combineReducers({
  business,
  news,
})

export default rootRedux;
