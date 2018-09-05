import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login.jsx';

function mapStateToProps(state) {
  const login = state.get('login');
  return {
    isLogin: login.get('isLogin'),
    username: login.get('username'),
    password: login.get('password'),
  };
}

export default connect(mapStateToProps)(Login);
