import actions from '../actions/index.js';
import init_news from '../initstate/init_news.js';

export default function(state = init_news, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.SORT_REVERSE:
      return {...state, list: list.reverse()};
    default:
      return state;
  }
}
