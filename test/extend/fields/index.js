/**
 * 配置
 * 车险报案
 */

// 车险 - 标的车
export const MARK_CAR = {
     driverName: {
         type: 'input',
         label: '驾驶员姓名',
         rules: { required: true },
     },
     // todo cartMark 来自关联查询的车牌号,不可编辑
     carMark: {
        type: 'input',
        label: '标的车牌',
        // disabled: true,
        rules: { required: true, isCarMark: { max: 9, min: 7 } },
        toUpper: true,
     },
     vehicleType: {
         type: 'enum',
         label: '号牌种类',
         option: [
             { value: '01', label: '大型汽车号牌' },
             { value: '02', label: '小型汽车号牌' },
             { value: '03', label: '使馆汽车号牌' },
             { value: '04', label: '领馆汽车号牌' },
             { value: '05', label: '境外汽车号牌' },
             { value: '06', label: '外籍汽车号牌' },
             { value: '07', label: '两、三轮摩托车号牌' },
             { value: '08', label: '轻便摩托车号牌' },
             { value: '09', label: '使馆摩托车号牌' },
             { value: '10', label: '领馆摩托车号牌' },
             { value: '11', label: '境外摩托车号牌' },
             { value: '12', label: '外籍摩托车号牌' },
             { value: '13', label: '农用运输车号牌' },
             { value: '14', label: '拖拉机号牌' },
             { value: '15', label: '挂车号牌' },
             { value: '16', label: '教练汽车号牌' },
             { value: '17', label: '教练摩托车号牌' },
             { value: '18', label: '试验汽车号牌' },
             { value: '20', label: '临时入境汽车号牌' },
             { value: '21', label: '临时入境摩托车号牌' },
             { value: '22', label: '临时行驶车号牌' },
             { value: '24', label: '公安警用摩托车' },
             { value: '25', label: '专用机械' },
             { value: '26', label: '警备摩托车' },
             { value: '27', label: '大型警车' },
             { value: '32', label: '二轮摩托车' },
             { value: '81', label: '武警号牌' },
             { value: '82', label: '军队号牌' },
             { value: '23', label: '公安警车号牌' },
             { value: '51', label: '大型新能源汽车号牌' },
             { value: '52', label: '小型新能源汽车号牌' },
         ],
         // rules: { required: true },
     },
     lossPart: {
         type: 'checkbox',
         label: '损失部位',
         colSpan: 3,
         option: [
            { value: '00', label: '无损' },
            { value: '0X', label: '不详' },
            { value: '01', label: '正前方' },
            { value: '02', label: '前方左侧' },
            { value: '03', label: '前方右侧' },
            { value: '04', label: '中间左侧' },
            { value: '05', label: '中间右侧' },
            { value: '06', label: '后方左侧' },
            { value: '07', label: '后方右侧' },
            { value: '08', label: '正后方' },
            { value: '09', label: '车顶' },
            { value: '10', label: '车底' },
         ],
     },
     //TODO 和出险地点一致 省市区+input
     surveyPlace: {
        type: 'input-button',
        label: '标的车查勘地址',
        colSpan: 3,
        childSpan: 14,
        option: [
             { value: 'city', label: '编辑', type: 'primary', },
             { value: '2', label: '同出险地点' },
        ],
        rules: { required: true },
     }
};

// 车险 - 生成描述
export const DESCRIPTION = {
    accidentDescription: {
        colSpan: 3,
        type: 'textarea-button',
        childSpan: 18,
        rows: 6,
        placeholder: '出险经过描述最多可以填写500个字',
        option: [
            { value: '1', label: '生成描述', type: 'primary' }
        ]
    },
}

