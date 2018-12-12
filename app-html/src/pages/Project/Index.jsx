/**
 * 项目案例
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

class Project extends Component {

  static defaultProps = {

  }

  render() {
    const { project } = this.props;

    return (
      <Fragment>
        <Header />
        <Nav />
        <Banner />
        <PageCenter>
          <ThumbList title="项目案例" list={project} />
        </PageCenter>
        <Footer />
        <BackToTop />
      </Fragment>
    )
  }

}

Project.propTypes = {

}

export default Project;
