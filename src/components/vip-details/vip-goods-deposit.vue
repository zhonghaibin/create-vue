<template>
  <div class="VipGoodsDeposit">
    <Tabs size="small" @on-click="handleTabClick">
      <TabPane v-for="item in lab_list" :key="item.id" :label="item.name">
        <VipDepositData v-if="item.id === 1 && tab_index === 1" />
        <VipDepositDetails v-if="item.id === 2 && tab_index === 2" />
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import VipDepositData from '@/components/vip-details/vip-goods-deposit/vip-deposit-data'
  import VipDepositDetails from '@/components/vip-details/vip-goods-deposit/vip-deposit-details'
  export default {
    name: 'VipGoodsDeposit',
    components: {
      VipDepositData,
      VipDepositDetails,
    },
    data: function () {
      return {
        tab_index: 1,
        lab_list: [
          {
            id: 1,
            name: '寄存数据',
          },
          {
            id: 2,
            name: '寄存记录',
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
  .VipGoodsDeposit {
  }
</style>
