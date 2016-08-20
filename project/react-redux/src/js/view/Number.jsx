'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as Actions from '../actions/number_action.js';

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        state: state
    }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

class Number extends Component{
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
						<input type="text" ref="input" className="form-control" defaultValue={a} />
					</div>
					<div className="col-md-2">
						<button type="button" className="btn btn-primary" onClick={this.handleChange}>确定</button>
					</div>
				</div>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Number)
