import Mock from 'mockjs';

Mock.mock('/user', 'post', (url, type, body) => {
  return {
    stat: 'ok',
    token: 'abcdefg',
  }
})
