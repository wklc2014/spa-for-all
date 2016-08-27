'use strict';

import React, {Component} from 'react';

class First extends Component{
	handleTest(){
		function timeout(ms) {
		  return new Promise((resolve, reject) => {
		    setTimeout(resolve, ms, 'done');
		  });
		}

		timeout(2000).then((value) => {
		  	console.log(value);
		});
	}
	componentDidMount() {
	    this.handleTest();
	}
	render(){
		return (
			<div>
				this is default page
			</div>
		)
	}
}

export default First;
