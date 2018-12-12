/**
 * 请求后台接口方法
 * url 接口地址
 * params 接口参数
 * options axios 的配置参数
 */
import axios from 'axios';

export default function request(url, params = {}, options = {}) {

  const new_params = Object.assign({}, params, {
    _input_charset: 'utf-8',
    _random: new Date().getTime(),
  });

  const axios_options = {
    url,
    timeout: 10000,
    ...options,
  }

  const { method = 'get' } = options;

  if (method.toLowerCase() === 'get') {
    axios_options.params = new_params;
  } else {
    axios_options.data = new_params;
  }

  return new Promise((resolve) => {
    axios(axios_options)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch((err) => {
        let msg;
        try {
          msg = err.toString();
        } catch (e) {
          msg = `${url} 请求错误: ${err}`;
        }
        const resp = {
          success: false,
          msg,
        }
        resolve(resp);
      });
  })
}
