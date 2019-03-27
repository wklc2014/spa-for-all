/**
 * 标题
 */
import React from 'react';
import propTypes from 'prop-types';

const MainTitle = ({ text }) => {

  return (
    <h1 className="main-title">
      <span>{text}</span>
    </h1>
  )
}

MainTitle.propTypes = {
  text: propTypes.string.isRequired,
}

MainTitle.defaultProps = {
}

export default MainTitle;
