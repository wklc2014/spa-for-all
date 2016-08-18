'use strict';
import React from 'react';
import Reflux from 'reflux';
import Store from '../../stores/store.js';

let NavComponent = React.createClass({
	mixins: [
		Reflux.listenTo(Store, 'onStatusChange')
	],
	onStatusChange(){
        this.setState({
        	length: Store.data.items.length
        });
    },
    getInitialState() {
        return {
            length: Store.data.items.length
        };
    },
	render(){
		let length = this.state.length;
		return (
			<ol className="breadcrumb">
			  <li><a href="#">体验平台</a></li>
			  <li><a href="#">工作台</a></li>
			  <li className="active">体验反馈(<span className="red">{length}</span>)</li>
			</ol>
		)
	}
})

export default NavComponent;