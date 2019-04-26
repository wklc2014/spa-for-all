/**
 * 在线预约
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
import Share from '../../components/Share/Share.jsx';
import Space from '../../components/Space/Space.jsx';

class MakeOnline extends Component {

  static defaultProps = {

  }

  render() {
    const {

    } = this.props;

    return (
      <Fragment>
        <Header />
        <Nav />
        <PageCenter className="make-online-container">
          <div className="banner-bg" />
          <div className="make-online-wraper">
            <MainTitle text="在线预约" />
            <div className="make-online">
              <div className="item">
                <div className="form-label">
                  <span className="required">*</span>
                  姓名：
                </div>
                <div className="form-control">
                  <input type="text" className="form-item" />
                  <div className="form-help">姓名必填</div>
                </div>
              </div>
              <div className="item">
                <div className="form-label">
                  <span className="required">*</span>
                  手机：
                </div>
                <div className="form-control">
                  <input type="text" className="form-item" />
                  <div className="form-help">姓名必填</div>
                </div>
              </div>
              <div className="item">
                <div className="form-label">
                  <span className="required">*</span>
                  预约时间：
                </div>
                <div className="form-control">
                  <input type="text" className="form-item" />
                  <div className="form-help">姓名必填</div>
                </div>
              </div>
              <div className="item">
                <div className="form-control offset">
                  <button className="form-item form-btn">提交</button>
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

MakeOnline.propTypes = {

}

export default MakeOnline;
