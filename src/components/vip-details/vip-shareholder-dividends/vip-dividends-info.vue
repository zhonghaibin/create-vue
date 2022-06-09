<template>
  <div class="VipDividendsInfo">
    <div class="baseInfo">
      <div class="row">
        <div class="cell">
          <div class="left">股东等级：</div>
          <div class="right">{{ statistical.level_name }}</div>
        </div>
        <div class="cell">
          <div class="left">上级推荐人：</div>
          <div class="right">{{ statistical.super }}</div>
        </div>
        <div class="cell">
          <div class="left">累计推荐人数：</div>
          <div class="right">{{ statistical.count }}</div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="left">成为股东时间：</div>
          <div class="right">{{ statistical.time }}</div>
        </div>
        <div class="cell">
          <div class="left">累计消费金额：</div>
          <div class="right">{{ statistical.total }}</div>
        </div>
        <div class="cell">
          <div class="left">直接推荐人数：</div>
          <div class="right">{{ statistical.zjcount }}</div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="left">剩余可以分红：</div>
          <div class="right">{{ statistical.commission_balance }}</div>
        </div>
        <div class="cell">
          <div class="left">累计分红：</div>
          <div class="right">{{ statistical.commission }}</div>
        </div>
        <div class="cell">
          <div class="left">间接推荐人：</div>
          <div class="right">{{ statistical.indirect }}</div>
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
        <template slot-scope="{ row }" slot="action">
          <span class="bt" @click="relieve(row)">解除关系</span>
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
  import { getFromBossTotal, getFromBoss, delLower } from '@/api/vip'

  export default {
    name: 'VipDividendsInfo',
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        statistical: {
          count: 0,
          jjcount: 0,
          zjcount: 0,
          commission: 0,
          commission_balance: 0,
          total: 0,
          super: '-',
          time: '-',
        },
        loading: false,
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
        columns: [
          {
            title: '他的推荐',
            key: 'name',
            width: '200px',
          },
          {
            title: '与他的关系',
            key: 'relate',
          },
          {
            title: '累计贡献分红',
            key: 'tcommission',
          },
          {
            title: '累计消费金额',
            key: 'total',
          },
          {
            title: '绑定时间',
            key: 'reg_time',
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
      }
    },
    created() {
      this.getFromBossTotal()
      this.search()
    },
    methods: {
      clearDate() {
        this.searchData.start = ''
        this.searchData.end = ''
      },
      changeDatePicker: function (date) {
        if (date) {
          this.searchData.start = date[0]
          this.searchData.end = date[1]
        }
      },
      relieve(data) {
        this.$Modal.confirm({
          title: '解除关系',
          content:
            '若解除推荐关系，已产生分红的订单进行退款时，该部分分红将不会再退回，是否确定解除推荐关系？',
          okText: '确定',
          cancelText: '取消',
          onOk: async () => {
            this.delLower(data.id)
          },
        })
      },
      async getFromBossTotal() {
        const { data, status, msg } = await getFromBossTotal({
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
        this.getFromBoss()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.searchData.page = pageSize
        this.getFromBoss()
      },
      search() {
        this.searchData.p = 1
        this.getFromBoss()
      },
      async getFromBoss() {
        this.loading = true
        const { data } = await getFromBoss(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
      async delLower(vid) {
        const { status, msg } = await delLower({
          rid: this.memberInfo.id,
          vid: vid,
        })
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.$Message.success(msg)
          this.search()
        }
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
      clear: both;
      height: 40px;
      padding: 8px 0;
      text-align: center;
      background: white;
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
      background: #f19ec2;
      padding: 6px 14px;
      border-radius: 4px;
      margin-bottom: 1px;
    }
  }
</style>
