'use strict';

import React from 'react';
import ListStore from './stores/ListStore.js';

import ButtonActions from './actions/ButtonActions.js';
import MyButton from './view/MyButton.jsx';

const MyButtonController = React.createClass({
	getInitialState() {
		let items = ListStore.getAll();
	    return {
	        items: items
	    };
	},

	componentDidMount() {
	    ListStore.addChangeListener(this._onChange);
	},

	componentWillUnmount() {
	    ListStore.removeChangeListener(this._onChange);
	},

	_onChange(){
		let items = ListStore.getAll();
		this.setState({
			items: items
		})
	},

	createNewItem: function (event) {
	    ButtonActions.addNewItem('new item');
	},

  	render: function() {
    	return (
    		<MyButton
    			items={this.state.items}
      			onClick={this.createNewItem}
    		/>
		);
  	}
});

export default MyButtonController;