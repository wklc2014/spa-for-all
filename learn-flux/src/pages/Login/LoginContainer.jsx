import { Container } from 'flux/utils';
import Login from './Login.jsx';
import loginStore from '../../models/store/_login.js';
import loginAction from '../../models/action/_login.js';

function getStores() {
  return [
    loginStore,
  ];
}

function getState() {
  const loginState = loginStore.getState();

  return {
    isLogin: loginState.get('isLogin'),
    username: loginState.get('username'),
    password: loginState.get('password'),
    onLogin: loginAction.onLogin,
    onLogout: loginAction.onLogout,
    onUpdate: loginAction.onUpdate,
  };
}

const LoginContainer = Container.createFunctional(Login, getStores, getState);

export default LoginContainer;

