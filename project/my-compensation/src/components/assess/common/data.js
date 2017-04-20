export const BxsVoucherDetailData = {
    BANKCARD_PROTECTION: [
        {value: '1', text: '身份证'},
        {value: '101', text: '身份证正面'},
        {value: '102', text: '身份证反面'},
        {value: '2', text: '银行凭证'},
        {value: '201', text: '银行卡正面'},
        {value: '202', text: '银行卡冻结/挂失凭证'},
        {value: '203', text: '交易明细'},
        {value: '3', text: '公安凭证'},
        {value: '301', text: '报案回执'},
        {value: '302', text: '立案回执'},
        {value: '4', text: '其他'}
    ],
    ELM_FOOD_SAFETY: [
        {value: '1', text: '现场照片'},
        {value: '2', text: '身份证影印件'},
        {value: '4', text: '发票'},
        {value: '5', text: '医疗凭证'}
    ],
    INSURANCE_ACCT_SAFE_ANTI_FRAUD: [
        {value: '2', text: '身份证'},
        {value: '6', text: '遭骗证据'},
        {value: '7', text: '交易信息'}
    ],
    HEALTH_BEAN_SIMPLE: [
        {value: '2', text: '身份证'},
        {value: '5', text: '医疗凭证'},
    ],
    ELM_DELIVERY: [
        {value: '1', text: '现场照片'},
        {value: '2', text: '身份证'},
        {value: '4', text: '财务凭证'},
        {value: '5', text: '医疗凭证'},
    ]

};

export const userGradeMapping = {
    'USER_GRADE_NORMAL': '普通会员',
    'USER_GRADE_PREPARE_VIP': '准VIP会员,需要用户自己点亮',
    'USER_GRADE_VIP': ' VIP会员',
    'USER_GRADE_IMPERIAL_VIP': '至尊VIP会员'
};

export const spNoMapping = {
    6301: '支付宝账户安全险-商业版本',
    6300: '支付宝账户安全险-普通版本',
    5200: '招财宝机构代发融资/投资保险',
    4151: '机场航延险',
    4161: '银行卡安全险',
    5513: '到位意外险-平台版',
    4740: '家人防骗险',
    5542: '饿了么众包骑手意外险',
    5566: '饿了么食品安全险',
    6305: '账户资金防骗险（淘系版）',
    6311: '大病无忧宝（福利版）',
    5601: '天猫品质保障险',
    5606: '生鲜腐烂险',
    5611: '美妆过敏险'
};

export const BxsCardTitle = {
    BxsBasicInfo: {
        className: 'icon-shenhe',
        id: 'BxsBasicInfo',
        text: '工单信息'
    },
    BxsPerson: {
        className: 'icon-yonghu',
        id: 'BxsPerson',
        text: '用户信息'
    },
    BxPolicy: {
        className: 'icon-baodan',
        id: 'BxPolicy',
        text: '保单信息'
    },
    BxsRisk: {
        className: 'icon-anjian',
        id: 'BxsRisk',
        text: '案件信息'
    },
    BxsAccident: {
        className: 'icon-chuxian',
        id: 'BxsAccident',
        text: '出险信息'
    },
    BxsVoucher: {
        className: 'icon-pei',
        id: 'BxsVoucher',
        text: '理赔凭证'
    },
    BxsFund: {
        className: 'icon-pingzhengguanli01',
        id: 'BxsFund',
        text: '赔付信息'
    },
    BxsTaskForm: {
        className: 'icon-dingdanchuli',
        id: 'BxsTaskForm',
        text: '工单处理'
    },
    BxsTaskHistory: {
        className: 'icon-lishigongdan',
        id: 'BxsTaskHistory',
        text: '工单处理历史'
    }
};

