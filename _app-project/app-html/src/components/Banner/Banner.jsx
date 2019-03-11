/**
 * banner
 */
import React, { Component } from 'react';
import propTypes from 'prop-types';

import PageCenter from '../PageCenter/PageCenter.jsx';

import Swiper from '../../common/js/swiper.min.js';
import {
  swiperAnimateCache,
  swiperAnimate,
} from '../../common/js/swiper.animate1.0.3.min.js';

class Banner extends Component {

  static defaultProps = {

  }

  componentDidMount() {
    this.mySwiper = new Swiper ('.swiper-container', {
      effect : 'cube',
      loop : true,
      speed: 600,
      mousewheel: {
        releaseOnEdges: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })
  }

  componentWillUnmount() {
    this.mySwiper && this.mySwiper.destroy(true, true);
  }

  render() {
    const {

    } = this.props;

    return (
      <PageCenter className="banner-container">
        <div className="banner-wraper">
          <div className="banner swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide banner-1">
                <div className="banner-text">
                  <div className="big">给你一个温馨的家</div>
                  <div className="small">是我们一直努力做的事情</div>
                </div>
              </div>
              <div className="swiper-slide banner-2">
                <div className="banner-text">
                  <div className="big">给你一个温馨的家</div>
                  <div className="small">是我们一直努力做的事情</div>
                </div>
              </div>
              <div className="swiper-slide banner-3">
                <div className="banner-text">
                  <div className="big">给你一个温馨的家</div>
                  <div className="small">是我们一直努力做的事情</div>
                </div>
              </div>
              <div className="swiper-slide banner-4">
                <div className="banner-text">
                  <div className="big">给你一个温馨的家</div>
                  <div className="small">是我们一直努力做的事情</div>
                </div>
              </div>
              <div className="swiper-slide banner-5">
                <div className="banner-text">
                  <div className="big">给你一个温馨的家</div>
                  <div className="small">是我们一直努力做的事情</div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </PageCenter>
    )
  }

}

Banner.propTypes = {

}

export default Banner;
