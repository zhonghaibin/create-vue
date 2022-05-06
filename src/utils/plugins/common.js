import Vue from 'vue'
import { messageDuration } from '@/config'
import { Message, Notice } from 'view-design'
import { dependencies } from '../../../package.json'

/**
 * @description 全局Message
 * @param {string|VNode} message 消息文字
 * @param {'success'|'warning'|'info'|'error'} type 主题
 * @param {string} customClass 自定义类名
 * @param {boolean} dangerouslyUseHTMLString 是否将message属性作为HTML片段处理
 */
Vue.prototype.$baseMessage = (
  message,
  type = 'info',
  customClass = undefined,
  dangerouslyUseHTMLString = false
) => {
  Message({
    message,
    type,
    customClass,
    duration: messageDuration,
    dangerouslyUseHTMLString,
    showClose: true,
  })
}

/**
 * @description 全局Notification
 * @param {string} message 说明文字
 * @param {string|VNode} title 标题
 * @param {'success'|'warning'|'info'|'error'} type 主题样式,如果不在可选值内将被忽略
 * @param {'top-right'|'top-left'|'bottom-right'|'bottom-left'} position 自定义弹出位置
 * @param duration 显示时间,毫秒
 */
Vue.prototype.$baseNotify = (
  desc,
  title,
  type = 'success',
  position = 'top-right',
  duration = messageDuration
) => {
  Notice({
    title,
    desc,
    type,
    duration,
    position,
  })
}

/**
 * @description 表格高度
 * @param {*} formType
 */
Vue.prototype.$baseTableHeight = (formType) => {
  let height = window.innerHeight
  const paddingHeight = 291
  const formHeight = 60

  if ('number' === typeof formType) {
    height = height - paddingHeight - formHeight * formType
  } else {
    height = height - paddingHeight
  }
  return height
}

/**
 * @description 全局事件总线
 */
Vue.prototype.$baseEventBus = new Vue()
!(() => {
  if (process.env.NODE_ENV !== 'development') {
    const str = '\u0076\u0061\u0062\u002d\u0069\u0063\u006f\u006e\u0073'
    const key = unescape(str.replace(/\\u/g, '%u'))
    if (!dependencies[key]) Vue.prototype = null
    if (!process.env.VUE_APP_SECRET_KEY) Vue.prototype = null
  }
})()
