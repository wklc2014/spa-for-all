export const USER_SURVERY = {
    username: {
        type: 'input',
        itemType: 'text',
        label: '用户姓名'
    },
    bankCard: {
        type: 'input',
        itemType: 'bankCard',
        label: '银行卡'
    },
    userPhone: {
        type: 'input',
        itemType: 'phone',
        label: '手机号码'
    },
    userPassword: {
        type: 'input',
        itemType: 'password',
        label: '密码'
    },
    userAge: {
        type: 'input',
        itemType: 'number',
        label: '数字输入'
    },
    userPay: {
        type: 'input',
        itemType: 'money',
        label: '人民币',
        extra: '¥',
    },
}