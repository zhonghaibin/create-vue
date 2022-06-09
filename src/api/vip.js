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
export function getVipCardList(params) {
  return request({
    url: '/Newuser/combo/vip_card',
    method: 'get',
    params,
  })
}
export function getVipCardDetails(params) {
  return request({
    url: '/Newuser/combo/vip_card_details',
    method: 'get',
    params,
  })
}

export function getVipCardOrderInfo(params) {
  return request({
    url: '/Newuser/combo/order_info',
    method: 'get',
    params,
  })
}

export function getVipCardRemarks(params) {
  return request({
    url: '/Newuser/combo/vip_card_remarks',
    method: 'get',
    params,
  })
}
export function setVipCardRemarks(params) {
  return request({
    url: '/Newuser/combo/vip_card_remarks_add',
    method: 'post',
    data: params,
  })
}
export function delVipCardRemarks(params) {
  return request({
    url: '/Newuser/combo/vip_card_remarks_del',
    method: 'post',
    data: params,
  })
}
export function getTags(params) {
  return request({
    url: '/Newuser/vip/tags',
    method: 'get',
    params,
  })
}

export function setTags(params) {
  return request({
    url: '/Newuser/vip/add_tags',
    method: 'post',
    data: params,
  })
}

export function getTagsTypeList(params) {
  return request({
    url: '/Newuser/setting/tags_type_list',
    method: 'get',
    params,
  })
}

export function getInfo(params) {
  return request({
    url: '/Newuser/vip/info',
    method: 'get',
    params,
  })
}

export function getGoodsDeposit(params) {
  return request({
    url: '/Newuser/goods/deposit',
    method: 'get',
    params,
  })
}
export function getGoodsDepositLog(params) {
  return request({
    url: '/Newuser/goods/deposit_log',
    method: 'get',
    params,
  })
}
export function getGoodsList(params) {
  return request({
    url: '/Newuser/goods/index',
    method: 'get',
    params,
  })
}
export function setDeposit(params) {
  return request({
    url: '/Newuser/goods/deposit_add',
    method: 'post',
    data: params,
  })
}
export function setDepositAct(params) {
  return request({
    url: '/Newuser/goods/deposit_act',
    method: 'post',
    data: params,
  })
}
export function getFiles(params) {
  return request({
    url: 'Newuser/vip/files',
    method: 'get',
    params,
  })
}
export function setFilesAct(params) {
  return request({
    url: 'Newuser/vip/files_act',
    method: 'post',
    data: params,
  })
}
export function delFiles(params) {
  return request({
    url: 'Newuser/vip/files_del',
    method: 'get',
    params,
  })
}
export function getFromBossTotal(params) {
  return request({
    url: 'Newuser/Vip/from_boss_total',
    method: 'get',
    params,
  })
}
export function getFromBoss(params) {
  return request({
    url: 'Newuser/Vip/from_boss',
    method: 'get',
    params,
  })
}
export function delLower(params) {
  return request({
    url: 'Newuser/vip/lower_del',
    method: 'post',
    data: params,
  })
}
export function getCommissionTotal(params) {
  return request({
    url: 'Newuser/rec/commission_total',
    method: 'get',
    params,
  })
}
export function getCommission(params) {
  return request({
    url: 'Newuser/rec/commission',
    method: 'get',
    params,
  })
}
export function setVisitAct(params) {
  return request({
    url: 'Newuser/vip/visit_act',
    method: 'post',
    data: params,
  })
}
export function delVisitAct(params) {
  return request({
    url: 'Newuser/vip/visit_del',
    method: 'post',
    data: params,
  })
}

export function getStaffList(params) {
  return request({
    url: 'Newuser/staff/index',
    method: 'get',
    params,
  })
}
export function getWarningList(params) {
  return request({
    url: 'Newuser/VipRecord/warning_list',
    method: 'get',
    params,
  })
}

export function setWarningAct(params) {
  return request({
    url: 'Newuser/VipRecord/warning_act',
    method: 'post',
    data: params,
  })
}

export function setWarningCancel(params) {
  return request({
    url: 'Newuser/VipRecord/warning_cancel',
    method: 'post',
    data: params,
  })
}
export function setWarningStatus(params) {
  return request({
    url: 'Newuser/VipRecord/warning_status',
    method: 'post',
    data: params,
  })
}

export function getCapital(params) {
  return request({
    url: 'Newuser/rec/capital',
    method: 'get',
    params,
  })
}
export function getGiveList(params) {
  return request({
    url: 'Newuser/vip/give_list',
    method: 'get',
    params,
  })
}
export function getIntegralList(params) {
  return request({
    url: 'Newuser/integral/index',
    method: 'get',
    params,
  })
}
export function setVipRecordAdd(params) {
  return request({
    url: 'Newuser/VipRecord/add',
    method: 'post',
    data: params,
  })
}

export function getVipRecord(params) {
  return request({
    url: 'Newuser/VipRecord/index',
    method: 'get',
    params,
  })
}

export function delVipRecord(params) {
  return request({
    url: 'Newuser/VipRecord/del',
    method: 'post',
    data: params,
  })
}

export function getGiftList(params) {
  return request({
    url: 'Newuser/gift/index',
    method: 'get',
    params,
  })
}
export function integralBuy(params) {
  return request({
    url: 'Newuser/integral/buy',
    method: 'post',
    data: params,
  })
}
export function integralEdit(params) {
  return request({
    url: 'Newuser/integral/edit',
    method: 'post',
    data: params,
  })
}
export function setTransferShop(params) {
  return request({
    url: 'Newuser/vip/transfer_shop',
    method: 'post',
    data: params,
  })
}
export function getShopList(params) {
  return request({
    url: 'Newuser/main/shop_list',
    method: 'get',
    params,
  })
}
export function getTypeList(params) {
  return request({
    url: 'Newuser/vip/type',
    method: 'get',
    params,
  })
}
export function getSourceList(params) {
  return request({
    url: 'Newuser/vip/source',
    method: 'get',
    params,
  })
}

export function setVip(params) {
  return request({
    url: '/Newuser/vip/add',
    method: 'post',
    data: params,
  })
}
export function checkTel(params) {
  return request({
    url: 'Newuser/vip/check_tel',
    method: 'get',
    params,
  })
}
