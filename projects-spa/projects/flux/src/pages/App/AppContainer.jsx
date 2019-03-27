import { Container } from 'flux/utils';
import { withRouter } from 'react-router';
import App from './App.jsx';
import loginStore from '../../models/store/_login.js';

function getStores() {
  return [
    loginStore,
  ];
}

function getState() {
  const loginState = loginStore.getState();

  return {
    isLogin: loginState.get('isLogin'),
  };
}

const AppContainer = Container.createFunctional(App, getStores, getState);

export default withRouter(AppContainer);
