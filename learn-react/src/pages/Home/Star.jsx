import React, { Component } from 'react';
import propTypes from 'prop-types';
import CountContext from '../../context/_count.js';

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
                <button onClick={ctx.onAdd}>增加</button>
              </p>
              <p>
                <button onClick={ctx.onReduce}>减少</button>
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
