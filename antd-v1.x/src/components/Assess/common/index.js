export const QUERY = {
    userType: {
        type: 'enum',
        label: '用户标识类型',
        options: [
            { value: 'ALIPAY', label: '支付宝', selected: true },
            { value: 'TAOBAO', label: '淘宝' },
            { value: 'ELEME',  label: '饿了么' },
            { value: 'PERSON', label: '自然人' },
        ]
    },
    userId: {
        type: 'input',
        label: '账户ID'
    },
    userRealName: {
        type: 'input',
        label: '姓名'
    },
    userCertNo: {
        type: 'input',
        label: '身份证号码'
    },
    userInsureRole: {
        type: 'enum',
        label: '用户角色',
        options: [
            { value: 'CLAIMER', label: '报案人', selected: true },
            { value: 'HOLDER',  label: '投保人' },
            { value: 'INSURED', label: '被保人' },
            { value: 'BENEFICIARY',  label: '受益人' },
            { value: 'TB_BUYER',  label: '淘宝买家' },
            { value: 'TB_SELLER', label: '淘宝卖家' },
            { value: 'ELEME',     label: '饿了么用户' },
        ]
    },
    // 保险
    spNo: {
        type: 'enum',
        label: '标准产品',
        options: [
            { value: '6698', label: '全年意外险' },
        ]
    },
    instProdNo: {
        type: 'input',
        label: '机构产品'
    },
    instId: {
        type: 'enum',
        label: '保险机构',
        options: [
            { value: '112233', label: '国泰财险' },
        ]
    },
    outBizNo: {
        type: 'input',
        label: '外包业务单号'
    },
    outBizNoType: {
        type: 'enum',
        label: '外部业务单据类型',
        options: [
            { value: '', label: '唯一标识', selected: true },
            { value: 'INSURED_OBJECT', label: '被保对象' },
        ]
    },
    claimNo: {
        type: 'input',
        label: '赔案单号'
    },
    policyNo: {
        type: 'input',
        label: '保单号'
    },
    reportNo: {
        type: 'input',
        label: '报案号'
    },
    status: {
        type: 'enum',
        label: '状态',
        options: [
            { label: '初始化', value: '0' },
            { label: '已结案', value: '1' },
            { label: '已拒赔', value: '2' },
            { label: '已撤销', value: '4' },
            { label: '不予立案', value: '7' },
            { label: '已核赔', value: '3' },
            { label: '已立案', value: '5' },
        ]
    },
    claimApplyDate: {
        type: 'date',
        addType: 'range',
        label: '申请时间',
        format: 'yyyy-MM-dd hh:mm:ss'
    },
    // claimAssessDate: {
    //     type: 'date',
    //     addType: 'range',
    //     label: '核赔时间',
    //     format: 'yyyy-MM-dd hh:mi:ss'
    // },
    // claimSuccessDate: {
    //     type: 'date',
    //     addType: 'range',
    //     label: '赔付时间',
    //     format: 'yyyy-MM-dd hh:mi:ss'
    // },
}

export const TABLE_HEAD = [{
    title: '报案号',
    key: 'dataIndex',
    dataIndex: 'claimReportNo',
}, {
    title: '驳回原因（1-50字之间）',
    key: 'dataIndex',
    dataIndex: 'rejectReason',
}, {
    title: '申请时间',
    key: 'dataIndex',
    dataIndex: 'claimApplyTime',
}, {
    title: '状态',
    key: 'dataIndex',
    dataIndex: 'claimStatus',
}, {
    title: '类型',
    key: 'dataIndex',
    dataIndex: 'type',
}, {
    title: '金额',
    key: 'dataIndex',
    dataIndex: 'claimFee',
}, {
    title: '报案人账户',
    key: 'dataIndex',
    dataIndex: 'claimerUid',
}, {
    title: '保险产品',
    key: 'dataIndex',
    dataIndex: 'prodName',
}, {
    title: '赔付时间',
    key: 'dataIndex',
    dataIndex: 'claimSuccessTime',
}, {
    title: '保单号',
    key: 'dataIndex',
    dataIndex: 'policyNo',
}, {
    title: '外部单号',
    key: 'dataIndex',
    dataIndex: 'outBizNo',
}, {
    title: '赔案号',
    key: 'dataIndex',
    dataIndex: 'claimNo',
}]
