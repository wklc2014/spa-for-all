
export default function getChildGridLayout(childSpan = 12) {
    const left = {
        xs: 24,
        sm: childSpan,
        md: childSpan,
        lg: childSpan,
        xl: childSpan,
        style: { marginBottom: '8px' },
    };

    const right = {
        xs: 24,
        sm: 24 - childSpan,
        md: 24 - childSpan,
        lg: 24 - childSpan,
        xl: 24 - childSpan,
    };

    return { left, right };
}