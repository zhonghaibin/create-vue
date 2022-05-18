<template>
  <div class="layout" style="height: 100%">
    <Layout style="height: 100%">
      <Sider
        v-model="collapsed"
        class="left-sider"
        :collapsed-width="64"
        collapsible
        hide-trigger
        :style="{ overflow: 'hidden' }"
        :width="220"
      >
        <side-menu
          ref="sideMenu"
          accordion
          :active-name="$route.name"
          :collapsed="collapsed"
          :menu-list="menuList"
          theme="light"
          @on-select="turnToPage"
        >
          <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
          <div class="logo-con">
            <div v-show="!collapsed" class="logo-info">
              <div class="logo">
                <img key="max-logo" :src="maxLogo" />
              </div>
              <div class="name">蜜蜜妈妈 惠城总店</div>
            </div>
            <div v-show="collapsed">
              <img key="min-logo" :src="minLogo" />
            </div>
          </div>
        </side-menu>
      </Sider>
      <Layout>
        <Header class="header-con">
          <header-bar
            :collapsed="collapsed"
            @on-coll-change="handleCollapsedChange"
          >
            <user
              :message-unread-count="unreadCount"
              :user-avator="userAvator"
            />
            <buttom />
          </header-bar>
        </Header>
        <Content class="main-content-con">
          <Layout class="main-layout-con">
            <div class="tag-nav-wrapper">
              <tags-nav
                :list="tagNavList"
                :value="$route"
                @input="handleClick"
                @on-close="handleCloseTag"
              />
            </div>
            <Content class="content-wrapper">
              <keep-alive>
                <router-view />
              </keep-alive>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import SideMenu from './components/side-menu'
  import TagsNav from '@/components/main/components/tags-nav'
  import headerBar from '@/components/main/components/header-bar'
  import User from '@/components/main/components/user'
  import Buttom from '@/components/main/components/button'
  import { mapMutations, mapGetters } from 'vuex'
  import { getNewTagList, routeEqual } from '@/libs/util'
  import routers from '@/router/routers'
  import minLogo from '@/assets/minLogo.png'
  import maxLogo from '@/assets/maxLogo.png'
  export default {
    name: 'Main',
    components: {
      TagsNav,
      SideMenu,
      headerBar,
      User,
      Buttom,
    },
    data() {
      return {
        minLogo,
        maxLogo,
        collapsed: false,
      }
    },
    computed: {
      ...mapGetters(['errorCount']),
      tagNavList() {
        return this.$store.state.app.tagNavList
      },
      userAvator() {
        return this.$store.state.user.avatar
      },
      menuList() {
        console.log('menuList', this.$store.getters.menuList)
        return this.$store.getters.menuList
      },
      unreadCount() {
        return this.$store.state.user.unreadCount
      },
    },
    methods: {
      ...mapMutations([
        'setBreadCrumb',
        'setTagNavList',
        'addTag',
        'setLocal',
        'setHomeRoute',
        'closeTag',
      ]),

      turnToPage(route) {
        let { name, params, query } = {}
        if (typeof route === 'string') name = route
        else {
          name = route.name
          params = route.params
          query = route.query
        }
        if (name.indexOf('isTurnByHref_') > -1) {
          window.open(name.split('_')[1])
          return
        }
        this.$router.push({
          name,
          params,
          query,
        })
      },
      handleCollapsedChange(state) {
        this.collapsed = state
      },
      handleCloseTag(res, type, route) {
        if (type !== 'others') {
          if (type === 'all') {
            this.turnToPage(this.$config.homeName)
          } else {
            if (routeEqual(this.$route, route)) {
              this.closeTag(route)
            }
          }
        }
        this.setTagNavList(res)
      },
      handleClick(item) {
        this.turnToPage(item)
      },
    },
    watch: {
      $route(newRoute) {
        const { name, query, params, meta } = newRoute
        this.addTag({
          route: { name, query, params, meta },
          type: 'push',
        })
        this.setBreadCrumb(newRoute)
        this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
        this.$refs.sideMenu.updateOpenName(newRoute.name)
      },
    },
    mounted() {
      /**
       * @description 初始化设置面包屑导航和标签导航
       */
      this.setTagNavList()
      this.setHomeRoute(routers)
      const { name, params, query, meta } = this.$route
      this.addTag({
        route: { name, params, query, meta },
      })
      this.setBreadCrumb(this.$route)
      // 如果当前打开页面不在标签栏中，跳到homeName页
      if (!this.tagNavList.find((item) => item.name === this.$route.name)) {
        this.$router.push({
          name: this.$config.homeName,
        })
      }
    },
  }
