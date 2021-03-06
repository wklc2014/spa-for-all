/**
 * 滑动输入条
 */
import React from 'react';
import propTypes from 'prop-types';

const { Slider } = window.antdx;

export default function MySlider(props) {
  const { api, onChange, value } = props;
  const newProps = {
    ...api,
    onChange,
    value,
  };

  return <Slider {...newProps} />;
}