export const BxsTaskFormResult = {
    // 标准处理结果
    PROCESS: {
        COMMON: {
            REJECT: {
                label: '驳回',
                list: [
                    {text: '被骗（电信诈骗-短信）'},
                    {text: '被骗（电信诈骗-电话）'},
                    {text: '被骗（电信诈骗-网络）'},
                    {text: '案发时间早于保险生效'},
                    {text: '银行过失'},
                    {text: '挂失证明超出7日'},
                    {text: '本人绑定非银行平台的快捷支付的资金损失'},
                    {text: '非法目的'},
                    {text: '用户撤案'},
                    {text: '违反第三方账户使用规范'},
                    {text: '不在保险责任范围'}
                ]
            }
        },
        ELM_FOOD_SAFETY: {
            single: true,
            list: [
                {text: '不属于保险责任范围'},
                {text: '不在保险期间内'},
                {text: '不在索赔期间'},
                {text: '未在投保城市'},
                {text: '身份证号码不正确'}
            ]
        },
        ELM_DELIVERY: {
            single: true,
            list: [
                {text: '非保险责任（非意外）'},
                {text: '非保险责任（其他）'},
                {text: '非保险期间'},
                {text: '无法提供索赔材料（立案证明）'},
                {text: '无法提供索赔材料（事故认定书）'},
                {text: '无法提供索赔材料（原价值发票）'},
                {text: '无法提供索赔材料（有效票据）'}
            ]
        },
        HEALTH_BEAN_SIMPLE: {
            single: true,
            list: [
                {text: '不属于重大疾病保障范围'},
                {text: '不在保险期间内'},
                {text: '不在索赔期间'},
                {text: '不属于保险责任'}
            ]
        }
    },
    // 小二备注
    NOTE: {
        TEMPSAVE: {
            label: '暂存',
            list: [
                {text: '需要再联系客户='},
                {text: '等待客户核实='},
                {text: '特殊问题确认='},
                {text: '流程相关确认='},
                {text: '已经答复客户补偿，等待客户做安全维护='},
                {text: '已经答复客户补偿，等待客户提供凭证='},
                {text: '已经答复客户补偿，等待客户邮寄理赔申请书='},
                {text: '大额case已提交给保险公司='},
                {text: '已经答复客户拒赔，等待保险公司确认='},
                {text: '已经答复客户赔付，等待保险公司确认='},
                {text: '等待客户提供凭证='},
                {text: '重复工单=已有工单【工单号XXX】处理。'},
                {text: '联系不上=2天联系不上，本次暂停跟进，短信通知【号码】。'},
                {text: '放弃补偿=客户表示放弃补偿，原因XXXX，工单退回。'},
                {text: '逾期未操作=逾期未完成约定操作，本次暂停处理，短信通知【号码】。'},
                {text: '理赔工单=回访电话:；姓名：；生效时间：；被盗时间：；被盗金额：；案情：是否点击链接，是否非法目的 ，赔付结果：'},
                {text: '不符合理赔=【回访电话:；姓名：；生效时间：拒赔原因：】。不在补偿范围内，短信|电话通知【号码】。'},
            ]
        },
        REJECT: {
            label: '驳回',
            list: [
                {text: '不符合补偿='},
                {text: '重复工单='},
                {text: '逾期未操作='},
                {text: '联系不上='},
                {text: '放弃补偿='},
                {text: '联系第三方平台赔付='},
                {text: '用户主动撤销'}
            ]
        }
    }
};

// 一些布局
export const formItemLayout = {
    colOf3: {
        labelCol: { span: 6 },
        wrapperCol: { span: 12 }
    },
    colOf1: {
        labelCol: { span: 3 },
        wrapperCol: { span: 20 }
    }
};

