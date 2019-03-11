/**
 * 联系我们
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

class Contact extends Component {

  static defaultProps = {

  }

  componentDidMount() {
    const map = new BMap.Map("map-container");          // 创建地图实例
    const point = new BMap.Point(116.404, 39.915);  // 创建点坐标
    map.centerAndZoom(point, 15);
  }

  render() {
    const {

    } = this.props;

    return (
      <Fragment>
        <Header />
        <Nav />
        <PageCenter className="contact-container">
          <div className="banner-bg"></div>
          <div className="contact-wraper">
            <MainTitle text="关于我们" />
            <div className="about-us">
              <div className="item-bg"></div>
              <div className="item-text">
                <p className="item">深圳市XXX装饰设计工程有限公司是深圳装饰行业中的一支新力军。公司人才鼎盛，资金实力雄厚，XXX决心打造深圳装饰行业的品牌。公司员工团结一致向这一目标迈进。公司主要致力于国内外高尚住宅、别墅、园林、写字楼、商铺、酒店等设计装饰工程。深圳市XXX股份帝庭装饰设计工程有限公司秉乘“口碑相传、永续经营”的经营理念，坚持“规......</p>
              </div>
            </div>
            <MainTitle text="联系我们" />
            <div className="phone-us">
              <div id="map-container" className="item-map"></div>
              <div className="item-text">
                <div className="item">联系QQ：258506508</div>
                <div className="item">手机号码：130000000</div>
                <div className="item">联系邮箱：contact@fkadjkhsf.co</div>
                <div className="item">联系电话：020-000000    000-000000</div>
                <div className="item">联系地址：XXX省XXX市XXX县XXX路XXX号</div>
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

Contact.propTypes = {

}

export default Contact;
