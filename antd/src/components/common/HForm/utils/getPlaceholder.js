
export default function getPlaceholder({ placeholder, label, id, type }) {
    let newPlaceholder = placeholder || `请输入${label || id}`;
    switch (type) {
        case 'dateRange':
            newPlaceholder = [
                `开始${newPlaceholder}`,
                `结束${newPlaceholder}`,
            ];
        break;
    }
    return { placeholder: newPlaceholder };
}