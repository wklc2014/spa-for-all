import request from '../../utils/request.js';

export function getKuaiDi(params) {
  return request('http://localhost:15000/spa-for-all/user', params, { method: 'GET' });
}