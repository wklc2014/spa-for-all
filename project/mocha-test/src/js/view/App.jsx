'use strict';

import {Component} from 'react';
import NavLink from './common/NavLink.jsx';

class App extends Component{
    render(){
        return (
            <div className="container">
                <ul className="nav nav-tabs">
                    <li role="presentation">
                        <NavLink to="/" onlyActiveOnIndex>首页</NavLink>
                    </li>
                    <li role="presentation">
                        <NavLink to="/first">First</NavLink>
                    </li>
                </ul>
                <section>
                    {this.props.children}
                </section>
            </div>
        );
    }
}

export default App;
