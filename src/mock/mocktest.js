// 测试文件 node mocktest.js使用
const Mock = require('mockjs')
// const id = Mock.mock('@id')
var obj = Mock.mock({
  id: '@id',
  username: '@cname',
  date: '@date',
  avarta: "@image('200x200','red','#fff','avatar')", // size, background,fontcolor,text
  description: '@paragraph',
  ip: '@ip',
  email: '@email'
})
console.log(obj)
