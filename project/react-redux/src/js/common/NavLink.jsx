"use strict";
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default class NavLink extends Component {
	render() {
		return <Link {...this.props} activeClassName="active"/>
	}
}