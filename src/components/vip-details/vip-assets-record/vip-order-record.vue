<template>
  <div class="VipOrderRecord">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">时间</span>
          <DatePicker
            placeholder="开始时间-结束时间"
            style="width: 200px"
            type="datetimerange"
          />
        </div>
        <div class="box">
          <span class="text">消费类型</span>
          <Select v-model="consumption" style="width: 200px" transfer>
            <Option
              v-for="item in consumption_list"
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
            style="width: 250px"
          />
        </div>
      </div>
      <div class="right"><div class="bt">导出报表</div></div>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1">
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
    name: 'VipOrderRecord',
    data: function () {
      return {
        consumption: '0',
        consumption_list: [
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
            key: 'price',
          },
          {
            title: '消费金额',
            key: 'price',
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
            price: '2016-10-03',
          },
        ],
      }
    },
    created() {},
  }
</script>

<style lang="less" scoped>
  .VipOrderRecord {
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
      margin-top: 10px;
    }
    .page {
      height: 40px;
      padding: 8px 0;
      text-align: center;
      background: white;
    }
    .bt {
      color: #1298e6;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>
