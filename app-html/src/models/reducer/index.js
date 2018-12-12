import { combineReducers } from 'redux';

import business from './business_reducer.js'
import project from './project_reducer.js'

//合并 reducer
const rootRedux = combineReducers({
  business,
  project,
})

export default rootRedux;
