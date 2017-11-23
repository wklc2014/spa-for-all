import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './reducer_counter.js';

// 使用 redux 的 combineReducers 方法
// 将所有 reducer 打包起来
const rootReducer = combineReducers({
    routing,
    counter,
});

export default rootReducer;