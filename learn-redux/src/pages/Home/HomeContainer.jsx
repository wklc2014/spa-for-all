import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './Home.jsx';
import * as actions from '../../models/action/_count.js';

function mapStateToProps(state) {
  return {
    amount: state._count.amount,
    loading: state._count.loading,
    citys: state._count.citys,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onAdd: actions.onAdd,
    onReduce: actions.onReduce,
    onLoad: actions.onLoad,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
