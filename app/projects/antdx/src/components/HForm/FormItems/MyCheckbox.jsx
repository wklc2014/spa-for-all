/**
 * 多选框
 */
import React from 'react';
import propTypes from 'prop-types';

const { Checkbox } = window.antdx;
const CheckboxGroup = Checkbox.Group;

export default function MyCheckbox(props) {
  const { api, ext, onChange, value } = props;
  const { data } = ext;
  const newProps = {
    options: data,
    ...api,
    onChange,
    value,
  };

  return <CheckboxGroup {...newProps} />;
}
