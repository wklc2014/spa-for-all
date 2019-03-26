import { createReducer } from 'redux-create-reducer';

import actionType from '../actionType/index.js';
import login_init from '../initstate/login_init.js';

const login = (state, { payload }) => {
  window.sessionStorage.setItem('isLogin', 'yes');
  return state.set('isLogin', 'yes');
}

const logout = (state, { payload }) => {
  window.sessionStorage.setItem('isLogin', 'no');
  return state.update(_state => {
    return _state.set('isLogin', 'no')
      .set('username', '')
      .set('password', '')
  });
}

const update = (state, { payload }) => {
  return state.merge(payload)
}


const reducers = createReducer(login_init, {
  [actionType.LOGIN]: login,
  [actionType.LOGOUT]: logout,
  [actionType.LOGIN_UPDATE]: update,
});

export default reducers;