export const dataSource = [
  {
    id: 1,
    params: 'label',
    description: '表单元素 label 属性，主要用来生成 placeholder 属性',
    type: 'Element/Boolean/String',
    defaultValue: '空',
  },
  {
    id: 2,
    params: 'id',
    description: '表单元素 id 属性，标识表单元素的唯一 ID',
    type: 'String',
    defaultValue: '必填',
  },
  {
    id: 3,
    params: 'type',
    description: '表单元素 type 属性，标识表单元素的输入类型',
    type: 'String',
    defaultValue: '必填',
  },
  {
    id: 4,
    params: 'api',
    description: '表单元素 api，包括 antd/html 支持的',
    type: 'Object',
    defaultValue: '{}',
  },
  {
    id: 5,
    params: 'ext',
    description: '表单元素扩展配置',
    type: 'Object',
    defaultValue: '{}',
  },
  {
    id: 6,
    params: 'onChange',
    description: '可控表单搜集表单值的事件方法，绑定到 onChange/onBlur 事件',
    type: 'Func',
    defaultValue: 'null',
  },
  {
    id: 7,
    params: 'value',
    description: '表单元素值',
    type: 'Any',
    defaultValue: 'undefined',
  },
]