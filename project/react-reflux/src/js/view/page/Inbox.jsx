"use strict";
import React, {Component} from 'react';
import {withRouter} from 'react-router';

const Inbox = React.createClass({
	render(){
		return (
			<div>
				<h3>Inbox</h3>
				<div>
					{this.props.children || "welcome to your inbox"}
				</div>
			</div>
		)
	}
})

export default Inbox;