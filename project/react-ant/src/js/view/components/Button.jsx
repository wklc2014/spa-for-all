'use strict';

import React, {Component} from 'react';

import { Button } from 'antd';

const ButtonWraper = React.createClass({
	render(){
		const {type, text, last, icon} = this.props;
		let styleObj = {
			display: 'inline-block'
		}
		if(!last){
			styleObj['marginRight'] = '8px';
		}
		return (
			<div style={styleObj}>
				<Button htmlType="reset" icon={icon || ''} type={type || 'default'}>{text}</Button>
			</div>
		)
	}
})

class Index extends Component{
	render(){
		const styleObj = {
			padding: '20px 0'
		}
		const ButtonStyleObj = {
			display: 'inline-block',
			marginRight: '8px'
		}
		return (
			<div className="form-group" style={styleObj}>
				<ButtonWraper
					type="primary"
					text="primary"
					icon="search"
				/>
				<ButtonWraper
					text="default"
				/>
				<ButtonWraper
					type="ghost"
					text="ghost"
				/>
				<ButtonWraper
					type="dashed"
					text="dashed"
				/>
				<div style={ButtonStyleObj}>
					<Button shape="circle" icon="home" />
				</div>
				<div style={ButtonStyleObj}>
					<Button type="primary" shape="circle-outline" icon="search" />
				</div>
			</div>
		)
	}
}

export default Index;
