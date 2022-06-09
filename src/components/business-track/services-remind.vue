<template>
  <div class="VipList2">
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <VipServiceList
          v-if="
            item.name === '待提醒服务列表' && tab_index === '待提醒服务列表'
          "
        />
        <VipServiceList
          v-if="
            item.name === '已到期服务列表' && tab_index === '已到期服务列表'
          "
        />
        <VipServicePeriod
          v-if="item.name === '服务周期设置' && tab_index === '服务周期设置'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import VipServicePeriod from '@/components/business-track/services-remind/vip-service-period'
  import VipServiceList from '@/components/business-track/services-remind/vip-service-list'

  export default {
    name: 'VipList2',
    components: {
      VipServiceList,
      VipServicePeriod,
    },
    data: function () {
      return {
        tab_index: '待提醒服务列表',
        tab_list: [
          { name: '待提醒服务列表', id: 1 },
          { name: '已到期服务列表', id: 2 },
          { name: '服务周期设置', id: 3 },
        ],
      }
    },
    methods: {
      handleTabClick(index) {
        this.tab_index = index
      },
    },
  }
</script>

<style lang="less" scoped></style>
