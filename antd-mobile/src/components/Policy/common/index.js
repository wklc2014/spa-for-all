import rules from '../../common/BForm/util/rules.js';

export const UserSurvery = [
    {
        order: 1,
        id: 'username',
        type: 'input',
        label: <div>用户姓名</div>,
        params: {
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
        label: '银行卡',
        params: {
            type: 'bankCard',
            placeholder: '请输入银行卡号',
        }
    },
    {
        order: 3,
        id: 'userPhone',
        type: 'input',
        label: '手机号码',
        params: {
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
        label: '邮箱',
        params: {
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
        label: '数字输入',
        params: {
            type: 'number',
        }
    },
    {
        order: 6,
        id: 'userPay',
        type: 'input',
        label: '人民币',
        params: {
            type: 'money',
            extra: '¥',
        }
    },
    {
        order: 7,
        id: 'accidentTime',
        type: 'date',
        label: '出险时间',
        params: {
            mode: 'date',
            title: '选择出险时间',
        }
    },
    {
        order: 8,
        id: 'interests',
        type: 'checkbox',
        label: '兴趣爱好',
        params: {},
        datas: [
            { value: 0, label: '足球' },
            { value: 1, label: '篮球' },
            { value: 2, label: '乒乓球' },
        ]
    },
    {
        order: 9,
        id: 'files',
        type: 'image',
        params: {
            selectable: 3,
        },
    },
]