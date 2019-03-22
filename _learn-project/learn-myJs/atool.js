/**
 * 常用工具库
 */
const atool = {};

function inArray(value, array) {
  return array.indexOf(value) !== -1;
}

export default {
  inArray,
};