import { combineReducers, createStore } from 'redux';

import reducer_login from './reducer_login.js'
import reducer_news from './reducer_news.js'

//合并reducer
const rootRedux = combineReducers({
  login: reducer_login,
  news: reducer_news,
})

const store = createStore(rootRedux);

export default store;
