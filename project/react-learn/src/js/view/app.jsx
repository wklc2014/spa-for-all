'use strict';
import React, { Component } from 'react';

import NavLink from './common/NavLink.jsx';
import DefaultView from "./page/DefaultView.jsx";
class App extends Component {
    render() {
    	console.log(this.props.children)
        return (
            <div className="container">
				<h3>app component</h3>
				<ul className="nav nav-tabs">
					<li role="presentation"><NavLink to="/" onlyActiveOnIndex>首页</NavLink></li>
					<li role="presentation"><NavLink to="/first">First</NavLink></li>
					<li role="presentation"><NavLink to="/about">About</NavLink></li>
					<li role="presentation"><NavLink to="/inbox">Inbox</NavLink></li>
					<li role="presentation"><NavLink to="/inbox/message/1">Message-1</NavLink></li>
					<li role="presentation"><NavLink to="/inbox/message/2">Message-2</NavLink></li>
					<li role="presentation"><NavLink to="/inbox/message/3">Message-3</NavLink></li>
				</ul>
				<section>
					{this.props.children || DefaultView}
				</section>
			</div>
        )
    }
}

 export default App;
