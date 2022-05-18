<template>
  <div>
    <Tabs size="small" @on-click="handleTabClick">
      <TabPane v-for="item in lab_list" :key="item.id" :label="item.name">
        <VipCardList1 v-if="item.id === 1 && tab_index === 1" />
        <VipCardList2 v-if="item.id === 2 && tab_index === 2" />
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    name: 'VipAccount',
    components: {
      VipCardList1: () =>
        import('@/components/vip-details/vip-account/vip-card-list1'),
      VipCardList2: () =>
        import('@/components/vip-details/vip-account/vip-card-list2'),
    },
    data: function () {
      return {
        tab_index: 1,
        lab_list: [
          {
            id: 1,
            name: '套餐次卡',
          },
          {
            id: 2,
            name: '储值卡',
          },
        ],
      }
    },
    methods: {
      handleTabClick(index) {
        this.tab_index = index + 1
      },
    },
  }
</script>

<style lang="less" scoped>
  /deep/.ivu-tabs-nav {
    .ivu-tabs-tab-active {
      color: #cc749a;
    }
  }
</style>
