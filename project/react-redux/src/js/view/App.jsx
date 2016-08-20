'use strict';

import React, {Component} from 'react';
import NavLink from './common/NavLink.jsx';
import { connect } from 'react-redux';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

class App extends Component{
	render(){
		const {counter} = this.props;
		const styleObj = {
    		paddingTop: "20px"
    	}
		return (
			<div className="container" style={styleObj}>
				<h3>app component</h3>
				<ul className="nav nav-tabs">
					<li role="presentation"><NavLink to="/" onlyActiveOnIndex>首页({counter})</NavLink></li>
					<li role="presentation"><NavLink to="/counter">Counter</NavLink></li>
				</ul>
				<section>
					{this.props.children}
				</section>
			</div>
		)
	}
}

export default connect(mapStateToProps)(App)
