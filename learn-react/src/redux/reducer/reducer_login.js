import actions from '../actions/index.js';
import init_login from '../initstate/init_login.js';

export default function(state = init_login, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.LOGIN:
      window.sessionStorage.setItem('isLogin', true);
      return {...state, isLogin: true};
    case actions.LOGOUT:
      window.sessionStorage.setItem('isLogin', false);
      return {...state,
        isLogin: false,
        username: '',
        password: '',
      };
    case actions.LOGIN_UPDATE:
      return {...state, ...payload};
    default:
      return state;
  }
}
