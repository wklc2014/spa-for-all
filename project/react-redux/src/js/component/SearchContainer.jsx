'use strict';
import React, {Component} from 'react';
import action from '../redux/actionType';
const First = React.createClass({
    componentDidMount() {
        console.log('First componentDidMount', action);
        const {UPDATE} = action;
        console.log(UPDATE)
    },
    render(){
        return (
            <div>
                this is test component
            </div>
        )
    }
})

export default First;
