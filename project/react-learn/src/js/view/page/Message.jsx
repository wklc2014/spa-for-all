"use strict";
import React, {Component} from 'react';

const Message = React.createClass({
	getInitialState(){
		return {
			isSaved: false
		}
	},

	handleClick(){
		this.setState({
			isSaved: true
		})
	},
	render() {
		return (
			<div>
				<p>Message {this.props.params.id}</p>
				<p>
					<button type="button" className="btn btn-primary" onClick={this.handleClick}>按钮</button>
				</p>
			</div>
		)
	}
})

export default Message;
