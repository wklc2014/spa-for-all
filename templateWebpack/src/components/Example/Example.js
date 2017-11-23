import React, { Component } from 'react';
import _ from 'lodash';
import classNames from './css/logo.css';

import img_1 from './image/04.jpg';
import img_2 from './image/13.jpg';
import img_3 from './image/05.jpg';

import Data from './data/data.xml';

export default function component() {

    // var element = document.createElement('div');

    // // 处理样式
    // element.innerHTML = text;
    // element.classList.add('hello');

    // // 处理字体
    // var fontEle = document.createElement('i');
    // fontEle.classList.add('iconfont');
    // fontEle.classList.add('icon-font13');
    // element.appendChild(fontEle);

    console.log('data>>>', Data);

    const wraperStyle = {
        padding: 20
    }

    return (
        <section style={wraperStyle}>
            <img src={img_3} alt="" width="200" />
            <h3>
                <i className="iconfont icon-font13" />
            </h3>
            <p className="hello">adsdsf</p>
        </section>
    );
}