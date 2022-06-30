<template>
  <div class="VipServicePeriod">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            enter-button
            placeholder="输入姓名/手机号/卡号"
            search
            style="width: 250px"
          />
        </div>
        <div class="box">
          <span>服务项目</span>
          <Select style="width: 120px">
            <Option v-for="item in status_list" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
          <Input placeholder="输入项目名称筛选" style="width: 200px" />
        </div>
      </div>
      <div class="right">
        <div class="add-bt" @click="showModal('添加服务提醒', 'ServiceRemind')">
          添加服务提醒
        </div>
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
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :title="modal.title"
      :width="600"
    >
      <ServiceRemind v-if="modal.type === 'ServiceRemind'" />
    </Modal>
  </div>
</template>

<script>
  import ServiceRemind from '@/components/business-track/services-remind/service-remind'
  export default {
    name: 'VipServicePeriod',
    components: {
      ServiceRemind,
    },
    data: function () {
      return {
        modal: {
          show: false,
          title: '',
          type: false,
        },
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
            title: '发短信天数',
            key: 'money',
          },
          {
            title: '短信内容',
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
    methods: {
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipServicePeriod {
    .search {
      display: flex;
      padding: 10px;
      background: white;
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        .box {
          margin-right: 20px;
          .text {
            font-weight: bold;
            margin: 0 5px;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
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
      /deep/.ivu-table th {
        text-align: center;
      }
      /deep/.ivu-table td {
        text-align: center;
      }
      .bt {
        color: #1298e6;
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .add-bt {
      color: white;
      margin-right: 20px;
      cursor: pointer;
      background: #f19ec2;
      padding: 6px 14px;
      border-radius: 4px;
      margin-bottom: 1px;
    }
  }
</style>
