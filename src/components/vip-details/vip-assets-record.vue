<template>
  <div class="VipAssetsRecord">
    <Tabs size="small" @on-click="handleTabClick">
      <TabPane v-for="item in lab_list" :key="item.id" :label="item.name">
        <VipConsumptionRecord v-if="item.id === 1 && tab_index === 1" />
        <VipGiftRecord v-if="item.id === 2 && tab_index === 2" />
        <VipIntegralRecord v-if="item.id === 3 && tab_index === 3" />
        <VipChangeRecord v-if="item.id === 4 && tab_index === 4" />
        <VipReachStoreRecord v-if="item.id === 5 && tab_index === 5" />
        <VipOrderRecord v-if="item.id === 6 && tab_index === 6" />
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import VipConsumptionRecord from '@/components/vip-details/vip-assets-record/vip-consumption-record'
  import VipGiftRecord from '@/components/vip-details/vip-assets-record/vip-gift-record'
  import VipIntegralRecord from '@/components/vip-details/vip-assets-record/vip-integral-record'
  import VipChangeRecord from '@/components/vip-details/vip-assets-record/vip-change-record'
  import VipReachStoreRecord from '@/components/vip-details/vip-assets-record/vip-reach-store-record'
  import VipOrderRecord from '@/components/vip-details/vip-assets-record/vip-order-record'
  export default {
    name: 'VipAssetsRecord',
    components: {
      VipConsumptionRecord,
      VipGiftRecord,
      VipIntegralRecord,
      VipChangeRecord,
      VipReachStoreRecord,
      VipOrderRecord,
    },
    data: function () {
      return {
        tab_index: 1,
        lab_list: [
          {
            id: 1,
            name: '消费记录',
          },
          {
            id: 2,
            name: '获赠记录',
          },
          {
            id: 3,
            name: '积分记录',
          },
          {
            id: 4,
            name: '修改记录',
          },
          {
            id: 5,
            name: '到店记录',
          },
          {
            id: 6,
            name: '商城订单',
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
  .VipAppointment {
  }
</style>
