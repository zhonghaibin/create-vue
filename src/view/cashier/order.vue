<template>
  <div class="box">
    <Row>
      <Col class="column" span="12">订单管理</Col>
    </Row>
    <Row>
      <Col>
        <div ref="tab" class="tab">
          <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
            <TabPane
              v-for="item in tab_list"
              :key="item.id"
              :label="item.name"
              :name="item.name"
            >
              <BusinessDetailsList
                v-if="item.name === '营业明细' && tab_index === '营业明细'"
              />
              <BalanceOrderList
                v-if="item.name === '欠款订单' && tab_index === '欠款订单'"
              />
              <PendingOrderList
                v-if="item.name === '挂单待结' && tab_index === '挂单待结'"
              />
            </TabPane>
          </Tabs>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import BalanceOrderList from '@/components/cashier/balance-order-list'
  import PendingOrderList from '@/components/cashier/pending-order-list'
  import BusinessDetailsList from '@/components/business-track/business-details-list'
  export default {
    name: 'Index',
    components: {
      BalanceOrderList,
      PendingOrderList,
      BusinessDetailsList,
    },
    data: function () {
      return {
        tab_index: '营业明细',
        tab_list: [
          { name: '营业明细', id: 1 },
          { name: '欠款订单', id: 2 },
          { name: '挂单待结', id: 3 },
        ],
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.tabHeight()
      })
    },
    methods: {
      tabHeight() {
        let orgTreeHeight = window.innerHeight
        let divHeight = orgTreeHeight - 230
        this.$refs.tab.style.minHeight = divHeight + 'px'
        console.log(orgTreeHeight, divHeight)
      },
      handleTabClick(index) {
        this.tabHeight()
        this.tab_index = index
      },
    },
  }
</script>
<style lang="less" scoped>
  .tab {
    margin-top: 20px;
    background: white;
    padding-bottom: 10px;
    /deep/ .ivu-tabs-ink-bar {
      background: #cc749a;
    }
  }
</style>
