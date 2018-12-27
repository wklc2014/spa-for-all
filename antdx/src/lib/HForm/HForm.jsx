/**
 * 通过一个 js 配置数组 array
 * 生成一组表单元素
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';
import lodash from 'lodash';
import is from 'is_js';
import { Form, Row, Col } from 'antd';

import styles from './styles.less';

import HFormItem from './HFormItem.jsx';

class FormGroup extends Component {

  static defaultProps = {
    cols: 1,
    configs: [],
    layout: 'horizontal',
    extMap: {},
    onChange: null,
    values: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      /**
       * 记录表单元素是否首次输入
       * @type {Object}
       */
      touches: {},
    }
  }

  onChange = ({ id, value }) => {
    this.props.onChange({ id, value });
  }

  render() {
    const { cols, configs, extMap, layout, values } = this.props;
    const { touches } = this.state;

    const Children = configs.filter((val) => {
      const { extMap = {} } = val;
      return !extMap.hide;
    }).map((val, i) => {
      const key = `${layout}-${i}`;
      const style = lodash.get(val, 'extMap.style', {});
      const HFormItemProps = {
        config: val.config,
        extMap: {
          ...extMap,
          ...val.extMap,
          style: { ...extMap.style, ...style },
          pLayout: layout,
        },
        touches,
        onChange: this.onChange,
        values,
      };

      if (layout === 'inline') {
        return <HFormItem key={key} {...HFormItemProps} />;
      }

      return (
        <Col key={key} span={6}>
          <HFormItem {...HFormItemProps} />
        </Col>
      );
    });

    if (layout === 'inline') {
      return <Form layout={layout}>{Children}</Form>;
    }

    return (
      <Form layout={layout}>
        <Row type="flex">{Children}</Row>
      </Form>
    );
  }

}

FormGroup.propTypes = {
  /**
   * 表单组列数
   * 即: 表单组一行显示表单元素的个数
   * @type {Number}
   */
  cols: propTypes.number,

  /**
   * 表单配置数组
   * @type {Array}
   */
  configs: propTypes.array,

  /**
   * 表单元素附加配置
   * 该配置会直接附加到每一个表单元素上
   * @type {Object}
   */
  extMap: propTypes.object,

  /**
   * 表单布局类型
   * 仅支持 antd 提供的表单布局 horizontal vertical inline 三种
   * inline 布局不建议表单元素过多的时候使用
   * @type {String}
   */
  layout: propTypes.oneOf([
    'horizontal',
    'vertical',
    'inline',
  ]),

  /**
   * 可控表单搜集表单值的事件方法,
   * 绑定到 onChange/onBlur 事件
   * @type {func}
   */
  onChange: propTypes.func,

  /**
   * 整个表单值
   * @type {Object}
   */
  values: propTypes.object,
};

export default FormGroup;
