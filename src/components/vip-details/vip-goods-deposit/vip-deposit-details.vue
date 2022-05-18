<template>
  <div class="VipDepositDetails">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            enter-button
            placeholder="搜索商品名称"
            search
            style="width: 300px"
          />
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1">
        <!-- slot对应data里面的slot-->
        <template slot="action"></template>
      </Table>
    </div>

    <div class="page">
      <Page show-elevator show-sizer size="small" :total="40" transfer />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VipDepositDetails',
    data: function () {
      return {
        columns1: [
          {
            title: '寄存时间',
            key: 'name',
            width: '200px',
          },
          {
            title: '寄存类型',
            key: 'username',
          },
          {
            title: '寄存商品名称',
            key: 'money',
          },
          {
            title: '寄存数量',
            key: 'count',
          },
          {
            title: '寄取后剩余数量',
            key: 'count',
          },
          {
            title: '操作人',
            key: 'count',
          },
        ],
        data1: [
          {
            name: 'John Brown',
            username: 18,
            money: 'New York No. 1 Lake Park',
            count: '2016-10-03',
          },
        ],
      }
    },
    created() {},
  }
</script>

<style lang="less" scoped>
  .VipDepositDetails {
    .search {
      display: flex;
      padding: 2px 10px;
      .left {
        flex: 1;
        display: flex;
        .box {
          margin-right: 20px;
          .text {
            font-weight: bold;
            margin: 0px 5px;
          }
        }
      }
      .right {
        .bt {
          border: 1px solid #c1c1c1;
          color: #000;
          display: inline-block;
          margin-bottom: 0;
          font-weight: 400;
          text-align: center;
          vertical-align: middle;
          touch-action: manipulation;
          cursor: pointer;
          white-space: nowrap;
          line-height: 1.5;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
          padding: 5px 15px 6px;
          font-size: 12px;
          border-radius: 4px;
          transition: color 0.2s linear, background-color 0.2s linear,
            border 0.2s linear, box-shadow 0.2s linear;
        }
      }
    }
    .list {
      margin-top: 20px;
    }
    .page {
      display: flex;
      justify-content: center;
    }
    .bt {
      color: blue;
      margin-right: 4px;
      cursor: pointer;
    }
    .add-bt {
      color: white;
      margin-right: 20px;
      cursor: pointer;
      background: #f19ec2;
      padding: 6px 14px;
      border-radius: 4px;
    }
  }
</style>
