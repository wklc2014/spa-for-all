'use strict';
import React from 'react';
import Reflux from 'reflux';
import Store from '../../stores/store.js';
import Action from '../../actions/action.js'
import {STATUS, IMPORTANT, SOURCE} from "../../constant/constant.js";

let BtnsComponent = React.createClass({
	render(){
		let _this = this;
		let checked = this.props.checked;
		let label = this.props.label;
		let classnames = this.props.classnames;
		let key = this.props.keys;
		let btns = this.props.datas.map(function (val, idx) {
			let cls = "btn btn-default";
			if(val.uid == checked){
				cls += " active";
			}
			return <button type="button" data-key={key} data-val={val.uid} key={idx} className={cls} onClick={_this.props.change}>{val.text}</button>;
		});
		return (
			<div className={classnames}>
				<label>{label}：</label>
				<div className="btn-group" role="group">
				  	{btns}
				</div>
			</div>
		)
	}
})

let FilterFormComponent = React.createClass({
	mixins: [
		Reflux.listenTo(Store, 'onStatusChange')
	],
	getInitialState() {
	    return {
	        important: Store.data.filters.important,
	        status: Store.data.filters.status,
	        source: Store.data.filters.source,
	        title: Store.data.filters.title
	    };
	},
	onStatusChange(){
		this.setState({
        	important: Store.data.filters.important,
	        status: Store.data.filters.status,
	        title: Store.data.filters.title,
	        source: Store.data.filters.source
        });
	},
	handleChangeTitle(e){
		let title = e.target.value;
		this.setState({
			title: title
		})
	},
	handleChange(e){
		let key = e.target.getAttribute("data-key");
		let val = e.target.getAttribute("data-val");
		let obj = {};
		obj[key] = parseInt(val, 10);
		this.setState(obj)
	},
	handleFilter(){
		Action.filter({
			important: this.state.important,
	        status: this.state.status,
	        title: this.state.title,
	        source: this.state.source
		});
	},
	handleReset(){
		Action.filter({
			important: 0,
	        status: 0,
	        title: 0,
	        source: 0
		});
	},
	render(){
		let title = this.state.title == 0 ? "" : this.state.title;
		return(
        	<section>
				<div className="form-inline form-group">
					<div className="form-group mr20">
					    <label htmlFor="title">标题：</label>
				    	<input type="text" className="form-control" id="title" value={title} onChange={this.handleChangeTitle}/>
					</div>
					<div className="form-group mr20">
					    <label>产品：</label>
				    	<select className="form-control w100">
				    	  <option>1</option>
				    	  <option>2</option>
				    	  <option>3</option>
				    	  <option>4</option>
				    	  <option>5</option>
				    	</select>
					</div>
					<BtnsComponent
						label="重要程度"
						classnames="form-group mr20"
						datas={IMPORTANT}
						keys="important"
						change={this.handleChange}
						checked={this.state.important}/>
				</div>
				<div className="form-inline form-group">
					<BtnsComponent
						label="来源"
						classnames="form-group mr20"
						datas={SOURCE}
						keys="source"
						change={this.handleChange}
						checked={this.state.source}/>
					<BtnsComponent
						label="状态"
						classnames="form-group mr20"
						datas={STATUS}
						keys="status"
						change={this.handleChange}
						checked={this.state.status}/>
				</div>
				<div className="form-group">
            		<button type="button" onClick={this.handleFilter} className="btn btn-primary mr20">搜索</button>
            		<button type="button" onClick={this.handleReset} className="btn btn-default">清空</button>
				</div>
        	</section>
		)
	}
})

export default FilterFormComponent;