import actionType from '../actionType/index.js';

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