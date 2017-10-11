import moment from 'moment';

export default {

    namespace: 'UserSurvery',

    state: {
        Basic: {
            lossPart: ['安徽省', '池州市', '石台县'],
            // userName: 'AB',
            carNumber: 'hijklmn',
            payMoney: ['03', '01', '06'],
            // reportDate: moment('2015-12-20 06:20:45'),
            translateDate: [
                // moment('2014-12-20 06:20:45'),
                // moment('2016-12-20 06:20:45')
            ],
            address: '天府软件园D4',
            contactPhone: '',
            // emailContent: '<p>123</p>',
            formLayout: 'vertical',
        },
    },

    subscriptions: {
        setup({ dispatch, history }) { // eslint-disable-line
        },
    },

    effects: {

    },

    reducers: {
        update(state, action) {
            const { modelKey, modelValue } = action.payload;
            return Object.assign({}, state, {
                [modelKey]: Object.assign({}, state[modelKey], modelValue),
            })
        },
        reset(state, action) {
            return Object.assign({}, state, { Basic: {} });
        }
    },

};
