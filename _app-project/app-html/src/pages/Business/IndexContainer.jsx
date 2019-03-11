import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Index from './Index.jsx';

function mapStateToProps(state) {
  return {
    business: state.business,
  };
}

export default connect(mapStateToProps)(Index);
