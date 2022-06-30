import request from '@/utils/request'

//会员等级列表
export function getMemberGradeList(params) {
  return request({
    url: '/Newuser/vip/type',
    method: 'get',
    params,
  })
}
//会员来源列表
export function getMemberSourceList(params) {
  return request({
    url: '/Newuser/vip/source',
    method: 'get',
    params,
  })
}
//会员列表
export function getMemberList(params) {
  return request({
    url: '/Newuser/vip/index',
    method: 'get',
    params,
  })
}
//会员列表统计
export function getMemberTotal(params) {
  return request({
    url: '/Newuser/vip/index_total',
    method: 'get',
    params,
  })
}
//会员资料
export function getMemberInfo(params) {
  return request({
    url: '/Newuser/vip/details',
    method: 'get',
    params,
  })
}
//回访列表
export function getMemberVisitList(params) {
  return request({
    url: '/Newuser/vip/visit_list',
    method: 'get',
    params,
  })
}
//预约记录列表
export function getMemberAppointmentList(params) {
  return request({
    url: '/Newuser/WxMrke/index2',
    method: 'get',
    params,
  })
}
//会员套餐列表
export function getVipCardList(params) {
  return request({
    url: '/Newuser/combo/vip_card',
    method: 'get',
    params,
  })
}
//会员套餐详情
export function getVipCardDetails(params) {
  return request({
    url: '/Newuser/combo/vip_card_details',
    method: 'get',
    params,
  })
}
//会员套餐消费记录
export function getVipCardOrderInfo(params) {
  return request({
    url: '/Newuser/combo/order_info',
    method: 'get',
    params,
  })
}
//会员套餐备注列表
export function getVipCardRemarks(params) {
  return request({
    url: '/Newuser/combo/vip_card_remarks',
    method: 'get',
    params,
  })
}
//会员套餐备注提交
export function setVipCardRemarks(params) {
  return request({
    url: '/Newuser/combo/vip_card_remarks_add',
    method: 'post',
    data: params,
  })
}
//套餐备注删除
export function delVipCardRemarks(params) {
  return request({
    url: '/Newuser/combo/vip_card_remarks_del',
    method: 'post',
    data: params,
  })
}
//会员标签列表
export function getTags(params) {
  return request({
    url: '/Newuser/vip/tags',
    method: 'get',
    params,
  })
}
//会员标签提交
export function setTags(params) {
  return request({
    url: '/Newuser/vip/add_tags',
    method: 'post',
    data: params,
  })
}
//标签列表-按类分组
export function getTagsTypeList(params) {
  return request({
    url: '/Newuser/setting/tags_type_list',
    method: 'get',
    params,
  })
}
//会员数据
export function getInfo(params) {
  return request({
    url: '/Newuser/vip/info',
    method: 'get',
    params,
  })
}
//商品寄存列表
export function getGoodsDeposit(params) {
  return request({
    url: '/Newuser/goods/deposit',
    method: 'get',
    params,
  })
}
//商品寄存操作记录
export function getGoodsDepositLog(params) {
  return request({
    url: '/Newuser/goods/deposit_log',
    method: 'get',
    params,
  })
}
//商品列表
export function getGoodsList(params) {
  return request({
    url: '/Newuser/goods/index',
    method: 'get',
    params,
  })
}
//商品寄存新增
export function setDeposit(params) {
  return request({
    url: '/Newuser/goods/deposit_add',
    method: 'post',
    data: params,
  })
}
//寄存商品操作
export function setDepositAct(params) {
  return request({
    url: '/Newuser/goods/deposit_act',
    method: 'post',
    data: params,
  })
}
//附件列表
export function getFiles(params) {
  return request({
    url: 'Newuser/vip/files',
    method: 'get',
    params,
  })
}
//会员附件添加/编辑
export function setFilesAct(params) {
  return request({
    url: 'Newuser/vip/files_act',
    method: 'post',
    data: params,
  })
}
//附件删除
export function delFiles(params) {
  return request({
    url: 'Newuser/vip/files_del',
    method: 'get',
    params,
  })
}
//股东分红----股东信息----统计
export function getFromBossTotal(params) {
  return request({
    url: 'Newuser/Vip/from_boss_total',
    method: 'get',
    params,
  })
}
//股东分红------股东信息---推荐人列表
export function getFromBoss(params) {
  return request({
    url: 'Newuser/Vip/from_boss',
    method: 'get',
    params,
  })
}
//股东信息----解除关系
export function delLower(params) {
  return request({
    url: 'Newuser/vip/lower_del',
    method: 'post',
    data: params,
  })
}
//股东信息----分红统计
export function getCommissionTotal(params) {
  return request({
    url: 'Newuser/rec/commission_total',
    method: 'get',
    params,
  })
}
//股东分红/会员分佣
export function getCommission(params) {
  return request({
    url: 'Newuser/rec/commission',
    method: 'get',
    params,
  })
}
//添加/编辑回访
export function setVisitAct(params) {
  return request({
    url: 'Newuser/vip/visit_act',
    method: 'post',
    data: params,
  })
}
//回访删除
export function delVisitAct(params) {
  return request({
    url: 'Newuser/vip/visit_del',
    method: 'post',
    data: params,
  })
}
//员工列表
export function getStaffList(params) {
  return request({
    url: 'Newuser/staff/index',
    method: 'get',
    params,
  })
}
//会员提醒列表
export function getWarningList(params) {
  return request({
    url: 'Newuser/VipRecord/warning_list',
    method: 'get',
    params,
  })
}
//添加会员提醒
export function setWarningAct(params) {
  return request({
    url: 'Newuser/VipRecord/warning_act',
    method: 'post',
    data: params,
  })
}
//取消会员提醒
export function setWarningCancel(params) {
  return request({
    url: 'Newuser/VipRecord/warning_cancel',
    method: 'post',
    data: params,
  })
}
//会员提醒状态修改
export function setWarningStatus(params) {
  return request({
    url: 'Newuser/VipRecord/warning_status',
    method: 'post',
    data: params,
  })
}
//资产记录---消费记录
export function getCapital(params) {
  return request({
    url: 'Newuser/rec/capital',
    method: 'get',
    params,
  })
}
//资产记录---获赠记录
export function getGiveList(params) {
  return request({
    url: 'Newuser/vip/give_list',
    method: 'get',
    params,
  })
}
//资产记录----积分记录
export function getIntegralList(params) {
  return request({
    url: 'Newuser/integral/index',
    method: 'get',
    params,
  })
}
//客情（重要日期）编辑/添加
export function setVipRecordAdd(params) {
  return request({
    url: 'Newuser/VipRecord/add',
    method: 'post',
    data: params,
  })
}
//客情（重要日期）列表
export function getVipRecord(params) {
  return request({
    url: 'Newuser/VipRecord/index',
    method: 'get',
    params,
  })
}
//客情（重要日期）记录删除
export function delVipRecord(params) {
  return request({
    url: 'Newuser/VipRecord/del',
    method: 'post',
    data: params,
  })
}
//礼品列表
export function getGiftList(params) {
  return request({
    url: 'Newuser/gift/index',
    method: 'get',
    params,
  })
}
//积分兑换
export function integralBuy(params) {
  return request({
    url: 'Newuser/integral/buy',
    method: 'post',
    data: params,
  })
}
//修改积分
export function integralEdit(params) {
  return request({
    url: 'Newuser/integral/edit',
    method: 'post',
    data: params,
  })
}
//会员转店
export function setTransferShop(params) {
  return request({
    url: 'Newuser/vip/transfer_shop',
    method: 'post',
    data: params,
  })
}
//门店列表
export function getShopList(params) {
  return request({
    url: 'Newuser/main/shop_list',
    method: 'get',
    params,
  })
}
//添加会员
export function setVip(params) {
  return request({
    url: '/Newuser/vip/add',
    method: 'post',
    data: params,
  })
}
//编辑会员
export function vipEdit(params) {
  return request({
    url: '/Newuser/vip/edit',
    method: 'post',
    data: params,
  })
}
//会员编辑/添加的手机校验
export function checkTel(params) {
  return request({
    url: 'Newuser/vip/check_tel',
    method: 'get',
    params,
  })
}
//会员换卡号操作
export function updateVipId(params) {
  return request({
    url: '/Newuser/vip/update_vip_id',
    method: 'post',
    data: params,
  })
}
//到店预警
export function cashierWarning(params) {
  return request({
    url: 'Newuser/Cashier/warning',
    method: 'get',
    params,
  })
}
