import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Home from './Home.jsx';

function mapStateToProps(state) {
  return {
    news: state.news,
    business: state.business,
  };
}

export default connect(mapStateToProps)(Home);
