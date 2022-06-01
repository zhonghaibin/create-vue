<template>
  <div class="Cashier">
    <Row>
      <Col>
        <Tabs
          v-model="tab_index"
          class="tab"
          size="small"
          @on-click="handleTabClick"
        >
          <TabPane
            v-for="item in tab_list"
            :key="item.id"
            :label="item.name"
            :name="item.name"
          >
            <CashierSet
              v-if="item.name === '收银设置' && tab_index === '收银设置'"
            />
            <Print
              v-if="
                item.name === '小票打印设置' && tab_index === '小票打印设置'
              "
            />
            <PrintSet
              v-if="item.name === '打印机设置' && tab_index === '打印机设置'"
            />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  </div>
</template>
<script>
  import CashierSet from '@/components/setting/system/cashier/cashier-set'
  import Print from '@/components/setting/system/cashier/print'
  import PrintSet from '@/components/setting/system/cashier/print-set'
  export default {
    name: 'Cashier',
    components: { CashierSet, Print, PrintSet },
    data: function () {
      return {
        tab_index: '收银设置',
        tab_list: [
          { name: '收银设置', id: 1 },
          { name: '小票打印设置', id: 2 },
          { name: '打印机设置', id: 3 },
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
<style lang="less" scoped>
  /deep/.tab {
    background: white;
    padding-bottom: 10px;
    /deep/ .ivu-tabs-ink-bar {
      background: #cc749a;
    }
  }
</style>
