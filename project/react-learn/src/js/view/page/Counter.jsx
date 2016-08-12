'use strict';

import React, {Component, PropTypes} from "react";

class Counter extends Component {
	render(){
		const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
		return (
			<div>
		        <p>Clicked: {counter} times</p>
		        <div className="form-control">
		        	<button type="button" className="btn btn-primary" onClick={increment}>+</button>
		        	<button type="button" className="btn btn-primary" onClick={decrement}>-</button>
		        	<button type="button" className="btn btn-primary" onClick={incrementIfOdd}>Increment if odd</button>
		        	<button type="button" className="btn btn-primary" onClick={() => incrementAsync()}>Increment async</button>
		        </div>
	      	</div>
		)
	}
}

//限制组件的props安全
Counter.propTypes = {
  //increment必须为fucntion,且必须存在
  increment: PropTypes.func.isRequired,
  incrementIfOdd: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  //counter必须为数字，且必须存在
  counter: PropTypes.number.isRequired
};

export default Counter;