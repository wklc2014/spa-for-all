import { Button } from 'antd';
const ButtonGroup = Button.Group;

export default function OperateButton ({ onClick, disabled }) {
    const btns = [
        [
            { value: 'zoomIn', label: '缩小' },
            { value: 'zoomOut', label: '放大' }
        ],
        [
            { value: 'rotate', label: '旋转' },
            { value: 'reset', label: '还原' },
        ],
        [
            { value: 'prev', label: '上一张' },
            { value: 'next', label: '下一张' },
        ]
    ];

    const btnEle = btns.map((val, i) => {
        const style = {};
        if (btns.length === i + 1) {
            style.marginRight = 8;
        }
        const ele = val.map((v, j) => {
            return (
                <Button
                    key={j}
                    onClick={(e) => {onClick(v.value, e)}}
                    type="ghost"
                >
                    {v.label}
                </Button>
            )
        })
        return (
            <ButtonGroup
                key={i}
                disabled={disabled}
                style={style}
            >
                {ele}
            </ButtonGroup>
        );
    });

    const waperStyle = {
        textAlign: 'center',
        padding: '0 0 16px',
    }

    return <div style={waperStyle}>{ btnEle }</div>;
}