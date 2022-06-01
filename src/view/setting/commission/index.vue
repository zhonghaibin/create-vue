<template>
  <div class="box">
    <Row>
      <Col class="column" span="12">提成设置</Col>
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
            <ServiceList
              v-if="item.name === '项目提成' && tab_index === '项目提成'"
            />
            <ServiceList
              v-if="
                item.name === '套餐次卡提成' && tab_index === '套餐次卡提成'
              "
            />
            <ServiceList
              v-if="item.name === '商品提成' && tab_index === '商品提成'"
            />
            <LadderList
              v-if="item.name === '阶梯提成' && tab_index === '阶梯提成'"
            />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>
<script>
  import ServiceList from '@/components/appointment/service-list'
  import LadderList from '@/components/appointment/ladder-list'
  export default {
    name: 'Index',
    components: { ServiceList, LadderList },
    data: function () {
      return {
        tab_index: '项目提成',
        tab_list: [
          { name: '项目提成', id: 1 },
          { name: '套餐次卡提成', id: 2 },
          { name: '商品提成', id: 3 },
          { name: '储值卡提成', id: 4 },
          { name: '优惠券提成', id: 5 },
          { name: '阶梯提成', id: 6 },
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
