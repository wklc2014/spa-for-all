import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classNames';

class Head extends Component {

    constructor(props) {
        super(props);
        this.processLogoEle = this.processLogoEle.bind(this);
        this.state = {
            hasLogin: true
        }
    }

    processLogoEle(callFrom) {
        switch (callFrom) {
            case 'home':
                return (
                    <a href="/" className="logoLink">
                        <span>理赔天平</span>
                        <i>themis.alipay.com</i>
                    </a>
                );
                break;
            default:
                return (
                    <Link to="/" className="logoLink">
                        <span>理赔天平</span>
                        <i>themis.alipay.com</i>
                    </Link>
                )
        }
    }

    processAdditionEle(username) {
        if (username) {
            return (
                <div className="userChild">
                    <i className="iconfont icon-yonghu mr8" />
                    <span className="username">
                        admin
                    </span>
                </div>
            )
        }
        return (
            <div className="userChild">
                <a
                    href="denglu"
                    className="feedback"
                >
                    <i className="iconfont icon-yonghu" />
                    <span>登陆</span>
                </a>
            </div>
        )
    }

    render() {
        const {callFrom} = this.props;
        const {hasLogin} = this.state;
        const logoEle = this.processLogoEle(callFrom);
        const addtionEle = this.processAdditionEle(hasLogin);

        const headerCls = classNames({
            'headerCls': true,
            'global-wraper': true,
            'global-height': true,
            'global-center': callFrom === 'home'
        })

        return (
            <section className="headerWraper">
                <div className={headerCls}>
                    <div className="headerLogoCls">
                        {logoEle}
                        <div className="logoText">公正理赔值得信赖</div>
                    </div>
                    <div className="headerUserCls">
                        <div className="userChild">
                            {addtionEle}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Head;
