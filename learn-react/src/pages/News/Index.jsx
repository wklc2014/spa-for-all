import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card } from 'antd';

class News extends Component {

  render() {
    const { list } = this.props;

    const Children = list.map((val, i) => {
      const { title, id, content } = val;
      const key = id;
      return (
        <li key={key}>
          <span>{id}. </span>
          <span>{title}：</span>
          <span>{content}</span>
        </li>
      )
    })

    return (
      <Card>
        <h3>新闻页面</h3>
        <ul>{Children}</ul>
      </Card>
    )
  }

}

News.propTypes = {

}

export default News;
