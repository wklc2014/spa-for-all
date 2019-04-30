/**
 * 导航
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { withRouter } from 'react-router';

import PageCenter from '../PageCenter/PageCenter.jsx';
import navConfig from '../../common/js/nav.js';

class Nav extends Component {

  static defaultProps = {

  }

  renderNavItem = () => {
    const { location = {} } = this.props;
    const { pathname } = location;

    return navConfig.map((val, i) => {
      const active = pathname === val.path || (pathname.startsWith(val.path) && val.path !== '/') ? 'active' : '';
      return (
        <li className={active} key={i}>
          <Link to={val.path}>{val.label}</Link>
        </li>
      )
    })
  }

  render() {

    return (
      <PageCenter className="nav-container">
        <div className="nav-wraper">
          <ul className="nav">
            {this.renderNavItem()}
          </ul>
        </div>
      </PageCenter>
    )
  }

}

Nav.propTypes = {

}

export default withRouter(Nav);
