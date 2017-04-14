import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from './Dashboard.jsx';

function mapStateToProps(state) {
    return {
        counter: state.counter.data
    }
}

const DashboardContainer = connect(
    mapStateToProps
)(Dashboard);

export default DashboardContainer;
