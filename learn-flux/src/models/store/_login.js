import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import actionType from '../actionType/index.js';
import dispatcher from '../dispatcher/index.js';
import _login from '../initstate/_login.js';

class Store extends ReduceStore {

  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Immutable.Map(_login);
  }

  reduce(state, action) {
    switch (action.type) {
      case actionType.LOGIN:
        window.sessionStorage.setItem('isLogin', 'yes');
        return state.update('isLogin', () => 'yes');

      case actionType.LOGOUT:
        window.sessionStorage.setItem('isLogin', 'no');
        return state.update((val) => {
          return val.set('isLogin', 'no')
            .set('username', '')
            .set('password', '')
        });

      case actionType.LOGIN_UPDATE:
        return state.update((val) => {
          return val.set(action.payload.id, action.payload.value);
        });

      default:
        return state;
    }
  }
}

export default new Store();
