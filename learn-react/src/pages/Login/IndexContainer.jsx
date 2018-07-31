import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './Index.jsx';
import * as actions from '../../redux/action/_login.js';

function mapStateToProps(state) {
  return {
    isLogin: state._login.isLogin,
    username: state._login.username,
    password: state._login.password,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onLogin: actions.onLogin,
    onLogout: actions.onLogout,
    onUpdate: actions.onUpdate,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
