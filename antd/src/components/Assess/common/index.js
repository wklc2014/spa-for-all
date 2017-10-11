export const Assess = [{
    order: 1,
    type: 'date',
    id: 'accident_time',
    name: '出险时间',
    options: {
        rules: [{
            required: true,
            message: '出险时间必填',
        }],
    },
    api: {
        disabled: false,
        placeholder: '请选择出险时间',
    },
    params: {
        width: '10%',
    }
}, {
    order: 1,
    type: 'input',
    id: 'userName',
    name: '用户姓名',
    options: {
        rules: [{
            required: true,
            message: '用户姓名必填',
        }],
    },
    api: {
        placeholder: '请输入用户姓名',
    },
    params: {
        width: '10%',
    }
}, {
    order: 2,
    type: 'enum',
    id: 'isNeedReturnGoods',
    name: '是否退货',
    options: {
        rules: [{
            required: true,
            message: '是否退货必填',
        }],
    },
    api: {
        combobox: false,
        placeholder: '请选择是否退货',
    },
    params: {
        data: [
            { value: '0', label: '是' },
            { value: '1', label: '否', selected: true },
        ],
        width: '10%',
    },
}, {
    order: 3,
    type: 'number',
    id: 'multiplier',
    name: '系统倍数',
    params: {
        total: true,
        width: '10%',
    },
    api: {
        disabled: false,
        placeholder: '请输入系统倍数',
    },
    options: {
        rules: [{
          required: true,
          message: '系统倍数必填',
        }],
    },
}, {
    order: 4,
    type: 'number',
    id: 'lossAmount',
    name: '损失金额',
    params: {
        total: true,
        width: '10%',
    },
    api: {
        disabled: false,
        placeholder: '请输入损失金额',
    },
    options: {
        rules: [{
            required: true,
            message: '损失金额必填',
        }],
    }
}, {
    order: 5,
    type: 'text',
    id: 'refundReasonText',
    name: '订单实付金额(元)',
    params: {
        total: true,
        eval: '$.lossAmount*$.multiplier',
        width: '10%',
    },
    options: {
        rules: [{
          required: true,
          message: '订单实付金额必填',
        }],
    },
    api: {
        disabled: false,
        placeholder: '请输入订单实付金额',
    }
}, {
    order: 14,
    type: 'input',
    id: 'description',
    name: '用户自述',
    options: {
        rules: [{
          required: true,
          message: '用户自述必填',
        }],
    },
    api: {
        disabled: false,
        placeholder: '请输入用户自述',
    },
    params: {
        width: '20%',
    }
}]
