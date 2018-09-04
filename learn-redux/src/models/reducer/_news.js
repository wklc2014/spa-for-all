import actionType from '../actionType/index.js';
import _news from '../initstate/_news.js';

export default function(state = _news, action) {
  const { type, payload } = action;
  switch (type) {
    case actionType.SORT_REVERSE:
      return {...state, list: list.reverse()};
    default:
      return state;
  }
}
