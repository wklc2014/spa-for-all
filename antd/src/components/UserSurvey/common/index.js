import moment from 'moment';
// 用户调查字段配置
export const USER_SURVERY = {
    accidentCity: {
        order: 1,
        type: 'cascader',
        label: '出险城市',
        area: 'quanguo',
        placeholder: '这是一个三级联动选择',
        rules: [{
            required: true,
            message: '出险城市不能为空'
        }]
    },
    payMoney: {
        order: 2,
        type: 'checkbox',
        label: '赔付金额',
        options: [
            { label: '无损', value: '01' },
            { label: '正前方', value: '02', selected: true },
            { label: '前方左侧', value: '03' },
            { label: '前方右侧', value: '04', selected: true },
            { label: '车身左侧', value: '05' },
            { label: '车身右侧', value: '06' },
        ],
        colSpan: 2,
    },
    reportDate: {
        order: 3,
        type: 'date',
        label: '报案日期',
    },
    translateDate: {
        order: 4,
        type: 'date',
        addType: 'range',
        label: '运输起止日期',
        placeholder: '运输日期',
        showTime: {
            // defaultValue: [
            //     moment('00:00:00', 'HH:mm:ss'),
            //     moment('00:00:20', 'HH:mm:ss'),
            // ],
            hideDisabledOptions: true,
        }
    },
    userName: {
        order: 5,
        type: 'input',
        label: '用户姓名',
        extra: '最多输入500个字',
        rules: [{
            required: true,
            message: '用户姓名必填'
        }, {
            max: 4,
            message: '用户姓名最多4位'
        }, {
            min: 2,
            message: '用户姓名至少2位'
        }],
        toLowerCase: true,
    },
    address: {
        order: 6,
        type: 'input',
        addType: 'button',
        label: '地址',
        childSpan: 10,
        options: [
            { label: '同标的', value: '01' },
            { label: '同三者', value: '02' },
        ]
    },
    contactPhone: {
        order: 7,
        type: 'input',
        addType: 'radio',
        label: '联系人电话',
        options: [
            { label: '同标的', value: '01' },
            { label: '同三者', value: '02' },
        ],
        rules: [{
            required: true,
            whitespace: true,
            message: '联系人电话必填'
        }],
    },
    carNumber: {
        order: 8,
        type: 'input',
        label: '车牌号码',
        toUpperCase: true,
    },
    phoneNumber: {
        order: 9,
        type: 'input',
        label: '手机号码',
        rules: [{
            required: true,
            message: '手机号码必填'
        }, {
            len: 11,
            message: '手机号码必须为11位'
        }],
    },
    ploicyMoney: {
        order: 10,
        type: 'number',
        label: '保单金额',
        rules: [{
            required: true,
            message: '保单金额必填'
        }],
    },
    sex: {
        order: 11,
        type: 'radio',
        label: '被保人性别',
        options: [
            { label: '男', value: '01' },
            { label: '女', value: '02', selected: true },
            { label: '男女', value: '03' },
            { label: '女男', value: '04' },
        ]
    },
    type: {
        order: 12,
        type: 'radio',
        addType: 'button',
        label: '类别',
        options: [
            { label: '车险', value: '01', selected: true },
            { label: '非车险', value: '02' },
        ]
    },
    carMarkType: {
        order: 13,
        type: 'enum',
        label: '号牌种类',
        options: [
            { value: '01', label: '大型汽车号牌' },
            { value: '02', label: '小型汽车号牌' },
            { value: '03', label: '使馆汽车号牌' },
            { value: '04', label: '领馆汽车号牌' },
            { value: '05', label: '境外汽车号牌' },
            { value: '06', label: '外籍汽车号牌', selected: true },
            { value: '07', label: '两、三轮摩托车号牌' },
            { value: '08', label: '轻便摩托车号牌' },
            { value: '09', label: '使馆摩托车号牌' },
        ],
        rules: [{
            required: true,
            message: '号牌种类必填'
        }],
    },
    carNoAddress: {
        order: 14,
        type: 'inputAdd',
        addType: 'before-select',
        label: '号牌归属地',
        options: [
            { value: '01', label: '+86' },
            { value: '02', label: '+87', selected: true },
            { value: '03', label: '+88' },
        ],
        selectWidth: 60,
    },
    accidentDescription: {
        order: 15,
        type: 'textarea',
        label: '出险描述',
        colSpan: 2,
        rules: [{
            required: true,
            message: '出险描述必填'
        }],
        extra: '最多输入500个字',
    },
    accidentCreate: {
        order: 16,
        type: 'textarea',
        addType: 'button',
        label: '生成描述',
        colSpan: 3,
        options: [
            { value: '01', label: '生成描述', type: 'primary' },
        ],
        childSpan: 18,
        extra: '最多输入500个字',
    },
    emailContent: {
        order: 17,
        type: 'editor',
        label: '内容',
        colSpan: 3,
        rules: [{
            required: true,
            message: '内容必填'
        }],
    }
};
