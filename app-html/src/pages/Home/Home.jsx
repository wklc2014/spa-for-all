/**
 * 首页
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import lodash from 'lodash';

import Header from '../../components/Header/Header.jsx';
import Space from '../../components/Space/Space.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import BackToTop from '../../components/BackToTop/BackToTop.jsx';
import MainTitle from '../../components/Title/MainTitle.jsx';
import PageCenter from '../../components/PageCenter/PageCenter.jsx';

import png1 from '../../common/images/shang-ye-an-li-1.jpg';
import png2 from '../../common/images/shang-ye-an-li-2.jpg';
import png3 from '../../common/images/shang-ye-an-li-3.jpg';
import png4 from '../../common/images/shang-ye-an-li-4.jpg';

class Home extends Component {

  static defaultProps = {
    news: [],
    project: [],
  }

  renderLouShiZiXunList = (start, length) => {
    const { news } = this.props;
    const topLisst = news.filter(v => v.top);
    const list = lodash.slice(topLisst, start, length);

    return list.map((val, i) => {
      const title = lodash.truncate(val.title, {
        length: 18,
      });
      const text = lodash.truncate(val.intro, {
        length: 60,
      });
      return (
        <div className="item" key={i}>
          <div className="detail">
            <h2>
              <Link to={`/news/${val.id}`}>{title}</Link>
            </h2>
            <div className="text">{text}</div>
          </div>
        </div>
      )
    })
  }

  renderXinWenDongTaiList = (start, length) => {
    const { news } = this.props;
    const topLisst = news.filter(v => v.top);
    const list = lodash.slice(topLisst, start, length);

    return list.map((val, i) => {
      const title = lodash.truncate(val.title, {
        length: 26,
      });
      return (
        <li key={i}>
          <Link to={`/news/${val.id}`}>{title}</Link>
        </li>
      )
    })
  }

  renderShangYeAnLiList = (start, length) => {
    const { business } = this.props;
    const topLisst = business.filter(v => v.top);
    const list = lodash.slice(topLisst, start, length);

    return list.map((val, i) => {
      const to = `/business/${val.id}`;
      return (
        <div className="item" key={i}>
          <Link to={to}>
            <img src={val.filePath} alt=""/>
          </Link>
        </div>
      )
    })
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
          <div className="lou-shi-zi-xun-wraper">
            <MainTitle text="楼市资讯" />
            <div className="lou-shi-zi-xun">
              <div className="list-bg">
                <div className="bg"></div>
                <div className="item">
                  {this.renderLouShiZiXunList(0, 1)}
                </div>
              </div>
              <div className="list">
                {this.renderLouShiZiXunList(1, 5)}
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
                  {this.renderXinWenDongTaiList(0, 5)}
                </ul>
              </div>
              <div className="list-bg">
                <div className="bg"></div>
                <div className="detail">
                  <h2>广州/珠江新城地块项目</h2>
                  <p>中山东区自07年确立中心商务区（CBD）地位以来，政府不断投入，高端产业及其产业链迅速涌入，形成大量的居住需求，周边租金一路看涨！东区中心价值快速飙升，住宅和写字楼的售价、租价均跃升4-5倍，稳占中山价值之首，“钱途看涨”</p>
                  <Link to="/business" className="btn">查看详情</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shang-ye-an-li-wraper">
            <MainTitle text="商业案例" />
            <div className="shang-ye-an-li">
              {this.renderShangYeAnLiList()}
            </div>
          </div>
        </PageCenter>
        <Footer />
        <BackToTop />
      </Fragment>
    )
  }

}

Home.propTypes = {
  news: propTypes.array,
  project: propTypes.array,
}

export default Home;

