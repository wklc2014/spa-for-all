'use strict';
import { connect } from 'react-redux';
import App from '../component/App.jsx';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

const AppContainer = connect(mapStateToProps)(App);
export default AppContainer;
