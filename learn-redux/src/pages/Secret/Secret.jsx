import React, { Component } from 'react';
import propTypes from 'prop-types';

class Secret extends Component {

  static defaultProps = {

  }

  render() {
    return (
      <div>
        只有登录了才能看到这个页面
      </div>
    )
  }

}

Secret.propTypes = {

}

export default Secret;
