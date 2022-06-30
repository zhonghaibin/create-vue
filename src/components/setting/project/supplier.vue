<template>
  <div class="Supplier">
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <BrandList
          v-if="item.name === '品牌管理' && tab_index === '品牌管理'"
        />
        <SupplierList
          v-if="item.name === '供应商管理' && tab_index === '供应商管理'"
        />
        <UnitList
          v-if="item.name === '商品单位设置' && tab_index === '商品单位设置'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import BrandList from '@/components/setting/project/supplier/brand-list'
  import SupplierList from '@/components/setting/project/supplier/supplier-list'
  import UnitList from '@/components/setting/project/supplier/unit-list'
  export default {
    name: 'Supplier',
    components: { BrandList, SupplierList, UnitList },
    data: function () {
      return {
        tab_index: '品牌管理',
        tab_list: [
          { name: '品牌管理', id: 1 },
          { name: '供应商管理', id: 2 },
          { name: '商品单位设置', id: 3 },
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
