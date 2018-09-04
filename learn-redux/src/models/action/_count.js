import actionType from '../actionType/index.js';
import * as CountServices from '../service/_count.js';

export function onAdd() {
  return {
    type: actionType.COUNT_ADD,
  }
}

export function onReduce() {
  return {
    type: actionType.COUNT_REDUCE,
  }
}

export function onLoad() {
  return (dispatch, getState) => {
    dispatch({ type: actionType.LOADING });
    CountServices.getAllCitys()
      .then((resp) => {
        dispatch({
          type: actionType.SHOW_CITYS,
          payload: resp.data,
        })
        dispatch({ type: actionType.LOADING });
      })
  }
}
