/**
 * 表单元素布局
 * colOf3： 一行排三个元素
 * colOf1： 一行排一个元素
 */
export const formItemLayout = {
    '8': {
        layout: {
            labelCol: { span: 6 },
            wrapperCol: { span: 12 }
        },
        span: 8
    },
    '24': {
        layout: {
            labelCol: { span: 2 },
            wrapperCol: { span: 20 }
        },
        span: 24
    },
    '1': {
        layout: {
            labelCol: { span: 6 },
            wrapperCol: { span: 15 }
        },
        span: 24
    }
};

/**
 * 报案页面
 * 卡片标题和ICON
 */
export const reportCaseTitle = {
    taskorder: {
        className: 'icon-chuxian',
        text: '工单信息'
    },
    supplement: {
        className: 'icon-chuxian',
        text: '补充信息'
    },
    accident: {
        className: 'icon-weibiaoti1psd',
        text: '出险信息'
    },
    taskform: {
        className: 'icon-weibiaoti1psd',
        text: '工单处理'
    },
    user: {
        className: 'icon-weibiaoti1psd',
        text: '用户信息'
    }
}

/**
 * 不同的险种
 * 对应不同的出险信息
 */
export const AccidentData = {
    accident: {
        '1': {
            filed: ['bankName', 'bankCard', 'accidentTime', 'looseAmount', 'note'],
            bankName: {
                label: '银行名称',
                type: 'select',
                require: true,
                select: {
                    combobox: true,
                },
                array: [
                    {id: '1', text: '中国工商银行', selected: false},
                    {id: '2', text: '中国建设银行', selected: false},
                    {id: '3', text: '中国农业银行', selected: false},
                    {id: '4', text: '中国民生银行', selected: false},
                    {id: '5', text: '交通银行', selected: false},
                    {id: '6', text: '中国光大银行', selected: false},
                    {id: '7', text: '中国邮政储蓄银行', selected: false},
                    {id: '8', text: '渣打银行', selected: false},
                    {id: '9', text: '恒丰银行', selected: false},
                    {id: '10', text: '新韩银行', selected: false},
                    {id: '11', text: '中信银行', selected: false},
                    {id: '12', text: '华夏银行', selected: false},
                    {id: '13', text: '渤海银行', selected: false},
                    {id: '14', text: '中国银行', selected: false},
                    {id: '15', text: '浦发银行', selected: false},
                    {id: '16', text: '花旗银行', selected: false},
                    {id: '17', text: '招商银行', selected: false},
                    {id: '18', text: '广发银行', selected: false},
                    {id: '19', text: '徽商银行股份有限公司', selected: false},
                    {id: '20', text: '农村商业银行', selected: false},
                    {id: '21', text: '城市商业银行', selected: false},
                    {id: '22', text: '农村信用社', selected: false},
                    {id: '23', text: '村镇银行', selected: false},
                    {id: '24', text: '上海农商银行', selected: false},
                    {id: '25', text: '兴业银行', selected: false},
                    {id: '26', text: '浙商银行', selected: false},
                    {id: '27', text: '东亚银行', selected: false},
                    {id: '28', text: '韩亚银行', selected: false},
                    {id: '29', text: '城市信用社', selected: false}
                ]
            },
            bankCard: {
                label: '银行卡号',
                type: 'input',
                require: true,
            },
            accidentTime: {
                label: '出险时间',
                type: 'date',
                require: true,
            },
            looseAmount: {
                label: '损失金额',
                type: 'number',
                require: true,
            },
            note: {
                label: '案情经过备注',
                type: 'textarea',
                require: true,
            }
        },
        '2': {
            filed: ['accidentTime', 'loosAmout', 'note'],
            accidentTime: {
                label: '出险时间',
                require: true,
                type: 'date'
            },
            loosAmout: {
                label: '损失金额',
                require: true,
                type: 'input'
            },
            note: {
                label: '案情经过备注',
                type: 'textarea',
                require: true,
            }
        }
    },
    supplement: {
        '1': {
            head: {
                looseTrade: {
                    type: 'input',
                    name: '资损交易',
                },
                looseAmount: {
                    type: 'number',
                    name: '资损金额',
                    total: true
                }
            },
            list: [{
                key: '1',
                looseTrade: '资损交易1',
                looseAmount: '1',
            }, {
                key: '2',
                looseTrade: '资损交易2',
                looseAmount: '2',
            }, {
                key: '3',
                looseTrade: '资损交易3',
                looseAmount: '3',
            }]
        }
    }
};

