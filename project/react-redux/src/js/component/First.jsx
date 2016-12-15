'use strict';
import React, {Component} from 'react';

const First = React.createClass({
	handleClick(e) {

	},
	handleChange(e) {
		const string = e.target.value;
		this.props.updateJson(string);
	},
	render(){
		const {list} = this.props;
		// const liEle = list.map((val, i) => <li key={i}>{val.id}</li>);
		return (
			<div>
				<p>this is first page;</p>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						value={list}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					<button
						type="button"
						className="btn btn-primary"
						onClick={this.handleClick}
					>
						按钮
					</button>
				</div>
			</div>
		)
	}
})

export default First;
