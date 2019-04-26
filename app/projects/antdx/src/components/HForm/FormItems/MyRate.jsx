/**
 * 星星评分
 */
import React from 'react';
import propTypes from 'prop-types';

const { Rate } = window.antdx;

export default function MyRate(props) {
  const { api, onChange, value } = props;
  const newProps = {
    ...api,
    onChange,
    value,
  };

  return <Rate {...newProps} />;
}
