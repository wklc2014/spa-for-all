/**
 * 中英文值映射
 * keyValueMap.js
 */
import is from 'is_js';

// 可以提前给项目预先设置一些映射库
const dictionary = {

}

export default function keyValueMap({ id, value, kPath = 'value', vPath = 'label' }) {
  if (!id) return id;

  if (is.string(value)) {
    // 如果 value 是字符串, 则采用预置的映射库
    const obj = dictionary[value] || {};
    return obj[id] || id;
  }

  if (is.array(value)) {
    // 如果 value 是数组, 则在数组里查找映射的值
    const target = value.find(v => v[kPath] === id);
    if (target) {
      return target[vPath] || id;
    }
  }

  if (is.object(value)) {
    // 如果 value 是对象, 则直接从对象获取
    return value[id] || id;
  }

  return id;
}