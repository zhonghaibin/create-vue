<template>
  <div class="VipDividendsInfo">
    <div class="baseInfo">
      <div class="row">
        <div class="cell">
          <div class="left">股东等级：</div>
          <div class="right"></div>
        </div>
        <div class="cell">
          <div class="left">上级推荐人：</div>
          <div class="right"></div>
        </div>
        <div class="cell">
          <div class="left">累计推荐人数：</div>
          <div class="right"></div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="left">成为股东时间：</div>
          <div class="right"></div>
        </div>
        <div class="cell">
          <div class="left">累计消费金额：</div>
          <div class="right"></div>
        </div>
        <div class="cell">
          <div class="left">直接推荐人数：</div>
          <div class="right"></div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="left">剩余可以分红：</div>
          <div class="right"></div>
        </div>
        <div class="cell">
          <div class="left">累计分红：</div>
          <div class="right"></div>
        </div>
        <div class="cell">
          <div class="left">间接推荐人：</div>
          <div class="right"></div>
        </div>
      </div>
    </div>
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
          <Select v-model="relation" style="width: 200px" transfer>
            <Option
              v-for="item in relation_list"
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
            placeholder="可搜索会员姓名/电话 "
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
        <template slot="action">
          <span class="bt" @click="relieve">解除关系</span>
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
    name: 'VipDividendsInfo',
    data: function () {
      return {
        relation_list: [
          {
            value: '0',
            label: '全部股东关系',
          },
          {
            value: '1',
            label: '直接关系',
          },
          {
            value: '2',
            label: '间接关系',
          },
        ],
        relation: '0',
        columns1: [
          {
            title: '他的推荐',
            key: 'name',
            width: '200px',
          },
          {
            title: '与他的关系',
            key: 'username',
          },
          {
            title: '累计贡献分红',
            key: 'money',
          },
          {
            title: '累计消费金额',
            key: 'count',
          },
          {
            title: '绑定时间',
            key: 'money1',
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
          },
        ],
      }
    },
    created() {},
    methods: {
      relieve() {
        this.$Modal.confirm({
          title: '解除关系',
          content:
            '若解除推荐关系，已产生分红的订单进行退款时，该部分分红将不会再退回，是否确定解除推荐关系？',
          okText: '确定',
          cancelText: '取消',
          onOk: async () => {
            alert('1')
          },
        })
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipDividendsInfo {
    .baseInfo {
      background: #f5f5f5;
      border-radius: 10px;
      padding: 10px 14px;
      margin: 5px 5px 10px 5px;
      .row {
        display: flex;
        .cell {
          flex: 1;
          height: 25px;
          line-height: 25px;
          display: flex;
          .left {
          }
          .right {
            flex: 1;
          }
        }
      }
    }
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
    .add-bt {
      color: white;
      margin-right: 20px;
      cursor: pointer;
      background: #db528d;
      padding: 6px 14px;
      border-radius: 4px;
    }
  }
</style>
