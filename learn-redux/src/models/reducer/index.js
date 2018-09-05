import { combineReducers } from 'redux-immutable';

import login from './login_reducer.js'
import news from './news_reducer.js'
import count from './count_reducer.js'

//合并 reducer
const rootRedux = combineReducers({
  login,
  news,
  count,
})

export default rootRedux;
