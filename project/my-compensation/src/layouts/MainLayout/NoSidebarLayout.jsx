import React, { Component, PropTypes } from 'react';
import styles from './MainLayout.less';
import {headHeight, footHeight, blockSpace} from '../../components/common/const.js';
const NoSidebarLayout = React.createClass({
    componentDidMount() {
        this.windowReset();
        $(window).on('resize', this.windowReset);
    },
    componentWillUnmount() {
        $(window).off('resize', this.windowReset);
    },
    windowReset() {
        const contentHeight = $(window).height() - headHeight - footHeight - blockSpace * 2;
        $('#mainWraper').css('min-height', contentHeight);
    },
    render() {
        const nav = this.props.children.props.location.pathname;
        const sidebarStyleObj = {
            width: 160
        };
        return (
            <div className={styles.content}>
                <div className={styles.contentInner}>
                    <div
                        className={styles.main}
                        id="mainWraper"
                    >
                        <div className={styles.mainInner}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default NoSidebarLayout;
