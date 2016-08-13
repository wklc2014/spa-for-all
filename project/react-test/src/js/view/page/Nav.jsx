'use strict';
import React from 'react';

let NavComponent  = React.createClass({
	render(){
		return (
			<ol className="breadcrumb">
			  <li><a href="#">体验平台</a></li>
			  <li><a href="#">工作台</a></li>
			  <li className="active">体验反馈</li>
			</ol>
		)
	}
})

export default NavComponent;