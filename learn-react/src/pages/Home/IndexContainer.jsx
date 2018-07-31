import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Index from './Index.jsx';
import * as actions from '../../redux/action/_count.js';

function mapStateToProps(state) {
  return {
    amount: state._count.amount,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onAdd: actions.onAdd,
    onReduce: actions.onReduce,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
