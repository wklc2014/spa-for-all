import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import actionType from '../actionType/index.js';
import dispatcher from '../dispatcher/index.js';
import _count from '../initstate/_count.js';

class Store extends ReduceStore {

  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Immutable.Map(_count);
  }

  reduce(state, action) {
    switch (action.type) {
      case actionType.COUNT_ADD:
        return state.update('amount', (val) => val + 1);

      case actionType.COUNT_REDUCE:
        return state.update('amount', (val) => val - 1);

      default:
        return state;
    }
  }
}

export default new Store();
