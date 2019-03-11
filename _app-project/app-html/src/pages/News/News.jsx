/**
 * 新闻动态
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import lodash from 'lodash';
import moment from 'moment';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import BackToTop from '../../components/BackToTop/BackToTop.jsx';
import MainTitle from '../../components/Title/MainTitle.jsx';
import PageCenter from '../../components/PageCenter/PageCenter.jsx';
import Share from '../../components/Share/Share.jsx';
import Space from '../../components/Space/Space.jsx';

class News extends Component {

  static defaultProps = {

  }

  renderThumbList = (start, length) => {
    const { news } = this.props;
    const list = lodash.slice(news, start, length);
    return list.map((val, i) => {
      const title = lodash.truncate(val.title, {
        length: 20,
      });
      const text = lodash.truncate(val.intro, {
        length: 50,
      });
      return (
        <div className="item" key={i}>
          <div className="detail">
            <h2 className="title">
              <span>{val.time}</span>
              <Link to={`/news/${val.id}`}>{title}</Link>
            </h2>
            <div className="text">{text}</div>
          </div>
        </div>
      )
    })
  }

  renderNewsList = (start, length) => {
    const { news } = this.props;
    const list = lodash.slice(news, start, length);
    return list.map((val, i) => {
      const title = lodash.truncate(val.title, {
        length: 50,
      });
      const text = lodash.truncate(val.intro, {
        length: 120,
      });
      const time = moment(val.time);
      return (
        <div className="item" key={i}>
          <div className="time">
            <span>{time.format('MM/DD')}</span>
            <span>{time.format('YYYY')}</span>
          </div>
          <div className="detail">
            <h2 className="title">
              <Link to={`/news/${val.id}`}>{title}</Link>
            </h2>
            <div className="text">{text}</div>
          </div>
        </div>
      )
    })
  }

  render() {

    return (
      <Fragment>
        <Header />
        <Nav />
        <PageCenter className="news-container">
          <div className="banner-bg"></div>
          <div className="news-wraper">
            <MainTitle text="新闻资讯" />
            <div className="news-thumb">
              <div className="item-bg" />
              <div className="item-list">
                {this.renderThumbList(0, 3)}
              </div>
            </div>
            <div className="news-list">
              <div className="item-list">
                {this.renderNewsList(4)}
              </div>
            </div>
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

News.propTypes = {

}

export default News;
