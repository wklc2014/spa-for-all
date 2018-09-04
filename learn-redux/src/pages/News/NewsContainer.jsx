import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import News from './News.jsx';

function mapStateToProps(state) {
  return {
    list: state._news.list,
  };
}

export default connect(mapStateToProps)(News);
