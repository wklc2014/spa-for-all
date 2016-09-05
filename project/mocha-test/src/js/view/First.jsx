'use strict';

import React, {Component} from 'react';

import {Button} from 'antd';

class First extends Component{
	render(){
		return (
			<div className="pt20">
				<p className="mb20">this is default page</p>
				<div className="mb20" id="buttonWraper">
					<Button type="primary">button</Button>
				</div>
				<section className="sectionWraper">
					<h3 className="title">
						<span>head3-span</span>
						<i id="targetId">head3-i</i>
						<em>head3-em</em>
					</h3>
				</section>
				<h4 className="title">head4</h4>
				<h5 className="title">head5</h5>
			</div>
		)
	}
}

export default First;
