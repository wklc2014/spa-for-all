/**
 * 动态加载数据选项
 */
import React, { Component } from 'react';
import querystring from 'querystring';
import propTypes from 'prop-types';
import lodash_template from 'lodash/template';
import lodash_templateSettings from 'lodash/templateSettings';
import request from '../utils/request.js';

const { AutoComplete } = window.antdx;
let timeout;

export default class MyService extends Component {

  static defaultProps = {
    api: {},
    ext: {},
    onChange: () => {},
    value: undefined,
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

  handleChange = (value) => {
    if (!value) {
      this.setState({ data: [] });
      return;
    }

    const that = this;
    const { ext = {} } = this.props;
    const { service = {} } = ext;
    const { url, method, params, time, callback = () => {} } = service;

    if (timeout) {
      window.clearTimeout(timeout);
      timeout = null;
    }

    function search() {
      try {
        lodash_templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        const compiled = lodash_template(params);
        const newParams = compiled({ value });
        request(
          url,
          querystring.parse(newParams),
          { method },
        ).then(resp => {
          if (resp.success) {
            const data = callback(resp);
            that.setState({ data });
          }
        })
      } catch (e) {
      }
    }

    timeout = setTimeout(search, time);
  }

  render() {
    const { api, onChange, value } = this.props;
    const { data } = this.state;
    const newProps = {
      ...api,
      value,
      dataSource: data,
      onChange,
      onSearch: this.handleChange,
    }

    return <AutoComplete {...newProps} />;
  }

}

