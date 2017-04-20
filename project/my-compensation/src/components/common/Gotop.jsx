import React from 'react';
import {BackTop} from 'antd';

const Gotop = React.createClass({
    handleGotop() {
        this.handleScrollTo(0, 400);
    },
    render() {
        return (
            <BackTop className="goTopContainer">
                <i className="iconfont icon-fanhuidingbu gotopInner" />
            </BackTop>
        );
    }
});

export default Gotop;
