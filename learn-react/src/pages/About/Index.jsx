import React from 'react';
import propTypes from 'prop-types';
import getSVGTextBase64 from '../../utils/getSVGTextBase64.js';
import getCanvasTextBase64 from '../../utils/getCanvasTextBase64.js';

export default function About() {


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

  return (
    <div>
      <h3>关于我们</h3>
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
