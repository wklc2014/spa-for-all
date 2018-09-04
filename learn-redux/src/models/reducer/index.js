import { combineReducers } from 'redux';

import _login from './_login.js'
import _news from './_news.js'
import _count from './_count.js'

//合并 reducer
const rootRedux = combineReducers({
  _login,
  _news,
  _count,
})

export default rootRedux;
