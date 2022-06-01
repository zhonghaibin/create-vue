<template>
  <div class="VipList1">
    <VipSearch2 />
    <div class="list-top">
      <div>
        <span class="black">筛选结果</span>
        <span class="grey">共找到0个会员</span>
      </div>
      <div class="bt-left">
        <Button class="bt" type="primary">批量群发</Button>
        <Button class="bt" type="primary">批量送积分</Button>
        <Button class="bt" type="primary">企微群发</Button>
      </div>
      <div class="bt-right">
        <Button class="bt" type="primary">导出</Button>
      </div>
    </div>

    <div class="list">
      <Table :columns="columns1" :data="data1" />
    </div>
  </div>
</template>

<script>
  import VipSearch2 from '@/components/vip/vip-list1/vip-search-2'
  export default {
    name: 'VipList1',
    components: {
      VipSearch2,
    },
    data: function () {
      return {
        columns1: [
          {
            title: '会员信息',
            key: 'name',
          },
          {
            title: '会员账户',
            key: 'username',
          },
          {
            title: '总消费',
            key: 'money',
          },
          {
            title: '到店次数',
            key: 'count',
          },
          {
            title: '上次消费',
            key: 'money1',
          },
          {
            title: '来源',
            key: 'source',
          },
          {
            title: '生日',
            key: 'birthday',
          },
          {
            title: '顾问',
            key: 'counselor',
          },
          {
            title: '锁定状态',
            key: 'status',
          },
        ],
        data1: [
          {
            name: 'John Brown',
            username: 18,
            money: 'New York No. 1 Lake Park',
            count: '2016-10-03',
            money1: '2016-10-03',
            source: '2016-10-03',
            birthday: '2016-10-03',
            counselor: '2016-10-03',
            status: '2016-10-03',
          },
          {
            name: 'John Brown',
            username: 18,
            money: 'New York No. 1 Lake Park',
            count: '2016-10-03',
            money1: '2016-10-03',
            source: '2016-10-03',
            birthday: '2016-10-03',
            counselor: '2016-10-03',
            status: '2016-10-03',
          },
        ],
      }
    },
  }
</script>

<style lang="less" scoped>
  .VipList1 {
    .list-top {
      margin-top: 14px;
      margin-bottom: 6px;
      height: 36px;
      line-height: 36px;
      font-size: 12px;
      display: flex;
      .black {
        color: black;
        font-weight: bold;
      }
      .grey {
        color: #d2cfcf;
        font-weight: bold;
        margin-left: 20px;
      }
      .bt-left {
        flex: 1;
        .bt {
          margin-left: 16px;
        }
      }
      .bt-right {
        .bt {
          margin-left: auto;
        }
      }
    }
    .list {
      /deep/.ivu-table td {
        //text-align: center;
      }
    }
  }
</style>
