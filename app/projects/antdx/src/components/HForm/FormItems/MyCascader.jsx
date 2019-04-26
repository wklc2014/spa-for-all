/**
 * 级联选择
 */
import React from 'react';
import is from 'is_js';
import propTypes from 'prop-types';

const { Cascader } = window.antdx;

export default function MyCascader(props) {
  const { api, ext, onChange, value } = props;
  const { data } = ext;
  const newProps = {
    options: data,
    ...api,
    onChange,
    value,
  };

  return <Cascader {...newProps} />;
}
