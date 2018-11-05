module.exports = {
  "accidentParams": {
    "code": "",
    "conditionScript": "",
    "content": "{    \"isReportForObjectId\": {        \"type\": \"enum\",         \"name\": \"是否订单号报案\",         \"required\": false,        \"isExt\": true,            \"disabled\": true,        \"array\": [{            \"id\": \"1\",            \"text\": \"是\",            \"selected\": true        }, {            \"id\": \"2\",            \"text\": \"否\",            \"selected\": false        }]    },    \"claim_type\": {        \"type\": \"string\",         \"name\": \"类型\",         \"isExt\": true    },    \"objectId\": {        \"type\": \"string\",         \"name\": \"外卖订单编号\",         \"required\": false    },    \"order_detail\": {        \"type\": \"textarea\",         \"name\": \"菜品名称\",         \"isExt\": true    },    \"lossAmount\": {        \"type\": \"money\",        \"name\": \"外卖订单实付金额\",        \"required\": false,        \"disabled\": true    },    \"gmtAccident\": {        \"type\": \"date\",        \"name\": \"出险时间\",        \"required\": false    },    \"order_time\": {        \"type\": \"string\",         \"name\": \"外卖订单下单时间\",         \"isExt\": true    },    \"delivery_time\": {        \"type\": \"string\",         \"name\": \"外卖订单送达时间\",         \"isExt\": true    },    \"order_link\": {        \"type\": \"link\",         \"name\": \"投诉菜品链接\",         \"isExt\": true    },    \"phone\": {        \"type\": \"string\",         \"name\": \"联系电话\",         \"isExt\": true,        \"required\": false    },    \"email\": {        \"type\": \"string\",         \"name\": \"email地址\",         \"isExt\": true,        \"required\": false    },    \"riskResult\": {        \"type\": \"string\",         \"name\": \"风控结论\",         \"isExt\": true,        \"required\": false    },    \"description\": {        \"type\": \"textarea\",        \"name\": \"案情经过备注\",        \"required\": false    },    \"riskPhoneWarn\": {        \"type\": \"enum\",        \"name\": \"高危手机号\",        \"disabled\": true,        \"isHide\":true,        \"array\": [            \"13267013770\",            \"13125126130\",            \"17520085290\",            \"15589762676\",            \"15600003284\",            \"13167513883\",            \"13699892029\",            \"15058120113\",            \"13278675186\",            \"13416100287\",            \"13456112036\",            \"13713903211\",            \"13823213521\",            \"13826180195\",            \"15057104340\",            \"15167195142\",            \"15867163533\",            \"17324452286\",            \"18758009360\",            \"18929334816\"        ]    }}",
    "effectOrder": "",
    "gmtCreate": {
      "date": 9,
      "day": 4,
      "hours": 21,
      "minutes": 9,
      "month": 2,
      "seconds": 41,
      "time": 1489064981000,
      "timezoneOffset": -480,
      "year": 117
    },
    "gmtModified": {
      "date": 4,
      "day": 2,
      "hours": 18,
      "minutes": 15,
      "month": 8,
      "seconds": 35,
      "time": 1536056135000,
      "timezoneOffset": -480,
      "year": 118
    },
    "groupCode": "CARD_PARAMS",
    "id": 79,
    "insuranceType": "ELM_FOOD_SAFETY",
    "memo": "",
    "scene": "AUDIT",
    "serviceBean": "",
    "status": "OPEN"
  },
  "voucherAuditList": [
    "合格证件",
    "忽略",
    "非真实照片，请提供实拍照片后重新提交理赔申请",
    "非照片原图，请提供未经处理的照片原图后重新提交理赔申请",
    "图片模糊",
    "非订单所购商品，不符合保险责任，无法理赔",
    "缺少医疗凭证，请提供过敏症状部位照片与医疗凭证后重新提交理赔申请",
    "（1）医院资质不符",
    "（2）病历本不符合要求",
    "请提供带有患者姓名的病历本首页及诊断病历详情页后重新提交理赔申请",
    "（3）病历诊断书不符合要求",
    "请提供带有患者姓名的医生诊断记录后重新提交理赔申请",
    "（4）机打的医生病历诊断书不符合要求",
    "请提供带有患者姓名的医生诊断说明书后重新提交理赔申请",
    "缺少菜品变质/夹生/烧焦、出现异物商品图片",
    "非彩色扫描件或数码相片"
  ],
  "voucherExtHead": {
    "code": "",
    "conditionScript": "",
    "content": "{  \"liability\": {    \"type\": \"cascader\",    \"name\": \"保障内容\",    \"required\": true,    \"array\": [      {        \"label\": \"致病就医\",        \"value\": \"致病就医\",        \"children\": [          {            \"label\": \"致病一级\",            \"value\": \"致病一级\",            \"rel\": {              \"sumInsured\": \"3000元\",              \"multiplier\": 11,              \"voucherRule\": \"医疗类：出险人身份证，病历本/机打医疗证明/诊断证书，医疗费发票/医疗费用清单明细（二级（含）以上医院）；误工费：误工前12个月的工资凭证（含税单），如无用工单位可根据当地最低生活保障核定；就诊车费：就诊车费发票\"            },            \"children\": [              {                \"label\": \"致病就诊\",                \"value\": \"致病就诊\"              }            ]          },          {            \"label\": \"致病二级\",            \"value\": \"致病二级\",            \"rel\": {              \"sumInsured\": \"3000元\",              \"multiplier\": 1,              \"voucherRule\": \"\"            },            \"children\": [              {                \"label\": \"致病未就医\",                \"value\": \"致病未就医\"              }            ]          }        ]      },      {        \"label\": \"存在异物\",        \"value\": \"存在异物\",        \"children\": [          {            \"label\": \"异物一级\",            \"value\": \"异物一级\",            \"rel\": {              \"sumInsured\": \"2000元\",              \"multiplier\": 11,              \"voucherRule\": \"完整的菜品含异物实物照片\"            },            \"children\": [              {                \"label\": \"老鼠\",                \"value\": \"老鼠\"              },              {                \"label\": \"医用针头\",                \"value\": \"医用针头\"              },              {                \"label\": \"计生用品\",                \"value\": \"计生用品\"              },              {                \"label\": \"尖锐钉子\",                \"value\": \"尖锐钉子\"              },              {                \"label\": \"碎玻璃\",                \"value\": \"碎玻璃\"              },              {                \"label\": \"创可贴\",                \"value\": \"创可贴\"              },              {                \"label\": \"尖锐物品\",                \"value\": \"尖锐物品\"              },              {                \"label\": \"唾沫\",                \"value\": \"唾沫\"              },              {                \"label\": \"痰\",                \"value\": \"痰\"              },              {                \"label\": \"牙齿（人）\",                \"value\": \"牙齿（人）\"              },              {                \"label\": \"恶性传染源\",                \"value\": \"恶性传染源\"              }            ]          },          {            \"label\": \"异物二级\",            \"value\": \"异物二级\",            \"rel\": {              \"sumInsured\": \"1000元\",              \"multiplier\": 4,              \"voucherRule\": \"完整的菜品含异物实物照片\"            },            \"children\": [              {                \"label\": \"指甲\",                \"value\": \"指甲\"              },              {                \"label\": \"人体私处毛发\",                \"value\": \"人体私处毛发\"              },              {                \"label\": \"烟头\",                \"value\": \"烟头\"              },              {                \"label\": \"打火机\",                \"value\": \"打火机\"              },              {                \"label\": \"金属瓶盖\",                \"value\": \"金属瓶盖\"              },              {                \"label\": \"苍蝇\",                \"value\": \"苍蝇\"              },              {                \"label\": \"蚊子\",                \"value\": \"蚊子\"              },              {                \"label\": \"蟑螂\",                \"value\": \"蟑螂\"              },              {                \"label\": \"蚂蚁（10只以上）\",                \"value\": \"蚂蚁（10只以上）\"              },              {                \"label\": \"生蛆\",                \"value\": \"生蛆\"              },              {                \"label\": \"老鼠屎\",                \"value\": \"老鼠屎\"              },              {                \"label\": \"牙齿（动物）\",                \"value\": \"牙齿（动物）\"              },              {                \"label\": \"夹子\",                \"value\": \"夹子\"              },              {                \"label\": \"钉子\",                \"value\": \"钉子\"              },              {                \"label\": \"螺母\",                \"value\": \"螺母\"              },              {                \"label\": \"弹簧\",                \"value\": \"弹簧\"              },              {                \"label\": \"水管\",                \"value\": \"水管\"              },              {                \"label\": \"铁丝\",                \"value\": \"铁丝\"              },              {                \"label\": \"下水道塞\",                \"value\": \"下水道塞\"              },              {                \"label\": \"金属片\",                \"value\": \"金属片\"              },              {                \"label\": \"漏网\",                \"value\": \"漏网\"              },              {                \"label\": \"陶瓷片\",                \"value\": \"陶瓷片\"              },              {                \"label\": \"发霉\",                \"value\": \"发霉\"              },              {                \"label\": \"酸臭\",                \"value\": \"酸臭\"              },              {                \"label\": \"其他细菌携带物品\",                \"value\": \"其他细菌携带物品\"              }            ]          },          {            \"label\": \"异物三级\",            \"value\": \"异物三级\",            \"rel\": {              \"sumInsured\": \"500元\",              \"multiplier\": 1,              \"voucherRule\": \"完整的菜品实物照片\"            },            \"children\": [              {                \"label\": \"菜青虫\",                \"value\": \"菜青虫\"              },              {                \"label\": \"青虫\",                \"value\": \"青虫\"              },              {                \"label\": \"米小黑虫\",                \"value\": \"米小黑虫\"              },              {                \"label\": \"米小肉虫\",                \"value\": \"米小肉虫\"              },              {                \"label\": \"蚂蚁10只以下\",                \"value\": \"蚂蚁10只以下\"              },              {                \"label\": \"小飞虫\",                \"value\": \"小飞虫\"              },              {                \"label\": \"小飞蛾\",                \"value\": \"小飞蛾\"              },              {                \"label\": \"瓢虫\",                \"value\": \"瓢虫\"              },              {                \"label\": \"分离状的鸡鸭毛动物毛\",                \"value\": \"分离状的鸡鸭毛动物毛\"              },              {                \"label\": \"头发\",                \"value\": \"头发\"              },              {                \"label\": \"眼睫毛\",                \"value\": \"眼睫毛\"              },              {                \"label\": \"人体其他毛发（非私处）\",                \"value\": \"人体其他毛发（非私处）\"              },              {                \"label\": \"棉线\",                \"value\": \"棉线\"              },              {                \"label\": \"纱线\",                \"value\": \"纱线\"              },              {                \"label\": \"塑料绳\",                \"value\": \"塑料绳\"              },              {                \"label\": \"皮筋\",                \"value\": \"皮筋\"              },              {                \"label\": \"麻绳\",                \"value\": \"麻绳\"              },              {                \"label\": \"钢丝球碎屑（未致伤）\",                \"value\": \"钢丝球碎屑（未致伤）\"              },              {                \"label\": \"塑料刷毛\",                \"value\": \"塑料刷毛\"              },              {                \"label\": \"动植物刷毛\",                \"value\": \"动植物刷毛\"              },              {                \"label\": \"丝瓜筋碎屑\",                \"value\": \"丝瓜筋碎屑\"              },              {                \"label\": \"洗碗海绵碎渣\",                \"value\": \"洗碗海绵碎渣\"              },              {                \"label\": \"塑料胶带\",                \"value\": \"塑料胶带\"              },              {                \"label\": \"塑料包装袋碎片\",                \"value\": \"塑料包装袋碎片\"              },              {                \"label\": \"纸屑碎片\",                \"value\": \"纸屑碎片\"              },              {                \"label\": \"商标碎片\",                \"value\": \"商标碎片\"              },              {                \"label\": \"标签碎片（食品本身的除外）\",                \"value\": \"标签碎片（食品本身的除外）\"              },              {                \"label\": \"塑料瓶盖\",                \"value\": \"塑料瓶盖\"              },              {                \"label\": \"塑料泡沫\",                \"value\": \"塑料泡沫\"              },              {                \"label\": \"石子\",                \"value\": \"石子\"              },              {                \"label\": \"订书钉\",                \"value\": \"订书钉\"              },              {                \"label\": \"笔帽\",                \"value\": \"笔帽\"              },              {                \"label\": \"抹布\",                \"value\": \"抹布\"              },              {                \"label\": \"香皂肥皂\",                \"value\": \"香皂肥皂\"              },              {                \"label\": \"疑似使用过的餐具\",                \"value\": \"疑似使用过的餐具\"              },              {                \"label\": \"其他厨房用具\",                \"value\": \"其他厨房用具\"              }            ]          }        ]      },      {        \"label\": \"食品烧焦/变质/夹生\",        \"value\": \"食品烧焦/变质/夹生\",        \"children\": [          {            \"label\": \"变质一期\",            \"value\": \"变质一期\",            \"rel\": {              \"sumInsured\": \"1000元\",              \"multiplier\": 4,              \"voucherRule\": \"完整的菜品实物照片\"            },            \"children\": [              {                \"label\": \"发霉\",                \"value\": \"发霉\"              },              {                \"label\": \"酸臭\",                \"value\": \"酸臭\"              }            ]          },          {            \"label\": \"变质二期\",            \"value\": \"变质二期\",            \"rel\": {              \"sumInsured\": \"500元\",              \"multiplier\": 1,              \"voucherRule\": \"完整的菜品实物照片\"            },            \"children\": [              {                \"label\": \"食物过期\",                \"value\": \"食物过期\"              },              {                \"label\": \"夹生（饭菜未做熟影响食用）\",                \"value\": \"夹生（饭菜未做熟影响食用）\"              },              {                \"label\": \"烧焦（饭菜烧焦影响食用）\",                \"value\": \"烧焦（饭菜烧焦影响食用）\"              }            ]          }        ]      },      {        \"label\": \"生鲜/糕点\",        \"value\": \"生鲜/糕点\",        \"children\": [          {            \"label\": \"生鲜/糕点一级\",            \"value\": \"生鲜/糕点一级\",            \"rel\": {              \"sumInsured\": \"500元\",              \"multiplier\": 1,              \"voucherRule\": \"完整的菜品实物照片\"            },            \"children\": [              {                \"label\": \"腐烂/变质/死亡数量≥购买量的30%\",                \"value\": \"腐烂/变质/死亡数量≥购买量的30%\"              }            ]          },          {            \"label\": \"生鲜/糕点二级\",            \"value\": \"生鲜/糕点二级\",            \"rel\": {              \"sumInsured\": \"500元\",              \"multiplier\": 0.5,              \"voucherRule\": \"完整的菜品实物照片\"            },            \"children\": [              {                \"label\": \"腐烂/变质/死亡数量＜购买量的30%\",                \"value\": \"腐烂/变质/死亡数量＜购买量的30%\"              }            ]          }        ]      },      {        \"label\": \"其他\",        \"value\": \"其他\",        \"children\": [          {            \"label\": \"其他\",            \"value\": \"其他\",            \"rel\": {              \"sumInsured\": \"500元\",              \"multiplier\": 1,              \"voucherRule\": \"\"            }          }        ]      }    ]  },  \"sumInsured\": {    \"type\": \"text\",    \"name\": \"保险额度\",    \"val\": \"object[$.liability.join('-')].sumInsured\"  },  \"lossAmount\": {    \"type\": \"number\",    \"name\": \"订单实付金额(元)\",    \"total\": true,    \"required\": true  },  \"multiplier\": {    \"type\": \"integer\",    \"name\": \"系数(倍)\",    \"required\": true  },  \"totalAmount\": {    \"type\": \"number\",    \"name\": \"赔付金额（元）\",    \"val\": \"$.lossAmount*$.multiplier\",    \"total\": true,    \"required\": true  },  \"voucherRule\": {    \"type\": \"text\",    \"name\": \"凭证规则\",    \"val\": \"object[$.liability.join('-')].voucherRule\",    \"isHide\": false  },  \"gmtCreate\": {    \"type\": \"date\",    \"name\": \"创建时间\",    \"disabled\": true  },  \"gmtModified\": {    \"type\": \"date\",    \"name\": \"修改时间\",    \"disabled\": true  }}",
    "effectOrder": "",
    "gmtCreate": {
      "date": 9,
      "day": 4,
      "hours": 21,
      "minutes": 12,
      "month": 2,
      "seconds": 23,
      "time": 1489065143000,
      "timezoneOffset": -480,
      "year": 117
    },
    "gmtModified": {
      "date": 14,
      "day": 5,
      "hours": 18,
      "minutes": 23,
      "month": 3,
      "seconds": 2,
      "time": 1492165382000,
      "timezoneOffset": -480,
      "year": 117
    },
    "groupCode": "LIST_HEAD",
    "id": 80,
    "insuranceType": "ELM_FOOD_SAFETY",
    "memo": "",
    "scene": "AUDIT",
    "serviceBean": "",
    "status": "OPEN"
  },
  "subTaskModel": {
    "antprocessId": "BXS_5566_201810164304151521",
    "ext": "",
    "extMap": {},
    "gmtCreate": {
      "date": 16,
      "day": 2,
      "hours": 2,
      "minutes": 12,
      "month": 9,
      "seconds": 26,
      "time": 1539627146000,
      "timezoneOffset": -480,
      "year": 118
    },
    "gmtDone": {},
    "gmtModified": {
      "date": 16,
      "day": 2,
      "hours": 2,
      "minutes": 20,
      "month": 9,
      "seconds": 8,
      "time": 1539627608000,
      "timezoneOffset": -480,
      "year": 118
    },
    "id": 4134527,
    "node": "CONFIRM",
    "nodeDesc": "待初审",
    "resultData": "",
    "subNode": "",
    "subTaskId": "201810164304151521",
    "subType": "ELM_FOOD_SAFETY",
    "taskId": "201810163105535327",
    "type": "WB_AUDIT",
    "uniqueId": "2018101631055353275566"
  },
  "assess": {
    "bxsAccidentModel": {
      "accidentId": "201810163305535327",
      "description": "酸辣粉里吃出虫，第二是狮子头商家私自换成丸子",
      "ext": "{\"alipay_transaction_no\":\" \",\"delivery_time\":\"2018-10-16 00:44:12\",\"start_business_time\":\"2017-12-06\",\"city_name\":\"上海\",\"claimScore\":\"{\"factor\":[{\"educationalLevel\":60},{\"age\":58},{\"gender\":43},{\"liveLocation\":67},{\"claimCnt\":31},{\"claimPayed\":63}],\"gmtCreate\":\"2018-10-18 18:21:15\",\"message\":\"succ\",\"totalScore\":88}\",\"order_link\":\"https://www.ele.me/shop/161293107\",\"order_no\":\"3030892211863400534\",\"city_id\":\"1\",\"claim_times\":\"1\",\"claim_type\":\"存在异物\",\"order_detail\":\"碗杂米线:20:2,不辣的骨头汤ヾ(?°?°?):2:1,小葱花—u0000—u0000—:0.5:1,拉丝年糕:2.5:1,杂酱酸辣粉:18:1,狮子头:4.5:1,虾米饺:4.5:1\",\"order_time\":\"2018-10-15 23:58:58\",\"exterface_id\":\"2018101610000000240011848815\",\"gmtClaimScore\":\"2018-10-18 18:21:15\",\"buyer_id\":\"532128199612063968\",\"eleme_user_id\":\"140372598\",\"reporterSelf\":\"否\",\"shop_id\":\"161293107\",\"user_register_time\":\"2016-11-17\",\"order_fee\":\"79.3\",\"order_status\":\"订单完结\",\"shop_name\":\"麻辣部落(龙茗路店)\",\"category\":\"快餐便当\",\"is_eleme_merchant\":\"0\",\"province_name\":\"上海\",\"dish_num\":\"182\",\"riskResult\":\"UNDETERMINED,优质客户申请理赔金额大于55元\",\"seller_id\":\"161293107\",\"dataInit\":{\"gmtCreate\":null,\"ext\":\"{\"delivery_time\":\"2018-10-16 00:44:12\",\"alipay_transaction_no\":\" \",\"start_business_time\":\"2017-12-06\",\"city_name\":\"上海\",\"order_link\":\"https://www.ele.me/shop/161293107\",\"order_no\":\"3030892211863400534\",\"city_id\":\"1\",\"claim_times\":\"1\",\"order_detail\":\"碗杂米线:20:2,不辣的骨头汤ヾ(?°?°?):2:1,小葱花—\\u0000—\\u0000—:0.5:1,拉丝年糕:2.5:1,杂酱酸辣粉:18:1,狮子头:4.5:1,虾米饺:4.5:1\",\"claim_type\":\"存在异物\",\"order_time\":\"2018-10-15 23:58:58\",\"exterface_id\":\"2018101610000000240011848815\",\"buyer_id\":\"532128199612063968\",\"eleme_user_id\":\"140372598\",\"reporterSelf\":\"否\",\"shop_id\":\"161293107\",\"user_register_time\":\"2016-11-17\",\"order_fee\":\"79.3\",\"order_status\":\"订单完结\",\"shop_name\":\"麻辣部落(龙茗路店)\",\"category\":\"快餐便当\",\"is_eleme_merchant\":\"0\",\"province_name\":\"上海\",\"dish_num\":\"182\",\"riskResult\":\"UNDETERMINED,优质客户申请理赔金额大于55元\",\"seller_id\":\"161293107\"}\",\"accidentId\":\"201810163305535327\",\"extMap\":{\"alipay_transaction_no\":\" \",\"delivery_time\":\"2018-10-16 00:44:12\",\"start_business_time\":\"2017-12-06\",\"city_name\":\"上海\",\"order_link\":\"https://www.ele.me/shop/161293107\",\"order_no\":\"3030892211863400534\",\"city_id\":\"1\",\"claim_times\":\"1\",\"claim_type\":\"存在异物\",\"order_detail\":\"碗杂米线:20:2,不辣的骨头汤ヾ(?°?°?):2:1,小葱花—u0000—u0000—:0.5:1,拉丝年糕:2.5:1,杂酱酸辣粉:18:1,狮子头:4.5:1,虾米饺:4.5:1\",\"order_time\":\"2018-10-15 23:58:58\",\"exterface_id\":\"2018101610000000240011848815\",\"buyer_id\":\"532128199612063968\",\"eleme_user_id\":\"140372598\",\"reporterSelf\":\"否\",\"shop_id\":\"161293107\",\"user_register_time\":\"2016-11-17\",\"order_fee\":\"79.3\",\"order_status\":\"订单完结\",\"shop_name\":\"麻辣部落(龙茗路店)\",\"category\":\"快餐便当\",\"is_eleme_merchant\":\"0\",\"province_name\":\"上海\",\"dish_num\":\"182\",\"riskResult\":\"UNDETERMINED,优质客户申请理赔金额大于55元\",\"seller_id\":\"161293107\"},\"taskId\":\"201810163105535327\",\"gmtAccident\":1539619138000,\"lossAmount\":{\"amount\":79.30,\"cent\":7930,\"centFactor\":100,\"currency\":\"CNY\",\"currencyCode\":\"CNY\"},\"personUid\":\"2088621446853249\",\"personAccountType\":\"ALIPAY\",\"personCertType\":null,\"personCertNo\":null,\"personCertName\":null,\"gmtModified\":null,\"id\":0,\"type\":\"ELM_FOOD\",\"description\":\"酸辣粉里吃出虫，第二是狮子头商家私自换成丸子\",\"objectId\":\"3030892211863400534\",\"objectType\":\"ELM\"}}",
      "extMap": {
        "delivery_time": "2018-10-16 00:44:12",
        "alipay_transaction_no": " ",
        "start_business_time": "2017-12-06",
        "city_name": "上海",
        "order_link": "https://www.ele.me/shop/161293107",
        "claimScore": "{\"factor\":[{\"educationalLevel\":60},{\"age\":58},{\"gender\":43},{\"liveLocation\":67},{\"claimCnt\":31},{\"claimPayed\":63}],\"gmtCreate\":\"2018-10-18 18:21:15\",\"message\":\"succ\",\"totalScore\":88}",
        "order_no": "3030892211863400534",
        "city_id": "1",
        "claim_times": "1",
        "order_detail": "碗杂米线:20:2,不辣的骨头汤ヾ(?°?°?):2:1,小葱花———:0.5:1,拉丝年糕:2.5:1,杂酱酸辣粉:18:1,狮子头:4.5:1,虾米饺:4.5:1",
        "claim_type": "存在异物",
        "order_time": "2018-10-15 23:58:58",
        "exterface_id": "2018101610000000240011848815",
        "gmtClaimScore": "2018-10-18 18:21:15",
        "buyer_id": "532128199612063968",
        "eleme_user_id": "140372598",
        "reporterSelf": "否",
        "shop_id": "161293107",
        "user_register_time": "2016-11-17",
        "order_fee": "79.3",
        "order_status": "订单完结",
        "shop_name": "麻辣部落(龙茗路店)",
        "category": "快餐便当",
        "province_name": "上海",
        "is_eleme_merchant": "0",
        "dish_num": "182",
        "riskResult": "UNDETERMINED,优质客户申请理赔金额大于55元",
        "seller_id": "161293107",
        "dataInit": {
          "accidentId": "201810163305535327",
          "description": "酸辣粉里吃出虫，第二是狮子头商家私自换成丸子",
          "ext": "{\"delivery_time\":\"2018-10-16 00:44:12\",\"alipay_transaction_no\":\" \",\"start_business_time\":\"2017-12-06\",\"city_name\":\"上海\",\"order_link\":\"https://www.ele.me/shop/161293107\",\"order_no\":\"3030892211863400534\",\"city_id\":\"1\",\"claim_times\":\"1\",\"order_detail\":\"碗杂米线:20:2,不辣的骨头汤ヾ(?°?°?):2:1,小葱花—u0000—u0000—:0.5:1,拉丝年糕:2.5:1,杂酱酸辣粉:18:1,狮子头:4.5:1,虾米饺:4.5:1\",\"claim_type\":\"存在异物\",\"order_time\":\"2018-10-15 23:58:58\",\"exterface_id\":\"2018101610000000240011848815\",\"buyer_id\":\"532128199612063968\",\"eleme_user_id\":\"140372598\",\"reporterSelf\":\"否\",\"shop_id\":\"161293107\",\"user_register_time\":\"2016-11-17\",\"order_fee\":\"79.3\",\"order_status\":\"订单完结\",\"shop_name\":\"麻辣部落(龙茗路店)\",\"category\":\"快餐便当\",\"is_eleme_merchant\":\"0\",\"province_name\":\"上海\",\"dish_num\":\"182\",\"riskResult\":\"UNDETERMINED,优质客户申请理赔金额大于55元\",\"seller_id\":\"161293107\"}",
          "extMap": {
            "alipay_transaction_no": " ",
            "delivery_time": "2018-10-16 00:44:12",
            "start_business_time": "2017-12-06",
            "city_name": "上海",
            "order_link": "https://www.ele.me/shop/161293107",
            "order_no": "3030892211863400534",
            "city_id": "1",
            "claim_times": "1",
            "claim_type": "存在异物",
            "order_detail": "碗杂米线:20:2,不辣的骨头汤ヾ(?°?°?):2:1,小葱花———:0.5:1,拉丝年糕:2.5:1,杂酱酸辣粉:18:1,狮子头:4.5:1,虾米饺:4.5:1",
            "order_time": "2018-10-15 23:58:58",
            "exterface_id": "2018101610000000240011848815",
            "buyer_id": "532128199612063968",
            "eleme_user_id": "140372598",
            "reporterSelf": "否",
            "shop_id": "161293107",
            "user_register_time": "2016-11-17",
            "order_fee": "79.3",
            "order_status": "订单完结",
            "shop_name": "麻辣部落(龙茗路店)",
            "category": "快餐便当",
            "is_eleme_merchant": "0",
            "province_name": "上海",
            "dish_num": "182",
            "riskResult": "UNDETERMINED,优质客户申请理赔金额大于55元",
            "seller_id": "161293107"
          },
          "gmtAccident": {
            "date": 15,
            "day": 1,
            "hours": 23,
            "minutes": 58,
            "month": 9,
            "seconds": 58,
            "time": 1539619138000,
            "timezoneOffset": -480,
            "year": 118
          },
          "gmtCreate": {},
          "gmtModified": {},
          "id": 0,
          "lossAmount": {
            "amount": 79.3,
            "cent": 7930,
            "centFactor": 100,
            "currency": {
              "currencyCode": "CNY",
              "defaultFractionDigits": 2,
              "displayName": "人民币",
              "numericCode": 156,
              "symbol": "￥"
            },
            "currencyCode": "CNY"
          },
          "objectId": "3030892211863400534",
          "objectType": "ELM",
          "personAccountType": "ALIPAY",
          "personCertName": "",
          "personCertNo": "",
          "personCertType": 0,
          "personUid": "2088621446853249",
          "taskId": "201810163105535327",
          "type": "ELM_FOOD"
        }
      },
      "gmtAccident": {
        "date": 15,
        "day": 1,
        "hours": 23,
        "minutes": 58,
        "month": 9,
        "seconds": 58,
        "time": 1539619138000,
        "timezoneOffset": -480,
        "year": 118
      },
      "gmtCreate": {
        "date": 16,
        "day": 2,
        "hours": 2,
        "minutes": 2,
        "month": 9,
        "seconds": 0,
        "time": 1539626520000,
        "timezoneOffset": -480,
        "year": 118
      },
      "gmtModified": {
        "date": 18,
        "day": 4,
        "hours": 18,
        "minutes": 21,
        "month": 9,
        "seconds": 15,
        "time": 1539858075000,
        "timezoneOffset": -480,
        "year": 118
      },
      "id": 5536622,
      "lossAmount": {
        "amount": 79.3,
        "cent": 7930,
        "centFactor": 100,
        "currency": {
          "currencyCode": "CNY",
          "defaultFractionDigits": 2,
          "displayName": "人民币",
          "numericCode": 156,
          "symbol": "￥"
        },
        "currencyCode": "CNY"
      },
      "objectId": "3030892211863400534",
      "objectType": "ELM",
      "personAccountType": "ALIPAY",
      "personCertName": "",
      "personCertNo": "",
      "personCertType": 0,
      "personUid": "2088621446853249",
      "taskId": "201810163105535327",
      "type": "ELM_FOOD"
    },
    "bxsFundModelList": [
      {
        "ext": "",
        "extMap": {},
        "fundId": "201810163404260535",
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "id": 4262344,
        "inAccCardno": "2088621446853249",
        "inAccInst": "ALIPAY",
        "inAccName": "",
        "inAccType": "ALIPAY",
        "taskId": "201810163105535327",
        "totalAmount": {
          "amount": 0,
          "cent": 0,
          "centFactor": 100,
          "currency": {
            "currencyCode": "CNY",
            "defaultFractionDigits": 2,
            "displayName": "人民币",
            "numericCode": 156,
            "symbol": "￥"
          },
          "currencyCode": "CNY"
        }
      }
    ],
    "bxsPersonModel": {
      "certId": "532128199612063968",
      "ext": "",
      "gmtCreate": {
        "date": 16,
        "day": 2,
        "hours": 2,
        "minutes": 2,
        "month": 9,
        "seconds": 0,
        "time": 1539626520000,
        "timezoneOffset": -480,
        "year": 118
      },
      "gmtModified": {
        "date": 16,
        "day": 2,
        "hours": 2,
        "minutes": 2,
        "month": 9,
        "seconds": 0,
        "time": 1539626520000,
        "timezoneOffset": -480,
        "year": 118
      },
      "gmtUpdateSocialScore": {
        "date": 16,
        "day": 2,
        "hours": 2,
        "minutes": 2,
        "month": 9,
        "seconds": 0,
        "time": 1539626520000,
        "timezoneOffset": -480,
        "year": 118
      },
      "gmtUpdateZmScore": {
        "date": 16,
        "day": 2,
        "hours": 2,
        "minutes": 2,
        "month": 9,
        "seconds": 0,
        "time": 1539626520000,
        "timezoneOffset": -480,
        "year": 118
      },
      "id": 2550798,
      "personId": "201810163002513351",
      "realName": "芳芳米兰23店",
      "socialScore": "-1",
      "zmScore": "-1"
    },
    "bxsRelationModelList": [
      {
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "id": 7035036,
        "relateId": "201810161100300607960505557818",
        "relateObject": {},
        "relateType": "CLAIM_REPORT",
        "taskId": "201810163105535327"
      }
    ],
    "bxsTaskModel": {
      "applicantPersonId": "201810163002513351",
      "applicantPhone": "18019701023",
      "applicantUserId": "",
      "gmtBxAudit": {},
      "gmtBxsResponse": {},
      "gmtCreate": {
        "date": 16,
        "day": 2,
        "hours": 2,
        "minutes": 2,
        "month": 9,
        "seconds": 0,
        "time": 1539626520000,
        "timezoneOffset": -480,
        "year": 118
      },
      "gmtDone": {},
      "gmtModified": {
        "date": 18,
        "day": 4,
        "hours": 18,
        "minutes": 21,
        "month": 9,
        "seconds": 15,
        "time": 1539858075000,
        "timezoneOffset": -480,
        "year": 118
      },
      "gmtPay": {},
      "gmtUserRequest": {
        "date": 16,
        "day": 2,
        "hours": 1,
        "minutes": 32,
        "month": 9,
        "seconds": 0,
        "time": 1539624720000,
        "timezoneOffset": -480,
        "year": 118
      },
      "id": 5550449,
      "node": "CONFIRM",
      "nodeDesc": "小二初审",
      "outBizNo": "201810161100300607960505557818",
      "source": "BAOXIANPROD",
      "sourceDesc": "保险平台",
      "subNode": "WAIT_SUB_TASK",
      "subType": "QUICK",
      "taskId": "201810163105535327",
      "taskcenterId": "159248226",
      "type": "ELM_FOOD_SAFETY",
      "typeDesc": "饿了么食品安全险"
    },
    "bxsVoucherExtModelList": [],
    "bxsVoucherModelList": [
      {
        "accessInfo": "",
        "ext": "",
        "extMap": {},
        "filePath": "20181016/201810161100300607960505557818/10778097.jpeg_1539624727136.jpeg",
        "fileSource": "",
        "fileUrl": "",
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "id": 25905481,
        "labelPosition": "",
        "labelResult": "",
        "labelStatus": "",
        "labelTaskId": "",
        "memo": "",
        "normalDiseaseNameWithClaims": [],
        "outVoucherId": "10778097.jpeg",
        "status": "INIT",
        "taskId": "201810163105535327",
        "type": "1",
        "voucherId": "201810163225905447"
      },
      {
        "accessInfo": "",
        "ext": "",
        "extMap": {},
        "filePath": "20181016/201810161100300607960505557818/10778089.jpeg_1539624724378.jpeg",
        "fileSource": "",
        "fileUrl": "",
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "id": 25905480,
        "labelPosition": "",
        "labelResult": "",
        "labelStatus": "",
        "labelTaskId": "",
        "memo": "",
        "normalDiseaseNameWithClaims": [],
        "outVoucherId": "10778089.jpeg",
        "status": "INIT",
        "taskId": "201810163105535327",
        "type": "1",
        "voucherId": "201810163225905446"
      }
    ]
  },
  "operateModelList": [
    {
      "taskId": "201810163105535327",
      "id": 77318305,
      "gmtModified": "Thu Oct 18 18:21:16 CST 2018",
      "actionCode": "ASSESS_TASK_CONFIRM",
      "operatorNick": "compmng",
      "operatorId": "47727",
      "gmtCreate": "Thu Oct 18 18:21:16 CST 2018",
      "taskType": "ASSESS_TASK",
      "actionDesc": "核赔任务--小二审核"
    },
    {
      "taskId": "201810163105535327",
      "id": 75916813,
      "gmtModified": "Tue Oct 16 02:12:26 CST 2018",
      "actionCode": "ASSESS_TASK_SYSTEM_AUDIT",
      "operatorNick": "compmng",
      "operatorId": "47727",
      "gmtCreate": "Tue Oct 16 02:12:26 CST 2018",
      "taskType": "ASSESS_TASK",
      "actionDesc": "核赔任务--系统审核"
    },
    {
      "taskId": "201810163105535327",
      "id": 75916785,
      "gmtModified": "Tue Oct 16 02:10:17 CST 2018",
      "actionCode": "ASSESS_TASK_WAIT",
      "operatorNick": "compmng",
      "operatorId": "47727",
      "gmtCreate": "Tue Oct 16 02:10:17 CST 2018",
      "taskType": "ASSESS_TASK",
      "actionDesc": "核赔任务--补传凭证"
    },
    {
      "taskId": "201810163105535327",
      "id": 75916721,
      "gmtModified": "Tue Oct 16 02:10:08 CST 2018",
      "actionCode": "ASSESS_TASK_INIT",
      "operatorNick": "compmng",
      "operatorId": "47727",
      "gmtCreate": "Tue Oct 16 02:10:08 CST 2018",
      "taskType": "ASSESS_TASK",
      "actionDesc": "核赔任务--初始化"
    },
    {
      "taskId": "201810163105535327",
      "id": 75916597,
      "gmtModified": "Tue Oct 16 02:02:00 CST 2018",
      "actionCode": "ASSESS_CREATE",
      "operatorNick": "compmng",
      "operatorId": "47727",
      "gmtCreate": "Tue Oct 16 02:02:00 CST 2018",
      "taskType": "ASSESS_TASK",
      "actionDesc": "创建核赔信息"
    }
  ],
  "claimReport": {
    "accidentAddress": "龍咖啡Cafe du Dragon(漕河泾美居店)美居酒店后面宿舍",
    "accidentAddressCode": "",
    "accidentDesc": "酸辣粉里吃出虫，第二是狮子头商家私自换成丸子",
    "accidentLatitude": "",
    "accidentLongitude": "",
    "accidentObjectInfo": {},
    "accidentObjectType": 0,
    "accidentPersonAccountType": "ALIPAY",
    "accidentPersonCertName": "",
    "accidentPersonCertNo": "",
    "accidentPersonCertType": 0,
    "accidentPersonPhone": "",
    "accidentPersonUid": "2088621446853249",
    "accidentResultInfo": {},
    "accidentTime": {
      "date": 15,
      "day": 1,
      "hours": 23,
      "minutes": 58,
      "month": 9,
      "seconds": 58,
      "time": 1539619138000,
      "timezoneOffset": -480,
      "year": 118
    },
    "accidentType": "",
    "attachmentList": [
      {
        "bizData": {},
        "claimReportNo": "201810161100300607960505557818",
        "description": "食品照片",
        "fileType": "",
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 4,
          "time": 1539624724000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 4,
          "time": 1539624724000,
          "timezoneOffset": -480,
          "year": 118
        },
        "name": "10778089.jpeg",
        "path": "20181016/201810161100300607960505557818/10778089.jpeg_1539624724378.jpeg",
        "persistentType": 1,
        "reason": "",
        "size": 631134,
        "status": 0,
        "type": 1
      },
      {
        "bizData": {},
        "claimReportNo": "201810161100300607960505557818",
        "description": "其他照片",
        "fileType": "",
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 7,
          "time": 1539624727000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 7,
          "time": 1539624727000,
          "timezoneOffset": -480,
          "year": 118
        },
        "name": "10778097.jpeg",
        "path": "20181016/201810161100300607960505557818/10778097.jpeg_1539624727136.jpeg",
        "persistentType": 1,
        "reason": "",
        "size": 513436,
        "status": 0,
        "type": 1
      }
    ],
    "benefitList": [],
    "bizData": {
      "alipay_transaction_no": " ",
      "buyer_id": "532128199612063968",
      "delivery_time": "2018-10-16 00:44:12",
      "start_business_time": "2017-12-06",
      "city_name": "上海",
      "eleme_user_id": "140372598",
      "shop_id": "161293107",
      "order_link": "https://www.ele.me/shop/161293107",
      "user_register_time": "2016-11-17",
      "order_fee": "79.3",
      "order_status": "订单完结",
      "order_no": "3030892211863400534",
      "shop_name": "麻辣部落(龙茗路店)",
      "city_id": "1",
      "claim_times": "1",
      "category": "快餐便当",
      "order_detail": "碗杂米线:20:2,不辣的骨头汤ヾ(?°?°?):2:1,小葱花———:0.5:1,拉丝年糕:2.5:1,杂酱酸辣粉:18:1,狮子头:4.5:1,虾米饺:4.5:1",
      "is_eleme_merchant": "0",
      "claim_type": "存在异物",
      "province_name": "上海",
      "dish_num": "182",
      "order_time": "2018-10-15 23:58:58",
      "exterface_id": "2018101610000000240011848815",
      "seller_id": "161293107"
    },
    "chargeFactor": {},
    "claimApplyAmount": 0,
    "claimApplyTime": {
      "date": 16,
      "day": 2,
      "hours": 1,
      "minutes": 32,
      "month": 9,
      "seconds": 0,
      "time": 1539624720000,
      "timezoneOffset": -480,
      "year": 118
    },
    "claimApplyType": 1,
    "claimCancelReason": "",
    "claimCancelTime": {},
    "claimExpectAmount": 0,
    "claimList": [],
    "claimRecordFee": {},
    "claimRegistrationTime": {},
    "claimRejectTime": {},
    "claimReportAcceptType": 0,
    "claimReportAcceptUserId": "",
    "claimReportAddress": "",
    "claimReportAddressCode": "",
    "claimReportExt": {
      "assessFactors": {},
      "attachments": [],
      "claimBenefits": [
        {
          "accountType": 1,
          "address": "",
          "billAccountNo": "2088621446853249",
          "billAccountType": 1,
          "birthday": {},
          "bizData": {},
          "email": "",
          "gender": "",
          "gmtCreate": {},
          "gmtModified": {},
          "idCardName": "",
          "idCardNo": "",
          "idCardType": 0,
          "name": "",
          "phone": "",
          "quota": 0,
          "uid": "2088621446853249",
          "withdrawInstAccountName": "",
          "withdrawInstAccountNo": "",
          "withdrawInstAccountType": 0,
          "withdrawInstId": ""
        }
      ],
      "claimTransMemoSubject": "",
      "lossFactors": {}
    },
    "claimReportLatitude": "",
    "claimReportLongitude": "",
    "claimReportNo": "201810161100300607960505557818",
    "claimSuccessTime": {},
    "claimerAccountType": 0,
    "claimerCertName": "芳芳米兰23店",
    "claimerCertNo": "532128199612063968",
    "claimerCertType": 10,
    "claimerCifId": "",
    "claimerPhone": "18019701023",
    "claimerUid": "",
    "comId": "238810000000000011056",
    "comName": "国泰产险",
    "damageList": [],
    "damageType": "",
    "gmtCreate": {
      "date": 16,
      "day": 2,
      "hours": 1,
      "minutes": 32,
      "month": 9,
      "seconds": 0,
      "time": 1539624720000,
      "timezoneOffset": -480,
      "year": 118
    },
    "gmtModified": {
      "date": 16,
      "day": 2,
      "hours": 2,
      "minutes": 2,
      "month": 9,
      "seconds": 0,
      "time": 1539626520000,
      "timezoneOffset": -480,
      "year": 118
    },
    "insBizCode": "",
    "instId": "GTCX",
    "lettersList": [],
    "outBizNo": "6047617_3030892211863400534",
    "outReportNo": "",
    "pid": "2088621446853249",
    "policyList": [
      {
        "claimReportNo": "201810161100300607960505557818",
        "coverageNo": "",
        "outPolicyNo": "",
        "policyNo": "18101653011270710420",
        "prodNo": "5569",
        "spNo": "5566"
      }
    ],
    "progressList": [
      {
        "bizData": {},
        "claimReportNo": "201810161100300607960505557818",
        "claimReportStatus": 0,
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 0,
          "time": 1539624720000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 0,
          "time": 1539624720000,
          "timezoneOffset": -480,
          "year": 118
        },
        "progressUpdateContent": "待提交材料",
        "progressUpdateTime": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 0,
          "time": 1539624720000,
          "timezoneOffset": -480,
          "year": 118
        },
        "status": "tobeuploaded"
      },
      {
        "bizData": {},
        "claimReportNo": "201810161100300607960505557818",
        "claimReportStatus": 0,
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 0,
          "time": 1539624720000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 0,
          "time": 1539624720000,
          "timezoneOffset": -480,
          "year": 118
        },
        "progressUpdateContent": "待进行风控报案准入",
        "progressUpdateTime": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 0,
          "time": 1539624720000,
          "timezoneOffset": -480,
          "year": 118
        },
        "status": "to_risk_access"
      },
      {
        "bizData": {},
        "claimReportNo": "201810161100300607960505557818",
        "claimReportStatus": 0,
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 7,
          "time": 1539624727000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 7,
          "time": 1539624727000,
          "timezoneOffset": -480,
          "year": 118
        },
        "progressUpdateContent": "uploaded",
        "progressUpdateTime": {
          "date": 16,
          "day": 2,
          "hours": 1,
          "minutes": 32,
          "month": 9,
          "seconds": 7,
          "time": 1539624727000,
          "timezoneOffset": -480,
          "year": 118
        },
        "status": "uploaded"
      },
      {
        "bizData": {
          "auditReasonDetail": "优质客户申请理赔金额大于55元",
          "auditReasonCode": "UNDETERMINED"
        },
        "claimReportNo": "201810161100300607960505557818",
        "claimReportStatus": 0,
        "gmtCreate": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "gmtModified": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "progressUpdateContent": "UNDETERMINED,优质客户申请理赔金额大于55元",
        "progressUpdateTime": {
          "date": 16,
          "day": 2,
          "hours": 2,
          "minutes": 2,
          "month": 9,
          "seconds": 0,
          "time": 1539626520000,
          "timezoneOffset": -480,
          "year": 118
        },
        "status": "MANUAL"
      }
    ],
    "rejectReason": "",
    "serviceFee": 0,
    "signPid": "",
    "signProductCode": "",
    "status": 0,
    "tagData": {
      "PRINCIPAL_IDS": "18101653011270710420",
      "REPORT_AUDIT_RESULT": "{\"sysAuditAdditionalMap\":{\"RISK_RESULT_DETAIL\":\"\"},\"sysAuditReasonDetail\":\"优质客户申请理赔金额大于55元\",\"sysAuditRejectCode\":\"UNDETERMINED\",\"sysAuditResult\":\"reAudit\"}",
      "AMSPM_BIZ_CODE": "5566",
      "REPORT_APPLY_PROCESS_DATA": "{\"processInstance\":\"v1|10000059436,claim_report_mauanl_process_v2:1.0.0,null,null,running|10000127267,null,REPORT_MANUAL_RESULT,10000127268,true,|\",\"status\":\"running\"}"
    },
    "totalClaimAmount": {}
  },
  "stat": "ok",
  "taskInfo": {
    "basicTask": {
      "applyerId": "18926",
      "applyerName": "佳语",
      "attachment": "",
      "bizApp": "processmng",
      "businessContent": {
        "compmngProtocol": "https",
        "compmngHost": "themis.alipay.com"
      },
      "businessId": "201810163105535327",
      "businessSummary": "初始",
      "businessType": "INIT",
      "canUrge": "FALSE",
      "catId": 502,
      "configFieldValues": {
        "infoValues": [
          "ELM_FOOD_SAFETY",
          "QUICK",
          "201810161100300607960505557818",
          "饿了么食品安全险",
          "快速通用核赔流程",
          {},
          {},
          {},
          {},
          {}
        ]
      },
      "createrId": "47727",
      "createrName": "compmng",
      "dealUrl": "https://themis.alipay.com/bxs/index.htm#/assess/159248226",
      "finishId": "",
      "finishName": "",
      "gmtApply": {
        "date": 16,
        "day": 2,
        "hours": 2,
        "minutes": 10,
        "month": 9,
        "seconds": 8,
        "time": 1539627008000,
        "timezoneOffset": -480,
        "year": 118
      },
      "gmtCreate": {
        "date": 16,
        "day": 2,
        "hours": 2,
        "minutes": 10,
        "month": 9,
        "seconds": 8,
        "time": 1539627008000,
        "timezoneOffset": -480,
        "year": 118
      },
      "gmtFinished": {},
      "gmtModify": {
        "date": 19,
        "day": 5,
        "hours": 9,
        "minutes": 29,
        "month": 9,
        "seconds": 35,
        "time": 1539912575000,
        "timezoneOffset": -480,
        "year": 118
      },
      "id": 159248226,
      "idempotentId": "",
      "isApply": "TRUE",
      "isTempSave": "FALSE",
      "lastProcess": "to_CONFIRM",
      "level": "NORMAL",
      "lobContent": {},
      "memo": "初始",
      "modifierId": "47727",
      "modifierName": "compmng",
      "node": "CONFIRM",
      "nodeCreateTime": {
        "date": 18,
        "day": 4,
        "hours": 18,
        "minutes": 21,
        "month": 9,
        "seconds": 16,
        "time": 1539858076000,
        "timezoneOffset": -480,
        "year": 118
      },
      "nodeName": "小二初审",
      "nodeOvertime": {},
      "nodeStatus": "TAKEN",
      "nodeType": "SINGLEUSERTASK",
      "nodeWaringTime": {},
      "processId": 191941194,
      "processTaskId": 279240236,
      "shouldFinishedTime": {},
      "taskConfigId": 772,
      "taskOperatorTOs": [],
      "userId": "",
      "waringTime": {}
    },
    "configVauleSummary": "报案单号:201810161100300607960505557818<br />险种名称:饿了么食品安全险<br />服务流程名称:快速通用核赔流程<br />特殊流程类型:<br />",
    "configVersion": 12,
    "gmtAppointment": {},
    "needTaken": false,
    "nodeAging": "NORMAL",
    "summary": "报案单号:201810161100300607960505557818<br />险种名称:饿了么食品安全险<br />服务流程名称:快速通用核赔流程<br />特殊流程类型:<br />初始",
    "taskAging": "NORMAL",
    "taskCat": {
      "authority": "PROCESSMNG_BAOXIAN_SERVICE_CONFIG",
      "catIdPath": "15",
      "catNameIndex": "保险服务 baoxianfuwu",
      "catNamePath": "根类目->保险服务",
      "createrId": "35387",
      "createrName": "禅思",
      "currentLevel": 2,
      "gmtCreate": {
        "date": 1,
        "day": 1,
        "hours": 10,
        "minutes": 29,
        "month": 7,
        "seconds": 55,
        "time": 1470018595000,
        "timezoneOffset": -480,
        "year": 116
      },
      "gmtModify": {
        "date": 1,
        "day": 1,
        "hours": 10,
        "minutes": 29,
        "month": 7,
        "seconds": 55,
        "time": 1470018595000,
        "timezoneOffset": -480,
        "year": 116
      },
      "id": 502,
      "manageAuthority": "PROCESSMNG_BAOXIAN_SERVICE_QUERY",
      "modifierId": "",
      "modifierName": "丢失的修改人",
      "name": "保险服务",
      "parentId": 15
    },
    "taskConfig": {
      "catId": 502,
      "catName": "保险服务",
      "configFieldsTO": {
        "configFields": [
          {
            "infoConfig": "QUERY",
            "infoId": "info1value",
            "infoName": "险种",
            "infoPreValueMapList": [
              {
                "name": "全部",
                "abbr": ""
              },
              {
                "name": "银行卡",
                "abbr": "BANKCARD_PROTECTION"
              },
              {
                "name": "银行卡（体验）",
                "abbr": "BANKCARD_PROTECTION_EXP"
              },
              {
                "name": "账户资金防骗（淘系）",
                "abbr": "INSURANCE_ACCT_SAFE_ANTI_FRAUD"
              },
              {
                "name": "饿了么众包骑手意外",
                "abbr": "ELM_DELIVERY"
              },
              {
                "name": "饿了么食安",
                "abbr": "ELM_FOOD_SAFETY"
              },
              {
                "name": "饿了么食安（商业）",
                "abbr": "ELM_FOOD_SAFETY_BUSINESS"
              },
              {
                "name": "大病无忧宝（福利）",
                "abbr": "HEALTH_BEAN_SIMPLE"
              },
              {
                "name": "天猫品质保障",
                "abbr": "TMALL_QUALITY_ASSURANCE"
              },
              {
                "name": "生鲜腐烂",
                "abbr": "TMALL_FRESH_FOOD"
              },
              {
                "name": "美妆过敏",
                "abbr": "TMALL_MAKE_UP"
              },
              {
                "name": "服饰30天质保",
                "abbr": "TMALL_CLOTHES_30_QUALITY"
              },
              {
                "name": "天猫物流破损",
                "abbr": "TMALL_LOGISTICS_BREAKAGE"
              },
              {
                "name": "天猫海外本地退",
                "abbr": "TMALL_HWBDT"
              },
              {
                "name": "医药品质保障",
                "abbr": "TMALL_MEDICINE_QUALITY"
              },
              {
                "name": "骑行保障",
                "abbr": "RIDE_PROTECTION"
              },
              {
                "name": "饿了么加盟商骑手意外",
                "abbr": "ELM_JMSDELIVERY"
              },
              {
                "name": "收钱码资金损失",
                "abbr": "QR_ANTI_FRAUD"
              },
              {
                "name": "出行保-市内畅行",
                "abbr": "CXB_INTRA_CITY_TRAFFIC"
              },
              {
                "name": "健康意外安心保",
                "abbr": "HEALTH_ACCIDENT_INSURANCE"
              },
              {
                "name": "全年意外",
                "abbr": "ANNUAL_ACCIDENT_INSURANCE"
              },
              {
                "name": "公交出行保障",
                "abbr": "BUS_PROTECTION"
              },
              {
                "name": "大病无忧保商业",
                "abbr": "HEALTH_BEAN_BUSINESS"
              },
              {
                "name": "好医保住院医疗",
                "abbr": "HEALTH_BEAN_HYB"
              },
              {
                "name": "重疾无忧宝",
                "abbr": "HEALTH_BEAN_CRITICAL_ILLNESS"
              },
              {
                "name": "重疾门诊医疗补充",
                "abbr": "HEALTH_BEAN_CRITICAL_ILLNESS_YBBC"
              },
              {
                "name": "大病无忧医保补充",
                "abbr": "HEALTH_BEAN_ZYBC"
              },
              {
                "name": "淘系坏单包赔",
                "abbr": "TAOBAO_TRADE_TRUST_HDBP"
              },
              {
                "name": "淘宝过敏无忧",
                "abbr": "TAOBAO_TRADE_TRUST_GMWY"
              },
              {
                "name": "上下班意外赠",
                "abbr": "COMMUTING_PRESENT_INSURANCE"
              },
              {
                "name": "淘系材质保真",
                "abbr": "TAOBAO_TRADE_TRUST_CZBZ"
              },
              {
                "name": "淘系无忧退货",
                "abbr": "TAOBAO_TRADE_TRUST_WYTH"
              },
              {
                "name": "淘系破损包退",
                "abbr": "TAOBAO_TRADE_TRUST_PSBT"
              },
              {
                "name": "淘系淘宝极保障",
                "abbr": "TAOBAO_TRADE_TRUST_TBJBZ"
              },
              {
                "name": "淘系大件售后保障",
                "abbr": "TAOBAO_TRADE_TRUST_DJSH"
              },
              {
                "name": "淘系聚划算极保障",
                "abbr": "TAOBAO_TRADE_TRUST_JHSJBZ"
              },
              {
                "name": "天猫小家电质保险",
                "abbr": "TMALL_XJDZB"
              },
              {
                "name": "淘系保价险",
                "abbr": "TAOBAO_BJX"
              }
            ],
            "infoPreValues": "[{\"abbr\":\"\", \"name\":\"全部\"},{\"abbr\":\"BANKCARD_PROTECTION\", \"name\":\"银行卡\"},{\"abbr\":\"BANKCARD_PROTECTION_EXP\", \"name\":\"银行卡（体验）\"},{\"abbr\":\"INSURANCE_ACCT_SAFE_ANTI_FRAUD\", \"name\":\"账户资金防骗（淘系）\"},{\"abbr\":\"ELM_DELIVERY\", \"name\":\"饿了么众包骑手意外\"},{\"abbr\":\"ELM_FOOD_SAFETY\", \"name\":\"饿了么食安\"},{\"abbr\":\"ELM_FOOD_SAFETY_BUSINESS\", \"name\":\"饿了么食安（商业）\"},{\"abbr\":\"HEALTH_BEAN_SIMPLE\", \"name\":\"大病无忧宝（福利）\"},{\"abbr\":\"TMALL_QUALITY_ASSURANCE\", \"name\":\"天猫品质保障\"},{\"abbr\":\"TMALL_FRESH_FOOD\", \"name\":\"生鲜腐烂\"},{\"abbr\":\"TMALL_MAKE_UP\", \"name\":\"美妆过敏\"},{\"abbr\":\"TMALL_CLOTHES_30_QUALITY\", \"name\":\"服饰30天质保\"},{\"abbr\":\"TMALL_LOGISTICS_BREAKAGE\", \"name\":\"天猫物流破损\"},{\"abbr\":\"TMALL_HWBDT\", \"name\":\"天猫海外本地退\"},{\"abbr\":\"TMALL_MEDICINE_QUALITY\", \"name\":\"医药品质保障\"},{\"abbr\":\"RIDE_PROTECTION\", \"name\":\"骑行保障\"},{\"abbr\":\"ELM_JMSDELIVERY\", \"name\":\"饿了么加盟商骑手意外\"},{\"abbr\":\"QR_ANTI_FRAUD\", \"name\":\"收钱码资金损失\"},{\"abbr\":\"CXB_INTRA_CITY_TRAFFIC\", \"name\":\"出行保-市内畅行\"},{\"abbr\":\"HEALTH_ACCIDENT_INSURANCE\", \"name\":\"健康意外安心保\"},{\"abbr\":\"ANNUAL_ACCIDENT_INSURANCE\", \"name\":\"全年意外\"},{\"abbr\":\"BUS_PROTECTION\", \"name\":\"公交出行保障\"},{\"abbr\":\"HEALTH_BEAN_BUSINESS\", \"name\":\"大病无忧保商业\"},{\"abbr\":\"HEALTH_BEAN_HYB\", \"name\":\"好医保住院医疗\"},{\"abbr\":\"HEALTH_BEAN_CRITICAL_ILLNESS\", \"name\":\"重疾无忧宝\"},{\"abbr\":\"HEALTH_BEAN_CRITICAL_ILLNESS_YBBC\", \"name\":\"重疾门诊医疗补充\"},{\"abbr\":\"HEALTH_BEAN_ZYBC\", \"name\":\"大病无忧医保补充\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_HDBP\", \"name\":\"淘系坏单包赔\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_GMWY\", \"name\":\"淘宝过敏无忧\"},{\"abbr\":\"COMMUTING_PRESENT_INSURANCE\", \"name\":\"上下班意外赠\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_CZBZ\", \"name\":\"淘系材质保真\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_WYTH\", \"name\":\"淘系无忧退货\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_PSBT\", \"name\":\"淘系破损包退\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_TBJBZ\", \"name\":\"淘系淘宝极保障\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_DJSH\", \"name\":\"淘系大件售后保障\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_JHSJBZ\", \"name\":\"淘系聚划算极保障\"},{\"abbr\":\"TMALL_XJDZB\", \"name\":\"天猫小家电质保险\"},{\"abbr\":\"TAOBAO_BJX\", \"name\":\"淘系保价险\"}]",
            "infoType": "SELECT",
            "originalInfoName": "险种:[{\"abbr\":\"\", \"name\":\"全部\"},{\"abbr\":\"BANKCARD_PROTECTION\", \"name\":\"银行卡\"},{\"abbr\":\"BANKCARD_PROTECTION_EXP\", \"name\":\"银行卡（体验）\"},{\"abbr\":\"INSURANCE_ACCT_SAFE_ANTI_FRAUD\", \"name\":\"账户资金防骗（淘系）\"},{\"abbr\":\"ELM_DELIVERY\", \"name\":\"饿了么众包骑手意外\"},{\"abbr\":\"ELM_FOOD_SAFETY\", \"name\":\"饿了么食安\"},{\"abbr\":\"ELM_FOOD_SAFETY_BUSINESS\", \"name\":\"饿了么食安（商业）\"},{\"abbr\":\"HEALTH_BEAN_SIMPLE\", \"name\":\"大病无忧宝（福利）\"},{\"abbr\":\"TMALL_QUALITY_ASSURANCE\", \"name\":\"天猫品质保障\"},{\"abbr\":\"TMALL_FRESH_FOOD\", \"name\":\"生鲜腐烂\"},{\"abbr\":\"TMALL_MAKE_UP\", \"name\":\"美妆过敏\"},{\"abbr\":\"TMALL_CLOTHES_30_QUALITY\", \"name\":\"服饰30天质保\"},{\"abbr\":\"TMALL_LOGISTICS_BREAKAGE\", \"name\":\"天猫物流破损\"},{\"abbr\":\"TMALL_HWBDT\", \"name\":\"天猫海外本地退\"},{\"abbr\":\"TMALL_MEDICINE_QUALITY\", \"name\":\"医药品质保障\"},{\"abbr\":\"RIDE_PROTECTION\", \"name\":\"骑行保障\"},{\"abbr\":\"ELM_JMSDELIVERY\", \"name\":\"饿了么加盟商骑手意外\"},{\"abbr\":\"QR_ANTI_FRAUD\", \"name\":\"收钱码资金损失\"},{\"abbr\":\"CXB_INTRA_CITY_TRAFFIC\", \"name\":\"出行保-市内畅行\"},{\"abbr\":\"HEALTH_ACCIDENT_INSURANCE\", \"name\":\"健康意外安心保\"},{\"abbr\":\"ANNUAL_ACCIDENT_INSURANCE\", \"name\":\"全年意外\"},{\"abbr\":\"BUS_PROTECTION\", \"name\":\"公交出行保障\"},{\"abbr\":\"HEALTH_BEAN_BUSINESS\", \"name\":\"大病无忧保商业\"},{\"abbr\":\"HEALTH_BEAN_HYB\", \"name\":\"好医保住院医疗\"},{\"abbr\":\"HEALTH_BEAN_CRITICAL_ILLNESS\", \"name\":\"重疾无忧宝\"},{\"abbr\":\"HEALTH_BEAN_CRITICAL_ILLNESS_YBBC\", \"name\":\"重疾门诊医疗补充\"},{\"abbr\":\"HEALTH_BEAN_ZYBC\", \"name\":\"大病无忧医保补充\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_HDBP\", \"name\":\"淘系坏单包赔\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_GMWY\", \"name\":\"淘宝过敏无忧\"},{\"abbr\":\"COMMUTING_PRESENT_INSURANCE\", \"name\":\"上下班意外赠\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_CZBZ\", \"name\":\"淘系材质保真\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_WYTH\", \"name\":\"淘系无忧退货\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_PSBT\", \"name\":\"淘系破损包退\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_TBJBZ\", \"name\":\"淘系淘宝极保障\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_DJSH\", \"name\":\"淘系大件售后保障\"},{\"abbr\":\"TAOBAO_TRADE_TRUST_JHSJBZ\", \"name\":\"淘系聚划算极保障\"},{\"abbr\":\"TMALL_XJDZB\", \"name\":\"天猫小家电质保险\"},{\"abbr\":\"TAOBAO_BJX\", \"name\":\"淘系保价险\"}]"
          },
          {
            "infoConfig": "QUERY",
            "infoId": "info2value",
            "infoName": "服务流程",
            "infoPreValueMapList": [
              {
                "name": "全部",
                "abbr": ""
              },
              {
                "name": "银行卡安全险流程（旧）",
                "abbr": "BANKCARD_PROTECTION_ASSESS_NORMAL"
              },
              {
                "name": "银行卡安全险流程（新）",
                "abbr": "NORMAL"
              },
              {
                "name": "理赔天平内部流程",
                "abbr": "THEMIS"
              },
              {
                "name": "通用在线流程",
                "abbr": "COMMON"
              },
              {
                "name": "立案审核流程",
                "abbr": "REGISTER"
              },
              {
                "name": "快速通用核赔流程",
                "abbr": "QUICK"
              },
              {
                "name": "简单审核流程",
                "abbr": "SIMPLE"
              }
            ],
            "infoPreValues": "[{\"abbr\":\"\", \"name\":\"全部\"},{\"abbr\":\"BANKCARD_PROTECTION_ASSESS_NORMAL\", \"name\":\"银行卡安全险流程（旧）\"},{\"abbr\":\"NORMAL\", \"name\":\"银行卡安全险流程（新）\"},{\"abbr\":\"THEMIS\", \"name\":\"理赔天平内部流程\"},{\"abbr\":\"COMMON\", \"name\":\"通用在线流程\"},{\"abbr\":\"REGISTER\", \"name\":\"立案审核流程\"},{\"abbr\":\"QUICK\", \"name\":\"快速通用核赔流程\"},{\"abbr\":\"SIMPLE\", \"name\":\"简单审核流程\"}]",
            "infoType": "SELECT",
            "originalInfoName": "服务流程:[{\"abbr\":\"\", \"name\":\"全部\"},{\"abbr\":\"BANKCARD_PROTECTION_ASSESS_NORMAL\", \"name\":\"银行卡安全险流程（旧）\"},{\"abbr\":\"NORMAL\", \"name\":\"银行卡安全险流程（新）\"},{\"abbr\":\"THEMIS\", \"name\":\"理赔天平内部流程\"},{\"abbr\":\"COMMON\", \"name\":\"通用在线流程\"},{\"abbr\":\"REGISTER\", \"name\":\"立案审核流程\"},{\"abbr\":\"QUICK\", \"name\":\"快速通用核赔流程\"},{\"abbr\":\"SIMPLE\", \"name\":\"简单审核流程\"}]"
          },
          {
            "infoConfig": "BOTH",
            "infoId": "info3value",
            "infoName": "报案单号",
            "infoPreValueMapList": [],
            "infoPreValues": "",
            "infoType": "TEXT",
            "originalInfoName": "报案单号"
          },
          {
            "infoConfig": "RESULT",
            "infoId": "info4value",
            "infoName": "险种名称",
            "infoPreValueMapList": [
              {
                "name": "全部",
                "abbr": ""
              },
              {
                "name": "大病无忧保基础版",
                "abbr": "大病无忧保基础版"
              },
              {
                "name": "大病无忧保商业版",
                "abbr": "大病无忧保商业版"
              },
              {
                "name": "好医保住院医疗",
                "abbr": "好医保住院医疗"
              },
              {
                "name": "重疾无忧宝",
                "abbr": "重疾无忧宝"
              },
              {
                "name": "重大疾病医保补充保险",
                "abbr": "重大疾病医保补充保险"
              },
              {
                "name": "大病住院医保补充保险",
                "abbr": "大病住院医保补充保险"
              },
              {
                "name": "门诊报销金",
                "abbr": "门诊报销金"
              },
              {
                "name": "新乐业保",
                "abbr": "新乐业保"
              },
              {
                "name": "多收多保-大病保险",
                "abbr": "多收多保-大病保险"
              },
              {
                "name": "好医保-免费医疗金",
                "abbr": "好医保-免费医疗金"
              }
            ],
            "infoPreValues": "[{\"abbr\":\"\", \"name\":\"全部\"},{\"abbr\":\"大病无忧保基础版\", \"name\":\"大病无忧保基础版\"},{\"abbr\":\"大病无忧保商业版\", \"name\":\"大病无忧保商业版\"},{\"abbr\":\"好医保住院医疗\", \"name\":\"好医保住院医疗\"},{\"abbr\":\"重疾无忧宝\", \"name\":\"重疾无忧宝\"},{\"abbr\":\"重大疾病医保补充保险\", \"name\":\"重大疾病医保补充保险\"},{\"abbr\":\"大病住院医保补充保险\", \"name\":\"大病住院医保补充保险\"},{\"abbr\":\"门诊报销金\", \"name\":\"门诊报销金\"},{\"abbr\":\"新乐业保\", \"name\":\"新乐业保\"},{\"abbr\":\"多收多保-大病保险\", \"name\":\"多收多保-大病保险\"},{\"abbr\":\"好医保-免费医疗金\", \"name\":\"好医保-免费医疗金\"}]",
            "infoType": "SELECT",
            "originalInfoName": "险种名称:[{\"abbr\":\"\", \"name\":\"全部\"},{\"abbr\":\"大病无忧保基础版\", \"name\":\"大病无忧保基础版\"},{\"abbr\":\"大病无忧保商业版\", \"name\":\"大病无忧保商业版\"},{\"abbr\":\"好医保住院医疗\", \"name\":\"好医保住院医疗\"},{\"abbr\":\"重疾无忧宝\", \"name\":\"重疾无忧宝\"},{\"abbr\":\"重大疾病医保补充保险\", \"name\":\"重大疾病医保补充保险\"},{\"abbr\":\"大病住院医保补充保险\", \"name\":\"大病住院医保补充保险\"},{\"abbr\":\"门诊报销金\", \"name\":\"门诊报销金\"},{\"abbr\":\"新乐业保\", \"name\":\"新乐业保\"},{\"abbr\":\"多收多保-大病保险\", \"name\":\"多收多保-大病保险\"},{\"abbr\":\"好医保-免费医疗金\", \"name\":\"好医保-免费医疗金\"}]"
          },
          {
            "infoConfig": "RESULT",
            "infoId": "info5value",
            "infoName": "服务流程名称",
            "infoPreValueMapList": [],
            "infoPreValues": "",
            "infoType": "TEXT",
            "originalInfoName": "服务流程名称"
          },
          {
            "infoConfig": "BOTH",
            "infoId": "info6value",
            "infoName": "特殊流程类型",
            "infoPreValueMapList": [
              {
                "name": "全部",
                "abbr": ""
              },
              {
                "name": "质保卡关键字",
                "abbr": "KEYWORD"
              },
              {
                "name": "质保卡保障",
                "abbr": "GENERAL"
              }
            ],
            "infoPreValues": "[{\"abbr\":\"\", \"name\":\"全部\"},{\"abbr\":\"KEYWORD\",\"name\":\"质保卡关键字\"},{\"abbr\":\"GENERAL\",\"name\":\"质保卡保障\"}]",
            "infoType": "SELECT",
            "originalInfoName": "特殊流程类型:[{\"abbr\":\"\", \"name\":\"全部\"},{\"abbr\":\"KEYWORD\",\"name\":\"质保卡关键字\"},{\"abbr\":\"GENERAL\",\"name\":\"质保卡保障\"}]"
          },
          {},
          {},
          {},
          {}
        ]
      },
      "createrId": "119516",
      "definitionXMLStr": "{\"type\":\"Process\",\"id\":\"ID1467103554960\",\"bounds\":{\"x\":0,\"y\":0,\"width\":2000,\"height\":2000},\"children\":[{\"type\":\"Start\",\"id\":\"ID1467103565502\",\"bounds\":{\"x\":671,\"y\":38,\"width\":46,\"height\":46},\"attributes\":{}},{\"type\":\"UserTask\",\"id\":\"AUDIT\",\"bounds\":{\"x\":395,\"y\":421,\"width\":106,\"height\":66},\"attributes\":{\"autoAudit\":false,\"warn\":{\"mailTemplate\":\"TASKCENTER_REMINDER_TASKNODE\",\"wwTemplate\":\"TASKCENTER_REMINDER_TASKNODE\"},\"dealActions\":\"to_DONE_as_PAY:赔付,to_DONE_as_CLAIM_REJECT:拒赔\",\"assignment\":[{\"chosenName\":\"compmng\",\"id\":\"47727\",\"displayName\":\"compmng（）<要发自己设置邮箱>\",\"type\":\"user\"}],\"assignmentType\":\"CUSTOM_USERS\",\"name\":\"保险机构审核\",\"dealUrlType\":\"EXTERNAL_PAGE\",\"notify\":{\"mailTemplate\":\"TASKCENTER_DEFAULT_TASKNODE_MAIL\",\"wwTemplate\":\"PUNISHCENTER_TASKCENTER_DEFAULT_TASKNODE_WANGWANG\"},\"multiInstance\":false,\"assignStrategy\":\"NONE\",\"dealUrl\":\"${_businessContent.compmngProtocol}://${_businessContent.compmngHost}/bxs/index.htm#/assess/${_id}\"}},{\"type\":\"UserTask\",\"id\":\"CONFIRM\",\"bounds\":{\"x\":641,\"y\":261,\"width\":106,\"height\":66},\"attributes\":{\"autoAudit\":false,\"warn\":{\"mailTemplate\":\"TASKCENTER_REMINDER_TASKNODE\",\"wwTemplate\":\"TASKCENTER_REMINDER_TASKNODE\"},\"dealActions\":\"agree:同意,reject:驳回,to_DONE_as_CLAIM_REJECT:拒赔,to_DONE_as_PAY:赔付\",\"assignment\":{\"id\":\"20753\",\"chosenName\":\"赔付初审组\",\"type\":\"group\",\"displayName\":\"支付宝后台-赔付初审组 <用户组>\"},\"assignmentType\":\"CUSTOM_GROUP\",\"name\":\"小二初审\",\"dealUrlType\":\"EXTERNAL_PAGE\",\"notify\":{\"mailTemplate\":\"TASKCENTER_DEFAULT_TASKNODE_MAIL\",\"wwTemplate\":\"PUNISHCENTER_TASKCENTER_DEFAULT_TASKNODE_WANGWANG\"},\"multiInstance\":false,\"assignStrategy\":\"NONE\",\"mobileUrl\":\"\",\"dealUrl\":\"${_businessContent.compmngProtocol}://${_businessContent.compmngHost}/bxs/index.htm#/assess/${_id}\"}},{\"type\":\"UserTask\",\"id\":\"INIT\",\"bounds\":{\"x\":641,\"y\":118,\"width\":106,\"height\":66},\"attributes\":{\"warn\":{\"enabled\":false,\"mailTemplate\":\"TASKCENTER_REMINDER_TASKNODE\",\"wwTemplate\":\"TASKCENTER_REMINDER_TASKNODE\"},\"autoAudit\":false,\"endEventServices\":[],\"dealUrlType\":\"EXTERNAL_PAGE\",\"assignStrategy\":\"NONE\",\"multiInstance\":false,\"assignment\":[{\"chosenName\":\"compmng\",\"id\":\"47727\",\"displayName\":\"compmng（）<要发自己设置邮箱>\",\"type\":\"user\"}],\"dealActions\":\"agree:同意,reject:驳回\",\"assignmentType\":\"CUSTOM_USERS\",\"notify\":{\"mailTemplate\":\"TASKCENTER_DEFAULT_TASKNODE_MAIL\",\"wwTemplate\":\"PUNISHCENTER_TASKCENTER_DEFAULT_TASKNODE_WANGWANG\",\"smsUrge\":false,\"sendWW\":false,\"sendMail\":false},\"name\":\"初始状态\",\"beginEventServices\":[],\"timeout\":{\"enabled\":false},\"dealUrl\":\"${_businessContent.compmngProtocol}://${_businessContent.compmngHost}/bxs/index.htm#/assess/${_id}\"}},{\"type\":\"UserTask\",\"id\":\"PAY\",\"bounds\":{\"x\":641,\"y\":540,\"width\":106,\"height\":66},\"attributes\":{\"autoAudit\":false,\"warn\":{\"mailTemplate\":\"TASKCENTER_REMINDER_TASKNODE\",\"wwTemplate\":\"TASKCENTER_REMINDER_TASKNODE\"},\"dealActions\":\"to_DONE_as_PAY:赔付\",\"assignment\":[{\"chosenName\":\"compmng\",\"id\":\"47727\",\"displayName\":\"compmng（）<要发自己设置邮箱>\",\"type\":\"user\"}],\"assignmentType\":\"CUSTOM_USERS\",\"name\":\" 打款中\",\"dealUrlType\":\"EXTERNAL_PAGE\",\"notify\":{\"mailTemplate\":\"TASKCENTER_DEFAULT_TASKNODE_MAIL\",\"wwTemplate\":\"PUNISHCENTER_TASKCENTER_DEFAULT_TASKNODE_WANGWANG\"},\"multiInstance\":false,\"assignStrategy\":\"NONE\",\"dealUrl\":\"${_businessContent.compmngProtocol}://${_businessContent.compmngHost}/bxs/index.htm#/assess/${_id}\"}},{\"type\":\"UserTask\",\"id\":\"CHECK\",\"bounds\":{\"x\":588,\"y\":421,\"width\":106,\"height\":66},\"attributes\":{\"autoAudit\":false,\"warn\":{\"mailTemplate\":\"TASKCENTER_REMINDER_TASKNODE\",\"wwTemplate\":\"TASKCENTER_REMINDER_TASKNODE\"},\"dealActions\":\"agree:同意,reject:驳回,to_DONE_as_CLAIM_REJECT:拒赔,to_DONE_as_PAY:赔付\",\"assignment\":[{\"id\":\"7290\",\"chosenName\":\"夭乐\",\"type\":\"user\",\"displayName\":\"夭乐（陈颖）<ying.chen@alipay.com>\"}],\"assignmentType\":\"CUSTOM_USERS\",\"name\":\"小二复审\",\"dealUrlType\":\"EXTERNAL_PAGE\",\"notify\":{\"mailTemplate\":\"TASKCENTER_DEFAULT_TASKNODE_MAIL\",\"wwTemplate\":\"PUNISHCENTER_TASKCENTER_DEFAULT_TASKNODE_WANGWANG\"},\"multiInstance\":false,\"assignStrategy\":\"NONE\",\"mobileUrl\":\"\",\"dealUrl\":\"${_businessContent.compmngProtocol}://${_businessContent.compmngHost}/bxs/index.htm#/assess/${_id}\"}},{\"type\":\"UserTask\",\"id\":\"WAIT\",\"bounds\":{\"x\":820,\"y\":187,\"width\":106,\"height\":66},\"attributes\":{\"autoAudit\":false,\"warn\":{\"mailTemplate\":\"TASKCENTER_REMINDER_TASKNODE\",\"wwTemplate\":\"TASKCENTER_REMINDER_TASKNODE\"},\"dealActions\":\"agree:同意,reject:驳回\",\"assignment\":[{\"chosenName\":\"compmng\",\"id\":\"47727\",\"displayName\":\"compmng（）<要发自己设置邮箱>\",\"type\":\"user\"}],\"assignmentType\":\"CUSTOM_USERS\",\"name\":\"等待外部响应\",\"dealUrlType\":\"EXTERNAL_PAGE\",\"notify\":{\"mailTemplate\":\"TASKCENTER_DEFAULT_TASKNODE_MAIL\",\"wwTemplate\":\"PUNISHCENTER_TASKCENTER_DEFAULT_TASKNODE_WANGWANG\"},\"multiInstance\":false,\"assignStrategy\":\"NONE\",\"dealUrl\":\"${_businessContent.compmngProtocol}://${_businessContent.compmngHost}/bxs/index.htm#/assess/${_id}\"}},{\"type\":\"Stop\",\"id\":\"DONE\",\"bounds\":{\"x\":743,\"y\":664,\"width\":46,\"height\":46},\"attributes\":{\"endEventServices\":[],\"notify\":{\"mailTemplate\":\"TASKCENTER_DEFAULT_TASKEND_MAIL\",\"wwTemplate\":\"TASKCENTER_DEFAULT_TASKEND_WANGWANG\",\"sendWW\":false,\"sendMail\":false},\"beginEventServices\":[]}},{\"type\":\"Line\",\"id\":\"ID1467103655636\",\"bounds\":{\"x\":394,\"y\":150,\"width\":251,\"height\":275},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_AUDIT\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_AUDIT\"},\"startPoint\":{\"x\":644,\"y\":151,\"dir\":\"left\"},\"stopPoint\":{\"x\":422,\"y\":424,\"dir\":\"bottom\"},\"startId\":\"INIT\",\"stopId\":\"AUDIT\"},{\"type\":\"Line\",\"id\":\"ID1467103682896\",\"bounds\":{\"x\":630,\"y\":180,\"width\":77,\"height\":85},\"attributes\":{\"services\":[],\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_CONFIRM\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_CONFIRM\"},\"startPoint\":{\"x\":668,\"y\":181,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":668,\"y\":264,\"dir\":\"bottom\"},\"startId\":\"INIT\",\"stopId\":\"CONFIRM\"},{\"type\":\"Line\",\"id\":\"ID1467103740580\",\"bounds\":{\"x\":688,\"y\":80,\"width\":12,\"height\":42},\"attributes\":{},\"startPoint\":{\"x\":694,\"y\":81,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":694,\"y\":121,\"dir\":\"bottom\"},\"startId\":\"ID1467103565502\",\"stopId\":\"INIT\"},{\"type\":\"Line\",\"id\":\"ID1467103818065\",\"bounds\":{\"x\":474,\"y\":304,\"width\":171,\"height\":121},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_CONFIRM\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_CONFIRM\"},\"startPoint\":{\"x\":475,\"y\":424,\"dir\":\"top\"},\"stopPoint\":{\"x\":644,\"y\":311,\"dir\":\"right\"},\"startId\":\"AUDIT\",\"stopId\":\"CONFIRM\"},{\"type\":\"Line\",\"id\":\"ID1467103828143\",\"bounds\":{\"x\":474,\"y\":483,\"width\":171,\"height\":97},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_PAY\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_PAY\"},\"startPoint\":{\"x\":475,\"y\":484,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":644,\"y\":573,\"dir\":\"right\"},\"startId\":\"AUDIT\",\"stopId\":\"PAY\"},{\"type\":\"Line\",\"id\":\"ID1467103834410\",\"bounds\":{\"x\":447,\"y\":483,\"width\":300,\"height\":211},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_DONE_as_CLAIM_REJECT\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"拒赔\"},\"startPoint\":{\"x\":448,\"y\":484,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":746,\"y\":687,\"dir\":\"right\"},\"startId\":\"AUDIT\",\"stopId\":\"DONE\"},{\"type\":\"Line\",\"id\":\"ID1467103957769\",\"bounds\":{\"x\":693,\"y\":197,\"width\":131,\"height\":68},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_WAIT\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_WAIT\"},\"startPoint\":{\"x\":694,\"y\":264,\"dir\":\"top\"},\"stopPoint\":{\"x\":823,\"y\":204,\"dir\":\"right\"},\"startId\":\"CONFIRM\",\"stopId\":\"WAIT\"},{\"type\":\"Line\",\"id\":\"ID1467103966524\",\"bounds\":{\"x\":612,\"y\":323,\"width\":59,\"height\":102},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_CHECK\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_CHECK\"},\"startPoint\":{\"x\":668,\"y\":324,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":641,\"y\":424,\"dir\":\"bottom\"},\"startId\":\"CONFIRM\",\"stopId\":\"CHECK\"},{\"type\":\"Line\",\"id\":\"ID1467104041860\",\"bounds\":{\"x\":497,\"y\":447,\"width\":95,\"height\":14},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_AUDIT\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_AUDIT\"},\"startPoint\":{\"x\":591,\"y\":454,\"dir\":\"left\"},\"stopPoint\":{\"x\":498,\"y\":454,\"dir\":\"left\"},\"startId\":\"CHECK\",\"stopId\":\"AUDIT\"},{\"type\":\"Line\",\"id\":\"ID1467104051334\",\"bounds\":{\"x\":715,\"y\":230,\"width\":109,\"height\":35},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_CONFIRM\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_CONFIRM\"},\"startPoint\":{\"x\":823,\"y\":237,\"dir\":\"left\"},\"stopPoint\":{\"x\":721,\"y\":264,\"dir\":\"bottom\"},\"startId\":\"WAIT\",\"stopId\":\"CONFIRM\"},{\"type\":\"Line\",\"id\":\"ID1467104619376\",\"bounds\":{\"x\":442,\"y\":271,\"width\":203,\"height\":154},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_AUDIT\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_AUDIT\"},\"startPoint\":{\"x\":644,\"y\":278,\"dir\":\"left\"},\"stopPoint\":{\"x\":448,\"y\":424,\"dir\":\"bottom\"},\"startId\":\"CONFIRM\",\"stopId\":\"AUDIT\"},{\"type\":\"Line\",\"id\":\"ID1467104680486\",\"bounds\":{\"x\":656,\"y\":323,\"width\":77,\"height\":102},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_CONFIRM\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_CONFIRM\"},\"startPoint\":{\"x\":668,\"y\":424,\"dir\":\"top\"},\"stopPoint\":{\"x\":694,\"y\":324,\"dir\":\"top\"},\"startId\":\"CHECK\",\"stopId\":\"CONFIRM\"},{\"type\":\"Line\",\"id\":\"ID1467104706241\",\"bounds\":{\"x\":693,\"y\":602,\"width\":79,\"height\":66},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_DONE_as_PAY\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"赔付\"},\"startPoint\":{\"x\":694,\"y\":603,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":766,\"y\":667,\"dir\":\"bottom\"},\"startId\":\"PAY\",\"stopId\":\"DONE\"},{\"type\":\"Line\",\"id\":\"ID1469527487366\",\"bounds\":{\"x\":683,\"y\":323,\"width\":77,\"height\":221},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_CONFIRM\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_CONFIRM\"},\"startPoint\":{\"x\":721,\"y\":543,\"dir\":\"top\"},\"stopPoint\":{\"x\":721,\"y\":324,\"dir\":\"top\"},\"startId\":\"PAY\",\"stopId\":\"CONFIRM\"},{\"type\":\"Line\",\"id\":\"ID1482224366804\",\"bounds\":{\"x\":421,\"y\":483,\"width\":326,\"height\":211},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_DONE_as_PAY\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"赔付\"},\"startPoint\":{\"x\":422,\"y\":484,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":746,\"y\":687,\"dir\":\"right\"},\"startId\":\"AUDIT\",\"stopId\":\"DONE\"},{\"type\":\"Line\",\"id\":\"ID1493309698509\",\"bounds\":{\"x\":743,\"y\":310,\"width\":45,\"height\":253},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_PAY\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_PAY\"},\"startPoint\":{\"x\":744,\"y\":311,\"dir\":\"right\"},\"stopPoint\":{\"x\":744,\"y\":557,\"dir\":\"left\"},\"startId\":\"CONFIRM\",\"stopId\":\"PAY\"},{\"type\":\"Line\",\"id\":\"ID1493309727482\",\"bounds\":{\"x\":743,\"y\":277,\"width\":78,\"height\":416},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_DONE_as_CLAIM_REJECT\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"拒赔\"},\"startPoint\":{\"x\":744,\"y\":278,\"dir\":\"right\"},\"stopPoint\":{\"x\":786,\"y\":687,\"dir\":\"left\"},\"startId\":\"CONFIRM\",\"stopId\":\"DONE\"},{\"type\":\"Line\",\"id\":\"ID1493309939383\",\"bounds\":{\"x\":647,\"y\":483,\"width\":43,\"height\":61},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_PAY\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_PAY\"},\"startPoint\":{\"x\":668,\"y\":484,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":668,\"y\":543,\"dir\":\"bottom\"},\"startId\":\"CHECK\",\"stopId\":\"PAY\"},{\"type\":\"Line\",\"id\":\"ID1493311304195\",\"bounds\":{\"x\":743,\"y\":293,\"width\":78,\"height\":400},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_DONE_as_PAY\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"赔付\"},\"startPoint\":{\"x\":744,\"y\":294,\"dir\":\"right\"},\"stopPoint\":{\"x\":786,\"y\":687,\"dir\":\"left\"},\"startId\":\"CONFIRM\",\"stopId\":\"DONE\"},{\"type\":\"Line\",\"id\":\"ID1493312120608\",\"bounds\":{\"x\":690,\"y\":453,\"width\":131,\"height\":240},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_DONE_as_PAY\",\"lhs\":{\"id\":-2,\"description\":\"上一步人工任务的处理动作.填写动作的英文名\",\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"赔付\"},\"startPoint\":{\"x\":691,\"y\":454,\"dir\":\"right\"},\"stopPoint\":{\"x\":786,\"y\":687,\"dir\":\"left\"},\"startId\":\"CHECK\",\"stopId\":\"DONE\"},{\"type\":\"Line\",\"id\":\"ID1493312141190\",\"bounds\":{\"x\":690,\"y\":470,\"width\":131,\"height\":223},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_DONE_as_CLAIM_REJECT\",\"lhs\":{\"id\":-2,\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"拒赔\"},\"startPoint\":{\"x\":691,\"y\":471,\"dir\":\"right\"},\"stopPoint\":{\"x\":786,\"y\":687,\"dir\":\"left\"},\"startId\":\"CHECK\",\"stopId\":\"DONE\"},{\"type\":\"Line\",\"id\":\"ID1497355410642\",\"bounds\":{\"x\":743,\"y\":144,\"width\":136,\"height\":47},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_WAIT\",\"lhs\":{\"id\":-2,\"description\":\"上一步人工任务的处理动作.填写动作的英文名\",\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_WAIT\"},\"startPoint\":{\"x\":744,\"y\":151,\"dir\":\"right\"},\"stopPoint\":{\"x\":873,\"y\":190,\"dir\":\"bottom\"},\"startId\":\"INIT\",\"stopId\":\"WAIT\"},{\"type\":\"Line\",\"id\":\"ID1497445974995\",\"bounds\":{\"x\":743,\"y\":249,\"width\":152,\"height\":347},\"attributes\":{\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_PAY\",\"lhs\":{\"id\":-2,\"description\":\"上一步人工任务的处理动作.填写动作的英文名\",\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"to_PAY\"},\"startPoint\":{\"x\":873,\"y\":250,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":744,\"y\":590,\"dir\":\"left\"},\"startId\":\"WAIT\",\"stopId\":\"PAY\"},{\"type\":\"Line\",\"id\":\"ID1504069967655\",\"bounds\":{\"x\":785,\"y\":249,\"width\":128,\"height\":444},\"attributes\":{\"services\":[],\"condition\":[{\"op\":{\"op\":\"==\",\"name\":\"等于\"},\"rhs\":\"to_DONE_as_CLAIM_REJECT\",\"lhs\":{\"id\":-2,\"description\":\"上一步人工任务的处理动作.填写动作的英文名\",\"name\":\"前置结点处理动作\",\"type\":\"prevNodeOperate\"}}],\"name\":\"拒赔\"},\"startPoint\":{\"x\":900,\"y\":250,\"dir\":\"bottom\"},\"stopPoint\":{\"x\":786,\"y\":687,\"dir\":\"left\"},\"startId\":\"WAIT\",\"stopId\":\"DONE\"},{\"type\":\"Line\",\"id\":\"ID1504075202881\",\"bounds\":{\"x\":785,\"y\":236,\"width\":173,\"height\":457},\"attributes\":{\"name\":\"赔付\",\"condition\":[{\"lhs\":{\"id\":-2,\"type\":\"prevNodeOperate\",\"name\":\"前置结点处理动作\",\"description\":\"上一步人工任务的处理动作.填写动作的英文名\"},\"rhs\":\"to_DONE_as_PAY\",\"op\":{\"op\":\"==\",\"name\":\"等于\"}}],\"services\":[]},\"startPoint\":{\"x\":923,\"y\":237,\"dir\":\"right\"},\"stopPoint\":{\"x\":786,\"y\":687,\"dir\":\"left\"},\"startId\":\"WAIT\",\"stopId\":\"DONE\"}],\"attributes\":{\"cancel\":{\"name\":\"CANCELEND\",\"notify\":{\"mailTemplate\":\"TASKCENTER_DEFAULT_TASKEND_MAIL\",\"wwTemplate\":\"TASKCENTER_DEFAULT_TASKEND_WANGWANG\"}}}}",
      "description": "保险服务审核",
      "flag": 2217,
      "gmtCreate": {
        "date": 15,
        "day": 2,
        "hours": 20,
        "minutes": 21,
        "month": 10,
        "seconds": 28,
        "time": 1479212488000,
        "timezoneOffset": -480,
        "year": 116
      },
      "gmtModify": {
        "date": 27,
        "day": 3,
        "hours": 14,
        "minutes": 41,
        "month": 5,
        "seconds": 6,
        "time": 1530081666000,
        "timezoneOffset": -480,
        "year": 118
      },
      "histMoveTime": "90",
      "id": 772,
      "isActivated": "TRUE",
      "isCommonModel": "NONCOMMON",
      "managers": "",
      "model": "COMMON",
      "modifierId": "194835",
      "monitor": "",
      "nameIndex": "保险理赔服务 baoxianlipeifuwu bxlpfw",
      "processKey": "BIZ_APP_TCMNG.compmng_bxs_assess",
      "processName": "保险理赔服务",
      "singleLine": false,
      "summaryConfig": {},
      "taskCode": "compmng_bxs_assess",
      "url": "",
      "userIdConfig": {},
      "version": 0,
      "versionModifyTime": {}
    },
    "tempSaveContent": ""
  }
}