import moment from 'moment';

// 用户调查字段配置
export const UserSurvery = [
    // {
    //     order: 1,
    //     type: 'input',
    //     id: 'userName',
    //     formItemApi: {
    //         extra: '最多输入500个字',
    //         label: 'input',
    //     },
    //     defaultApi: {
    //         disabled: false,
    //     },
    //     optionsApi: {
    //         rules: [
    //             { required: true, message: '用户姓名必填' },
    //             { max: 4, message: '用户姓名最多4位' },
    //             { min: 2, message: '用户姓名至少2位' },
    //         ],
    //     },
    //     params: {
    //         toLowerCase: true,
    //         addType: [
    //             {
    //                 type: 'select',
    //                 params: {
    //                     data: [
    //                         { value: '1', label: '成都' },
    //                         { value: '2', label: '上海' },
    //                     ]
    //                 },
    //                 defaultApi: {
    //                     placeholder: '请选择城市'
    //                 }
    //             }
    //         ]
    //     }
    // },
    // {
    //     order: 2,
    //     type: 'input',
    //     id: 'address',
    //     formItemApi: {
    //         label: 'input',
    //     },
    //     defaultApi: {
    //         disabled: false,
    //     },
    //     optionsApi: {
    //         rules: [
    //             { required: true, message: '用户姓名必填' },
    //             { max: 4, message: '用户姓名最多4位' },
    //             { min: 2, message: '用户姓名至少2位' },
    //         ],
    //     },
    //     params: {
    //         childSpan: 10,
    //         addType: [
    //             {
    //                 type: 'button',
    //                 params: {
    //                     label: '同标的',
    //                     value: '01',
    //                 }
    //             },
    //             {
    //                 type: 'button',
    //                 params: {
    //                     label: '同三者',
    //                     value: '02',
    //                 }
    //             },
    //         ]
    //     },
    // },
    // {
    //     order: 3,
    //     type: 'input',
    //     id: 'contactPhone',
    //     params: {
    //         addType: [
    //             {
    //                 type: 'radio',
    //                 params: {
    //                     data: [
    //                         { label: '同标的', value: '02' }
    //                     ]
    //                 }
    //             },
    //         ]
    //     },
    //     formItemApi: {
    //         label: 'input',
    //     },
    //     optionsApi: {
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
    //         city: 'quanGuo',
    //         addType: [
    //             {
    //                 type: 'input',
    //                 params: {

    //                 },
    //                 defaultApi: {
    //                     placeholder: '请输入姓名'
    //                 }
    //             }
    //         ]
    //     },
    //     formItemApi: {
    //         label: 'cascader',
    //     },
    //     optionsApi: {
    //         rules: [{
    //             required: true,
    //             message: '出险城市不能为空'
    //         }]
    //     },
    //     defaultApi: {
    //         placeholder: '这是一个三级联动选择',
    //     },
    // },
    // {
    //     order: 5,
    //     type: 'checkbox',
    //     id: 'payMoney',
    //     formItemApi: {
    //         label: 'checkbox',
    //     },
    //     params: {
    //         colSpan: 2,
    //     },
    //     defaultApi: {
    //         options: [
    //             { label: '无损', value: '01' },
    //             { label: '正前方', value: '02' },
    //             { label: '前方左侧', value: '03' },
    //             { label: '前方右侧', value: '04' },
    //             { label: '车身左侧', value: '05' },
    //             { label: '车身右侧', value: '06' },
    //         ],
    //     }
    // },
    // {
    //     order: 6,
    //     type: 'date',
    //     id: 'reportDate',
    //     formItemApi: {
    //         label: 'date',
    //     },
    //     defaultApi: {
    //         format: 'YYYY-MM-DD HH:mm:ss',
    //         renderExtraFooter: () => 'footer',
    //     }
    // },
    // {
    //     order: 7,
    //     type: 'dateRange',
    //     id: 'translateDate',
    //     formItemApi:{
    //         label: 'date-range',
    //     },
    //     defaultApi: {
    //         placeholder: '运输日期',
    //         showTime: true,
    //         format: 'YYYY-MM-DD HH:mm:ss',
    //         ranges: {
    //             '一周内': [moment().subtract(7, 'days'), moment()],
    //             '一月内': [moment().subtract(1, 'months'), moment()],
    //             '三月内': [moment().subtract(3, 'months'), moment()],
    //         }
    //     },
    // },
    // {
    //     order: 8,
    //     type: 'dateMonth',
    //     id: 'translateDate1',
    //     formItemApi: {
    //         label: 'month',
    //     },
    //     defaultApi: {
    //         placeholder: '请选择月份',
    //     },
    // },
    // {
    //     order: 9,
    //     type: 'time',
    //     id: 'translateDate2',
    //     formItemApi: {
    //         label: 'time',
    //     },
    //     defaultApi: {
    //         placeholder: '请选择时间',
    //     },
    // },
    // {
    //     order: 10,
    //     type: 'input',
    //     id: 'carNumber',
    //     formItemApi: {
    //         label: 'toUpperCase',
    //     },
    //     params: {
    //         toUpperCase: true,
    //     }
    // },
    // {
    //     order: 11,
    //     type: 'input',
    //     id: 'phoneNumber',
    //     formItemApi: {
    //         label: 'phone',
    //     },
    //     optionsApi: {
    //         rules: [{
    //             required: true,
    //             message: '手机号码必填'
    //         }, {
    //             len: 11,
    //             message: '手机号码必须为11位'
    //         }],
    //     }
    // },
    // {
    //     order: 12,
    //     type: 'number',
    //     id: 'ploicyMoney',
    //     formItemApi: {
    //         label: 'number',
    //     },
    //     rules: [{
    //         required: true,
    //         message: '保单金额必填'
    //     }],
    // },
    // {
    //     order: 13,
    //     type: 'radio',
    //     id: 'sex',
    //     formItemApi: {
    //         label: 'radio',
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
    //     order: 14,
    //     type: 'radioButton',
    //     id: 'type',
    //     params: {
    //         data: [
    //             { label: '车险', value: '01', selected: true },
    //             { label: '非车险', value: '02' },
    //         ]
    //     },
    //     formItemApi: {
    //         label: 'radio',
    //     },
    // },
    // {
    //     order: 15,
    //     type: 'select',
    //     id: 'carMarkType',
    //     formItemApi: {
    //         label: 'select',
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
    //     optionsApi: {
    //         rules: [{
    //             required: true,
    //             message: '号牌种类必填'
    //         }],
    //     },
    //     defaultApi: {
    //         mode: 'multiple',
    //     }
    // },
    // {
    //     order: 16,
    //     type: 'input',
    //     id: 'carNoAddress',
    //     params: {
    //         data: [
    //             { value: '01', label: '+86' },
    //             { value: '02', label: '+87', selected: true },
    //             { value: '03', label: '+88' },
    //         ],
    //         selectWidth: 60,
    //     },
    //     formItemApi: {
    //         label: 'beforeSelect',
    //     },
    // },
    {
        order: 17,
        type: 'textarea',
        id: 'accidentDescription',
        formItemApi: {
            label: 'textarea',
            extra: '最多输入500个字',
        },
        params: {
            colSpan: 2,
            childSpan: 18,
            addType: [
                {
                    type: 'button',
                    params: {
                        label: '编辑',
                        value: 'edit'
                    },
                    defaultApi: {
                        type: 'primary'
                    }
                }
            ]
        },
        optionsApi: {
            rules: [{
                required: true,
                message: '出险描述必填'
            }],
        }
    },
    // {
    //     order: 18,
    //     type: 'textarea',
    //     id: 'accidentCreate',
    //     formItemApi: {
    //         label: 'textarea',
    //         extra: '最多输入500个字',
    //     },
    //     params: {
    //         colSpan: 2,
    //         data: [
    //             {
    //                 type: 'button',
    //                 params: {
    //                     label: '生成描述',
    //                     value: '01',
    //                 },
    //                 defaultApi: {
    //                     type: 'primary'
    //                 }
    //             },
    //         ],
    //         childSpan: 18,
    //     }
    // },
    // // {
    // //     order: 19,
    // //     type: 'editor',
    // //     id: 'emailContent',
    // //     formItemApi: {
    // //         label: 'editor',
    // //     },
    // //     params: {
    // //         colSpan: 2,
    // //     },
    // //     optionsApi: {
    // //         rules: [{
    // //             required: true,
    // //             message: '内容必填'
    // //         }],
    // //     }
    // // },
    // {
    //     order: 20,
    //     type: 'text',
    //     id: 'myName',
    //     formItemApi: {
    //         label: 'text',
    //     },
    //     params: {
    //         render: (text) => 213,
    //     }
    // },
    // {
    //     order: 21,
    //     type: 'rate',
    //     id: 'rate1',
    //     formItemApi: {
    //         label: 'rate',
    //     },
    //     defaultApi: {
    //         allowHalf: true,
    //     },
    // },
    // {
    //     order: 22,
    //     type: 'slider',
    //     id: 'slider1',
    //     formItemApi: {
    //         label: 'slider',
    //     },
    //     defaultApi: {
    //         marks: {
    //             0: 'A',
    //             20: 'AA',
    //             40: 'AAA',
    //             60: 'AAAA',
    //             80: 'AAAAA',
    //             100: 'AAAAAA',
    //         }
    //     }
    // },
    // {
    //     order: 23,
    //     type: 'switch',
    //     id: 'switch1',
    //     formItemApi: {
    //         label: 'switch',
    //     },
    //     defaultApi: {
    //         checkedChildren: 'OK',
    //         unCheckedChildren: 'NO'
    //     }
    // },
];

export const UserRegister = [
    {
        type: 'radioButton',
        id: 'formLayout',
        formItemApi: {
            label: 'Username',
        },
        params: {
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
        formItemApi: {
            label: 'Username',
        },
    },
    {
        type: 'input',
        id: 'password',
        formItemApi: {
            label: 'Password',
        },
        defaultApi: {
            type: 'password',
        }
    },
]
