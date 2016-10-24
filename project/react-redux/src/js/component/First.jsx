'use strict';
import React, {Component} from 'react';
import _ from 'underscore';

import Mock from 'mockjs';

let data = Mock.mock({
	'list|1-10': [{
		'id|+1': 1
	}],
	'name|+1': 10
})

class First extends Component {
	constructor(props){
		super(props);
		this.state = {
			list: data.list,
	 		name: data.name
		};
	}
	componentDidMount() {
		// const a = 'a' / 'b';
		// const b = isNaN(a);
		// const c = _.isNumber(a);
		// console.log(a, b, c);
        // const a = 'aaa';
        const a = '';
		// const a = 'aaa';
        const _a = _.isEmpty(a);
        console.log(_a);




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