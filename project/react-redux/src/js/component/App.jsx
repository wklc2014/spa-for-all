'use strict';
import React, {Component} from 'react';
import NavLink from '../common/NavLink.jsx';

class App extends Component{
    render(){
        const {counter} = this.props;
        const styleObj = {
            paddingTop: "20px"
        }
        return (
            <div className="container" style={styleObj}>
                <h3>app component</h3>
                <ul className="nav nav-tabs">
                    <li role="presentation"><NavLink to="/" onlyActiveOnIndex>首页({counter})</NavLink></li>
                    <li role="presentation"><NavLink to="/counter">Counter</NavLink></li>
                    <li role="presentation"><NavLink to="/first">First</NavLink></li>
                    <li role="presentation"><NavLink to="/test">Test</NavLink></li>
                </ul>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default App;
