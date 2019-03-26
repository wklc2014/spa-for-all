/**
 * 上下间距
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

const Space = ({ size }) => {

  const cls = classnames({
    [`space-${size}`]: !!size,
  })

  return <div className={cls} />;
}

Space.propTypes = {
  size: propTypes.string,
}

Space.defaultProps = {
  size: 'normal',
}

export default Space;

