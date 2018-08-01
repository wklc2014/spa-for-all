import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card } from 'antd';

import styles from './styles.less';

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
      <div className={styles.mainBox}>
        <Card title="新闻页面">
          <ul className={styles.list}>{Children}</ul>
        </Card>
      </div>
    )
  }

}

News.propTypes = {

}

export default News;
