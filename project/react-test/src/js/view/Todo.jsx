'use strict';

import React, {Component} from 'react';
import Reflux from 'reflux';
import TodoStore from '../../stores/todo_store.js';
import TodoAction from '../../actions/todo_action.js'

let TodoComponent = React.createClass({
	mixins: [
		Reflux.listenTo(TodoStore, 'onStatusChange')
	],
    getInitialState () {
        return {
        	list: TodoStore.items,
        	text: ""
        };
    },
    onStatusChange(){
        this.setState({
        	list: TodoStore.items
        });
    },
    handleChange(e){
    	this.setState({
    		text: e.target.value
    	})
    },
    handleAdd(){
    	let _this = this;
    	let text = this.state.text;
    	_this.setState({
			text: ""
		}, function () {
			TodoAction.addItem({
				uid: new Date().getTime() + "",
				text: text
			});
		})
    },
    handleDelete(e){
    	let uid = e.target.getAttribute("data-uid");
    	TodoAction.deleteItem(uid);
    },
	render(){
		let _this = this;
		let state = this.state;
		let liEle = state.list.map(function (val, idx) {
			return (
				<li key={idx} className="todoItem">
					<span className="span1">{idx}. </span>
					<span className="span2">{val.uid}</span>
					<span>{val.text}</span>
					<span className="delete pull-right" data-uid={val.uid} onClick={_this.handleDelete}>删除</span>
				</li>
			);
		})
		let styleObj = {
			paddingTop: "20px",
		}
		return(
			<div style={styleObj}>
				<div className="form-group">
					<input type="text" className="form-control" value={state.text} onChange={this.handleChange}/>
				</div>
				<div className="form-group">
					<button type="button" className="btn btn-primary" onClick={this.handleAdd}>Add</button>
				</div>
				<ul className="todoApp">
					{liEle}
				</ul>
            </div>
		)
	}
})

export default TodoComponent;