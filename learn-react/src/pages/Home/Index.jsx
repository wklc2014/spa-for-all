import React from 'react';
import { hot } from 'react-hot-loader';
import propTypes from 'prop-types';

function Home() {

  return (
    <div>
      <h3>主页</h3>
      <p>成都</p>
    </div>
  )
}

Home.propTypes = {

}

Home.defaultProps = {

}

export default hot(module)(Home);
