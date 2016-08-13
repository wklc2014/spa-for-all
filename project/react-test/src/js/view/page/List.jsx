'use strict';
import React from 'react';
import Reflux from 'reflux';
import Store from '../../stores/store.js';
import Action from '../../actions/action.js'

import {STATUS, IMPORTANT, SOURCE} from "../../constant/constant.js";

let ListComponent  = React.createClass({
	mixins: [
		Reflux.listenTo(Store, 'onStatusChange')
	],
	onStatusChange(){
        this.setState({
        	list: Store.items,
	        isAllChecked: Store.isAllChecked
        });
    },
	getInitialState() {
	    return {
	        list: Store.items,
	        isAllChecked: Store.isAllChecked
	    };
	},
	handleDelete(e){
		let uid = e.target.getAttribute("data-uid");
		if(confirm("确定要删除反馈ID为" + uid + "吗？")){
			Action.delete(uid, function(){
				alert("删除成功");
			});
		}
	},
	handleToggleChecked(e){
		let uid = e.target.getAttribute("data-uid");
		let checked = e.target.checked;
		Action.editcheck(uid, checked);
	},
	retValue(datas, val, keys){
		let _this = this;
		let ret = "";
		datas.some(function (data) {
			if(data.uid == val[keys]){
				ret = data.text;
				return true;
			}
		});
		return ret;
	},
	render(){
		let _this = this;
		if(!this.state.list.length){
			return <p>暂无数据</p>
		}
		let trEle = this.state.list.map(function (val, idx) {
			let important = _this.retValue(IMPORTANT, val, 'important');
			let status = _this.retValue(STATUS, val, 'status');
			let source = _this.retValue(SOURCE, val, 'source');
			return (
		  		<tr key={idx}>
			  		<td className="text-center">
			  			<input type="checkbox" checked={val.isChecked} data-uid={val.uid} onChange={_this.handleToggleChecked}/>
			  		</td>
			  		<td>{val.title}</td>
			  		<td className="text-center">{source}</td>
			  		<td className="text-center">{important}</td>
			  		<td className="text-center">{status}</td>
			  		<td>{val.name}</td>
			  		<td className="text-center">{val.time}</td>
			  		<td className="text-center">
        				<button type="button" className="btn btn-primary mr20">编辑</button>
        				<button type="button" data-uid={val.uid} onClick={_this.handleDelete} className="btn btn-default">删除</button>
			  		</td>
		  		</tr>
			)
		})
		return (
			<section className="list-wraper">
				<table className="table table-bordered table-hover">
				  	<thead>
					  	<tr>
					  		<th className="text-center">
					  			<input type="checkbox" checked={this.state.isAllChecked} data-uid="ALL" onChange={this.handleToggleChecked}/>
					  		</th>
					  		<th className="text-center">问题标题</th>
					  		<th className="text-center">来源</th>
					  		<th className="text-center">重要程度</th>
					  		<th className="text-center">状态</th>
					  		<th className="text-center">反馈人</th>
					  		<th className="text-center">反馈时间</th>
					  		<th className="text-center">操作</th>
					  	</tr>
				  	</thead>
				  	<tbody>{trEle}</tbody>
				</table>
			</section>
		)
	}
})

export default ListComponent;