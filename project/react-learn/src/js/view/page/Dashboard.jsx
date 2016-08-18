"use strict";
import React, {Component} from 'react';
import NavLink from '../common/NavLink.jsx';
export default class Dashboard extends Component {
	render() {
		return (
			<div>
				<ul>
					<li role="presentation"><NavLink to="/inbox/message/1">Message-1</NavLink></li>
					<li role="presentation"><NavLink to="/inbox/message/2">Message-2</NavLink></li>
					<li role="presentation"><NavLink to="/inbox/message/3">Message-3</NavLink></li>
				</ul>
				<p>Welcome to the app</p>
			</div>
		)
	}
}