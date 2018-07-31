const pages = [
  {
    id: 'basic-1',
    type: 'basic',
    title: '报案基本信息',
    data: [
      {
        id: 'fillInfomation',
        label: '填写信息',
        data: [
          {
            id: 'insuredName',
            type: 'text',
            params: {
              label: '出险人',
            },
            defaultApi: {
              className: 'inputItem-right',
            },
            defaultValue: '默认张三文字比较长比较多，可能超出了',
          },
          {
            id: 'reportName',
            type: 'input',
            params: {
              label: '报案人姓名',
            },
            defaultApi: {
              className: 'inputItem-right',
              placeholder: '请填写报案人姓名',
            },
          },
          {
            id: 'hiddenKey',
            type: 'hidden',
            defaultValue: '默认hiddenKey',
          }
        ]
      },
      {
        id: 'claimChoice',
        label: '理赔选项',
        data: [
          {
            id: 'compensationType',
            type: 'picker',
            defaultApi: {
              data: [
                { label: '科目补考', value: 'keMuBuKao' },
                { label: '挂科重学', value: 'guaKeChongXue' },
                { label: '意外事故伤残', value: 'yiWaiShiGuShangCan' },
              ],
              cols: 1,
              title: '理赔选项',
            },
            listItemApi: {
              arrow: 'down',
            },
            params: {
              label: '理赔选项',
            }
          }
        ]
      },
      {
        id: 'accidentProgress',
        label: '事故发生过程',
        data: [
          {
            id: 'accidentDescription',
            type: 'textarea',
            defaultApi: {
              placeholder: '此项将根据您选择的理赔选项，对发生的事故进行描述。',
              autoHeight: true,
              rows: 4,
              labelNumber: 6 * 34,
              count: 100,
              disabled: true,
            },
            optionsApi: {
              rules: [
                // { required: true, message: '事故发生过程必填' },
              ]
            },
            // defaultValue: '巴拉巴拉事故发生过程',
          },
        ]
      }
    ]
  },
  {
    id: 'basic-2',
    type: 'basic',
    title: '完善基本信息',
    data: [
      {
        id: 'fillInbase',
        label: '填写信息2',
        data: [
          {
            id: 'contactPhone',
            type: 'input',
            params: {
              label: '联系电话',
            },
            defaultApi: {
              className: 'inputItem-right',
              placeholder: '请填写联系电话',
              type: 'phone',
            },
            optionsApi: {
              rules: [
                { required: true, message: '手机号码必填' },
                { buildIn: 'isPhone' }
              ]
            },
            defaultValue: '13566665555',
          },
        ]
      }
    ]
  },
  {
    id: 'keMuBuKao',
    type: 'upload',
    title: '科目补考-资料上传',
    btnLabel: '提交材料',
    data: [
      {
        viewType: 'idcard',
        id: 'idcard',
        label: '身份证',
        max: 2,
        data: [
          {
            defaultImage: 'idCardFront',
            type: 'IT0001',
            label: '身份证正面',
            required: true,
          },
          {
            defaultImage: 'idCardEnd',
            type: 'IT0001',
            label: '身份证反面',
            required: true,
          }
        ],
      },
      {
        id: 'sipPeiZiLiao',
        label: '索赔资料',
        max: 10,
        add: {
          label: '索赔资料添加',
          type: 'IT000-add',
        },
        data: [
          {
            defaultImage: '',
            type: 'IT0002',
            label: '成绩单',
            required: true,
          }
        ],
      },
      {
        id: 'other',
        label: '其他',
        max: 10,
        add: {
          label: '其他',
          type: 'IT000-add',
        },
        data: [
          {
            defaultImage: '',
            type: 'IT0003',
            label: '其他',
          }
        ],
      },
    ]
  },
  {
    id: 'guaKeChongXue',
    type: 'upload',
    title: '挂科重学-资料上传',
    btnLabel: '提交材料',
    data: [
      {
        viewType: 'idcard',
        id: 'idcard',
        label: '身份证',
        max: 2,
        data: [
          {
            defaultImage: 'idCardFront',
            type: 'IT0001',
            label: '身份证正面',
            required: true,
          },
          {
            defaultImage: 'idCardEnd',
            type: 'IT0001',
            label: '身份证反面',
            required: true,
          }
        ],
      },
      {
        id: 'heTongPingZheng',
        label: '合同凭证',
        max: 10,
        add: {
          label: '合同凭证添加',
          type: 'IT000-add',
        },
        data: [
          {
            defaultImage: '',
            type: 'IT0002',
            label: '驾校合同 1',
            required: true,
          },
          {
            defaultImage: '',
            type: 'IT0002',
            label: '驾校合同 2',
            required: true,
          },
          {
            defaultImage: '',
            type: 'IT0002',
            label: '驾校报名发票',
            required: true,
          }
        ],
      },
      {
        id: 'sipPeiZiLiao',
        label: '索赔资料',
        max: 10,
        add: {
          label: '索赔资料添加',
          type: 'IT000-add',
        },
        data: [
          {
            defaultImage: '',
            type: 'IT0002',
            label: '成绩单',
            required: true,
          }
        ],
      },
      {
        id: 'other',
        label: '其他',
        max: 10,
        add: {
          label: '其他',
          type: 'IT000-add',
        },
        data: [
          {
            defaultImage: '',
            type: 'IT0003',
            label: '其他',
          }
        ],
      },
    ]
  },
  {
    id: 'yiWaiShiGuShangCan',
    type: 'upload',
    title: '意外事故伤残-资料上传',
    btnLabel: '提交材料',
    data: [
      {
        viewType: 'idcard',
        id: 'idcard',
        label: '身份证',
        max: 2,
        data: [
          {
            defaultImage: 'idCardFront',
            type: 'IT0001',
            label: '身份证正面',
            required: true,
          },
          {
            defaultImage: 'idCardEnd',
            type: 'IT0001',
            label: '身份证反面',
            required: true,
          }
        ],
      },
      {
        id: 'yiLiaoPingZheng',
        label: '医疗凭证',
        max: 10,
        add: {
          label: '医疗凭证添加',
          type: 'IT000-add',
        },
        data: [
          {
            defaultImage: '',
            type: 'IT0002',
            label: '病历本记录',
            required: true,
          },
          {
            defaultImage: '',
            type: 'IT0002',
            label: '补充材料',
            required: true,
          },
        ],
      },
      {
        id: 'shiGuZhengMing',
        label: '事故证明',
        max: 10,
        add: {
          label: '索赔资料添加',
          type: 'IT000-add',
        },
        data: [
          {
            defaultImage: '',
            type: 'IT0002',
            label: '事故详细说明',
            required: true,
          },
          {
            defaultImage: '',
            type: 'IT0002',
            label: '交通事故认定书',
            required: true,
          },
          {
            defaultImage: '',
            type: 'IT0002',
            label: '伤残鉴定报告',
            required: true,
          }
        ],
      },
      {
        id: 'other',
        label: '其他',
        max: 10,
        add: {
          label: '其他',
          type: 'IT000-add',
        },
        data: [
          {
            defaultImage: '',
            type: 'IT0003',
            label: '其他',
          }
        ],
      },
    ]
  },
];

