import React from 'react';
import {Icon} from 'antd';

const CardTitle = props => {
    const {icon, text, className} = props.data;
    let iconEle = null;
    if (icon) {
        iconEle = <Icon type={icon} className="defIconFont" />;
    } else if (className) {
        iconEle = <i className={`defIconFont iconfont ${className}`} />;
    }
    return (
        <div className="cardTitle">
            {iconEle}
            {text}
            {props.children}
        </div>
    );
};

export default CardTitle;