</script>

<style lang="less">
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>
<style lang="less" scoped>
  .layout {
    .logo-con {
      padding: 5px;

      .logo-info {
        display: flex;
        align-items: center;
        .logo {
          img {
            height: 50px;
            width: auto;
            display: block;
            margin: 0 auto;
          }
        }
        .name {
          flex: 1;
          padding-left: 10px;
          font-size: 14px;
          color: white;
        }
      }
      img {
        height: 40px;
        width: auto;
        display: block;
        margin: 0 auto;
      }
    }
    .header-con {
      width: 100%;
    }
    .main-layout-con {
      height: 100%;
    }
    .main-content-con {
      height: ~'calc(100% - 60px)';
      overflow: hidden;
    }
    .tag-nav-wrapper {
      padding: 0;
      height: 40px;
      background: #f0f0f0;
    }
    .content-wrapper {
      padding: 18px;
      height: ~'calc(100% - 80px)';
      overflow: auto;
    }

    .left-sider {
      .ivu-layout-sider-children {
        overflow-y: scroll;
        margin-right: -18px;
      }
    }

    .ivu-layout-sider {
      transition: all 0.2s ease-in-out;
      position: relative;
      background: #f19ec2;
      min-width: 0;
    }
    .ivu-menu-item > i {
      margin-right: 12px !important;
    }
    .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
      margin-right: 8px !important;
    }
    .collased-menu-dropdown {
      width: 100%;
      margin: 0;
      line-height: normal;
      padding: 7px 0 6px 16px;
      clear: both;
      font-size: 12px !important;
      white-space: nowrap;
      list-style: none;
      cursor: pointer;
      transition: background 0.2s ease-in-out;
      &:hover {
        background: rgba(100, 100, 100, 0.1);
      }
      & * {
        color: #515a6e;
      }
      .ivu-menu-item > i {
        margin-right: 12px !important;
      }
      .ivu-menu-submenu > .ivu-menu > .ivu-menu-item > i {
        margin-right: 8px !important;
      }
    }

    .ivu-select-dropdown.ivu-dropdown-transfer {
      max-height: 400px;
    }

    /deep/.ivu-menu-light {
      background: #f19ec2;
    }
    .icon {
      font-size: 20px;
    }
    /deep/.ivu-menu-submenu-title {
      color: white;
    }
    /deep/.ivu-menu-submenu-title:hover {
      background: white;
      color: #cc749a;
    }
    /deep/.ivu-menu-item {
      color: white;
    }
    /deep/.ivu-menu-item:hover {
      background: white;
      color: #cc749a;
    }
    /deep/.ivu-menu-light.ivu-menu-vertical
      .ivu-menu-item-active:not(.ivu-menu-submenu) {
      color: #cc749a;
    }
    /deep/.ivu-menu-light.ivu-menu-vertical
      .ivu-menu-item-active:not(.ivu-menu-submenu):after {
      background: #cc749a;
    }
  }

  .box {
    /deep/ .column {
      font-weight: bold;
      font-size: 14px;
      padding: 10px 2px;
    }
    padding: 4px 16px;
  }

  /deep/.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar {
    color: #f19ec2;
  }
  /deep/.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    color: #f19ec2;
  }
  /deep/ .ivu-tabs-nav .ivu-tabs-tab:hover {
    color: #f19ec2;
  }
  /deep/.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: #f19ec2;
    border-bottom: none;
  }
  /deep/.ivu-tabs-bar .ivu-tabs-tab:hover {
    border-color: #f19ec2;
  }
  /deep/.ivu-input-search {
    background: #f19ec2 !important;
    border-color: #f19ec2 !important;
  }

  /deep/.ivu-btn-primary {
    background: #f19ec2;
    border-color: #f19ec2;
  }
  /deep/.ivu-table-wrapper {
    border: none;
  }
  /deep/.ivu-table-header {
    color: #000000;
  }
  /deep/.ivu-table th {
    background-color: #ffe1ef;
    //text-align: center;
  }
  /deep/.ivu-layout-header {
    background: #f19ec2;
    padding: 0;
    height: 60px;
    line-height: 60px;
  }
</style>
