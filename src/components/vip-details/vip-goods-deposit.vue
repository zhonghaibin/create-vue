<template>
  <div class="VipGoodsDeposit">
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in lab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <VipDepositData
          v-if="item.name === '寄存数据' && tab_index === '寄存数据'"
        />
        <VipDepositDetails
          v-if="item.name === '寄存记录' && tab_index === '寄存记录'"
        />
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
        tab_index: '寄存数据',
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
        this.tab_index = index
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipGoodsDeposit {
  }
</style>
