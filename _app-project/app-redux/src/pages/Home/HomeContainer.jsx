import { connect } from 'react-redux';

import Home from './Home.jsx';

const mapStateToProps = (state) => {
  const count = state.get('count');
  return {
    amount: count.get('amount'),
    loading: count.get('loading'),
    citys: count.get('citys'),
  };
}

export default connect(mapStateToProps)(Home);
