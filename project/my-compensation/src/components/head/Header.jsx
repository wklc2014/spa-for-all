import React from 'react';
import {Link} from 'react-router';
import {Menu, Dropdown, Icon, Modal, message, Switch} from 'antd';
import classnames from 'classnames';
import CONFIG from '../common/config';
import ajax from '../../common/ajax.js';

const Header = React.createClass({
    getInitialState() {
        return {
            hasLogin: false,
            username: '',
            hasSign: false,
            hasSignEnable: false
        };
    },
    componentDidMount() {
        //是否登录
        const {getUserInfo} = this.props;
        if (getUserInfo !== undefined) {
            getUserInfo();
        } else {
            ajax({
                url: `${CONFIG.SERVER}bxs/getAuthToken.json`,
                success: resp => {
                    if (resp.stat === 'ok') {
                        this.setState({
                            hasLogin: true,
                            username: resp.authToken.userInfo.nick || resp.authToken.userInfo.realName
                        });
                    }
                }
            });
        }
        this.sign();
    },
    sign() {
        const {cls, user} = this.props;
        const {hasLogin} = this.state;
        //首页签到
        if (cls === 'home-index') {
            ajax({
                url: `${CONFIG.SERVER}bxs/signable.json`,
                success: resp => {
                    if (resp.stat === 'ok' && resp.enable) {
                        this.setState({
                            hasSignEnable: resp.enable
                        });
                        ajax({
                            url: `${CONFIG.SERVER}bxs/signInfo.json`,
                            success: resp => {
                                if (resp.stat === 'ok') {
                                    this.setState({
                                        hasSign: resp.sign
                                    })
                                }
                            }
                        })
                    }
                }
            });
        }
    },
    changeSign(checked) {
        let funName = 'signoutAction';
        if(checked) {
            funName = 'signinAction';
        }
        ajax({
            url: `${CONFIG.SERVER}bxs/${funName}.json`,
            success: resp => {
                if (resp.stat === 'ok') {
                    const hasSign = checked;
                    this.setState({
                        hasSign
                    },function() {
                        if(hasSign) {
                            message.success('已签到');
                        }else{
                            message.warn('已离开');
                        }
                    })
                } else {
                    message.error('签到请求失败');
                }
            }
        });
    },
    render() {
        const {cls, isHome, user} = this.props;
        const {hasSignEnable, hasLogin, username} = this.state;
        const hasSign = (user && user.hasSign) || this.state.hasSign;
        let userNameEle = null;
        let otherEle = null;
        let homeEle = null;
        if (isHome) {
            homeEle = (
                <a href="/" className="logoLink">
                    <div className="icon"></div>
                    <div className="title">
                        <span>理赔天平</span>
                        <span>themis.alipay.com</span>
                    </div>
                </a>
            );
        } else {
            homeEle = (
                <Link to="/" className="logoLink">
                    <div className="icon"></div>
                    <div className="title">
                        <span>理赔天平</span>
                        <span>themis.alipay.com</span>
                    </div>
                </Link>
            );
        }
        if (hasLogin || (user && user.userID)) {
            userNameEle = (
                <div className="child">
                    <i className="iconfont icon-yonghu mr8" />
                    <span className="username">{username || (user ? user.userName : '')}</span>
                </div>
            );
            otherEle = (
                <div className="child">
                    <a href={CONFIG.FEEDBACK} className="feedback" target="_blank">
                        反馈
                    </a>
                    <a href={CONFIG.LOGOUT} className="feedback">
                        退出
                    </a>
                </div>
            );
        } else {
            userNameEle = (
                <a
                    href={CONFIG.LOGIN}
                    className="feedback"
                >
                    <i className="iconfont icon-yonghu" />
                    <span>登陆</span>
                </a>
            );
        }
        const otherCls = {};
        if (cls) {
            otherCls[cls] = true;
        }
        const wraperCls = classnames('headerContainer', otherCls);
        return (
            <div className={wraperCls}>
                <div className="wraper">
                    <div className="logo">
                        {homeEle}
                        <div className="text" id="phantomJS-button">公正理赔值得信赖</div>
                    </div>
                    <div className="user">
                        {
                            cls && hasSignEnable ? (
                                <div className="child mr16">
                                    <Switch
                                        checked={hasSign}
                                        onChange={this.changeSign}
                                    />
                                    <strong>{hasSign ? '已签到' : '已离开'}</strong>
                                </div>
                            ) : null
                        }
                        {userNameEle}
                        {otherEle}
                    </div>
                </div>
            </div>
        );
    }
});

export default Header;
