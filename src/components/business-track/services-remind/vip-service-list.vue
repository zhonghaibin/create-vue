<template>
  <div class="VipServiceList">
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
          <span>提醒状态</span>
          <Select style="width: 100px" transfer>
            <Option v-for="item in status_list" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <span>服务项目</span>
          <Select style="width: 120px" transfer>
            <Option v-for="item in status_list" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
          <Input placeholder="输入项目名称筛选" style="width: 200px" />
        </div>
        <div class="box">
          <span>距离下次时间</span>
          <Select style="width: 120px" transfer>
            <Option v-for="item in time_list" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="right">
        <div class="add-bt">导出</div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1">
        <template slot-scope="{ row }" slot="name">
          <strong>{{ row.name }}</strong>
        </template>
        <template slot="action">
          <span class="bt" @click="showModal('服务提醒', 'Remind')">提醒</span>
        </template>
      </Table>
    </div>
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :title="modal.title"
      :width="800"
    >
      <RemindList v-if="modal.type === 'RemindList'" />
      <Remind v-if="modal.type === 'Remind'" />
    </Modal>
  </div>
</template>

<script>
  import RemindList from '@/components/business-track/services-remind/remind-list'
  import Remind from '@/components/business-track/services-remind/remind'
  export default {
    name: 'VipServiceList',
    components: {
      RemindList,
      Remind,
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
        time_list: [
          {
            name: '10天内',
            id: '1',
          },
          {
            name: '15天内',
            id: '2',
          },
          {
            name: '20天内',
            id: '3',
          },
          {
            name: '25天内',
            id: '4',
          },
          {
            name: '30天内',
            id: '5',
          },
        ],
        columns1: [
          {
            title: '会员信息',
            key: 'name',
          },
          {
            title: '服务项目',
            key: 'username',
          },
          {
            title: '首次服务时间',
            key: 'money',
          },
          {
            title: '已服务次数',
            key: 'count',
          },
          {
            title: '最后一次服务时间',
            key: 'money1',
          },
          {
            title: '据下次服务时间',
            key: 'source',
          },
          {
            title: '本次提醒',
            key: 'birthday',
          },
          {
            title: '提醒记录',
            key: 'counselor',
            render: (h) => {
              let html = h(
                'div',
                {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                  },
                },
                [
                  h(
                    'div',
                    {
                      style: {
                        color: '#1298e6',
                        cursor: 'pointer',
                      },
                      on: {
                        click: () => {
                          this.showModal('提醒记录', 'RemindList')
                        },
                      },
                    },
                    '已提醒1次'
                  ),
                ]
              )

              return html
            },
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
            name: 'John Brown',
            username: 18,
            money: 'New York No. 1 Lake Park',
            count: '2016-10-03',
            money1: '2016-10-03',
            source: '2016-10-03',
            birthday: '2016-10-03',
            counselor: '2016-10-03',
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
  .VipServiceList {
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
