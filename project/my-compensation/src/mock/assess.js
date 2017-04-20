module.exports = {
    '/getBxsAssess.json': require('mockjs').mock({
        stat: 'ok'
    }),
    //保单信息
    '/getPolicyList.json': require('mockjs').mock({
        stat: 'ok',
        tips: '',
        policyList: JSON.stringify([{
            spNo: '1',
            certNo: '1',
            status: 'success',
            activeStatus: 'success',
            effectStartTime: '@date()',
            effectEndTime: '@date()',
            issueTime: '@date()',
            sumInsured: {
                amount: 10,
                paidAmount: 100,
                payableAmount: 1000,
                determinedAmount: 10000
            }
        }])
    }),
    //工单处理历史
    '/getTaskOpHistoryList.json': require('mockjs').mock({
        stat: 'ok',
        tips: 'tips',
        taskOpHistoryList: JSON.stringify([{
            gmtOperate: '@date()',
            operatorName: 'name',
            actionType: '类型',
            beforeNodeName: 'error',
            afterNodeName: 'success',
            memo: '备注XXXXXXXXXXXXXXXXXXXX'
        }, {
            gmtOperate: '@date()',
            operatorName: 'name',
            actionType: '类型',
            beforeNodeName: 'error',
            afterNodeName: 'success',
            memo: '备注XXXXXXXXXXXXXXXXXXXX'
        }, {
            gmtOperate: '@date()',
            operatorName: 'name',
            actionType: '类型',
            beforeNodeName: 'error',
            afterNodeName: 'success',
            memo: '备注XXXXXXXXXXXXXXXXXXXX'
        }])
    }),
    //赔付单处理历史
    '/getFundOpHistoryList.json': require('mockjs').mock({
        stat: 'ok',
        tips: 'tips',
        fundOpHistoryList: JSON.stringify([{
            taskId: '@date()',
            caseId: 'name',
            compensateStatus: 1,
            personIDCard: 511333333333333333,
            personAlipayId: 'success',
            loseAmount: '123',
            taskCreateTime: '@date()'
        }, {
            taskId: '@date()',
            caseId: 'name',
            compensateStatus: 2,
            personIDCard: 511333333333333333,
            personAlipayId: 'success',
            loseAmount: '123',
            taskCreateTime: '@date()'
        }, {
            taskId: '@date()',
            caseId: 'name',
            compensateStatus: 3,
            personIDCard: 511333333333333333,
            personAlipayId: 'success',
            loseAmount: '123',
            taskCreateTime: '@date()'
        }])
    })
};
