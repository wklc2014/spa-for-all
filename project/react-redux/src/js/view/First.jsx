'use strict';

import React, {Component} from 'react';

import Mock from 'mockjs';

let data = Mock.mock({
	'list|1-10': [{
		'id|+1': 1
	}],
	'name|+1': 10
})
console.log(JSON.stringify(data))

class First extends Component {
	constructor(props){
		super(props);
		this.state = {
			list: data.list,
	 		name: data.name
		};
	}
	render(){
		const {list, name} = this.state;
		const liEle = list.map((val, i) => <li key={i}>{val.id}</li>);
		return (
			<div>
				<p>this is first page;</p>
				<p>{name}</p>
				<ul>
					{liEle}
				</ul>
			</div>
		)
	}
}

export default First;