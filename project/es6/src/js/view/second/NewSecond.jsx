'use strict';
import React from 'react';

import {Button, Checkbox, Form, Input, InputNumber, DatePicker, Row, Col} from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

const layoutHeaderText = ['序号', '时间', '金额', '倍率', '总金额'];
const getInitialKey = () => (new Date().getTime() + Math.random() + '');
const getInitialNow = () => (new Date());
const dataKeyLists = ['key', 'isChecked', 'time', 'money', 'ratio'];
let layoutRowData = [{}].map(function (val, i) {
	dataKeyLists.map(function (v, j) {
		switch(v){
			case 'key':
				val[v] = getInitialKey();
				break;
			case 'isChecked':
				val[v] = i % 2 ? true : false;
				break;
			case 'time':
				val[v] = getInitialNow();
				break;
			case 'money':
				val[v] = 100 * (i + 1);
				break;
			case 'ratio':
				val[v] = 2 * (i + 1);
				break;
		}
	})
	return val;
})
// layoutRowData = [];

const NewSecond = React.createClass({
	handleAdd(){

	},
	handleDelete(){

	},
	handleSave(){

	},
	render(){
		return (
			<div className="addSecondWraper">
				<div style={{marginTop: 20}}>
					<Row gutter={16}>
						<Col span={2}>
							<Button style={{width: '100%'}} type="primary" onClick={this.handleAdd}>添加</Button>
						</Col>
						<Col span={2}>
							<Button style={{width: '100%'}} onClick={this.handleDelete}>删除</Button>
						</Col>
						<Col span={2}>
							<Button style={{width: '100%'}} onClick={this.handleSave}>保存</Button>
						</Col>
					</Row>
				</div>
				<div style={styles.wraperStyleObj}>
					<FormItem>
						<Row>
							{layoutHeaderEle}
						</Row>
						{layoutRowEle}
					</FormItem>
				</div>
			</div>
		)
	}
})

export default NewSecond;