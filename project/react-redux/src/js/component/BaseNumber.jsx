'use strict';
import React, { Component, PropTypes } from 'react';

class BaseNumber extends Component{
	constructor(props) {
      	super(props);
      	this.handleChange = this.handleChange.bind(this);
    }
	handleChange(e){
		let number = parseInt(this.refs.input.value, 10);
		this.props.changeNumber(number);
	}
	render(){
		const {a} = this.props.state;
		return (
			<div className="form-group">
				<div className="row">
					<div className="col-md-4">
						<input
							type="text"
							ref="input"
							className="form-control"
							defaultValue={a}
						/>
					</div>
					<div className="col-md-2">
						<button
							type="button"
							className="btn btn-primary"
							onClick={this.handleChange}
						>
							确定
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default BaseNumber;
