import CONFIG from '../../common/config';

export default {
    'getBxsAssess.json': {
        title: '无理赔审核信息查询权限',
        content: '【CSMNG_CP_DETAIL】或者【CSMNG_CP_CONFIRM】或者【CSMNG_CP_CHECK】'
    },
    'guide.json': {
        title: '无智能引导权限',
        content: '【CSMNG_CP_DETAIL】或者【CSMNG_CP_CONFIRM】或者【CSMNG_CP_CHECK】'
    },
    'getAssessForGuide.json': {
        title: '无智能引导理赔单信息查询权限',
        content: '【CSMNG_CP_DETAIL】或者【CSMNG_CP_CONFIRM】或者【CSMNG_CP_CHECK】'
    },
    [`${CONFIG.JSONP}queryPolicyForCsplatform.json`]: {
        title: '无保单查询权限',
        content: '【BAOXIAN_CRM_CSP_POLICY_QUERY】'
    },
    'analyzeRiskTask.json': {
        title: '无数据查询权限',
        content: '【CSMNG_CP_DETAIL】'
    },
    'getReportCaseList.json': {
        title: '无险种报案权限',
        content: '【BXS_REPORT_CASE】'
    },
    'getConsumeRecord.json': {
        title: '无消费记录查询权限',
        content: '【CSMNG_CP_CREATE】或者【CSMNG_CP_DETAIL】或者【CSMNG_CP_CONFIRM】或者【CSMNG_CP_CHECK】或者【CSMNG_CP_CREATE_EVENT】或者【CSMONITOR_QUERY_REPORT】'
    },
    'pictureAnalyse.json': {
        title: '无图片识别权限',
        content: '【CSMNG_CP_DETAIL】或者【CSMNG_CP_CONFIRM】或者【CSMNG_CP_CHECK】'
    },
    'getAssessList.json': {
        title: '无赔付历史获取权限',
        content: '【CSMNG_CP_DETAIL】或者【CSMNG_CP_CONFIRM】或者【CSMNG_CP_CHECK】'
    }
}