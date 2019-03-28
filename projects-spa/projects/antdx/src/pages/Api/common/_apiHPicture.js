export const dataSource = [
  {
    id: 1,
    params: 'className',
    description: '组件容器 css 类',
    type: 'String',
    defaultValue: '-',
  },
  {
    id: 2,
    params: 'view',
    description: '容器大小，如果是字符串或数字，则宽度和高度都为该值；如果是数组，则第一个元素是宽度，第二个元素或第一个元素是高度；如果是对象，则为css style属性',
    type: 'String/Number/Array/Object',
    defaultValue: '{ width: "100%", height: 400 }',
  },
  {
    id: 3,
    params: 'src',
    description: '图片 url 地址',
    type: 'String',
    defaultValue: '-',
  },
  {
    id: 4,
    params: 'width',
    description: '图片默认显示宽度',
    type: 'Number',
    defaultValue: '区域内最大显示宽度',
  },
  {
    id: 5,
    params: 'rotate',
    description: '图片默认旋转角度',
    type: 'Number',
    defaultValue: '0',
  },
  {
    id: 6,
    params: 'positionX',
    description: '图片默认拖拽的 x 坐标',
    type: 'Number',
    defaultValue: '0',
  },
  {
    id: 7,
    params: 'positionY',
    description: '图片默认拖拽的 y 坐标',
    type: 'Number',
    defaultValue: '0',
  },
  {
    id: 8,
    params: 'rotateRate',
    description: '图片单次旋转比例',
    type: 'Number',
    defaultValue: '3',
  },
  {
    id: 9,
    params: 'zoomRate',
    description: '图片单次缩放比例',
    type: 'Number',
    defaultValue: '3',
  },
  {
    id: 12,
    params: 'operations',
    description: '图片操作按钮',
    type: 'Array/Boolean',
    defaultValue: '-',
  },
]