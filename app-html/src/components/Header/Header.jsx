/**
 * 头部
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';

class Header extends Component {

  static defaultProps = {

  }

  render() {
    const {

    } = this.props;

    return (
      <div className="header-container">
        <div className="header-wraper">
          <div className="logo">
            Real Estate Design
          </div>
          <div className="phone">
            <span className="iconimg header-phone"></span>
            <span>000-00000000</span>
          </div>
        </div>
      </div>
    )
  }

}

Header.propTypes = {

}

export default Header;
