module.exports = {
    assess: {
        status: true,
        data: {
            bxsAssess: {
                path: '/getBxsAssess.json',
                status: true
            },
            policyList: {
                path: '/getPolicyList.json',
                status: true
            },
            taskOpHistoryList: {
                path: '/getTaskOpHistoryList.json',
                status: true
            },
            fundOpHistoryList: {
                path: '/getFundOpHistoryList.json',
                status: true
            }
        }
    },
    bxsRule: {
        status: true,
        data: {
            configFormData: {
                path: '/getRuleList.json',
                status: true
            }
        }
    },
    bxsParam: {
        status: false,
        data: {
            configFormData: {
                path: '/getParamList.json',
                status: true
            }
        }
    },
    reportCase: {
        status: true,
        data: {
            policyType: {
                path: '/policyType.json',
                status: true
            }
        }
    },
    riskTask: {
        status: true,
        data: {
            riskTaskData: {
                path: '/analyzeRiskTask.json',
                status: true
            },
            updateTaskOrderLabel: {
                path: '/updateTaskOrderLabel.json',
                status: true
            }
        }
    },
    user: {
        status: true,
        data: {
            login: {
                path: '/getAuthToken.json',
                status: true
            }
        }
    },
    witClaim: {
        status: true,
        data: {
            chartData: {
                path: '/analyzeFraudRisk.json',
                status: true
            }
        }
    },
    other: {
        status: true,
        data: {
            upload: {
                path: '/upload.do',
                status: true
            }
        }
    }
};
