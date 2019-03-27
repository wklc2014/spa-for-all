import request from '../../utils/request.js';

export function getKuaiDi(params) {
  return request('/user', params, { method: 'POST' });
}