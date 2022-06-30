<template>
  <div class="BusinessDetailsList">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">全部门店</span>
          <Select v-model="store" style="width: 100px" transfer>
            <Option
              v-for="item in storeList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <span class="text">时间</span>
          <Select
            v-model="date"
            clearable
            filterable
            style="width: 80px"
            transfer
          >
            <div slot="empty">未找到数据</div>
            <Option
              v-for="item in dateList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <DatePicker
            placeholder="开始时间-结束时间"
            style="width: 260px"
            type="datetimerange"
          />
        </div>
        <div class="box">
          <Input
            enter-button
            placeholder="可搜索会员姓名/电话/卡号 "
            search
            style="width: 220px"
          />
        </div>
        <div class="box">
          <span class="text">支付方式</span>
          <Select v-model="relation" style="width: 100px" transfer>
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
          <span class="text">消费类型</span>
          <Select v-model="relation" style="width: 100px" transfer>
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
          <span class="text">审核</span>
          <Select v-model="relation" style="width: 80px" transfer>
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
          <span class="text">过滤0元</span>
          <Select v-model="relation" style="width: 60px" transfer>
            <Option
              v-for="item in relation_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="right">
        <div class="add-bt">导出</div>
      </div>
    </div>
    <div class="baseInfo">
      <div class="box color1">
        <div class="header"><span class="text">营业总数据</span></div>
        <div class="content">
          <div class="cell">
            <div class="row">
              <div class="l">总收入</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">营业收入</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">耗卡</div>
              <div class="r">￥23442</div>
            </div>
          </div>
          <div class="cell">
            <div class="row">
              <div class="l">未耗卡总额</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">总欠款</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">储值卡总余额</div>
              <div class="r">￥23442</div>
            </div>
          </div>
        </div>
      </div>
      <div class="box color2">
        <div class="header"><span class="text">收入金额明细</span></div>
        <div class="content">
          <div class="cell">
            <div class="row">
              <div class="l">减免</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">积分抵扣</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">优惠券抵扣</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">储值卡抵扣</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">分红收益抵扣</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">现金</div>
              <div class="r">￥23442</div>
            </div>
          </div>
          <div class="cell">
            <div class="row">
              <div class="l">支付部</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">微信</div>
              <div class="r">￥23442</div>
            </div>
          </div>
        </div>
      </div>
      <div class="box color3">
        <div class="header"><span class="text">收入来源统计</span></div>
        <div class="content">
          <div class="cell">
            <div class="row">
              <div class="l">项目收入</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">商品收入</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">套餐次卡收入</div>
              <div class="r">￥23442</div>
            </div>
          </div>
          <div class="cell">
            <div class="row">
              <div class="l">储值卡收入</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">优惠券收入</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">积分充值收入</div>
              <div class="r">￥23442</div>
            </div>
          </div>
        </div>
      </div>
      <div class="box color4">
        <div class="header"><span class="text">客数客次统计</span></div>
        <div class="content">
          <div class="cell">
            <div class="row">
              <div class="l">进店客流</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">服务客次</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">服务客数</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">新客数量</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">项目数量</div>
              <div class="r">￥23442</div>
            </div>
          </div>
          <div class="cell">
            <div class="row">
              <div class="l">老客续单</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">新客成单</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">新客业绩</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">老客业绩</div>
              <div class="r">￥23442</div>
            </div>
            <div class="row">
              <div class="l">手工费</div>
              <div class="r">￥23442</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="list">
      <Table :columns="columns1" :data="data1">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt" @click="showModal('详情', 'BusinessDetails')">
            详情
          </span>
          <span class="bt">更多</span>
        </template>
      </Table>
      <div class="page">
        <Page show-elevator show-sizer size="small" :total="40" transfer />
      </div>
    </div>
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :scrollable="true"
      :title="modal.title"
      :width="1000"
    >
      <BusinessDetails v-if="modal.type === 'BusinessDetails' && modal.show" />
    </Modal>
  </div>
</template>

<script>
  import BusinessDetails from '@/components/business-track/business-details-list/business-details'
  export default {
    name: 'BusinessDetailsList',
    components: { BusinessDetails },
    data: function () {
      return {
        modal: {
          show: false,
          title: '',
          type: false,
        },
        storeList: [],
        store: '',
        dateList: [
          {
            label: '今天',
            value: '1',
          },
          {
            label: '昨天',
            value: '2',
          },
          {
            label: '上周',
            value: '3',
          },
          {
            label: '上月',
            value: '4',
          },
        ],
        date: '',
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
            title: '会员信息',
            key: 'name',
            render: (h, params) => {
              let html = h('div', [
                // 插入文本
                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  '曾文敏'
                ),

                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  '13813131313'
                ),
              ])
              console.log(params)
              return html
            },
          },
          {
            title: '所属门店',
            key: 'username',
          },
          {
            title: '消费门店',
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
            title: '实收金额',
            key: 'money1',
          },
          {
            title: '耗卡金额',
            key: 'money1',
          },
          {
            title: '服务人员',
            key: 'money1',
          },
          {
            title: '手工费',
            key: 'money1',
          },
          {
            title: '审核状态',
            key: 'money1',
          },
          {
            title: '时间',
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
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
    },
  }
</script>

<style lang="less" scoped>
  .BusinessDetailsList {
    .baseInfo {
      padding: 10px 14px;
      display: flex;
      background: white;
      .box {
        flex: 1;
        margin-right: 24px;
        border-radius: 12px;
        padding: 10px 10px 0 10px;
        cursor: pointer;
        .header {
          height: 20px;
          line-height: 20px;
          .text {
            margin-left: 10px;
            font-weight: bold;
            font-size: 14px;
          }
        }
        .content {
          justify-content: center;
          margin-top: 2px;
          display: flex;
          .cell {
            margin-right: 20px;

            .row {
              padding: 4px 0;
              display: flex;

              .l {
                padding: 0 6px;
              }
              .r {
                flex: 1;
                margin-right: 2px;
                color: red;
              }
            }
          }
        }
      }

      .color1 {
        background: #e0efef;
        line-height: 38px;
      }
      .color2 {
        background: #e6e7fb;
      }
      .color3 {
        background: #efe9e0;
        line-height: 38px;
      }
      .color4 {
        background: #fceae8;
        line-height: 24px;
      }
    }
    .search {
      display: flex;
      padding: 10px;
      background: white;
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        .box {
          margin-right: 8px;
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
      .page {
        height: 40px;
        padding: 8px 0;
        text-align: center;
        background: white;
      }
    }
    .bt {
      color: #1298e6;
      margin-right: 20px;
      cursor: pointer;
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