// 邮件通知模板
// 银行卡安全险邮件模板
export const emaliNoteData = {
    level: ['layer-1', 'layer-2', 'layer-3', 'layer-4'],
    title: {
        'layer-1': '保险理赔中心请您提交凭证',
        'layer-2': '保险理赔中心请您提交凭证',
        'layer-3': '保险理赔中心请您提交凭证',
        'layer-4': '保险理赔中心请您提交凭证'
    },
    label: {
        'layer-1': '涉案金额≤2000',
        'layer-2': '2000元＜涉案金额≤5000元',
        'layer-3': '涉案金额＞5000元',
        'layer-4': '换卡凭证'
    },
    content: {
        'layer-1': `
            <p>关于您反映资金非本人支付的情况，请提供如下资料以便为您提交保险理赔申请：</p>
            <p>1. 身份证正反面原件彩色扫描件或拍摄件（证件要求可参https://cshall.alipay.com/lab/help_detail.htm?help_id=253024 ）；</p>
            <p>2. 银行卡正面原件彩色扫描件或拍摄件；</p>
            <p>3. 您在发卡行（办卡时）预留的手机号码；</p>
            <p>4. 您的银行卡个人账户被盗刷、盗用、盗取、转账等相关的交易记录；</p>
            <p>5. 账户挂失或冻结时间证明；</p>
            <p>6. 支付金额以及您的联系手机号码；</p>
            <p>您提交后，我们会在3个工作日尽快给您回复，也请您尽快向您当地公安机关进行反映，保险公司会配合公安机关的调查。</p>
            <p>同时，建议您对银行卡做好安全维护，为了您的账户安全，请不要随意登录不明网站、扫描二维码，请不要接受不明来历的邮件、图片、压缩包等。</p>
            <p>点击这里上传你的附件信息</p>
            <p>如果您点击上述链接无效，请把下面的代码拷贝到浏览器的地址栏中：</p>
        `,
        'layer-2': `
            <p>关于您反映资金非本人支付的情况，请提供如下资料以便为您提交保险理赔申请：</p>
            <p>1. 身份证正反面原件彩色扫描件或拍摄件（证件要求可参考https://cshall.alipay.com/lab/help_detail.htm?help_id=253024）；</p>
            <p>2. 报案回执（主要包括：报案人姓名、报案时间、报案内容、公安机关的红色公章等）；</p>
            <p>3. 银行卡正面原件彩色扫描件或拍摄件；</p>
            <p>4. 支付金额以及您的联系手机号码； </p>
            <p>5. 您在发卡行（办卡时）预留的手机号码；</p>
            <p>6. 您的银行卡个人账户被盗刷、盗用、盗取、转账等相关的交易记录；</p>
            <p>7. 账户挂失或冻结时间证明；</p>
            <p>您提交后，我们会在3个工作日尽快给您回复，也请您尽快向您当地公安机关进行反映，保险公司会配合公安机关的调查。</p>
            <p>同时，建议您对银行卡做好安全维护，为了您的账户安全，请不要随意登录不明网站、扫描二维码，请不要接受不明来历的邮件、图片、压缩包等。</p>
            <p>点击这里上传你的附件信息</p>
            <p>如果您点击上述链接无效，请把下面的代码拷贝到浏览器的地址栏中：</p>
            <p>感谢您的支持！ </p>
        `,
        'layer-3': `
            <p>关于您反映资金非本人支付的情况，请提供如下资料以便为您提交保险理赔申请：</p>
            <p>1. 身份证正反面原件彩色扫描件或拍摄件（证件要求可参考https://cshall.alipay.com/lab/help_detail.htm?help_id=253024）；</p>
            <p>2. 立案回执（主要包括：报案人姓名、报案时间、报案内容、公安机关的红色公章等）；</p>
            <p>3. 银行卡正面原件彩色扫描件或拍摄件； </p>
            <p>4. 支付金额以及您的联系手机号码；</p>
            <p>5. 您在发卡行（办卡时）预留的手机号码；</p>
            <p>6. 您的银行卡个人账户被盗刷、盗用、盗取、转账等相关的交易记录；</p>
            <p>7. 账户挂失或冻结时间证明；</p>
            <p>您提交后，我们会在3个工作日尽快给您回复，也请您尽快向您当地公安机关进行反映，保险公司会配合公安机关的调查。</p>
            <p>同时，建议您对银行卡做好安全维护，为了您的账户安全，请不要随意登录不明网站、扫描二维码，请不要接受不明来历的邮件、图片、压缩包等。</p>
            <p>点击这里上传你的附件信息</p>
            <p>如果您点击上述链接无效，请把下面的代码拷贝到浏览器的地址栏中：</p>
            <p>感谢您的支持！ </p>
        `,
        'layer-4': `
            <p>根据您反映银行卡注销换新的情况，请您提供银行卡换卡证明。    保险理赔中心请您提交凭证</p>
            <p>证明要求：需要说明原卡注销换了新卡，注明新老卡号、姓名、身份证号码并加盖清晰完整的银行红色公章。</p>
            <p>请点击以下链接，提交您的相关证件资料或截图图片，并简要描述您的问题情况：</p>
            <p>点击这里上传您的附件信息 请勿直接回复邮件</p>
            <p>如果您点击上述链接无效，请把下面的代码拷贝到浏览器的地址栏中：</p>
            <p>您提交后，我们会在3个工作日尽快给您回复。</p>
            <p>感谢您的支持！</p>
        `
    }
};

