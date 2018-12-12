/**
 * 首页
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';

import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import BackToTop from '../../components/BackToTop/BackToTop.jsx';
import MainTitle from '../../components/Title/MainTitle.jsx';

import png1 from '../../common/images/shang-ye-an-li-1.jpg';
import png2 from '../../common/images/shang-ye-an-li-2.jpg';
import png3 from '../../common/images/shang-ye-an-li-3.jpg';
import png4 from '../../common/images/shang-ye-an-li-4.jpg';

class Home extends Component {

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
        <div className="lou-shi-zi-xun-wraper">
          <MainTitle text="楼市资讯" />
          <div className="lou-shi-zi-xun">
            <div className="list-bg">
              <div className="bg"></div>
              <div className="item">
                <div className="detail">
                  <h2>
                    <a href="#">广州楼市：新盘不多成交平淡 二手楼市“重启”</a>
                  </h2>
                  <p>春节期间，受“出城”效应影响，广州间楼市平淡，市场几乎没有新盘推出，但不少楼盘春节不打烊...</p>
                </div>
              </div>
            </div>
            <div className="list">
              <div className="item">
                <div className="detail">
                  <h2>
                    <a href="#">受益于房价上涨 逾7成上市房企报喜</a>
                  </h2>
                  <p>绿地控股日前发布2016年度业绩快报。快报显示，2016年，公司预计实现营业收入2594.46亿元，同比增长25....</p>
                </div>
              </div>
              <div className="item">
                <div className="detail">
                  <h2>
                    <a href="#">房企当下拿地 到底是"馅饼"还是"陷阱"？</a>
                  </h2>
                  <p>统计显示，仅7月前10天，全国单幅地块成交金额超过5亿的地块达29宗，其中溢价率超50%的地王达18宗。一二线城市...</p>
                </div>
              </div>
              <div className="item">
                <div className="detail">
                  <h2>
                    <a href="#">穆迪：2017年中国房地产销售增速将放缓</a>
                  </h2>
                  <p>国际信用评级机构穆迪近日发布报告预测，中国各级政府加强调控抑制房价上涨，2017年中国房地产市场将会降温，销售增速...</p>
                </div>
              </div>
              <div className="item">
                <div className="detail">
                  <h2>
                    <a href="#">2016城市卖地收入排行榜 多城土地收入创纪录</a>
                  </h2>
                  <p>2016年中国房市出现的一波快速上涨行情带火了土地市场。多个城市土地出让收入创下历史较高纪录，全国“卖地”收入千亿...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fu-wu-zong-zhi-wraper">
          <div className="fu-wu-zong-zhi">
            <div className="item"></div>
            <div className="item">
              <div className="detail">
                <h2>服务宗旨：</h2>
                <h3>始终坚持贯彻“诚信服务，优质管理、客户至上、不断创新、节能环保”</h3>
                <p>SERVICE MISSION: ALWAYS ADHERE TO THE "INTEGRITY, QUALITY MANAGEMENT, CUSTOMER FIRST, CONTINUOUS INNOVATION, ENERGY SAVING AND ENVIRONMENTAL PROTECTION."</p>
              </div>
            </div>
            <div className="item"></div>
          </div>
        </div>
        <div className="xin-wen-dong-tai-wraper">
          <MainTitle text="新闻动态" />
          <div className="xin-wen-dong-tai">
            <div className="list">
              <ul>
                <li><a href="#">去年楼市去库存效果明显 部分城市已经转入补库存阶段</a></li>
                <li><a href="#">2016城市卖地收入排行榜</a></li>
                <li><a href="#">房企当下如果拿地 到底是"馅饼"还是"陷阱"？</a></li>
                <li><a href="#">房企当下拿地 到底是"馅饼"还是"陷阱"？</a></li>
                <li><a href="#">高端产业及其产业链迅速涌入</a></li>
                <li><a href="#">2016城市卖地收入排行榜 多城土地收入创纪录</a></li>
              </ul>
            </div>
            <div className="list-bg">
              <div className="bg"></div>
              <div className="detail">
                <h2>广州/珠江新城地块项目</h2>
                <p>中山东区自07年确立中心商务区（CBD）地位以来，政府不断投入，高端产业及其产业链迅速涌入，形成大量的居住需求，周边租金一路看涨！东区中心价值快速飙升，住宅和写字楼的售价、租价均跃升4-5倍，稳占中山价值之首，“钱途看涨”</p>
                <button>查看详情</button>
              </div>
            </div>
          </div>
        </div>
        <div className="shang-ye-an-li-wraper">
          <MainTitle text="商业案例" />
          <div className="shang-ye-an-li">
            <div className="item">
              <a href="#">
                <img src={png1} alt=""/>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src={png2} alt=""/>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src={png3} alt=""/>
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src={png4} alt=""/>
              </a>
            </div>
          </div>
        </div>
        <Footer />
        <BackToTop />
      </Fragment>
    )
  }

}

Home.propTypes = {

}

export default Home;

