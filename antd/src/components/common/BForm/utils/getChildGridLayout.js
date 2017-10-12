// 设置表单元素内部分列显示布局
export default function getChildGridLayout(childSpan) {
    const span = childSpan || 12;

    const leftProps = {
        xs: 24,
        sm: span,
        md: span,
        lg: span,
        xl: span,
        style: {
            marginBottom: '8px',
        }
    };

    const rightProps = {
        xs: 24,
        sm: 24 - span,
        md: 24 - span,
        lg: 24 - span,
        xl: 24 - span,
    };

    return { left: leftProps, right: rightProps };
}
