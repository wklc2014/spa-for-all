'use strict';
import React, { Component } from 'react';
import Reflux from 'reflux';
import TodoStore from '../stores/todo_store.js';
import NavLink from './common/NavLink.jsx';

let App = React.createClass({
    mixins: [
        Reflux.listenTo(TodoStore, 'onStatusChange')
    ],
    getInitialState() {
        return {
            length: TodoStore.items.length
        };
    },
    onStatusChange(){
        this.setState({
            length: TodoStore.items.length
        });
    },
    render() {
        let styleObj = {
            paddingTop: "20px"
        }
        return (
            <div className="container" style={styleObj}>
                <h3>app component</h3>
                <ul className="nav nav-tabs">
                    <li role="presentation">
                        <NavLink to="/" indexLink>首页</NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink to="first" indexLink>First</NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink to="about" indexLink>About</NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink to="inbox" indexLink>Inbox({this.state.length})</NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink to="todo" indexLink>Todo</NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink to="inbox/message">Message</NavLink>
                    </li>
                </ul>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
})

 export default App;
