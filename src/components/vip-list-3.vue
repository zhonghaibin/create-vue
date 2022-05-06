<template>
  <div class="VipList3">
    <div class="list-top">
      <div class="bt-left">
        <div class="cell">
          <Input
            enter-button
            placeholder="输入姓名/手机号/卡号"
            search
            style="width: 300px"
          />
        </div>
        <div class="cell">
          <span>服务项目</span>
          <Select style="width: 120px">
            <Option v-for="item in status_list" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
          <Input placeholder="输入项目名称筛选" style="width: 200px" />
        </div>
      </div>
      <div class="bt-right">
        <Button class="bt" type="primary">添加服务提醒</Button>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot="action">
          <span class="bt">修改周期</span>
          <span class="bt">删除</span>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VipList3',
    data: function () {
      return {
        status_list: [
          {
            name: '全部',
            id: '0',
          },
          {
            name: '已提醒',
            id: '1',
          },
          {
            name: '未提醒',
            id: '2',
          },
        ],
        columns1: [
          {
            title: '服务项目',
            key: 'username',
          },
          {
            title: '服务周期',
            key: 'money',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        data1: [
          {
            username: 18,
            money: 'New York No. 1 Lake Park',
          },
          {
            username: 18,
            money: 'New York No. 1 Lake Park',
          },
        ],
      }
    },
  }
</script>

<style lang="less" scoped>
  .VipList3 {
    .list-top {
      margin-top: 14px;
      margin-bottom: 6px;
      height: 36px;
      line-height: 36px;
      font-size: 12px;
      display: flex;
      .bt-left {
        display: flex;
        flex: 1;
        .cell {
          padding: 2px;
          margin-right: 16px;
          span {
            padding-right: 4px;
          }
        }
      }
      .bt-right {
        .bt {
          margin-left: auto;
        }
      }
    }
    .list {
      /deep/.ivu-table th {
        text-align: center;
      }
      /deep/.ivu-table td {
        text-align: center;
      }
      .bt {
        color: blue;
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
</style>
