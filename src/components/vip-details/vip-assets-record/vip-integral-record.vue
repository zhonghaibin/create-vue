<template>
  <div class="VipIntegralRecord">
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
          <span class="text">规则类型</span>
          <Select v-model="rule_status" style="width: 200px" transfer>
            <Option
              v-for="item in rule_status_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="right"><div class="bt">导出报表</div></div>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1">
        <template slot="action">
          <span class="bt">查看详情</span>
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
    name: 'VipIntegralRecord',
    data: function () {
      return {
        rule_status: '0',
        rule_status_list: [
          {
            value: '0',
            label: '全部',
          },
          {
            value: '1',
            label: '消费返积分',
          },
          {
            value: '2',
            label: '耗卡返积分',
          },
          {
            value: '3',
            label: '消费抵扣',
          },
        ],

        columns1: [
          {
            title: '时间',
            key: 'name',
            width: '200px',
          },
          {
            title: '生产门店',
            key: 'username',
          },
          {
            title: '积分规则',
            key: 'money',
          },
          {
            title: '规则类型',
            key: 'count',
          },
          {
            title: '积分内容',
            key: 'money1',
          },
          {
            title: '操作人',
            key: 'source',
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
  .VipIntegralRecord {
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
