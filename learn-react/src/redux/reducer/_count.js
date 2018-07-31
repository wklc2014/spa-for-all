import actionType from '../actionType/index.js';
import _count from '../initstate/_count.js';

export default function(state = _count, action) {
  const { type, payload } = action;
  switch (type) {
    case actionType.COUNT_ADD:
      return {...state, amount: state.amount + 1};
    case actionType.COUNT_REDUCE:
      return {...state, amount: state.amount - 1};
    default:
      return state;
  }
}
