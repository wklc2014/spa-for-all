import actionType from '../actionType/index.js';
import count_service from '../service/count_service.js';

const onAdd = (number = 1) => {
  return {
    type: actionType.COUNT_ADD,
    payload: number,
  }
}

const onReduce = (number = 1) => {
  return {
    type: actionType.COUNT_REDUCE,
    payload: number,
  }
}

const onLoad = () => {
  return (dispatch, getState) => {
    dispatch({ type: actionType.LOADING });
    count_service.getAllCitys()
      .then((resp) => {
        dispatch({
          type: actionType.SHOW_CITYS,
          payload: resp.data,
        })
        dispatch({ type: actionType.LOADING });
      })
  }
}

export default {
  onAdd,
  onReduce,
  onLoad,
}
