import Mock from 'mockjs';

Mock.mock('/user', 'post', (url, type, body) => {
  return {
    stat: 'ok',
    data: [
      '成都',
      '绵阳',
      '北京',
      '上海',
      '合肥',
      '深圳',
      '呼和浩特',
    ]
  }
})