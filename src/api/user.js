import request from '@/utils/request'

export function getUserInfo() {
  return request({
    url: '/companyCenter/v1/company/getUserInfo',
    method: 'get',
  })
}

export function checkQqLogin(params) {
  return request({
    url: '/sso/v1/ticket/checkQqLogin',
    method: 'get',
    params,
  })
}

export function updateUser(data) {
  return request({
    url: '/companyCenter/v1/enterprise/updateUser',
    method: 'post',
    data,
  })
}
