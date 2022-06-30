<template>
  <div class="box">
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <PackageCard
          v-if="item.name === '套餐次卡' && tab_index === '套餐次卡'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import PackageCard from '@/components/cashier/cashier/buy/package-card'
  export default {
    name: 'Buy',
    components: { PackageCard },
    data: function () {
      return {
        tab_index: '套餐次卡',
        tab_list: [
          { name: '套餐次卡', id: 1 },
          { name: '储值卡', id: 2 },
          { name: '优惠券', id: 3 },
          { name: '项目/商品', id: 4 },
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