// 车险 - 人员伤亡信息
export const PERSON_LOSS = {
    subtype: {
        type: 'radio',
        label: '人员损失',
        option: [
            { value: '1', label: '标的' },
            { value: '0', label: '三者' },
        ],
        rules: { required: true },
    },
    sex: {
        type: 'radio',
        label: '性别',
        option: [
            { value: '0', label: '男' },
            { value: '1', label: '女' },
        ],
        rules: { required: true },
    },
    age: {
        type: 'number',
        label: '年龄',
        step: 1,
        rules: { required: true },
    },
    // todo 受伤部位改为描述
    injuredPart: {
        type: 'checkbox',
        label: '受伤部位',
        colSpan: 2,
        option: [
            { value: '1', label: '头部' },
            { value: '2', label: '四肢' },
            { value: '3', label: '躯干' },
            { value: '4', label: '内脏器官' },
            { value: '5', label: '其他' },
        ],
        rules: { required: true },
    },
    needTreat: {
        type: 'enum',
        label: '是否就诊',
        option: [
            { value: '1', label: '是', },
            { value: '2', label: '否', },
            { value: '3', label: '一次性赔付', },
        ],
        rules: { required: true },
    },
    hospital: {
        type: 'input',
        label: '就诊医院',
    },
    lossAmt: {
        type: 'number',
        label: '赔付金额',
        rules: {
            // unMoney: '赔付金额输入不合法'
        }
    },
    desc: {
        type: 'textarea',
        label: '描述',
        colSpan: 3,
    }
};

// 车险 - 财产损失信息
export const PROPERTY_LOSS = {
    subtype: {
        type: 'radio',
        label: '财产损失',
        option: [
            { value: '1', label: '标的' },
            { value: '0', label: '三者' },
        ],
        rules: { required: true },
    },
    name: {
        type: 'input',
        label: '损失项',
        rules: { required: true },
    },
    lossNumber: {
        type: 'number',
        label: '损失数量',
        step: 1,
    },
    desc: {
        type: 'input',
        label: '描述',
        colSpan: 3,
    }
};

// 车险 - 三者车
export const THREE_CAR = {
    driverName: {
        type: 'input',
        label: '驾驶员姓名',
        rules: { required: true },
    },
    carMark: {
        type: 'input',
        label: '三者车牌',
        toUpper: true,
        rules: { required: true, isCarMark: { max: 9, min: 7 } },
    },
    vehicleType: {
        type: 'enum',
        label: '号牌种类',
        option: [
            { value: '01', label: '大型汽车号牌' },
            { value: '02', label: '小型汽车号牌' },
            { value: '03', label: '使馆汽车号牌' },
            { value: '04', label: '领馆汽车号牌' },
            { value: '05', label: '境外汽车号牌' },
            { value: '06', label: '外籍汽车号牌' },
            { value: '07', label: '两、三轮摩托车号牌' },
            { value: '08', label: '轻便摩托车号牌' },
            { value: '09', label: '使馆摩托车号牌' },
            { value: '10', label: '领馆摩托车号牌' },
            { value: '11', label: '境外摩托车号牌' },
            { value: '12', label: '外籍摩托车号牌' },
            { value: '13', label: '农用运输车号牌' },
            { value: '14', label: '拖拉机号牌' },
            { value: '15', label: '挂车号牌' },
            { value: '16', label: '教练汽车号牌' },
            { value: '17', label: '教练摩托车号牌' },
            { value: '18', label: '试验汽车号牌' },
            { value: '20', label: '临时入境汽车号牌' },
            { value: '21', label: '临时入境摩托车号牌' },
            { value: '22', label: '临时行驶车号牌' },
            { value: '24', label: '公安警用摩托车' },
            { value: '25', label: '专用机械' },
            { value: '26', label: '警备摩托车' },
            { value: '27', label: '大型警车' },
            { value: '32', label: '二轮摩托车' },
            { value: '81', label: '武警号牌' },
            { value: '82', label: '军队号牌' },
            { value: '23', label: '公安警车号牌' },
            { value: '51', label: '大型新能源汽车号牌' },
            { value: '52', label: '小型新能源汽车号牌' },
        ],
        // rules: { required: true },
    },
    lossPart: {
        type: 'checkbox',
        label: '损失部位',
        colSpan: 2,
        option: [
            { value: '00', label: '无损' },
            { value: '0X', label: '不详' },
            { value: '01', label: '正前方' },
            { value: '02', label: '前方左侧' },
            { value: '03', label: '前方右侧' },
            { value: '04', label: '中间左侧' },
            { value: '05', label: '中间右侧' },
            { value: '06', label: '后方左侧' },
            { value: '07', label: '后方右侧' },
            { value: '08', label: '正后方' },
            { value: '09', label: '车顶' },
            { value: '10', label: '车底' },
        ],
    },
    //TODO 和出险地点一致 省市区+input
    surveyPlace: {
        type: 'input-button',
        label: '三者车查勘地址',
        colSpan: 3,
        childSpan: 14,
        option: [
            { value: 'city', label: '编辑', type: 'primary', },
            { value: '2', label: '同出险' },
            { value: '3', label: '同标的' },
        ],
    }
};

