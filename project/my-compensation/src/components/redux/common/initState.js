/**
 * 定义state中的默认数据
 */
import getConfigurationDefValue from '../../common/utils/getConfigurationDefValue.js';
import {BxsFundBankThead} from '../../assess/common/data.js';
// 用户登录
export const userState = {
    userID: '',
    userName: '',
    hasSign: false
};

// 页面加载中
export const loadingState = false;

// 工单处理历史
export const historyState = {
    list: [],
    tips: '暂无数据'
};

//骗陪识别
export const witClaimState = {
    totalScore: 0,
    singleScore: {},
    explain: [],
    tagging: [],
    groupStartAccount:'',
    caseAccountInfo:[]
}

//图片识别
export const picRecognitionState = {
    ext: '{}',
    filePath: '',
    voucherId: '',
    memo: '',
    disabled: true,
    sourceImg: ''
}

// 短信通知
export const smsState = {
    list: []
}

function fixSessionStorage(name) {
    let ret = '';
    try {
        ret = sessionStorage.getItem(name);
    } catch (e) {}
    return ret;
}

// 智能理算
export const riskTaskState = {
    bxsRiskTask: {},
    orders: [],
    riskTaskId: fixSessionStorage('riskTaskId'),
    tips: ''
};

// 案件信息
export const riskState = [];

// 理赔报案
export const reportCaseState = {
    userInfoParams: {},
    reportCaseList: [],
    accidentType: '',
    source: '热线',
    accidentInfo: {},
    supplementInfo: {},
    createSuccess: false
};

export const policySearchState = {
    infos: [],
    emptyText: '暂无数据'
};

// 保单信息
export const policyState = {
    list: [],
    tips: '暂无数据'
};

// 赔付历史记录
export const paymentHistoryState = {
    infos: [],
    emptyText: '暂无数据'
};

// 理赔数据
export const assessState = {
    assess: {},
    taskModal: {
        node: '',
        taskId: ''
    },
    taskInfo: {
        node: '',
        nodeDesc: '',
        applyerId: '',
        userID: null
    },
    voucherExtData: {},
    taskcenterId: fixSessionStorage('taskcenterId'),
    taskcenterType: '',
    accident: {},
    accidentParams: {},
    taskForm: {
        backgroundMemo: '',
        frontMemo: '',
        showBackground: false
    },
    fund: {
        inAccType: '',
        ALIPAY: {},
        BANK: getConfigurationDefValue(BxsFundBankThead) || {}
    },
    voucher: {
        header: {},
        list: [],
        ext: []
    },
    tips: '',
    riskNumber: ''
};

// 补传凭证规则
export const voucherRuleState = {
    rules: {},
    value: {}
};

// 智能引导
export const guideState = {
    guideTaskCenterID: fixSessionStorage('guideTaskCenterID'),
    guideTips: '', // 引导提示信息
    bxsGuideModel: {},
    answers: {}, // 答题内容
    record: false, // 答题记录
    reason: '', // 答题结论
    strategeBxsGuideModel: {},
    strategeAnswers: {},
    strategeRecord: false,
    strategeReason: '',
    bxsPersonModel: {},
    bxsTaskModel: {},
    assessTips: '', // 获取核陪数据提示信息
    feedbackMemo: '' // 反馈文本内容
};
