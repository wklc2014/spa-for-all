import { Store } from 'reflux';
import _login from '../initstate/_login.js';
import LoginAction from '../action/_login.js';

class LoginStore extends Store {
  constructor() {
    super();
    this.state = _login;
    this.listenables = LoginAction;
  }

  onLogin() {
    window.sessionStorage.setItem('isLogin', 'yes');
    this.setState({
      isLogin: 'yes',
    });
  }

  onLogout() {
    window.sessionStorage.setItem('isLogin', 'no');
    this.setState({
      isLogin: 'no',
      username: '',
      password: '',
    });
  }

  onUpdate({ id, value }) {
    this.setState({
      [id]: value,
    });
  }
}

export default LoginStore;