const pointer = {
  'index': 'basic-1',
  'basic-1': 'basic-2',
}
// pageConfigs, pagePointer, pageValues
const render = `
  const newConfigs = pageConfigs.concat([]);
  const newPointer = Object.assign({}, pagePointer);
  const newValues = Object.assign({}, pageValues);

  const { compensationType } = pageValues['basic-1'];
  newPointer['basic-2'] = compensationType[0];

  const placeholder = {
    keMuBuKao: '请描述您需要申请补考补偿的原因及过程并附上122.gov.cn的注册账号及密码方便后续理赔。\\n\\n事故参考描述：本人小云，科目一第一次考85分，需要补考，申请理赔。122.gov.cn的注册账号是1322222228，密码123456',
    guaKeChongXue: '请描述您需要申请科目挂科重学补偿的原因及过程并附上122.gov.cn的注册账号及密码方便后续理赔。\\n\\n事故参考描述：本人小云，科目二连续五次挂科，申请挂科重学的理赔补偿，报名驾校是杭州名人驾校，驾校地址：杭州市下沙区下沙路111号，驾校报名电话：0571-788999768。122.gov.cn的注册账号是1322222228，密码123456',
    yiWaiShiGuShangCan: '请描述意外事故发生的过程，包括但不限于意外事故发生的时间、地点、过程、人员伤亡等信息',
  }

  const page = newConfigs.find(configs => configs.id === 'basic-1');
  console.log("page", page);
  const accident = page.data.find(page => page.id === 'accidentProgress');
  const descript = accident.data.find(acc => acc.id === 'accidentDescription');
  descript.defaultApi.placeholder = placeholder[compensationType[0]];
  descript.defaultApi.disabled = false;



  return {
    pageConfigs: newConfigs,
    pagePointer: newPointer,
    pageValues: newValues,
  }
`;

module.exports = {
  success: true,
  data: [
    {
      content: JSON.stringify({
        title: 'H5配置在线理赔',
        pages,
        pointer,
        render,
      }),
      orgCode: 'TEST-orgCode',
      channel: 'test-channel',
    }
  ]
}

