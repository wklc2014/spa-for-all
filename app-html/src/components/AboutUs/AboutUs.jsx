/**
 * 关于我们
 */
import React from 'react';
import propTypes from 'prop-types';
import MainTitle from '../Title/MainTitle.jsx';

const AboutUs = (props) => {

  const {

  } = props;

  return (
    <div className="about-us-wraper">
      <MainTitle text="关于我们" />
      <div className="about-us">
        <div className="item bg"></div>
        <div className="item">
          <p>深圳市XXX装饰设计工程有限公司是深圳装饰行业中的一支新力军。公司人才鼎盛，资金实力雄厚，XXX决心打造深圳装饰行业的品牌。公司员工团结一致向这一目标迈进。公司主要致力于国内外高尚住宅、别墅、园林、写字楼、商铺、酒店等设计装饰工程。深圳市XXX股份帝庭装饰设计工程有限公司秉乘“口碑相传、永续经营”的经营理念，坚持“规......</p>
        </div>
      </div>
    </div>
  )
}

AboutUs.propTypes = {

}

AboutUs.defaultProps = {

}

export default AboutUs;
