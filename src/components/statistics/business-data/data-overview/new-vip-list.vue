<template>
  <div class="box">
    <div class="header">
      <div class="left">
        <div class="h-cel title">新客到店分析</div>
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
    name: 'NewVipList',
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
            title: '新客人数',
            key: 'name',
          },
          {
            title: '新赠新客持卡',
            key: 'name',
          },
          {
            title: '新客转卡率',
            key: 'name',
          },
          {
            title: '开卡客单价',
            key: 'name',
          },
          {
            title: '新客业绩占比',
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
