/**
 * 新闻资讯 - 详情页
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import lodash from 'lodash';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import BackToTop from '../../components/BackToTop/BackToTop.jsx';
import MainTitle from '../../components/Title/MainTitle.jsx';
import PageCenter from '../../components/PageCenter/PageCenter.jsx';
import Share from '../../components/Share/Share.jsx';
import Space from '../../components/Space/Space.jsx';

class NewsDetail extends Component {

  static defaultProps = {
    detail: {},
  }

  render() {
    const { detail } = this.props;

    return (
      <Fragment>
        <Header />
        <Nav />
        <PageCenter className="news-container">
          <div className="banner-bg"></div>
          <div className="news-detail-wraper">
            <h2>{detail.title}</h2>
            <div className="time">
              <span>发表时间：</span>
              <span>{detail.time}</span>
            </div>
            <div className="content" dangerouslySetInnerHTML = {{ __html: detail.content }} />
          </div>
          <Share />
          <Space size="large" />
        </PageCenter>
        <Footer />
        <BackToTop />
      </Fragment>
    )
  }

}

NewsDetail.propTypes = {
  detail: propTypes.object,
}

function mapStateToProps(state, ownProps) {
  const id = lodash.get(ownProps, 'match.params.id');
  const detail = state.news.find(val => val.id == id) || {};
  return {
    detail,
  };
}

export default connect(mapStateToProps)(NewsDetail);