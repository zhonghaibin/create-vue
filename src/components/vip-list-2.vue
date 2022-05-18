<template>
  <div class="VipList2">
    <Tabs @on-click="handleTabClick">
      <TabPane v-for="item in tab_list" :key="item.id" :label="item.name">
        <VipServiceList v-if="item.id === 1 && tab_index === 1" />
        <VipServiceList v-if="item.id === 2 && tab_index === 2" />
        <VipServicePeriod v-if="item.id === 3 && tab_index === 3" />
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import VipServicePeriod from '@/components/vip-list2/vip-service-period'
  import VipServiceList from '@/components/vip-list2/vip-service-list'

  export default {
    name: 'VipList2',
    components: {
      VipServiceList,
      VipServicePeriod,
    },
    data: function () {
      return {
        tab_index: 1,
        tab_list: [
          { name: '待提醒服务列表', id: 1 },
          { name: '已到期服务列表', id: 2 },
          { name: '服务周期设置', id: 3 },
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

<style lang="less" scoped></style>
