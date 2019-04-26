import actionType from '../actionType/index.js';
import dispatcher from '../dispatcher/index.js';

const Actions = {
  onAdd: function() {
    dispatcher.dispatch({
      type: actionType.COUNT_ADD,
    });
  },
  onReduce: function() {
    dispatcher.dispatch({
      type: actionType.COUNT_REDUCE,
    });
  },
};

export default Actions;
