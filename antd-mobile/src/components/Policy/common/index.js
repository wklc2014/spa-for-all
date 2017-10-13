import rules from '../../common/BForm/util/rules.js';

export const UserSurvery = [
    {
        order: 1,
        id: 'username',
        type: 'input',
        params: {
            label: <div>用户姓名</div>,
        },
        api: {
            type: 'money',
            clear: true,
            maxLength: 10,
            placeholder: 'money keyboard',
            locale: { confirmLabel: '计算' },
        }
    },
    {
        order: 2,
        id: 'bankCard',
        type: 'input',
        params: {
            label: '银行卡',
        },
        api: {
            type: 'bankCard',
            placeholder: '请输入银行卡号',
        }
    },
    {
        order: 3,
        id: 'userPhone',
        type: 'input',
        params: {
            label: '手机号码',
        },
        api: {
            type: 'phone',
            placeholder: '请输入手机号码',
        },
        options: {
            rules: [
                { required: true, message: '手机号码必填' },
                { validator: rules.phone, message: '手机号码不正确' },
            ],
        }
    },
    {
        order: 4,
        id: 'email',
        type: 'input',
        params: {
            label: '邮箱',
        },
        api: {
            type: 'text',
        },
        options: {
            rules: [
                { type: 'email', message: '邮箱地址不合法' },
            ],
        }
    },
    {
        order: 5,
        id: 'userAge',
        type: 'input',
        params: {
            label: '数字输入',
        },
        api: {
            type: 'number',
        }
    },
    {
        order: 6,
        id: 'userPay',
        type: 'input',
        params: {
            label: '人民币',
        },
        api: {
            type: 'money',
            extra: '¥',
        }
    },
    {
        order: 7,
        id: 'accidentTime',
        type: 'date',
        params: {
            label: '出险时间',
        },
        api: {
            mode: 'date',
            title: '选择出险时间',
        }
    },
    {
        order: 8,
        id: 'interests',
        type: 'checkbox',
        params: {
            data: [
                { value: 0, label: '足球' },
                { value: 1, label: '篮球' },
                { value: 2, label: '乒乓球' },
            ]
        },
    },
    {
        order: 9,
        id: 'files',
        type: 'image',
        params: {
            selectable: 3,
        },
    },
    {
        order: 10,
        id: 'picker',
        type: 'picker',
        api: {
            title: 'Picker选择器',
            cols: 3,
        },
        params: {
            label: '选择季节',
            data: 'city',
        },
        listItem: {
            wrap: true,
        }
    },
    {
        order: 11,
        id: 'radio1',
        type: 'radio',
        params: {
            data: [
                { value: 0, label: '足球' },
                { value: 1, label: '篮球' },
                { value: 2, label: '乒乓球' },
            ]
        },
    },
]