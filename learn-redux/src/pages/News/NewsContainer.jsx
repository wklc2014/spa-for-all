import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import News from './News.jsx';

function mapStateToProps(state) {
  const news = state.get('news');
  return {
    list: news.get('list'),
  };
}

export default connect(mapStateToProps)(News);
