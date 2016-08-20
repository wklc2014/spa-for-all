"use strict";
import React, {Component} from 'react';
import { connect } from 'react-redux';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        store: state
    }
}

class Dashboard extends Component{
	render(){
		const {store} = this.props;
		const styleObj = {
			padding: "20px 0",
			color: "#f00"
		}
		return (
			<div style={styleObj}>
				this is About page ({store.counter})
			</div>
		)
	}
}
export default connect(mapStateToProps)(Dashboard)
