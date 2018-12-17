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

  render() {
    const { business } = this.props;

    return (
      <Fragment>
        <Header />
        <Nav />
        <Banner />
        <PageCenter>
          <Space />
          <ThumbList title="商业招租" list={business.businessLet} />
          <ThumbList title="二手房" list={business.secondHouse} />
          <ThumbList title="新房" list={business.newHouse} />
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
