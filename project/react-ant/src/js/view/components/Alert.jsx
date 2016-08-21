'use strict';

import React, {Component} from 'react';
import {Alert} from 'antd';

class Index extends Component{
	constructor(props){
		super(props);
		this.handleClose = this.handleClose.bind(this);
	}
	handleClose(){
		alert("clsoeed");
	}
	render(){
		return (
			<div className="pt20">
				<Alert
					message="成功提示的文案"
					description="错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍"
					type="info"
					showIcon
					closable
					onClose={this.handleClose}
				/>
			</div>
		)
	}
}

export default Index;

