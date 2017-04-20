/**
 * 项目左侧悬浮菜单项配置
 * to：路由
 * text：菜单文本
 * className：菜单 Icon 图标 css 类
 * icon：菜单 antd 图标名称
 * isSidebar： 是否显示在左侧菜单区
 */
export const sidebarConfig = {
    assess: {
        to: '/assess',
        text: '理赔审核',
        className: 'icon-shenhe',
        isSidebar: true
    },
    paymentHistory: {
        to: '/paymentHistory',
        text: '赔付历史',
        className: 'icon-lishidingdan',
        isSidebar: true
    },
    policy: {
        to: '/policy',
        text: '保单查询',
        icon: 'search',
        isSidebar: true
    },
    reportcase: {
        to: '/reportcase',
        text: '理赔报案',
        className: 'icon-xiaofeijilu',
        isSidebar: false
    },
    home: {
        to: '/witclaim',
        text: '骗赔识别',
        className: 'icon-beipianjubao',
        isSidebar: true
    },
    guidance: {
        to: '/guide',
        text: '智能引导',
        className: 'icon-yindao',
        isSidebar: true
    },
    riskTask: {
        to: '/riskTask',
        text: '智能理算',
        className: 'icon-xiaofei01',
        isSidebar: true
    },
    consume: {
        to: '/consume',
        text: '消费记录',
        className: 'icon-xiaofeijilu',
        isSidebar: true
    },
    picRecognition: {
        to: '/picRecognition',
        text: '图片识别',
        icon: 'eye-o',
        isSidebar: true
    },
    bxsRule: {
        to: '/bxsRule',
        text: '配置管理',
        icon: 'setting',
        isSidebar: false
    },
    bxsParam: {
        to: '/bxsParam',
        text: '业务配置管理',
        icon: 'setting',
        isSidebar: false
    }
};

/**
 * 项目部分常量配置
 */
// 顶部高度
export const headHeight = 90;
// 底部高度
export const footHeight = 62;
// 左侧和右侧中间距离
export const blockSpace = 16;
// 模态框默认宽度（小型）
export const taskModalWidth = '240px';
// 当前时间戳
export const defaultTimeNow = new Date().getTime();
// 左侧菜单宽度
export const sidebarWidth = 160;

// 自定义表格布局
export const tableLayout = {
    colOfSix: {
        headWidth: '17%',
        normalWidth: '16%'
    },
    colOfSecond: {
        headWidth: '8%',
        normalWidth: '25%'
    }
};

// 险种映射
export const taskTypeMapping = {
    BANKCARD_PROTECTION: '4161',
    INSURANCE_ACCT_SAFE_ANTI_FRAUD: '6305',
    ELM_DELIVERY: '5542',
    ELM_FOOD_SAFETY: '5566',
    HEALTH_BEAN_SIMPLE: '6311'
};

//险种映射，赔付历史
export const payTypeMapping = {
    BANKCARD_PROTECTION: '银行卡安全险',
    INSURANCE_ACCT_SAFE_ANTI_FRAUD: '账户资金防骗险（淘系版）',
    ELM_DELIVERY: '饿了么众包骑手意外险',
    ELM_FOOD_SAFETY: '饿了么食品安全险',
    HEALTH_BEAN_SIMPLE: '大病无忧宝（福利版）',
    TMALL_QUALITY_ASSURANCE: '天猫品质保障险',
    TMALL_FRESH_FOOD: '生鲜腐烂险',
    TMALL_MAKE_UP: '美妆过敏险'
};
