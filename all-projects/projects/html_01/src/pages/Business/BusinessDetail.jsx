/**
 * 商业招租 - 详情页
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
import Space from '../../components/Space/Space.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import BackToTop from '../../components/BackToTop/BackToTop.jsx';
import MainTitle from '../../components/Title/MainTitle.jsx';
import PrimaryTitle from '../../components/Title/PrimaryTitle.jsx';
import PageCenter from '../../components/PageCenter/PageCenter.jsx';
import Share from '../../components/Share/Share.jsx';

class BusinessDetail extends Component {

  static defaultProps = {
    detail: {},
  }

  renderDetailDatas = (values = []) => {
    return values.map((val, i) => {

      return (
        <div className="data-item" key={i}>
          <div className="title">{val.label}</div>
          <div className="text">{val.value}</div>
        </div>
      )
    })
  }

  render() {
    const { detail } = this.props;

    if (!Object.keys(detail).length) {
      return null;
    }

    return (
      <Fragment>
        <Header />
        <Nav />
        <PageCenter className="business-container">
          <div className="banner-bg"></div>
          <div className="business-wraper">
            <MainTitle text="产品详情" />
            <div className="business-wraper">
              <div className="detail-box">
                <div className="business-detail">
                  <div className="detail-img">
                    <img src={detail.filePath} alt={detail.title} />
                  </div>
                  <div className="detail-content">
                    <h3>{detail.title}</h3>
                    <div className="price">
                      <span className="text-1">价格：</span>
                      <span className="text-2">￥</span>
                      <span className="text-3">{detail.price}</span>
                    </div>
                    <div className="btn">预约</div>
                  </div>
                </div>
              </div>
              <div className="detail-box">
                <PrimaryTitle text="产品参数" />
                <div className="detail-data">
                  {this.renderDetailDatas(detail.datas)}
                </div>
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

BusinessDetail.propTypes = {
  detail: propTypes.object,
}

function mapStateToProps(state, ownProps) {
  const id = lodash.get(ownProps, 'match.params.id');
  const detail = state.business.find(val => val.id == id) || {};
  return {
    detail,
  };
}

export default connect(mapStateToProps)(BusinessDetail);

