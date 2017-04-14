import { connect } from 'react-redux';

import App from './App.jsx';

function mapStateToProps(state) {
    return {
        counter: state.counter.data,
        routing: state.routing
    };
}

const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;
