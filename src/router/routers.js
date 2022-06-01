import Main from '@/components/main'
export default [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: false,
      notCache: true,
    },
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          hideInMenu: false,
          title: '首页总览',
          notCache: true,
          icon: 'md-home',
        },
        component: () => import('@/view/home'),
      },
    ],
  },
  {
    path: '/cashier',
    name: 'cashier',
    meta: {
      icon: 'logo-usd',
      title: '收银订单',
      showAlways: true,
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'cashier.index',
        meta: {
          icon: '',
          title: '收银开单',
        },
        component: () => import('@/view/cashier/index'),
      },
      {
        path: 'order',
        name: 'cashier.order',
        meta: {
          icon: '',
          title: '订单管理',
        },
        component: () => import('@/view/cashier/order'),
      },
    ],
  },
  {
    path: '/appointment',
    name: 'appointment',
    meta: {
      icon: 'md-timer',
      title: '预约排控',
      showAlways: true,
    },
    component: Main,
    children: [
      {
        path: 'card',
        name: 'appointment.card',
        meta: {
          icon: '',
          title: '项目预约',
        },
        component: () => import('@/view/appointment/card'),
      },
      {
        path: 'course',
        name: 'appointment.course',
        meta: {
          icon: '',
          title: '课程预约',
        },
        component: () => import('@/view/appointment/course'),
      },
      {
        path: 'staff-schedule',
        name: 'appointment.staff-schedule',
        meta: {
          icon: '',
          title: '员工排班',
        },
        component: () => import('@/view/appointment/staff-schedule'),
      },
      {
        path: 'online-qr',
        name: 'appointment.online-qr',
        meta: {
          icon: '',
          title: '线上预约二维码',
        },
        component: () => import('@/view/appointment/online-qr'),
      },
    ],
  },
  {
    path: '/vip',
    name: 'vip',
    meta: {
      icon: 'ios-contact',
      title: '会员管理',
      showAlways: true,
    },
    component: Main,
    children: [
      {
        path: 'index',
        name: 'vip.index',
        meta: {
          icon: '',
          title: '会员管理',
        },
        component: () => import('@/view/vip/index'),
      },
    ],
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      icon: 'md-aperture',
      title: '核心设置',
      showAlways: true,
    },
    component: Main,
    children: [
      {
        path: 'system',
        name: 'setting.system',
        meta: {
          icon: '',
          title: '系统设置',
        },
        component: () => import('@/view/setting/system/index'),
      },
      {
        path: 'commission',
        name: 'setting.commission',
        meta: {
          icon: '',
          title: '提成设置',
        },
        component: () => import('@/view/setting/commission/index'),
      },
      {
        path: 'item',
        name: 'setting.item',
        meta: {
          icon: '',
          title: '品项设置',
        },
        component: () => import('@/view/setting/item/index'),
      },
      {
        path: 'log',
        name: 'setting.log',
        meta: {
          icon: '',
          title: '操作记录',
        },
        component: () => import('@/view/setting/log/index'),
      },
    ],
  },
]
