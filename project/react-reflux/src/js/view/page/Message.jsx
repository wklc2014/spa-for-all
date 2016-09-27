"use strict";
import React, {Component} from 'react';
import {withRouter, browserHistory} from 'react-router';

const Message = withRouter(React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState(){
        return {
            isSaved: false
        }
    },
    componentDidMount() {
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    },
    routerWillLeave() {
        if (!this.state.isSaved) {
            console.log('please click save button')
            return false;
        }
    },
    handleClick(){
        this.setState({
            isSaved: !this.state.isSaved
        })
    },
    handleGoto() {
        this.context.router.push('about')
        // browserHistory.push('/about');
    },
    render() {
        return (
            <div>
                <p>Message {this.props.params.id || 'null'}</p>
                <p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleClick}
                    >
                        保存按钮
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleGoto}
                    >
                        跳转按钮
                    </button>
                </p>
            </div>
        )
    }
}))

export default Message;
