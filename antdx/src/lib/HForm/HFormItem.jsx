/**
 * 表单元素输入区域
 */
import React, { Component } from 'react';
import is from 'is_js';
import propTypes from 'prop-types';
import { Form, Row, Col } from 'antd';

import HFormItemContent from './HFormItemContent.jsx';

const FormItem = Form.Item;

class HFormItem extends Component {

  static defaultProps = {

  }

  getFormItemLayoutProps = (extMap = {}) => {
    const {
      layout = '100px',
      pLayout = '',
    } = extMap;

    // 只有 horizontal Form 布局, 才需要设置布局属性
    if (pLayout !== 'horizontal') {
      return null;
    }

    // 如果表单元素布局为栅格布局(对象)，则直接作为布局属性
    if (is.object(layout)) {
      return layout;
    }

    let newLayout = layout;

    // 如果布局属性为数字
    if (is.number(layout)) {
      newLayout = `${layout}px`;
    }

    return {
      labelCol: {
        style: {
          flex: `0 0 ${newLayout}`,
        }
      },
      wrapperCol: {
        style: {
          flex: '1 1 100%',
        }
      }
    };
  }

  getFormItemLabelProps = (extMap = {}) => {
    const {
      label,
      pLayout,
      colon = true,
    } = extMap;

    // 如果设置 label === false
    // 设置一个隐藏的占位元素, 且冒号不显示
    if (is.boolean(label) && !label) {
      return {
        label: <span style={{ display: 'none' }} />,
        colon: false,
      };
    }

    // 如果表单是 vertical 布局, 且设置显示冒号:
    if (pLayout === 'vertical' && colon) {
      return {
        label: `${label}：`,
      };
    }

    return { label };
  }

  getFormItemStyleProps = (extMap = {}) => {
    const {
      style = {},
      pLayout = '',
    } = extMap;

    // 如果表单不是 horizontal 布局, 返回原始 style 属性
    if (pLayout !== 'horizontal') {
      return { style };
    }

    return {
      style: {
        ...style,
        display: 'flex',
      }
    }
  }

  getRowStyleProps(extMap = {}) {
    const { pLayout, space = 0, minWidth = 160, maxWidth } = extMap;
    const RowStyle = {};

    if (space) {
      RowStyle.paddingRight = space;
    }

    if (pLayout === 'inline') {
      RowStyle.minWidth = minWidth;
      if (maxWidth) {
        RowStyle.maxWidth = maxWidth;
      }
    }

    return RowStyle;
  }

  renderColElements = () => {
    const { config } = this.props;

    // 如果 config 是对象, 则转换成数组, 统一处理
    const newConfig = is.array(config) ? config : [config];

    // 过滤隐藏的表单输入元素
    const newFilterConfig = newConfig.filter((val) => {
      const { ext = {} } = val;
      return !ext.hide;
    })

    return newFilterConfig.map((val, i) => {
      const key = `formItem-${i}`;
      const { ext = {} } = val;
      const { span = 24 } = ext;
      const ColProps = { key, span, style: {} };

      if (extMap.pLayout === 'vertical') {
        ColProps.style.paddingBottom = 4;
      }

      const HFormItemContentProps = {
        label: extMap.label,
        id: val.id,
        type: val.type,
        api: val.api,
        ext: val.ext,
        onChange,
        value: values[val.id],
      }

      return (
        <Col {...ColProps}>
          <HFormItemContent {...HFormItemContentProps} />
        </Col>
      );
    });
  }

  render() {
    const { extMap } = this.props;

    // 表单元素的扩展字段配置隐藏属性
    if (extMap.hide) return null;

    const FormItemProps = {
      ...this.getFormItemLayoutProps(extMap),
      ...this.getFormItemLabelProps(extMap),
      ...this.getFormItemStyleProps(extMap),
    }

    const RowProps = {
      type: 'flex',
      gutter: extMap.gutter || 8,
      style: this.getRowStyleProps(extMap),
    };

    return (
      <FormItem {...FormItemProps}>
        <Row {...RowProps}>
          {this.renderColElements()}
        </Row>
      </FormItem>
    )
  }
}

HFormItem.propTypes = {
  /**
   * 表单元素配置
   * @type {Array/object}
   */
  config: propTypes.oneOfType([
    propTypes.object,
    propTypes.array,
  ]).isRequired,

  /**
   * 表单元素扩展配置
   * @type {Object}
   */
  extMap: propTypes.object,

  /**
   * 可控表单搜集表单值的事件方法,
   * 绑定到 onChange/onBlur 事件
   * @type {func}
   */
  onChange: propTypes.func,

  /**
   * 记录表单元素是否是首次验证
   * @type {Object}
   */
  touches: propTypes.object,

  /**
   * 表单值
   * @type {Object}
   */
  values: propTypes.object,
};

export default HFormItem;
