import citys from '../common/ChineseCities.js';

export default function getData({ type, params }) {
    const { data, city } = params;
    let newData = data || [];
    switch (type) {
        case 'cascader':
            if (city && citys[city]) {
                newData = [...citys[city]];
            }
            break;
    }
    return { data: newData };
}
