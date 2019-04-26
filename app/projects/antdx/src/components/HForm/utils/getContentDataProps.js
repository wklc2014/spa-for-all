/**
 * 获取 data 属性
 */
import is from 'is_js';

export default function getContentDataProps(props) {
  const { type, api = {}, ext = {} } = props;
  const { data, city } = ext;

  if (is.not.array(data) && type !== 'button') {
    return [];
  }

  return data;
}