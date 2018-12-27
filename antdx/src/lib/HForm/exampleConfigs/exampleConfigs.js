/**
 * FormGroup 组件配置示例
 */
export default [
  {
    config: {
      id: 'user_name',
      type: 'input',
      api: {},
      ext: {
        toUpperCase: false,
        toLowerCase: false,
        trim: false,
        span: 24,
      },
      rules: [
        { required: true, message: '用户姓名必填' },
      ]
    },
    extMap: {
      label: '用户姓名',
      hide: false,
      colspan: 1,
      layout: 80,
      space: 0,
      minWidth: 160,
      maxWidth: 1000,
      gutter: 8,
    },
  },
]