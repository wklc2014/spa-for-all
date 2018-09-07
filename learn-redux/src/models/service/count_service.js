import request from '../../utils/request.js';

const getAllCitys = (params) => {
  return request('/user', params, { method: 'POST' })
}

export default {
  getAllCitys,
}