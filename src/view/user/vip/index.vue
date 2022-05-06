<template>
  <div class="box">
    <Row>
      <Col class="column" span="12">会员管理</Col>
    </Row>
    <Row>
      <Col>
        <Tabs type="card">
          <TabPane v-for="tab in tab_list" :key="tab.id" :label="tab.name">
            <div v-if="tab.id === 1">
              <VipSearch />
              <VipSearch1 />
              <VipList />
            </div>
            <div v-else-if="tab.id === 2">
              <VipSearch2 />
              <VipList1 />
            </div>
            <div v-else-if="tab.id === 3">
              <Tabs>
                <TabPane
                  v-for="service_tab in service_tab_list"
                  :key="service_tab.id"
                  :label="service_tab.name"
                  :name="service_tab.name"
                >
                  <div v-if="service_tab.id === 1">
                    <VipList2 />
                  </div>
                  <div v-if="service_tab.id === 2">
                    <VipList2 />
                  </div>
                  <div v-if="service_tab.id === 3">
                    <VipList3 />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>
<script>
  import VipSearch from '@/components/vip-search'
  import VipSearch1 from '@/components/vip-search-1'
  import VipSearch2 from '@/components/vip-search-2'
  import VipList from '@/components/vip-list'
  import VipList1 from '@/components/vip-list-1'
  import VipList2 from '@/components/vip-list-2'
  import VipList3 from '@/components/vip-list-3'
  export default {
    name: 'Index',
    components: {
      VipSearch,
      VipSearch1,
      VipSearch2,
      VipList,
      VipList1,
      VipList2,
      VipList3,
    },
    data: function () {
      return {
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
        service_tab_list: [
          { name: '待提醒服务列表', id: 1 },
          { name: '已到期服务列表', id: 2 },
          { name: '服务周期设置', id: 3 },
        ],
      }
    },
  }
</script>
<style lang="less" scoped>
  .box {
    padding: 4px 16px;
  }
  .column {
    font-weight: bold;
    font-size: 18px;
    padding: 10px 2px;
  }
</style>
