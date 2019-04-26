/**
 * 商业招租
 */
import React, { Component, Fragment } from 'react';
import propTypes from 'prop-types';

import Header from '../../components/Header/Header.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import BackToTop from '../../components/BackToTop/BackToTop.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import ThumbList from '../../components/ThumbList/ThumbList.jsx';
import PageCenter from '../../components/PageCenter/PageCenter.jsx';
import Space from '../../components/Space/Space.jsx';

class Business extends Component {

  static defaultProps = {

  }

  getList = (type) => {
    const { business } = this.props;
    return business.filter(v => v.type === type);
  }

  render() {

    return (
      <Fragment>
        <Header />
        <Nav />
        <PageCenter className="business-container">
          <div className="banner-bg"></div>
          <div className="business-wraper">
            <ThumbList title="商业招租" list={this.getList('shop')} />
            <ThumbList title="二手房" list={this.getList('secondHouse')} />
            <ThumbList title="新房" list={this.getList('newHouse')} />
          </div>
        </PageCenter>
        <Footer />
        <BackToTop />
      </Fragment>
    )
  }

}

Business.propTypes = {

}

export default Business;
