'use strict';
import { connect } from 'react-redux';
import Dashboard from '../component/Dashboard.jsx';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        store: state
    }
}

const DashboardContainer = connect(mapStateToProps)(Dashboard);
export default DashboardContainer;
