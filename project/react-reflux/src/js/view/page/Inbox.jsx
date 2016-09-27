"use strict";
import React, {Component} from 'react';
import NavLink from '../common/NavLink.jsx';

const Inbox = React.createClass({
    render() {
        const {children} = this.props;
        let childEle = null;
        const navArr = [1, 2, 3, 4];
        const linkEle = navArr.map((val, i) => {
            return (
                <p key={i}>
                    <NavLink to={`/inbox/message/${val}`}>{val}</NavLink>
                </p>
            );
        })
        return (
            <div>
                <h3>Inbox</h3>
                <div>
                    {linkEle}
                </div>
                <div>
                    {this.props.children || "welcome to your inbox"}
                </div>
            </div>
        )
    }
})

export default Inbox;