/**
 * 标题
 */
import React from 'react';
import propTypes from 'prop-types';

const PrimaryTitle = ({ text }) => {

  return (
    <h1 className="primary-title">
      <span>{text}</span>
    </h1>
  )
}

PrimaryTitle.propTypes = {
  text: propTypes.string.isRequired,
}

PrimaryTitle.defaultProps = {
}

export default PrimaryTitle;
