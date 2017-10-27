import { Cascader, Button } from 'antd';

function addButton({ data, defaultApi, onChange }) {

    return data.map((v, i) => {
        const btnStyle = { marginBottom: 8 };
        if (i < data.length - 1) {
            btnStyle.marginRight = '8px';
        }

        const bProps = {
            key: i,
            type: v.type,
            style: btnStyle,
            size: defaultApi.size || 'large',
            disabled: defaultApi.disabled,
        };

        if (v.value === 'city') {
            return (
                <Cascader
                    key={i}
                    options={v.citys}
                    onChange={(value) => {
                        onChange({
                            id,
                            value: v.value,
                            addType: 'button',
                            addValue: value,
                        });
                    }}
                >
                    <Button {...bProps}>{v.label}</Button>
                </Cascader>
            );
        }

        return (
            <Button
                {...bProps}
                onClick={() => {
                    onChange({
                        id,
                        value: v.value,
                        addType: 'button',
                    });
                }}
            >
                {v.label}
            </Button>
        )
    });
}

export default addButton;
