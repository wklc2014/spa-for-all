
export default function getStyle({ type, params, style }) {
    const { toUpperCase, toLowerCase, addType } = params;
    const newStyle = { ...style };

    // css 处理大小写
    if (toUpperCase) {
        Object.assign(newStyle, { textTransform: 'uppercase' });
    } else if (toLowerCase) {
        Object.assign(newStyle, { textTransform: 'lowercase' });
    }

    switch (type) {
        case 'cascader':
        case 'date':
        case 'dateRange':
        case 'dateMonth':
        case 'time':
        case 'number':
        case 'select':
        case 'editor':
            Object.assign(newStyle, { width: '100%' });
            break;
    }
    return { style: newStyle };
}