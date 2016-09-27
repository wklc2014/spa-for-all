'use strict';

import React, {Component} from 'react';
import {withRouter} from 'react-router';

const First = withRouter(
    React.createClass({
        // contextTypes: {
        //     router: React.PropTypes.object
        // },
        componentDidMount() {
            this.props.router.setRouteLeaveHook(
                this.props.route,
                this.routerWillLeave
            )
        },
        routerWillLeave() {
            console.log(1)
            return 'do you leave';
        },
        render() {
            return (
                <div>
                    this is first component;
                </div>
            )
        }
    })
)

export default First;