// 小二上传凭证-凭证类型
export const BxsVoucherUploadType = {
    id: ['ID', 'BANK', 'POLICE', 'OTHER'],
    catId: {
        'ID': {
            label: '身份证',
            subTypeIds: ['1', '101', '102']
        },
        'BANK': {
            label: '银行凭证',
            subTypeIds: ['2', '201', '202', '203']
        },
        'POLICE': {
            label: '公安凭证',
            subTypeIds: ['3', '301', '302']
        },
        'OTHER': {
            label: '其他',
            subTypeIds: ['4']
        }
    },
    subTypeId: {
        '1': '身份证',
        '101': '身份证正面',
        '102': '身份证反面',
        '2': '银行凭证',
        '201': '银行卡正面',
        '202': '银行卡冻结/挂失凭证',
        '203': '交易明细',
        '3': '公安凭证',
        '301': '报案回执',
        '302': '立案回执',
        '4': '其他'
    }
}



export const BxsFundBankThead = {
    inAccInst: {
        type: 'enum',
        name: '银行名称',
        isExt: false,
        required: true,
        array: [
            {id: '中国工商银行', text: '中国工商银行', selected: false},
            {id: '中国建设银行', text: '中国建设银行', selected: false},
            {id: '中国农业银行', text: '中国农业银行', selected: false},
            {id: '中国民生银行', text: '中国民生银行', selected: false},
            {id: '交通银行', text: '交通银行', selected: false},
            {id: '中国光大银行', text: '中国光大银行', selected: false},
            {id: '中国邮政储蓄银行', text: '中国邮政储蓄银行', selected: true},
            {id: '渣打银行', text: '渣打银行', selected: false},
            {id: '恒丰银行', text: '恒丰银行', selected: false},
            {id: '新韩银行', text: '新韩银行', selected: false},
            {id: '中信银行', text: '中信银行', selected: false},
            {id: '华夏银行', text: '华夏银行', selected: false},
            {id: '渤海银行', text: '渤海银行', selected: false},
            {id: '中国银行', text: '中国银行', selected: false},
            {id: '浦发银行', text: '浦发银行', selected: false},
            {id: '花旗银行', text: '花旗银行', selected: false},
            {id: '招商银行', text: '招商银行', selected: false},
            {id: '广发银行', text: '广发银行', selected: false},
            {id: '徽商银行股份有限公司', text: '徽商银行股份有限公司', selected: false},
            {id: '农村商业银行', text: '农村商业银行', selected: false},
            {id: '城市商业银行', text: '城市商业银行', selected: false},
            {id: '农村信用社', text: '农村信用社', selected: false},
            {id: '村镇银行', text: '村镇银行', selected: false},
            {id: '上海农商银行', text: '上海农商银行', selected: false},
            {id: '兴业银行', text: '兴业银行', selected: false},
            {id: '浙商银行', text: '浙商银行', selected: false},
            {id: '东亚银行', text: '东亚银行', selected: false},
            {id: '韩亚银行', text: '韩亚银行', selected: false},
            {id: '城市信用社', text: '城市信用社', selected: false}
        ]
    },
    inAccCardno: {
        type: 'string',
        name: '银行卡号',
        isExt: false,
        required: true
    },
    inAccName: {
        type: 'string',
        name: '姓名',
        isExt: false,
        required: true
    },
    bankCardType: {
        type: 'enum',
        name: '卡种',
        isExt: false,
        required: false,
        array: [{
            id: 'DEBITCAED',
            text: '借记卡',
            selected: true
        }, {
            id: 'CREDITCAED',
            text: '贷记卡',
            selected: false
        }]
    },
    subBankName: {
        type: 'string',
        name: '支行名称',
        isExt: false,
        required: false
    },
    bankCardCustType: {
        type: 'enum',
        name: '对公/对私',
        isExt: false,
        required: false,
        array: [{
            id: 'PUBLIC',
            text: '对公',
            selected: false
        }, {
            id: 'PRIVATE',
            text: '对私',
            selected: true
        }]
    }
}

