const isLogin = window.sessionStorage.getItem('isLogin');

export default {
  isLogin: isLogin === 'yes',
  username: '',
  password: '',
}