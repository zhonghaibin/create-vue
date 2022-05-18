import Main from '@/components/main'
export default [
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true,
    },
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home',
        },
        component: () => import('@/view/index'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    meta: {
      icon: 'ios-contact',
      title: '会员管理',
    },
    component: Main,
    children: [
      {
        path: 'vip/index',
        name: 'vip/index',
        meta: {
          icon: 'ios-contact',
          title: '会员管理',
        },
        component: () => import('@/view/user/vip/index'),
      },
      {
        path: 'vip/vip-details',
        name: 'vip/vip-details',
        meta: {
          icon: 'md-clipboard',
          title: '共享股东',
        },
        component: () => import('@/view/user/vip/vip-details'),
      },
    ],
  },
]
