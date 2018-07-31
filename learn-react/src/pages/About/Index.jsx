import React from 'react';
import propTypes from 'prop-types';

import getCanvasTextBase64 from '../../utils/getCanvasTextBase64.js';
// import styles from './images/css.css';
import styles from './images/styles.less';

import pic_1 from './images/1.png';
import pic_2 from './images/2.png';
import pic_3 from './images/3.png';

// import city from './city.json';
// const city = require('./city.json');

export default function About(props) {

  const watermark = getCanvasTextBase64('关于我们', {
    fontsize: 40,
    fontcolor: '#f33',
    bgcolor: '#fff',
    rotate: -20,
    fontfamily: 'Arial',
    textalign: 'middle',
    opacity: 0.5,
    size: 200,
  })

  const divStyle = {
    width: 200,
    height: 200,
    border: '1px solid #ddd',
    background: `url(${watermark})`,
  }

  // const cityEle = city.map((val, i) => {
  //   const key = i;
  //   const { name, children = [] } = val;
  //   const ddEle = children.map((v, j) => <dd key={j}>{v.name}</dd>);
  //   return (
  //     <li key={key}>
  //       <dl>
  //         <dt>{name}</dt>
  //         {ddEle}
  //       </dl>
  //     </li>
  //   )
  // })

  return (
    <div>
      <h3 className={styles.mainBox}>关于我们</h3>
      <h4 className={styles.itemBox}>期间，<span>姐姐也很支持弟弟的想法</span>，但因弟弟给了一年的租金，而房屋租期刚过半年，涉及的问题很多。此后，房子顺利过户，但交易时就如何过户、税费缴纳、租金尾款抵扣等情况，姐弟俩只是口头达成一致意见。不想，矛盾也在此中潜伏。</h4>
      <p>
        <img src={pic_1} alt="" />
      </p>
      <div style={divStyle}>
        <p>12312</p>
        <p>12312</p>
        <p>12312</p>
        <p>12312</p>
        <p>12312</p>
      </div>
    </div>
  )
}

About.propTypes = {

}

About.defaultProps = {

}
