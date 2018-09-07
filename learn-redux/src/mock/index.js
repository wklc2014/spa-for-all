import Mock from 'mockjs';

Mock.mock('/user', (url, type, body) => {
  return {
    stat: 'ok',
    data: [
      '成都123'
    ]
  }
})