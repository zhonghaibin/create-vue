<template>
  <div class="box">
    <div class="header">
      <div class="left">
        <div class="h-cel title">爆品销售数量统计</div>
      </div>
      <div class="right">
        <div class="explain">?字段说明</div>
        <div class="add-bt">导出</div>
      </div>
    </div>
    <div class="content">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action"></template>
      </Table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'HotSalesStatisticsList',
    components: {},
    data: function () {
      return {
        storeList: [],
        store: '',
        list: [],
        columns: [
          {
            title: '门店',
            key: 'name',
          },
          {
            title: '商品名',
            key: 'name',
          },
          {
            title: '销量',
            key: 'name',
          },
        ],
      }
    },
    methods: {},
  }
</script>
<style lang="less" scoped>
  .box {
    border: 1px solid #eeeeee;
    border-radius: 6px;
    height: 300px;
    background: white;
    .header {
      display: flex;
      height: 40px;
      .left {
        display: flex;
        align-items: center;
        padding: 0 5px;
        flex: 1;
        .title {
          font-weight: bold;
        }
        .h-cel {
          padding: 0 4px;
          float: left;
        }
      }
      .right {
        display: flex;
        align-items: center;
        .bt {
          padding: 5px;
          color: #1298e6;
          cursor: pointer;
        }
      }
    }
    .content {
      clear: both;
    }
    .explain {
      border: 1px solid #e1e1e1;
      padding: 2px 4px;
      border-radius: 4px;
      margin-right: 10px;
      cursor: pointer;
    }
    .add-bt {
      color: white;
      margin-right: 20px;
      cursor: pointer;
      padding: 2px 14px;
      background: #f19ec2;
      margin-bottom: 1px;
    }
  }
</style>
