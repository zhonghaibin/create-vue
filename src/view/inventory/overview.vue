<template>
  <div class="box">
    <div class="column">商品总览</div>
    <div class="header">
      <div class="top">
        待处理事项
        <span class="color">（共15条）</span>
      </div>
      <div class="bottom">
        <div class="bt">
          待确认收货
          <span class="color">（4）</span>
        </div>
        <div class="bt">
          调拨申请处理
          <span class="color">（4）</span>
        </div>
      </div>
    </div>
    <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <InventoryWarningList
          v-if="item.name === '预警库存' && tab_index === '预警库存'"
        />
        <ShelfLifeWarningList
          v-if="
            item.name === '商品保质期预警' && tab_index === '商品保质期预警'
          "
        />
        <LatestInventoryList
          v-if="item.name === '最新库存状态' && tab_index === '最新库存状态'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import InventoryWarningList from '@/components/inventory/overview/inventory-warning-list'
  import ShelfLifeWarningList from '@/components/inventory/overview/shelf-life-warning-list'
  import LatestInventoryList from '@/components/inventory/overview/latest-inventory-list'

  export default {
    name: 'Overview',
    components: {
      InventoryWarningList,
      ShelfLifeWarningList,
      LatestInventoryList,
    },
    data: function () {
      return {
        tab_index: '预警库存',
        tab_list: [
          { name: '预警库存', id: 1 },
          { name: '商品保质期预警', id: 2 },
          { name: '最新库存状态', id: 3 },
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
  .header {
    margin: 0 0 12px 0;
    padding: 8px 12px;
    background: white;
    border-radius: 8px;
    .color {
      color: #cf021c;
    }
    .top {
      padding: 0 0 12px 0;
      font-weight: bold;
      font-size: 14px;
    }
    .bottom {
      padding: 0 0 12px 0;
      display: flex;
      .bt {
        font-weight: bold;
        text-align: center;
        margin-right: 20px;
        cursor: pointer;
        border: 1px solid #d2d2d2;
        padding: 6px 8px;
        border-radius: 4px;
        margin-bottom: 1px;
        width: 160px;
      }
    }
  }
</style>
