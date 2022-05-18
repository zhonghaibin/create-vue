<template>
  <div class="VipConsumptionRecord">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">时间</span>
          <DatePicker
            placeholder="开始时间-结束时间"
            style="width: 280px"
            type="datetimerange"
          />
        </div>
        <div class="box">
          <span class="text">状态</span>
          <Select v-model="status" style="width: 200px" transfer>
            <Option
              v-for="item in status_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <Input
            enter-button
            placeholder="可搜索服务人员/消费内容"
            search
            style="width: 300px"
          />
        </div>
      </div>
      <div class="right"><div class="bt">导出报表</div></div>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">查看</span>
        </template>
      </Table>
    </div>

    <div class="page">
      <Page show-elevator show-sizer size="small" :total="40" transfer />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VipConsumptionRecord',
    data: function () {
      return {
        status_list: [
          {
            value: '0',
            label: '全部',
          },
          {
            value: '1',
            label: '项目',
          },
          {
            value: '2',
            label: '商品',
          },
          {
            value: '3',
            label: '套餐次卡',
          },
          {
            value: '4',
            label: '储值卡',
          },
          {
            value: '5',
            label: '优惠券',
          },
        ],
        status: '0',
        columns1: [
          {
            title: '消费时间',
            key: 'name',
            width: '200px',
          },
          {
            title: '消费门店',
            key: 'username',
          },
          {
            title: '服务/销售人员',
            key: 'money',
          },
          {
            title: '消费类型',
            key: 'count',
          },
          {
            title: '消费内容',
            key: 'money1',
          },
          {
            title: '消费金额',
            key: 'source',
            render: (h) => {
              let html = h('div', [
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '￥123123'
                  ),
                  h(
                    'span',
                    {
                      style: {
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        padding: '0px 2px',
                        height: '10px',
                        cursor: 'pointer',
                        marginLeft: '4px',
                      },
                    },
                    '业绩'
                  ),
                ]),
              ])

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
          },
        ],
      }
    },
    created() {},
  }
</script>

<style lang="less" scoped>
  .VipConsumptionRecord {
    .search {
      display: flex;
      padding: 2px;
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
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>
