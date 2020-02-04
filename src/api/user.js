// 用户相关的请求模块
import request from '@/utils/request' // 引入封装的axios模块

export function login (data) {
  //  得到一个promise对象  返回
  return request({
    url: '/authorizations',
    data,
    method: 'post'
  })
}
