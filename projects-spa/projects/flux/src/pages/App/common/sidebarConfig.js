/**
 * 侧边导航配置
 */

export default [
  {
    icon: 'home',
    title: '主页',
    path: '/',
  },
  {
    icon: 'login',
    title: '登录',
    path: '/login',
  },
  {
    title: {
      name: '理赔审核',
      icon: 'user',
    },
    subMenus: [
      { icon: 'user', title: '页面 A', path: '/a' },
      { icon: 'user', title: '页面 B', path: '/b' },
      { icon: 'user', title: '页面 C', path: '/c' },
    ]
  },
  {
    icon: 'user',
    title: '新闻页面',
    path: '/news',
  },
  {
    icon: 'book',
    title: '帮助我们',
    path: '/help',
  },
  {
    icon: 'picture',
    title: '秘密页面',
    path: '/secret',
  },
  {
    icon: 'copy',
    title: '错误页面',
    path: '/404',
  },
];
