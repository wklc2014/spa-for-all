import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';

import actionType from '../actionType/index.js';
import dispatcher from '../dispatcher/index.js';
import _news from '../initstate/_news.js';

class Store extends ReduceStore {

  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return Immutable.Map(_news);
  }

  reduce(state, action) {
    switch (action.type) {

      default:
        return state;
    }
  }
}

export default new Store();
