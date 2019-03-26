import actionType from '../actionType/index.js';
import dispatcher from '../dispatcher/index.js';

const Actions = {
  onLogin() {
    dispatcher.dispatch({
      type: actionType.LOGIN,
    });
  },
  onLogout() {
    dispatcher.dispatch({
      type: actionType.LOGOUT,
    });
  },
  onUpdate({ id, value }) {
    dispatcher.dispatch({
      type: actionType.LOGIN_UPDATE,
      payload: { id, value },
    });
  },
};

export default Actions;
