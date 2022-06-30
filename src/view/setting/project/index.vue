<template>
  <div class="box">
    <div class="column">品项设置</div>
    <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <ProjectList v-if="item.name === '项目' && tab_index === '项目'" />
        <PackageList
          v-if="item.name === '套餐次卡' && tab_index === '套餐次卡'"
        />
        <GoodsList v-if="item.name === '商品' && tab_index === '商品'" />
        <Type v-if="item.name === '类别设置' && tab_index === '类别设置'" />
        <Supplier
          v-if="
            item.name === '品牌/供应商/商品单位设置' &&
            tab_index === '品牌/供应商/商品单位设置'
          "
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import ProjectList from '@/components/setting/project/project-list'
  import PackageList from '@/components/setting/project/package-list'
  import Supplier from '@/components/setting/project/supplier'
  import Type from '@/components/setting/project/type'
  import GoodsList from '@/components/setting/project/goods-list'
  export default {
    name: 'Index',
    components: { ProjectList, Supplier, Type, PackageList, GoodsList },
    data: function () {
      return {
        tab_index: '项目',
        tab_list: [
          { name: '项目', id: 1 },
          { name: '套餐次卡', id: 2 },
          { name: '商品', id: 3 },
          { name: '类别设置', id: 4 },
          { name: '品牌/供应商/商品单位设置', id: 5 },
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
