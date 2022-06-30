<template>
  <div class="VipShareholderDetails">
    <div class="baseInfo">
      <div class="row">
        <div class="cell">
          <div class="left">累计分红/积分：</div>
          <div class="right">{{ statistical.commission }}</div>
        </div>
        <div class="cell">
          <div class="left">近一个月分红/积分：</div>
          <div class="right">{{ statistical.month_commission }}</div>
        </div>
        <div class="cell">
          <div class="left">剩余分红/积分：</div>
          <div class="right">{{ statistical.commission_balance }}</div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="left">直接推荐分红/积分比例：</div>
          <div class="right">{{ statistical.zjrate }}</div>
        </div>
        <div class="cell">
          <div class="left">间接推荐分红/积分比例：</div>
          <div class="right">{{ statistical.jjrate }}</div>
        </div>
        <div class="cell">
          <div class="left"></div>
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
            style="width: 200px"
            transfer
            type="datetimerange"
            @on-change="changeDatePicker"
            @on-clear="clearDate"
            @on-open-change="changeDatePicker"
          />
        </div>
        <div class="box">
          <Select v-model="searchData.type" style="width: 200px" transfer>
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
            v-model="searchData.search"
            clearable
            enter-button
            placeholder="可搜索会员姓名/电话 "
            search
            style="width: 250px"
            @on-clear="search"
            @on-search="search"
          />
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list" :loading="loading">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">查看订单</span>
        </template>
      </Table>
    </div>

    <div class="page">
      <Page
        :current="page.current"
        :page-size="page.pageSize"
        show-elevator
        size="small"
        :total="page.total"
        @on-change="currentPage"
        @on-page-size-change="pageSizeChange"
      />
    </div>
  </div>
</template>

<script>
  import { getCommissionTotal, getCommission } from '@/api/vip'

  export default {
    name: 'VipShareholderDetails',
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
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
        loading: false,
        columns: [
          {
            title: '分红/积分消费时间',
            key: 'create_time',
            width: '200px',
          },
          {
            title: '会员信息',
            render: (h, params) => {
              console.log(params)
              let html = h('div', [
                // 插入文本
                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  params.row.v_name
                ),

                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  params.row.v_tel
                ),
              ])
              console.log(params)
              return html
            },
          },
          {
            title: '分红/积分消费来源',
            key: 'content',
          },
          {
            title: '分红/积分消费金额',
            key: 'pay_money',
          },
          {
            title: '我的累计分红/积分',
            key: 'commission',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        searchData: {
          p: 1,
          vid: this.memberInfo.id,
          page: 5,
          search: '',
          type: '',
          start: '',
          end: '',
        },
        page: {
          total: 0,
          pageSize: 5,
          current: 1,
        },
        list: [],
        statistical: {
          jjrate: 0,
          zjrate: 0,
          commission: 0,
          month_commission: 0,
          commission_balance: 0,
        },
      }
    },
    created() {
      this.getCommissionTotal()
      this.search()
    },
    methods: {
      clearDate() {
        this.searchData.start = ''
        this.searchData.end = ''
        this.search()
      },
      changeDatePicker: function (date) {
        if (date) {
          this.searchData.start = date[0]
          this.searchData.end = date[1]
        }
        this.search()
      },
      async getCommissionTotal() {
        const { data, status, msg } = await getCommissionTotal({
          vid: this.memberInfo.id,
        })
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.statistical = data
        }
      },
      currentPage(current) {
        this.page.current = current
        this.searchData.p = current
        this.getCommission()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.searchData.page = pageSize
        this.getCommission()
      },
      search() {
        this.searchData.p = 1
        this.getCommission()
      },
      async getCommission() {
        this.loading = true
        const { data } = await getCommission(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipShareholderDetails {
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
      clear: both;
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
