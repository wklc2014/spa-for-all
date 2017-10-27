
export default function getValue(value, params = {}) {
    const { toUpperCase, toLowerCase } = params;
    if (toUpperCase && typeof value === 'string') {
        value = value.toUpperCase();
    } else if (toLowerCase && typeof value === 'string') {
        value = value.toLowerCase();
    }
    return value;
}