'use strict';

import React, { Component, PropTypes } from 'react';

class Counter extends Component{
	render(){
		const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
		return (
	      	<div>
	        	<p>Clicked: {counter} times</p>
	      		<div className="form-group">
	        		<button type="button" className="btn btn-primary" onClick={increment}>+</button>
        		</div>
	        	<div className="form-group">
	        		<button  type="button" className="btn btn-primary" onClick={decrement}>-</button>
        		</div>
	        	<div className="form-group">
	        		<button type="button" className="btn btn-primary"  onClick={incrementIfOdd}>Increment if odd</button>
        		</div>
	        	<div className="form-group">
	        		<button type="button" className="btn btn-primary"  onClick={() => incrementAsync()}>Increment async</button>
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
	counter: PropTypes.number.isRequired
};

export default Counter