// 车险 - 辅助信息
export const ASSIST = {
    assist: {
        ids: [
            'hasCalledPolice',
            'isSpotReport',
            'isUnlocalLoss',
            'paySelfFlag',
            'subrogationFlag',
            'isMajorDisasters',
        ],
        type: 'checkbox',
        colSpan: 3,
        option: [
            { value: 'hasCalledPolice', label: '是否现场报案', },
            { value: 'isSpotReport', label: '是否报警', },
            { value: 'isUnlocalLoss', label: '是否异地出险', },
            { value: 'paySelfFlag', label: '是否互碰自赔', },
            { value: 'subrogationFlag', label: '是否代位求偿', },
            { value: 'isMajorDisasters', label: '是否重大灾害事件', },
        ]
    },
}

// 车险 - 报案基本信息
export const BASIC = {
    reportTime: {
        order: 1,
        type: 'date',
        label: '报案时间',
        disabled: true,
    },
    channelId: {
        order: 2,
        type: 'input',
        label: '来电电话',
        rules: { required: true }
        // disabled: true,
    },
    channel: {
        order: 3,
        type: 'enum',
        label: '报案方式',
        option: [
            { value: 'TEL', label: '电话' },
            { value: 'ONLINE', label: '在线' },
        ]
    },
    insuredName: {
        order: 4,
        type: 'input',
        label: '被保人姓名',
        disabled: true,
    },
    insuredCertNo: {
        order: 5,
        type: 'input',
        label: '被保人证件号码',
        disabled: true,
    },
    insuredPhone: {
        order: 6,
        type: 'input',
        label: '被保人电话',
        disabled: true,
    },
    reportPersonName: {
        order: 7,
        type: 'input',
        label: '报案人姓名',
        rules: { required: true }
    },
    reportPersonType: {
        order: 8,
        type: 'enum',
        label: '报案人身份类型',
        option: [
            { label: '本人', value: '1', },
            { label: '配偶', value: '2', },
            { label: '父母', value: '3', },
            { label: '养父母', value: '4', },
            { label: '子女', value: '5', },
            { label: '雇佣', value: '6', },
            { label: '其他', value: '7', },
        ],
        // rules: { required: true }
    },
    reportPersonPhone: {
        order: 9,
        type: 'input',
        label: '报案人联系电话',
        rules: { phone: true }
    },
    contactName: {
        order: 10,
        type: 'input',
        label: '联系人姓名',
    },
    contactPhone: {
        order: 11,
        type: 'input-radio',
        label: '联系人电话',
        option: [
            { label: '同报案人', value: 'reportPersonPhone', },
            { label: '同被保人', value: 'insuredPhone', },
        ],
        rules: { required: true }
    },
    accidentTime: {
        order: 12,
        type: 'date',
        label: '出险时间',
        rules: { required: true },
        // disabled: true,
    },
    accidentReason: {
        order: 13,
        type: 'enum',
        label: '出险原因',
        option: [
            { label: '追尾', value: '01', },
            { label: '逆行', value: '02', },
            { label: '倒车', value: '03', },
            { label: '溜车', value: '04', },
            { label: '开关车门', value: '05', },
            { label: '违反交通信号', value: '06', },
            { label: '未按规定让行', value: '07', },
            { label: '其他', value: '09', },
            { label: '一方全责一方无责的其他情形', value: '98', },
            { label: '双方同责的情形', value: '99', },
        ],
        rules: { required: true },
    },
    accidentTypeName: {
        order: 14,
        type: 'enum',
        label: '事故类型（模版）',
        option: [
            { label: '单车事故/翻车', value: 'C01' },
            { label: '两车或多车事故', value: 'C02' },
            { label: '盗抢险', value: 'C03' },
            { label: '行驶中被淹', value: 'C04' },
            { label: '行驶中玻璃破', value: 'C05' },
            { label: '停放中玻璃破', value: 'C06' },
            { label: '停放中被淹', value: 'C07' },
            { label: '停放被划', value: 'C08' },
            { label: '停放受损三者逃逸', value: 'C09' },
            { label: '行驶中雹灾/自燃', value: 'C10' },
            { label: '停放中雹灾/自燃', value: 'C11' },
        ],
        rules: { required: true },
    },
    accidentLiability: {
        order: 15,
        type: 'enum',
        label: '事故责任划分',
        option: [
            { label: '全部责任', value: '1' },
            { label: '主要责任', value: '2' },
            { label: '同等责任', value: '3' },
            { label: '次要责任', value: '4' },
            { label: '无责任', value: '5' },
        ],
        rules: { required: true }
    },
    weather: {
        order: 16,
        type: 'enum',
        label: '天气情况',
        option: [
            { label: '雨', value: '1' },
            { label: '雪', value: '2' },
            { label: '雾', value: '3' },
            { label: '晴', value: '4' },
            { label: '大风', value: '5' },
            { label: '阴', value: '6' },
            { label: '沙尘', value: '7' },
            { label: '冰雹', value: '8' },
            { label: '其它', value: '9' },
        ],
        // rules: { required: true }
    },
    accidentManageType: {
        order: 17,
        type: 'enum',
        label: '处理类型',
        option: [
            { label: '当事人自行协商', value: '1' },
            { label: '交警简易程序处理', value: '2' },
            { label: '交警一般程序处理', value: '3' },
            { label: '单方事故处理', value: '4' },
            { label: '保险公司处理', value: '5' },
            { label: '民警调解', value: '6' },
            { label: '民警定责（中心内）', value: '7' },
            { label: '民警定责（中心外）', value: '8' },
            { label: '其他', value: '9' },
        ],
        // rules: { required: true },
    },
    accidentPlaceType: {
        order: 18,
        type: 'enum',
        label: '出险地点分类',
        option: [
            { label: '隧道', value: '1' },
            { label: '高架桥', value: '2' },
            { label: '桥梁', value: '3' },
            { label: '无人看管的停放处', value: '4' },
            { label: '停车场', value: '5' },
            { label: '省道', value: '6' },
            { label: '国道', value: '7' },
            { label: '高速公路', value: '8' },
            { label: '其他', value: '9' },
        ],
    },
}

