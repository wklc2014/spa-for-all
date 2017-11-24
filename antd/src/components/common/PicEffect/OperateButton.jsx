import { Button } from 'antd';
import propTypes from 'prop-types';

const ButtonGroup = Button.Group;

export default function OperateButton ({ onClick, btns }) {

    if (!btns) return false;

    const defaultBtns = {
        zoomIn: '缩小',
        zoomOut: '放大',
        rotate: '旋转',
        reset: '还原',
        prev: '上一张',
        next: '下一张',
    };

    if (!btns.length) {
        btns = Object.keys(defaultBtns).map((v, i) => v);
    }

    const btnEle = btns.map((val, i) => {

        if (typeof val === 'string') {

            if (!defaultBtns[val]) {
                throw TypeError(`btns is error ${val}`);
            }

            return (
                <Button
                    key={i}
                    onClick={(e) => {onClick(val, e)}}
                    type="ghost"
                >
                    {defaultBtns[val]}
                </Button>
            );

        } else if (typeof val === 'object') {

            const btnKey = Object.keys(val)[0];
            const btnValue = val[btnKey];
            if (!defaultBtns[btnKey]) {
                throw TypeError(`btns is error ${btnKey}`);
            }

            return (
                <Button
                    key={i}
                    onClick={(e) => {onClick(btnKey, e)}}
                    type="ghost"
                >
                    {btnValue}
                </Button>
            );
        }

        if (!defaultBtns[btnKey]) {
            throw TypeError(`btns is error ${val}`);
        }
    });

    const waperStyle = {
        textAlign: 'center',
        padding: '0 0 16px',
    }

    return (
        <div style={waperStyle}>
            <ButtonGroup>{btnEle}</ButtonGroup>
        </div>
    );
}

OperateButton.propTypes = {
    onClick: propTypes.func.isRequired,
    btns: propTypes.array,
};
