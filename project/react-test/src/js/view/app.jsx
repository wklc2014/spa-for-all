'use strict';
import React, { Component } from 'react';

import NavComponent from './page/Nav.jsx';
import FilterFormComponent from './page/Filter.jsx';
import ListFormComponent from './page/List.jsx';
import tipsJS from "./mixins/tips.js";

let App = React.createClass({
    mixins: [
        tipsJS
    ],
    render() {
        let styleObj = {
            paddingTop: "20px"
        }
        return (
            <div className="container" style={styleObj}>
                <NavComponent/>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick={this.handleDevelope}>新建反馈</button>
                </div>
                <FilterFormComponent/>
                <ListFormComponent/>
            </div>
        )
    }
})

 export default App;
