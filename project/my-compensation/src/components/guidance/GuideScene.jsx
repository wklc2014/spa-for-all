import React from 'react';
import classnames from 'classnames';
import {Form, Button, Row, Col, Input} from 'antd';
const FormItem = Form.Item;

import util from '../../common/util.js';

const GuideScene = props => {
    const isEmpty = util.isEmptyObject(props.info);
    // 布局每行3个元素
    const layoutForNumPerline = 3;
    const totalItem = Object.keys(props.info).length;
    return (
        <div className="mb16">
            <div className="cardSubTitle">场景信息</div>
            <div className="pl22">
                {isEmpty ? (
                    <p>暂无场景信息</p>
                ) : (
                    <div className={`mockTable mb16 mockTable-${totalItem % layoutForNumPerline}`}>
                        {Object.keys(props.info).map((key, i) => {
                            const value = props.info[key];
                            return (
                                <div className="mockTableItem" key={i}>
                                    <div className="mockTableItemTh">{key}</div>
                                    <div className="mockTableItemTd">{value}</div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    )
};

export default GuideScene;
