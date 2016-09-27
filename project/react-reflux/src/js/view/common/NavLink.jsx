"use strict";
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
export default class NavLink extends Component {
    render() {
        const {indexLink, to} = this.props;
        if (indexLink) {
            return (
                <IndexLink to={to} activeClassName="active">
                    {this.props.children}
                </IndexLink>
            )
        }
        return (
            <Link to={to} activeClassName="active">
                {this.props.children}
            </Link>
        );
    }
}