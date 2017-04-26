import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classNames';

class Head extends Component {

    constructor(props) {
        super(props);
        this.processLogoEle = this.processLogoEle.bind(this);
        this.state = {
            hasLogin: false
        }
    }

    processLogoEle(callFrom) {
        switch (callFrom) {
            case 'home':
                return (
                    <a href="/" className="logoLink">
                        <span className="icon"></span>
                        <span className="title">
                            <i>理赔天平</i>
                            <i>themis.alipay.com</i>
                        </span>
                    </a>
                );
                break;
            default:
                return (
                    <Link to="/" className="logoLink">
                        <span className="icon"></span>
                        <span className="title">
                            <i>理赔天平</i>
                            <i>themis.alipay.com</i>
                        </span>
                    </Link>
                )
        }
    }

    processAdditionEle(username) {
        if (username) {
            return (
                <div className="child">
                    <i className="iconfont icon-yonghu mr8" />
                    <span className="username">
                        {username}
                    </span>
                </div>
            )
        }
        return (
            <a
                href="denglu"
                className="feedback"
            >
                <i className="iconfont icon-yonghu" />
                <span>登陆</span>
            </a>
        )
    }

    render() {
        const {callFrom} = this.props;
        const {hasLogin} = this.state;
        const logoEle = this.processLogoEle(callFrom);
        const addtionEle = this.processAdditionEle(hasLogin);

        const wraperCls = classNames({
            'global-wraper': true,
            'global-height': true,
            'global-center': callFrom === 'home'
        })

        return (
            <div className="headerWraper">
                <div className={wraperCls}>
                    <div className="logo">
                        {logoEle}
                        <div className="text">公正理赔值得信赖</div>
                    </div>
                    <div className="user">
                        {addtionEle}
                    </div>
                </div>
            </div>
        )
    }
}

export default Head;
