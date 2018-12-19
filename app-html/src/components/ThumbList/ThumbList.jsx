/**
 * 缩略图列表信息
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
      const to = `/business/${val.id}`;
      return (
        <div className="item" key={key}>
          <div className="detail">
            <Link to={to} className="link-img">
              <img src={val.filePath} alt={val.title} />
            </Link>
            <Link to={to}>
              <h2>{val.title}</h2>
            </Link>
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
