<template>
  <div class="box">
    <Row>
      <Col class="column" span="12">会员管理</Col>
    </Row>
    <Row>
      <Col>
        <Tabs type="card" @on-click="handleTabClick">
          <TabPane v-for="tab in tab_list" :key="tab.id" :label="tab.name">
            <VipList v-if="tab.id === 1 && tab_index === 1" />
            <VipList1 v-if="tab.id === 2 && tab_index === 2" />
            <VipList2 v-if="tab.id === 3 && tab_index === 3" />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>
<script>
  import VipList from '@/components/vip-list'
  import VipList1 from '@/components/vip-list-1'
  import VipList2 from '@/components/vip-list-2'
  export default {
    name: 'Index',
    components: {
      VipList,
      VipList1,
      VipList2,
    },
    data: function () {
      return {
        tab_index: 1,
        tab_list: [
          { name: '会员列表', id: 1 },
          { name: '精准筛选', id: 2 },
          { name: '服务提醒', id: 3 },
        ],

        data_type_list: [
          { name: '基本信息', key: '1' },
          { name: '高级信息', key: '2' },
          { name: '资产信息', key: '3' },
          { name: '消费能力', key: '4' },
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
  .box {
    background: white;
    height: 100%;
  }
</style>
