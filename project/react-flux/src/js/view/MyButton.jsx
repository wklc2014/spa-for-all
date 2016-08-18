'use strict';

import React from 'react';

const MyButton = React.createClass({
	render(){
		let items = this.props.items;
		let itemEle = items.map(function (val, i) {
			return <li key={i}>{val}</li>
		})
		return (
			<div className="container">
				<ul>{itemEle}</ul>
				<button type="button" className="btn btn-primary" onClick={this.props.onClick}>New Item</button>
			</div>
		)
	}
});

export default MyButton;