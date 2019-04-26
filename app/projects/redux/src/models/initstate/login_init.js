import { Map } from 'immutable';
const isLogin = window.sessionStorage.getItem('isLogin');

export default Map({
  isLogin: isLogin === 'yes',
  username: '',
  password: '',
})