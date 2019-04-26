/**
 * 数组排序
 */
import _ from 'underscore';

export default function sortArray(array) {
  return _.sortBy(array, 'order');
}