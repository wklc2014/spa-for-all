/**
 * 模拟智能理算-涉案账户信息
 * 主要是标签和金额
 */
module.exports = [
    // 没有标签
    // 一条数据
    [{
        tagList: [],
        amount: 10
    }],

    // 其中一条没有标签（老系统）
    // 多条数据
    [{
        tagList: [],
        amount: 21
    }, {
        tagList: ['NORMAL_LOSS'], // 1
        amount: 20
    }],

    // 一种标签
    [{
        tagList: ['INSUFFICIENT_INFO'], //99
        amount: 30
    }],
    [{
        tagList: ['NORMAL_LOSS'], //1
        amount: 33
    }],

    [{
        tagList: ['CLAIM_PAID'], //-1
        amount: 40
    }],

    [{
        tagList: ['SPECIAL_PAYMENT_SZFESC'], //0
        amount: 50
    }],

    // 多种标签
    // 标签一致
    [{
        tagList: ['INSUFFICIENT_INFO'], //99
        amount: 26
    }, {
        tagList: ['INSUFFICIENT_INFO'], //99
        amount: 26
    }],
    [{
        tagList: ['NORMAL_LOSS'], //1
        amount: 12
    }, {
        tagList: ['NORMAL_LOSS'], //1
        amount: 12
    }],
    [{
        tagList: ['CLAIM_PAID'],//-1
        amount: 61
    }, {
        tagList: ['CLAIM_PAID'],//-1
        amount: 61
    }],
    [{
        tagList: ['SPECIAL_PAYMENT_SZFESC'],//0
        amount: 76
    }, {
        tagList: ['SPECIAL_PAYMENT_SZFESC'],//0
        amount: 76
    }],

    // 多种标签
    // 标签不一致
    [{
        tagList: ['INSUFFICIENT_INFO', 'NORMAL_LOSS'],//99 1
        amount: 20
    }],
    [{
        tagList: ['INSUFFICIENT_INFO', 'OVERDUE_BY_2_YEAR'], //99 -1
        amount: 26
    }],
    [{
        tagList: ['INSUFFICIENT_INFO', 'SPECIAL_PAYMENT_SZFESC'], //99 0
        amount: 46
    }],
    [{
        tagList: ['NORMAL_LOSS', 'CLAIM_PAID'],//1 -1
        amount: 16
    }],
    [{
        tagList: ['NORMAL_LOSS', 'SPECIAL_PAYMENT_SZFESC'], //1 0
        amount: 64
    }],
    [{
        tagList: ['SPECIAL_PAYMENT_SZFESC', 'CLAIM_PAID'],//0 -1
        amount: 63
    }],
    [{
        tagList: ['WITHDRAWAL_TO_OWNER', 'CLAIM_PAID'],//-1 -1
        amount: 63
    }, {
        tagList: ['CARD_TRANSFER_TO_OWNER', 'CCR_TO_OWNER'],//-1 -1
        amount: 63
    }]
];

