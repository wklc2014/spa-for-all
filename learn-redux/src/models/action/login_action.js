import actionType from '../actionType/index.js';

const login = () => {
  return {
    type: actionType.LOGIN,
  }
}

const logout = () => {
  return {
    type: actionType.LOGOUT,
  }
}

const update = ({ id, value }) => {
  return {
    type: actionType.LOGIN_UPDATE,
    payload: { [id]: value },
  }
}

export default {
  login,
  logout,
  update,
}

