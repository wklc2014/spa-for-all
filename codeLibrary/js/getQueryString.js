/**
 * 获取 url 后面的参数
 * getQueryString.js
 */

export default function getQueryString(name) {
  // 获取 url 中"?"符后的字串
  const search = window.location.search;

  const obj = {};

  if (search.indexOf("?") !== -1) {
    const string = search.substr(1);
    const array = string.split("&");
    const length = array.length;
    for (let i = 0; i < length; i ++) {
      const t = array[i];
      const arr = t.split("=");
      const key = arr[0];
      const val = arr[1];
      obj[key] = unescape(val);
    }
  }

  if (name) {
    return obj[name];
  }

  return obj;
}