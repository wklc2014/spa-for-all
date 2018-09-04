import actionType from '../actionType/index.js';

export function onLogin() {
  return {
    type: actionType.LOGIN,
  }
}

export function onLogout() {
  return {
    type: actionType.LOGOUT,
  }
}

export function onUpdate({ id, value }) {
  return {
    type: actionType.LOGIN_UPDATE,
    payload: { [id]: value },
  }
}

