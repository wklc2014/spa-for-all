import React from 'react';
import styles from './BxsVoucherDetail.less';
import { Button } from 'antd';
const ButtonGroup = Button.Group;

const OPERATE_TYPE = [{
    id: 'zoomIn',
    text: '缩小',
    group: 1
}, {
    id: 'zoomOut',
    text: '放大',
    group: 1
}, {
    id: 'rotate',
    text: '旋转',
    group: 2
}, {
    id: 'reset',
    text: '还原',
    group: 2
}, {
    id: 'prev',
    text: '上一张',
    group: 3
}, {
    id: 'next',
    text: '下一张',
    group: 3
}];

const OperateButtons = (group, props) => {
    const btnEle = OPERATE_TYPE.filter(v => v.group === group).map(v => (
        <Button
            key={v.id}
            onClick={(e) => {props.onClick(v.id, e)}}
            type="ghost"
        >
            {v.text}
        </Button>
    ));
    const cls = group === OPERATE_TYPE.length ? '' : 'mr8';
    return (
        <ButtonGroup
            disabled={props.disabled}
            className={cls}
        >
            {btnEle}
        </ButtonGroup>
    );
}

const BxsVoucherDetailOperateButton = props => (
    <div className={styles.operateButtonGroup}>
        <div className="mb8">
            {OperateButtons(1, {...props})}
            {OperateButtons(2, {...props})}
            {OperateButtons(3, {...props})}
        </div>
    </div>
);

export default BxsVoucherDetailOperateButton;
