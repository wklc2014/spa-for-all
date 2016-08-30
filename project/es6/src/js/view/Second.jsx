'use strict';
import React from 'react';

import AddSecond from './second/AddSecond.jsx';
import 'antd/dist/antd.css';

const Second = React.createClass({
	getInitialState() {
	    return {
	        status: 'add',
	    };
	},
	render(){
		const {status} = this.state;
		if(status == 'add'){
			return <AddSecond />
		}
		if(status == 'new'){
			return <NewSecond />
		}
		return (
			<div>
				this is second page
			</div>
		)
	}
})

export default Second;