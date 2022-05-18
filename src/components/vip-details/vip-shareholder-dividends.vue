<template>
  <div class="VipShareholderDividends">
    <Tabs size="small" @on-click="handleTabClick">
      <TabPane v-for="item in lab_list" :key="item.id" :label="item.name">
        <VipDividendsInfo v-if="item.id === 1 && tab_index === 1" />
        <VipShareholderDetails v-if="item.id === 2 && tab_index === 2" />
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import VipDividendsInfo from '@/components/vip-details/vip-shareholder-dividends/vip-dividends-info'
  import VipShareholderDetails from '@/components/vip-details/vip-shareholder-dividends/vip-shareholder-details'
  export default {
    name: 'VipShareholderDividends',
    components: {
      VipDividendsInfo,
      VipShareholderDetails,
    },
    data: function () {
      return {
        tab_index: 1,
        lab_list: [
          {
            id: 1,
            name: '股东信息',
          },
          {
            id: 2,
            name: '分红记录',
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
  .VipShareholderDividends {
  }
</style>
