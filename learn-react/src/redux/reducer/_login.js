import actionType from '../actionType/index.js';
import _login from '../initstate/_login.js';

export default function(state = _login, action) {
  const { type, payload } = action;
  switch (type) {
    case actionType.LOGIN:
      window.sessionStorage.setItem('isLogin', true);
      return {...state, isLogin: true};
    case actionType.LOGOUT:
      window.sessionStorage.setItem('isLogin', false);
      return {...state,
        isLogin: false,
        username: '',
        password: '',
      };
    case actionType.LOGIN_UPDATE:
      return {...state, ...payload};
    default:
      return state;
  }
}
