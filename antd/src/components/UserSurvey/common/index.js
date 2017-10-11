import moment from 'moment';



// 用户调查字段配置
export const UserSurvery = [
    // {
    //     order: 1,
    //     type: 'input',
    //     id: 'userName',
    //     options: {
    //         // extra: '最多输入500个字',
    //         label: '姓名',
    //     },
    //     api: {
    //         disabled: false,
    //     },
    //     rules: [
    //         { required: true, message: '用户姓名必填' },
    //         { max: 4, message: '用户姓名最多4位' },
    //         { min: 2, message: '用户姓名至少2位' },
    //     ],
    //     params: {
    //         toLowerCase: true,
    //     }
    // },
    // {
    //     order: 2,
    //     type: 'input',
    //     id: 'address',
    //     formItem: {
    //         label: '地址',
    //     },
    //     api: {
    //         disabled: false,
    //     },
    //     options: {
    //         rules: [
    //             { required: true, message: '用户姓名必填' },
    //             { max: 4, message: '用户姓名最多4位' },
    //             { min: 2, message: '用户姓名至少2位' },
    //         ],
    //     },
    //     params: {
    //         addType: 'button',
    //         childSpan: 10,
    //         data: [
    //             { label: '同标的', value: '01' },
    //             { label: '同三者', value: '02' },
    //         ]
    //     },
    // },
    // {
    //     order: 3,
    //     type: 'input',
    //     id: 'contactPhone',
    //     params: {
    //         addType: 'radio',
    //         data: [
    //             { label: '同标的', value: '01' },
    //             { label: '同三者', value: '02' },
    //         ],
    //     },
    //     formItem: {
    //         label: '联系人电话',
    //     },
    //     options: {
    //         rules: [{
    //             required: true,
    //             whitespace: true,
    //             message: '联系人电话必填'
    //         }],
    //     }
    // },
    // {
    //     order: 4,
    //     type: 'cascader',
    //     id: 'accidentCity',
    //     params: {
    //         area: 'quanguo',
    //     },
    //     formItem: {
    //         label: '城市',
    //     },
    //     options: {
    //         rules: [{
    //             required: true,
    //             message: '出险城市不能为空'
    //         }]
    //     },
    //     api: {
    //         placeholder: '这是一个三级联动选择',
    //     },
    // },
    // {
    //     order: 5,
    //     type: 'checkbox',
    //     id: 'payMoney',
    //     formItem: {
    //         label: '赔付金额',
    //     },
    //     params: {
    //         data: [
    //             { label: '无损', value: '01' },
    //             { label: '正前方', value: '02', selected: true },
    //             { label: '前方左侧', value: '03' },
    //             { label: '前方右侧', value: '04', selected: true },
    //             { label: '车身左侧', value: '05' },
    //             { label: '车身右侧', value: '06' },
    //         ],
    //         colSpan: 2,
    //     }
    // },
    // {
    //     order: 6,
    //     type: 'date',
    //     id: 'reportDate',
    //     formItem: {
    //         label: '日期',
    //     },
    //     api: {
    //         format: 'YYYY-MM-DD HH:mm:ss',
    //     }
    // },
    // {
    //     order: 7,
    //     type: 'date',
    //     id: 'translateDate',
    //     params: {
    //         addType: 'range',
    //     },
    //     formItem:{
    //         label: '运输',
    //     },
    //     api: {
    //         placeholder: '运输日期',
    //         showTime: true,
    //     },
    // },
    // {
    //     order: 8,
    //     type: 'input',
    //     id: 'carNumber',
    //     formItem: {
    //         label: '车牌号',
    //     },
    //     params: {
    //         toUpperCase: true,
    //     }
    // },
    // {
    //     order: 9,
    //     type: 'input',
    //     id: 'phoneNumber',
    //     formItem: {
    //         label: '手机号',
    //     },
    //     options: {
    //         rules: [{
    //             required: true,
    //             message: '手机号码必填'
    //         }, {
    //             len: 11,
    //             message: '手机号码必须为11位'
    //         }],
    //     }
    // },
    {
        order: 10,
        type: 'number',
        id: 'ploicyMoney',
        options: {
            label: '金额',
        },
        rules: [{
            required: true,
            message: '保单金额必填'
        }],
    },
    // {
    //     order: 11,
    //     type: 'radio',
    //     id: 'sex',
    //     formItem: {
    //         label: '被保人性别',
    //     },
    //     params: {
    //         data: [
    //             { label: '男', value: '01' },
    //             { label: '女', value: '02', selected: true },
    //             { label: '男女', value: '03' },
    //             { label: '女男', value: '04' },
    //         ]
    //     }
    // },
    // {
    //     order: 12,
    //     type: 'radio',
    //     id: 'type',
    //     params: {
    //         addType: 'button',
    //         data: [
    //             { label: '车险', value: '01', selected: true },
    //             { label: '非车险', value: '02' },
    //         ]
    //     },
    //     formItem: {
    //         label: '类别',
    //     },
    // },
    // {
    //     order: 13,
    //     type: 'enum',
    //     id: 'carMarkType',
    //     formItem: {
    //         label: '种类',
    //     },
    //     params: {
    //         data: [
    //             { value: '01', label: '大型汽车号牌' },
    //             { value: '02', label: '小型汽车号牌' },
    //             { value: '03', label: '使馆汽车号牌' },
    //             { value: '04', label: '领馆汽车号牌' },
    //             { value: '05', label: '境外汽车号牌' },
    //             { value: '06', label: '外籍汽车号牌', selected: true },
    //             { value: '07', label: '两、三轮摩托车号牌' },
    //             { value: '08', label: '轻便摩托车号牌' },
    //             { value: '09', label: '使馆摩托车号牌' },
    //         ],
    //     },
    //     options: {
    //         rules: [{
    //             required: true,
    //             message: '号牌种类必填'
    //         }],
    //     }
    // },
    // {
    //     order: 14,
    //     type: 'inputAdd',
    //     id: 'carNoAddress',
    //     params: {
    //         addType: 'before-select',
    //         data: [
    //             { value: '01', label: '+86' },
    //             { value: '02', label: '+87', selected: true },
    //             { value: '03', label: '+88' },
    //         ],
    //         selectWidth: 60,
    //     },
    //     formItem: {
    //         label: '归属地',
    //     },
    // },
    // {
    //     order: 15,
    //     type: 'textarea',
    //     id: 'accidentDescription',
    //     formItem: {
    //         label: '描述',
    //         extra: '最多输入500个字',
    //     },
    //     params: {
    //         colSpan: 2,
    //     },
    //     options: {
    //         rules: [{
    //             required: true,
    //             message: '出险描述必填'
    //         }],
    //     }
    // },
    // {
    //     order: 16,
    //     type: 'textarea',
    //     id: 'accidentCreate',
    //     formItem: {
    //         label: '生成描述',
    //         extra: '最多输入500个字',
    //     },
    //     params: {
    //         addType: 'button',
    //         colSpan: 2,
    //         data: [
    //             { value: '01', label: '生成描述', type: 'primary' },
    //         ],
    //         childSpan: 18,
    //     }
    // },
    // {
    //     order: 17,
    //     type: 'editor',
    //     id: 'emailContent',
    //     formItem: {
    //         label: '内容',
    //     },
    //     params: {
    //         colSpan: 2,
    //     },
    //     options: {
    //         rules: [{
    //             required: true,
    //             message: '内容必填'
    //         }],
    //     }
    // },
    // {
    //     order: 18,
    //     type: 'text',
    //     id: 'myName',
    //     formItem: {
    //         label: '姓名',
    //     },
    //     params: {
    //         render: (text) => 213,
    //     }
    // },
];

export const UserRegister = [
    {
        type: 'radio',
        id: 'formLayout',
        formItem: {
            label: 'Username',
        },
        params: {
            addType: 'button',
            data: [
                { value: 'horizontal', label: 'Horizontal' },
                { value: 'vertical', label: 'Vertical' },
                { value: 'inline', label: 'Inline' },
            ]
        }
    },
    {
        type: 'input',
        id: 'username',
        formItem: {
            label: 'Username',
        },
    },
    {
        type: 'input',
        id: 'password',
        formItem: {
            label: 'Password',
        },
        api: {
            type: 'password',
        }
    },
]
