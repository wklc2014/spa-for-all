import rules from '../../common/BForm/util/rules.js';

export const UserSurvery = [
    {
        order: 1,
        id: 'username',
        type: 'inputItem',
        params: {
            label: <div>用户姓名</div>,
        },
        defaultApi: {
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
        type: 'inputItem',
        params: {
            label: '银行卡',
        },
        defaultApi: {
            type: 'bankCard',
            placeholder: '请输入银行卡号',
        }
    },
    {
        order: 3,
        id: 'userPhone',
        type: 'inputItem',
        params: {
            label: '手机号码',
        },
        defaultApi: {
            type: 'phone',
            placeholder: '请输入手机号码',
        },
        optionsApi: {
            rules: [
                { required: true, message: '手机号码必填' },
                { validator: rules.phone, message: '手机号码不正确' },
            ],
        }
    },
    {
        order: 4,
        id: 'email',
        type: 'inputItem',
        params: {
            label: '邮箱',
        },
        defaultApi: {
            type: 'text',
            placeholder: '请输入邮箱地址',
        },
        optionsApi: {
            rules: [
                { type: 'email', message: '邮箱地址不合法' },
            ],
        }
    },
    {
        order: 5,
        id: 'userAge',
        type: 'inputItem',
        params: {
            label: '数字输入',
        },
        defaultApi: {
            type: 'number',
            placeholder: '请输入数字',
        }
    },
    {
        order: 6,
        id: 'userPay',
        type: 'inputItem',
        params: {
            label: '人民币',
        },
        defaultApi: {
            type: 'money',
            extra: '¥',
            placeholder: '请输入人民币金额',
        }
    },
    {
        order: 7,
        id: 'accidentTime',
        type: 'date',
        params: {
            label: '出险时间',
        },
        defaultApi: {
            mode: 'date',
            title: '选择出险时间',
        }
    },
    {
        order: 8,
        id: 'interests',
        type: 'checkboxItem',
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

        },
        defaultApi: {
            selectable: 3,
        }
    },
    {
        order: 10,
        id: 'picker',
        type: 'picker',
        defaultApi: {
            title: 'Picker选择器',
            cols: 3,
        },
        params: {
            label: '选择季节',
            data: 'city',
        },
        listItemApi: {
            wrap: true,
        }
    },
    {
        order: 11,
        id: 'radio1',
        type: 'radioItem',
        params: {
            data: [
                { value: 0, label: '足球' },
                { value: 1, label: '篮球' },
                { value: 2, label: '乒乓球' },
            ]
        },
    },
    {
        order: 12,
        id: 'textareaItem',
        type: 'textareaItem1',
        params: {
            label: '事故发生过程',
        },
    },
]