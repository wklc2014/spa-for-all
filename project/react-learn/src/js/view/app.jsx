'use strict';
import React, { Component } from 'react';

import NavLink from './common/NavLink.jsx';
class App extends Component {
    render() {
    	let styleObj = {
    		paddingTop: "20px"
    	}
        return (
            <div className="container" style={styleObj}>
				<h3>app component</h3>
				<ul className="nav nav-tabs">
					<li role="presentation"><NavLink to="/" onlyActiveOnIndex>首页</NavLink></li>
					<li role="presentation"><NavLink to="/first">First</NavLink></li>
					<li role="presentation"><NavLink to="/about">About</NavLink></li>
					<li role="presentation"><NavLink to="/inbox">Inbox</NavLink></li>
					<li role="presentation"><NavLink to="/todo">Todo</NavLink></li>
					<li role="presentation"><NavLink to="/inbox/message/1">Message-1</NavLink></li>
					<li role="presentation"><NavLink to="/inbox/message/2">Message-2</NavLink></li>
					<li role="presentation"><NavLink to="/inbox/message/3">Message-3</NavLink></li>
				</ul>
				<section>
					{this.props.children}
				</section>
			</div>
        )
    }
}

 export default App;
