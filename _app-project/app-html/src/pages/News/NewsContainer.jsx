import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import News from './News.jsx';

function mapStateToProps(state) {
  return {
    news: state.news,
  };
}

export default connect(mapStateToProps)(News);
