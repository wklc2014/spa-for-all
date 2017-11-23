
export default function getPlaceholder({ placeholder, label, id, type }) {

    if (!placeholder && !label && !id) {
        return null;
    }

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