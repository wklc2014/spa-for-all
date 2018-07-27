import React from 'react';
import propTypes from 'prop-types';

import getCanvasTextBase64 from '../../utils/getCanvasTextBase64.js';
import styles from './styles.less';

console.log('styles>>>', styles);

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
      <h3 className={styles.main}>关于我们</h3>
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
