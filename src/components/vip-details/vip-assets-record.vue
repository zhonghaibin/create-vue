<template>
  <div class="VipAssetsRecord">
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in lab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <VipConsumptionRecord
          v-if="item.name === '消费记录' && tab_index === '消费记录'"
        />
        <VipGiftRecord
          v-if="item.name === '获赠记录' && tab_index === '获赠记录'"
        />
        <VipIntegralRecord
          v-if="item.name === '积分记录' && tab_index === '积分记录'"
        />
        <VipChangeRecord
          v-if="item.name === '修改记录' && tab_index === '修改记录'"
        />
        <VipReachStoreRecord
          v-if="item.name === '到店记录' && tab_index === '到店记录'"
        />
        <VipOrderRecord
          v-if="item.name === '商城订单' && tab_index === '商城订单'"
        />
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
        tab_index: '消费记录',
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
        this.tab_index = index
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipAppointment {
  }
</style>
