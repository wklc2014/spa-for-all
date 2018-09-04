import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Card } from 'antd';

import styles from './styles.less';

function News(props) {
  const { list } = props;

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
    <div>
      <h2>新闻页面</h2>
      <Card>
        <ul className={styles.list}>{Children}</ul>
      </Card>
    </div>
  )
}

News.propTypes = {

}

export default News;
