import React, { Component, PropTypes } from 'react';
import MainLayout from '../layouts/MainLayout/MainLayout.jsx';
const App = React.createClass({
    propTypes: {
        children: React.PropTypes.any
    },
    render() {
        return (
            <MainLayout>
                {this.props.children}
            </MainLayout>
        );
    }
});

export default App;
