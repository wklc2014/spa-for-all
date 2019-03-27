import { Container } from 'flux/utils';
import Home from './Home.jsx';
import loginStore from '../../models/store/_login.js';
import countStore from '../../models/store/_count.js';
import countAction from '../../models/action/_count.js';

function getStores() {
  return [
    loginStore,
    countStore,
  ];
}

function getState() {
  const loginState = loginStore.getState();
  const countState = countStore.getState();

  return {
    isLogin: loginState.get('isLogin'),
    amount: countState.get('amount'),
    onAdd: countAction.onAdd,
    onReduce: countAction.onReduce,
  };
}

const HomeContainer = Container.createFunctional(Home, getStores, getState);

export default HomeContainer;
