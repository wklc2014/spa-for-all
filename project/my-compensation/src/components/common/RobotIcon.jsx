import React from 'react';
import CONFIG from './config';
import {Affix} from 'antd';
import '../../common/jquery.easydrag.js';

const RobotIcon = React.createClass({
    componentDidMount() {
        // $("#robotIconContainer").easydrag();
    },
    componentWillUnmount() {

    },
    render() {
        return (
            <a href="https://cschannel.alipay.com/newPortal.htm?scene=Claims_processing" className="robotIconContainer" id="robotIconContainer" target="_blank">
                <img src={`${CONFIG.SERVER}images/service.png`} alt="" />
            </a>
        );
    }
});

export default RobotIcon;