// 车险 - 短信发送对象
export const MESSAGE_OBJ = {
    messageObj: {
        type: 'checkbox',
        label: '短信发送对象',
        option: [
            { messageObj: 'REPORTER', label: '报案人', value: 'REPORTER', },
            { messageObj: 'SALEWAY', label: '渠道', value: 'SALEWAY', },
            { messageObj: 'OTHER', label: '其他', value: 'OTHER', },
        ],
    }
};

// 车险 - 北京保单报案
export const BASIC_BEIJING = Object.assign({}, BASIC, {
        accidentCity: {
            order: 19,
            type: 'cascader-city',
            label: '出险城市',
            area: 'beijing',
            rules: { required: true }
        },
        road: {
            order: 20,
            type: 'search',
            label: '事故地点',
        },
        accidentPlace: {
            order: 21,
            type: 'input-button',
            label: '出险地点',
            colSpan: 3,
            childSpan: 14,
            option: [
                // { label: '编辑', value: 'city', type: 'primary' },
                { label: '地图选址', value: 'map', type: 'primary' },
            ],
            rules: { required: true }
        },
    }
);

// 车险 - 上海保单报案
export const BASIC_SHANGHAI = Object.assign({}, BASIC, {
        reporterCertiCode: {
            order: 9,
            type: 'input',
            label: '报案人身份证号',
        },
        accidentCity: {
            order: 19,
            type: 'cascader-city',
            label: '出险城市',
            area: 'shanghai',
            rules: { required: true }
        },
        road: {
            order: 20,
            type: 'search',
            label: '事故地点',
        },
        accidentPlace: {
            order: 21,
            type: 'input-button',
            label: '出险地点',
            colSpan: 3,
            childSpan: 14,
            option: [
                // { label: '编辑', value: 'city', type: 'primary' },
                { label: '地图选址', value: 'map', type: 'primary' },
            ],
            rules: { required: true }
        },
    }
);

// 车险 - 全国其他地方保单报案
export const BASIC_QUANGUO = Object.assign({}, BASIC, {
        accidentCity: {
            order: 19,
            type: 'cascader-city',
            label: '出险城市',
            area: 'quanguo',
        },
        accidentPlace: {
            order: 21,
            type: 'input-button',
            label: '出险地点',
            colSpan: 3,
            childSpan: 14,
            option: [
                // { label: '编辑', value: 'city', type: 'primary' },
                { label: '地图选址', value: 'map', type: 'primary' },
            ],
            rules: { required: true }
        },
    }
);
