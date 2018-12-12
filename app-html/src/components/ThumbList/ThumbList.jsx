/**
 * 缩略图列表信息
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';

import MainTitle from '../Title/MainTitle.jsx'

class ThumbList extends Component {

  static defaultProps = {
    list: [],
    title: '',
  }

  renderListEle = () => {
    const { list } = this.props;
    return list.map((val, i) => {
      const key = i;
      return (
        <div className="item" key={key}>
          <div className="detail">
            <a href="#" className="link-img">
              <img src={val.filePath} alt={val.title} />
            </a>
            <a href="#">
              <h2>{val.title}</h2>
            </a>
          </div>
        </div>
      )
    })
  }

  render() {
    const { title, list } = this.props;

    return (
      <Fragment>
        <MainTitle text={title} />
        <div className="thumb-list">
          {this.renderListEle()}
        </div>
      </Fragment>
    )
  }

}

ThumbList.propTypes = {
  list: propTypes.array,
  title: propTypes.string,
}

export default ThumbList;
