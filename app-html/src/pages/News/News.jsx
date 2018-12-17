/**
 * 新闻动态
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import BackToTop from '../../components/BackToTop/BackToTop.jsx';
import MainTitle from '../../components/Title/MainTitle.jsx';
import PageCenter from '../../components/PageCenter/PageCenter.jsx';

class News extends Component {

  static defaultProps = {

  }

  render() {
    const {

    } = this.props;

    return (
      <Fragment>
        <Header />
        <Nav />
        <Banner />
        <PageCenter>
          <div className="news-container">
            <MainTitle text="新闻资讯" />
            <div className="news-thumb">
              <div className="item-bg" />
              <div className="item-list">
                <div className="item">
                  <div className="detail">
                    <h2 className="title">
                      <span>2018-10-22</span>
                      <a href="#">广州楼市：新盘不多成交平淡 二手楼市“重启”</a>
                    </h2>
                    <p className="text">2016年，全国楼市去库存效果明显。易居房地产研究院数据显</p>
                  </div>
                </div>
                <div className="item">
                  <div className="detail">
                    <h2 className="title">
                      <span>2018-10-22</span>
                      <a href="#">广州楼市：新盘不多成交平淡 二手楼市“重启”</a>
                    </h2>
                    <p className="text">2016年，全国楼市去库存效果明显。易居房地产研究院数据显</p>
                  </div>
                </div>
                <div className="item">
                  <div className="detail">
                    <h2 className="title">
                      <span>2018-10-22</span>
                      <a href="#">广州楼市：新盘不多成交平淡 二手楼市“重启”</a>
                    </h2>
                    <p className="text">2016年，全国楼市去库存效果明显。易居房地产研究院数据显</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="news-list">
              <div className="item-list">
                <div className="item">
                  <div className="time">
                    <span>09/27</span>
                    <span>2017</span>
                  </div>
                  <div className="detail">
                    <h2 className="title">
                      <a href="#">广州楼市：新盘不多成交平淡 二手楼市“重启”</a>
                    </h2>
                    <p className="text">2016年，全国楼市去库存效果明显。易居房地产研究院数据显</p>
                  </div>
                </div>
                <div className="item">
                  <div className="time">
                    <span>09/27</span>
                    <span>2017</span>
                  </div>
                  <div className="detail">
                    <h2 className="title">
                      <a href="#">广州楼市：新盘不多成交平淡 二手楼市“重启”</a>
                    </h2>
                    <p className="text">2016年，全国楼市去库存效果明显。易居房地产研究院数据显</p>
                  </div>
                </div>
                <div className="item">
                  <div className="time">
                    <span>09/27</span>
                    <span>2017</span>
                  </div>
                  <div className="detail">
                    <h2 className="title">
                      <a href="#">广州楼市：新盘不多成交平淡 二手楼市“重启”</a>
                    </h2>
                    <p className="text">2016年，全国楼市去库存效果明显。易居房地产研究院数据显</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
