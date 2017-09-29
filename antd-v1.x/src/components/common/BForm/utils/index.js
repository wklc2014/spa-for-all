import lodash from 'lodash';
import moment from 'moment';

export const DATE_PICKER_OPTIONS = {
    format: 'YYYY-MM-DD HH:mm:ss',
    showTime: true,
    disabledTime: (_, type) => {
        if (type === 'start') {
            return {
                disabledHours: () => range({ show: [1, 2, 3, 4] }),
                disabledMinutes: () => range({ start: 0, end: 31 }),
                disabledSeconds: () => range({ start: 55, end: 56 }),
            };
        } else if (type === 'end') {
            return {
                disabledHours: () => range({ show: [1, 2, 3, 4] }),
                disabledMinutes: () => range({ start: 0, end: 31 }),
                disabledSeconds: () => range({ start: 55, end: 56 }),
            };
        }
        return {
            disabledHours: () => range(),
            disabledMinutes: () => range({ start: 30, end: 60 }),
            disabledSeconds: () => range({ start: 55, end: 60 }),
        };
    }
}

function range(params = {}) {
    let result = [];
    if (params.show) return params.show;
    const start = params.start || 0;
    const end = params.end || 0;
    const filter = params.filter || [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    result = result.filter((v, i) => filter.indexOf(v) === -1);
    return result;
}
