/**
 * 导航
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

class Nav extends Component {

  static defaultProps = {

  }

  render() {
    const {

    } = this.props;

    return (
      <div className="nav-container">
        <div className="nav-wraper">
          <ul className="nav">
            <li className="active">
              <Link to="/">首页</Link>
            </li>
            <li>
              <Link to="/business">商业招租</Link>
            </li>
            <li>
              <Link to="/project">项目案例</Link>
            </li>
            <li>
              <Link to="/news">新闻动态</Link>
            </li>
            <li>
              <Link to="/contact">联系我们</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }

}

Nav.propTypes = {

}

export default Nav;
