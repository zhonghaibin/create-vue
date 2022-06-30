<template>
  <div class="box">
    <div class="column">库存管理</div>
    <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <TotalInventoryList
          v-if="item.name === '总库存查询' && tab_index === '总库存查询'"
        />
        <OtherInventoryList
          v-if="
            item.name === '期末期初库存查询' && tab_index === '期末期初库存查询'
          "
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import TotalInventoryList from '@/components/inventory/inventory/total-inventory-list'
  import OtherInventoryList from '@/components/inventory/inventory/other-inventory-list'

  export default {
    name: 'Inventory',
    components: { TotalInventoryList, OtherInventoryList },
    data: function () {
      return {
        tab_index: '总库存查询',
        tab_list: [
          { name: '总库存查询', id: 1 },
          { name: '期末期初库存查询', id: 2 },
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
