'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as CounterActions from '../actions/counter_action.js';

import ViewNumber from './Number.jsx'

//将state.counter绑定到props的counter
function mapStateToProps(state) {
	// console.log(state)
    return {
        counter: state.counter,
        aaa: state.a
    }
}

//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
	return bindActionCreators(CounterActions, dispatch);
}

class Counter extends Component{
	constructor(props) {
      super(props);
      this.increment = this.increment.bind(this);
      this.incrementIfOdd = this.incrementIfOdd.bind(this);
      this.incrementAsync = this.incrementAsync.bind(this);
      this.decrement = this.decrement.bind(this);
    }
    increment(){
    	this.props.increment(this.props.aaa);
    }
    incrementIfOdd(){
    	this.props.incrementIfOdd(this.props.aaa);
    }
    incrementAsync(){
    	this.props.incrementAsync(this.props.aaa);
    }
    decrement(){
    	this.props.decrement(this.props.aaa);
    }
	render(){
		const { counter } = this.props;
		const styleObj = {
			padding: "20px 0"
		}
		return (
	      	<div style={styleObj}>
	      		<ViewNumber/>
	        	<p>Clicked: {counter} times</p>
	      		<div className="form-group">
	        		<button type="button" className="btn btn-primary" onClick={this.increment}>+</button>
        		</div>
	        	<div className="form-group">
	        		<button  type="button" className="btn btn-primary" onClick={this.decrement}>-</button>
        		</div>
	        	<div className="form-group">
	        		<button type="button" className="btn btn-primary"  onClick={this.incrementIfOdd}>Increment if odd</button>
        		</div>
	        	<div className="form-group">
	        		<button type="button" className="btn btn-primary"  onClick={this.incrementAsync}>Increment async</button>
        		</div>
	      	</div>
      	)
	}
}
Counter.propTypes = {
  	increment: PropTypes.func.isRequired,
	incrementIfOdd: PropTypes.func.isRequired,
	incrementAsync: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
	counter: PropTypes.number.isRequired,
	aaa: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter)