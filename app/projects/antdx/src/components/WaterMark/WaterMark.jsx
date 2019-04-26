/**
 * 前端水印组件
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';
import getWaterMarkTextByCanvas from './utils/getWaterMarkTextByCanvas.js';
import getWaterMarkImageByCanvas from './utils/getWaterMarkImageByCanvas.js';

class WaterMark extends Component {

  static defaultProps = {
    id: '',
    settings: {},
    url: '',
  }

  componentDidMount() {
    this.renderWarterMark(this.props);
    this.checkWarterMark(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
      this.renderWarterMark(nextProps);
    }
  }

  // 监听水印节点变化
  checkWarterMark = (props) => {
    const mutationObserver = new MutationObserver((mutations, instance) => {
      const dom = document.getElementById(props.id);
      if (!dom) {
        this.renderWarterMark(this.props);
      }
    });
    const config = {
      attributes: true,
      childList: true,
      characterData: true
    }
    mutationObserver.observe(document.body, config);
  }

  // 渲染水印节点
  renderWarterMark = (props) => {
    const { id, settings } = props;
    if (settings.url) {
      getWaterMarkImageByCanvas(settings).then((bg) => {
        this.createWaterMarkDom(id, bg);
      })
    } else {
      const bg = getWaterMarkTextByCanvas(settings);
      this.createWaterMarkDom(id, bg);
    }
  }

  // 创建水印 DOM 节点
  createWaterMarkDom = (id, bg) => {
    let dom = document.getElementById(id);
    if (!dom) {
      dom = document.createElement('div');
      dom.id = id;
      dom.style.position = 'fixed';
      dom.style.top = '0px';
      dom.style.bottom = '0px';
      dom.style.left = '0px';
      dom.style.right = '0px';
      dom.style.zIndex = 1000;
      dom.style.backgroundPosition = '0 0';
      dom.style.backgroundRepeat = 'repeat';
      dom.style.opacity = 0.09;
      dom.style.pointerEvents = 'none';
    }
    dom.style.backgroundImage = `url(${bg})`;
    document.body.appendChild(dom);
  }

  render() {
    return null;
  }
}

WaterMark.propTypes = {
  /**
   * 水印 DOM 节点 id
   * @type {String}
   */
  id: propTypes.string,

  /**
   * 水印配置
   * @type {Object}
   */
  settings: propTypes.object,
}

export default WaterMark;
