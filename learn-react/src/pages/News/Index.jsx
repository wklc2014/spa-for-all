import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

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
      <div>
        <h3>新闻页面</h3>
        <ul>{Children}</ul>
      </div>
    )
  }

}

News.propTypes = {

}

function mapStateToProps(state) {
  return {
    list: state.news.list,
  };
}

export default connect(mapStateToProps)(News);
