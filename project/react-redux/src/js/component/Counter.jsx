'use strict';
import React, { Component, PropTypes } from 'react';
import BaseNumber from '../container/BaseNumberContainer.jsx'

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
		const {counter} = this.props;
		const styleObj = {
			padding: "20px 0"
		}
		return (
	      	<div style={styleObj}>
	      		<BaseNumber />
	        	<p>Clicked: {counter} times</p>
	      		<div className="form-group">
	        		<button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.increment}
                    >
                        +
                    </button>
        		</div>
	        	<div className="form-group">
	        		<button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.decrement}
                    >
                        -
                    </button>
        		</div>
	        	<div className="form-group">
	        		<button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.incrementIfOdd}
                    >
                        Increment if odd
                    </button>
        		</div>
	        	<div className="form-group">
	        		<button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.incrementAsync}
                    >
                        Increment async
                    </button>
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

export default Counter;
