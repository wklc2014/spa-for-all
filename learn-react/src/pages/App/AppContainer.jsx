import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import App from './App.jsx';

function mapStateToProps(state) {
  return {
    isLogin: state._login.isLogin,
  };
}

export default withRouter(connect(mapStateToProps)(App));
