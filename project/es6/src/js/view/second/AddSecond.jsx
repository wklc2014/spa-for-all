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


let AddSecond = React.createClass({
	componentDidMount() {
		const tempObj = {};
		this.state.data.map(function (val, i) {
			dataKeyLists.map(function (v, j) {
				if(v == 'money' || v == 'ratio'){
					const formKey = v + '_' + val.key + '_' + (i + 1);
					tempObj[formKey] = val[v];
				}
			})
		})
		console.log(tempObj)
	    this.props.form.setFieldsValue(tempObj);
	},
	getInitialState() {
	    return {
	        data: layoutRowData
	    };
	},
	handleDelete(){
		const newData = this.state.data.filter(function (val, i) {
			return !val.isChecked
		})
		this.setState({
			data: newData
		})
	},
	handleAdd(){
		const newData = this.state.data;
		newData.push({
			key: getInitialKey(),
			isChecked: false,
			time: getInitialNow(),
			money: '',
			ratio: '',
		})
		this.setState({
			data: newData
		})
	},
	handleSave(){
		this.props.form.validateFields((errors, values) => {
	      	if (!!errors) {
		        console.log('Errors in form!!!', values);
		        return;
	      	}
	      	console.log('Submit!!!', values);
	    });
	},
	getSpecialKey(text){
		const arr = text.split("_");
		return {
			id: arr[0],
			key: arr[1]
		}
	},
	handleUpdate(e){
		const target = e.target;
		const id = target.id;
		const type = target.type;
		const obj = this.getSpecialKey(id);
		const newData = this.state.data.map(function (val, i) {
			if(val.key == obj.key){
				if(type == 'checkbox'){
					val[obj.id] = target.checked;
				}else {
					let value = target.value;
					value = parseFloat(value);
					value = isNaN(value) ? 0 : value.toFixed(2);
					val[obj.id] = Number(value);
				}
			}
			return val;
		})
		console.log('update', newData)
		this.setState({
			data: newData
		})
	},
	render(){
		const _this = this;
		const { data } = this.state;
		const { getFieldProps } = this.props.form;
		const styles = {
			headerStyleObj: {
				textAlign: 'center',
				lineHeight: '40px',
				borderBottom: '1px solid #ddd'
			},
			bodyStyleObj: {
				padding: '20px 10px 0',
				borderTop: '1px solid #ddd'
			},
			firstBodyStyleObj: {
				padding: '20px 10px 0',
			},
			wraperStyleObj: {
				border: '1px solid #ddd',
				marginTop: '20px',
				lineHeight: 2
			}
		}
		const labelSpanFirst = 4;
		const labelSpanOther = (24 - 4) / 4;
		const layoutHeaderEle = layoutHeaderText.map(function (val, i) {
			let tempLabelSpan = labelSpanOther;
			if(i == 0){
				tempLabelSpan = labelSpanFirst;
			}
			return(
				<Col span={tempLabelSpan} key={i}>
					<div style={styles.headerStyleObj}>{val}</div>
				</Col>
			)
		})
		const layoutRowEle = data.map(function (val, i) {
			const tempBodyStyle = i != 0 ? styles.bodyStyleObj : styles.firstBodyStyleObj;
			const layoutColEle = dataKeyLists.map(function (v, j) {
				let tempLabelSpan = labelSpanOther;
				if(v == 'isChecked'){
					tempLabelSpan = labelSpanFirst;
				}
				let colEle = null;
				const formKey = v + '_' + val.key + '_' + (i + 1);
				if(v == 'key') return;
				switch(v){
					case 'isChecked':
						const checkboxProps = getFieldProps(formKey, {
					        onChange: _this.handleUpdate
						});
						 colEle = <Checkbox checked={val[v]} {...checkboxProps} />
						break;
					case 'time':
						const dateProps = getFieldProps(formKey, {
						    rules: [{
				        	  	required: true,
				        	  	type: 'date',
					          	message: '日期不能为空',
					        }],
					        initialValue: val[v],
						});
						 colEle = <FormItem><DatePicker {...dateProps} style={{width:'100%'}} /></FormItem>
						break;
					case 'money':
					case 'ratio':
						console.log('render', typeof val[v], val[v])
						const textArray = {
							money: ['请输入金额!'],
							ratio: ['请输入兑率!']
						}
						const inputProps = getFieldProps(formKey, {
						    rules: [{
				        	  	required: true,
				        	  	type: 'number',
					        	message: textArray[v][0]
					        }],
					        // initialValue: val[v],
					        onChange: _this.handleUpdate
						});
						colEle = <FormItem><Input value={val[v]} type="number" {...inputProps} style={{width:'100%'}} /></FormItem>
						break;
				}
				return (
					<Col span={tempLabelSpan} key={j}>
						<div style={tempBodyStyle}>
							{colEle}
						</div>
					</Col>
				)
			})
			const total = val.money * val.ratio;
			return (
				<Row key={i}>
					{layoutColEle}
					<Col span={labelSpanOther}>
						<div style={tempBodyStyle}>{total}</div>
					</Col>
				</Row>
			)
		})
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
AddSecond = createForm()(AddSecond);

export default AddSecond;