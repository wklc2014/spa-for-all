/**
 * 上下间距
 */
import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

const Space = ({ value }) => {

  const cls = classnames({
    [`space-${value}`]: !!value,
  })

  return <div className={cls} />;
}

Space.propTypes = {
  value: propTypes.string,
}

Space.defaultProps = {
  value: 'normal',
}

export default Space;

