import actions from '../actions/index.js';
import init_login from '../initstate/init_login.js';

export default function(state = init_login, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.LOGIN:
      return {...state, isLogin: true};
    case actions.LOGOUT:
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
