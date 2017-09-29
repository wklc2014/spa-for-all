export const CONFIG_TABLE_HEAD = {
  accident_time: {
    order: 1,
    type: 'date',
    name: '出险时间',
    rules: [{
        required: true,
        message: '出险时间必填',
    }],
    disabled: false,
    width: '10%',
  },
  userName: {
    order: 1,
    type: 'input',
    name: '用户姓名',
    rules: [{
        required: true,
        message: '用户姓名必填',
    }],
    width: '10%',
  },
  isNeedReturnGoods: {
    order: 2,
    type: 'enum',
    name: '是否退货',
    rules: [{
        required: true,
        message: '是否退货必填',
    }],
    combobox: false,
    options: [
      { value: '0', label: '是' },
      { value: '1', label: '否', selected: true },
    ],
    width: '10%',
  },
  multiplier: {
    order: 3,
    type: 'number',
    name: '系统倍数',
    total: true,
    disabled: false,
    rules: [{
        required: true,
        message: '系统倍数必填',
    }],
    width: '10%',
  },
  lossAmount: {
    order: 4,
    type: 'number',
    name: '损失金额',
    total: true,
    disabled: false,
    rules: [{
        required: true,
        message: '损失金额必填',
    }],
    width: '10%',
  },
  refundReasonText: {
    order: 5,
    type: 'text',
    name: '订单实付金额(元)',
    total: true,
    eval: '$.lossAmount*$.multiplier',
    rules: [{
        required: true,
        message: '订单实付金额必填',
    }],
    disabled: false,
    width: '10%',
  },
  description: {
    order: 14,
    type: 'input',
    name: '用户自述',
    rules: [{
        required: true,
        message: '用户自述必填',
    }],
    disabled: false,
    width: '20%',
  }
}
