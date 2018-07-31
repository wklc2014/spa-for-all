import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './Index.jsx';

function mapStateToProps(state) {
  return {
    list: state._news.list,
  };
}

export default connect(mapStateToProps)(Index);
