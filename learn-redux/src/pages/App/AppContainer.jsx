import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import App from './App.jsx';

function mapStateToProps(state) {
  const login = state.get('login');
  return {
    isLogin: login.get('isLogin'),
  };
}

export default withRouter(connect(mapStateToProps)(App));
