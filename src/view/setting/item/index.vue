<template>
  <div class="box">
    <Row>
      <Col class="column" span="12">品项设置</Col>
    </Row>
    <Row>
      <Col>
        <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
          <TabPane
            v-for="item in tab_list"
            :key="item.id"
            :label="item.name"
            :name="item.name"
          >
            <ServiceList v-if="item.name === '项目' && tab_index === '项目'" />
            <CardList
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
      </Col>
    </Row>
  </div>
</template>
<script>
  import ServiceList from '@/components/setting/item/service-list'
  import CardList from '@/components/setting/item/card-list'
  import Supplier from '@/components/setting/item/supplier'
  import Type from '@/components/setting/item/type'
  import GoodsList from '@/components/setting/item/goods-list'
  export default {
    name: 'Index',
    components: { ServiceList, Supplier, Type, CardList, GoodsList },
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
