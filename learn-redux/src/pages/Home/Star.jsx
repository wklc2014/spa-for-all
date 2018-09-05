import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button } from 'antd';

import CountContext from '../../models/context/count_context.js';

export default class Star extends Component {

  static defaultProps = {

  }

  render() {
    const btnStyle = {
      marginRight: 8,
    }

    return (
      <CountContext.Consumer>
        {ctx => {
          return (
            <div>
              <p>amount: {ctx.amount}</p>
              <p>
                <Button style={btnStyle} type="primary" onClick={() => ctx.onAdd()}>增加</Button>
                <Button style={btnStyle} type="primary" onClick={() => ctx.onAdd(5)}>增加 5</Button>
                <Button style={btnStyle} type="primary" onClick={() => ctx.onReduce()}>减少</Button>
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
