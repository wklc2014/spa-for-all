import React from 'react';

export default {
    button: ({ data, api, onChange }) => {
        return data.map((v, i) => {
            const styles = { marginBottom: 8 };
            if (i < data.length - 1) {
                styles.marginRight = '8px';
            }

            const cProps = {
                key: i,
                type: v.type,
                style: styles,
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
                        <Button {...cProps}>{v.label}</Button>
                    </Cascader>
                );
            }

            return (
                <Button
                    {...cProps}
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
    },
}
