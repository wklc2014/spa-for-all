import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';

import CountContext from '../../models/context/_count.js';

export default class Star extends Component {

  static defaultProps = {

  }

  render() {
    return (
      <CountContext.Consumer>
        {ctx => {
          return (
            <div>
              <p>amount: {ctx.amount}</p>
              <p>
                <Button type="primary" onClick={ctx.onAdd}>增加</Button>
              </p>
              <p>
                <Button type="primary" onClick={ctx.onReduce}>减少</Button>
              </p>
            </div>
          )
        }}
      </CountContext.Consumer>
    )
  }

}

Star.propTypes = {

}
