<template>
  <div class="box">
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <TopVipList
          v-if="item.name === 'top20%会员' && tab_index === 'top20%会员'"
        />
        <VipLifeCycleList
          v-if="item.name === '会员生命周期' && tab_index === '会员生命周期'"
        />
        <OpenCardTopUpList
          v-if="item.name === '开卡充值能力' && tab_index === '开卡充值能力'"
        />
        <NoHandleCard
          v-if="item.name === '到店未办卡' && tab_index === '到店未办卡'"
        />
        <NewVipList
          v-if="
            item.name === '新会员与新办卡' && tab_index === '新会员与新办卡'
          "
        />
        <VipActiveRate
          v-if="item.name === '会员活跃率' && tab_index === '会员活跃率'"
        />
        <NewGuestList v-if="item.name === '新客' && tab_index === '新客'" />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import TopVipList from '@/components/statistics/business-data/vip-analysis/top-vip-list'
  import VipLifeCycleList from '@/components/statistics/business-data/vip-analysis/vip-life-cycle-list'
  import OpenCardTopUpList from '@/components/statistics/business-data/vip-analysis/open-card-top-up-list'
  import NoHandleCard from '@/components/statistics/business-data/vip-analysis/no-handle-card'
  import NewVipList from '@/components/statistics/business-data/vip-analysis/new-vip-list'
  import VipActiveRate from '@/components/statistics/business-data/vip-analysis/vip-active-rate'
  import NewGuestList from '@/components/statistics/business-data/vip-analysis/new-guest-list'
  export default {
    name: 'VipAnalysis',
    components: {
      NewGuestList,
      VipActiveRate,
      NewVipList,
      NoHandleCard,
      OpenCardTopUpList,
      TopVipList,
      VipLifeCycleList,
    },
    data: function () {
      return {
        tab_index: 'top20%会员',
        tab_list: [
          { name: 'top20%会员', id: 1 },
          { name: '会员生命周期', id: 2 },
          { name: '开卡充值能力', id: 3 },
          { name: '到店未办卡', id: 4 },
          { name: '新会员与新办卡', id: 5 },
          { name: '会员活跃率', id: 6 },
          { name: '新客', id: 7 },
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
