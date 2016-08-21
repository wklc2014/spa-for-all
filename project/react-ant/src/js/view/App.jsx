'use strict';

import React, {Component} from 'react';
import NavLink from './common/NavLink.jsx';

class App extends Component{
	render(){
		const wraperStyleObj = {
			padding: "30px 0"
		}
		return (
			<div className="container">
				<ul className="nav nav-tabs">
					<li role="presentation">
						<NavLink to="/" onlyActiveOnIndex>首页</NavLink>
					</li>
					<li role="presentation">
						<NavLink to="/first">First</NavLink>
					</li>
					<li role="presentation">
						<NavLink to="/button">button</NavLink>
					</li>
					<li role="presentation">
						<NavLink to="/layout">layout</NavLink>
					</li>
					<li role="presentation">
						<NavLink to="/alert">alert</NavLink>
					</li>
					<li role="presentation">
						<NavLink to="/antdemo">antdemo</NavLink>
					</li>
				</ul>
				<section style={wraperStyleObj}>
					{this.props.children}
				</section>
			</div>
		)
	}
}

export default App;
