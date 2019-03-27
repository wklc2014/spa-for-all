/**
 * 头部
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';

import PageCenter from '../PageCenter/PageCenter.jsx';

class Header extends Component {

  static defaultProps = {

  }

  render() {

    return (
      <PageCenter className="header-container">
        <div className="header-wraper">
          <div className="logo">
            Real Estate Design
          </div>
          <div className="phone">
            <span className="iconimg header-phone"></span>
            <span>028-5630520</span>
          </div>
        </div>
      </PageCenter>
    )
  }

}

Header.propTypes = {

}

export default Header;
