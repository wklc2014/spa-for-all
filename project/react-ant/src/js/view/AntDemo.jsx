'use strict';

import React, {Component} from 'react';
import {Badge, Checkbox, Button} from 'antd';

const ViewBadge = React.createClass({
	render(){
		return (
			<Badge
				count={5}
			>
				<span className="badge-demo">首页</span>
			</Badge>
		)
	}
})

const Wraper = ({children}) => {
	return (
		<div className="form-group">
			{children}
		</div>
	)
}

const text = {
	pre: ['选中', '取消'],
	suf: ['不可用', '可用']
}

const AntDemo = React.createClass({
	getInitialState() {
	    return {
	        disabled: false,
			checked: true
	    };
	},
	handleChangeCheckbox(e){
		console.log(`checked = ${e.target.checked}`);
	},
	handleChangeState(e){
		const key = e.currentTarget.getAttribute('data-state');
		const newState = {};
		newState[key] = !this.state[key];
		this.setState(newState);
	},
	render(){
		const labelPre = text.pre[Number(!this.state.checked)];
		const labelSuf = text.suf[Number(!this.state.disabled)];
		const buttonPre = text.pre[Number(this.state.checked)];
		const buttonSuf = text.suf[Number(this.state.disabled)];
		return (
			<div>
				<Wraper>
					<ViewBadge />
				</Wraper>
				<Wraper>
					<Checkbox checked={this.state.checked} disabled={this.state.disabled} onChange={this.handleChangeCheckbox}>{labelPre} - {labelSuf}</Checkbox>
					<Checkbox disabled defaultChecked={true} onChange={this.handleChangeCheckbox}>Checkbox</Checkbox>
					<Checkbox disabled onChange={this.handleChangeCheckbox}>Checkbox</Checkbox>
				</Wraper>
				<Wraper>
					<Button type="primary" size="small" data-state="checked" onClick={this.handleChangeState} style={{marginRight: 8}}>{buttonPre}</Button>
					<Button type="primary" size="small" data-state="disabled" onClick={this.handleChangeState}>{buttonSuf}</Button>
				</Wraper>
			</div>
		)
	}
})

export default AntDemo;
