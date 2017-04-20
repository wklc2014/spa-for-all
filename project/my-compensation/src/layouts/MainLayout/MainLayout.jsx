import { connect } from 'react-redux';
import React, {Component, PropTypes} from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import styles from './MainLayout.less';
import Header from '../../components/head/HeaderContainer.jsx';
import Foot from '../../components/foot/Foot.jsx';
import RobotIcon from '../../components/common/RobotIcon.jsx';
import {Affix, Spin} from 'antd';

const MainLayout = React.createClass({
    render() {
        const {loading} = this.props;
        return (
            <Spin spinning={loading} className="fullscreenSpin">
                <div
                    id="mainWraperContentSubject"
                    className={styles.normal}
                >
                    <Header />
                    {this.props.children}
                    <Foot />
                    <RobotIcon />
                </div>
            </Spin>
        );
    }
});

function mapStateToProps(state) {
    return {
        loading: state.loading
    };
}
const MainLayoutContainer = connect(mapStateToProps)(MainLayout);
export default MainLayoutContainer;
