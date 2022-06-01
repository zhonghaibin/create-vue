import request from '@/utils/request'

export function getMemberGradeList(params) {
  return request({
    url: '/Newuser/vip/type',
    method: 'get',
    params,
  })
}
export function getMemberSourceList(params) {
  return request({
    url: '/Newuser/vip/source',
    method: 'get',
    params,
  })
}

export function getMemberList(params) {
  return request({
    url: '/Newuser/vip/index',
    method: 'get',
    params,
  })
}

export function getMemberTotal(params) {
  return request({
    url: '/Newuser/vip/index_total',
    method: 'get',
    params,
  })
}
export function getMemberInfo(params) {
  return request({
    url: '/Newuser/vip/details',
    method: 'get',
    params,
  })
}

export function getMemberVisitList(params) {
  return request({
    url: '/Newuser/vip/visit_list',
    method: 'get',
    params,
  })
}
export function getMemberAppointmentList(params) {
  return request({
    url: '/Newuser/WxMrke/index2',
    method: 'get',
    params,
  })
}
