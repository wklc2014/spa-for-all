import _ from 'lodash';
import './css/logo.css';

import img_1 from './image/04.jpg';
import img_2 from './image/13.jpg';

import Data from './data/data.xml';

function component(text = 'default text') {
    var element = document.createElement('div');

    // 处理样式
    element.innerHTML = text;
    element.classList.add('hello');

    // 处理字体
    var fontEle = document.createElement('i');
    fontEle.classList.add('iconfont');
    fontEle.classList.add('icon-font13');
    element.appendChild(fontEle);

    // 处理图片
    var myIcon = new Image();
    myIcon.src = img_1;
    element.appendChild(myIcon);

    console.log(Data);

    return element;
}

export default component;
