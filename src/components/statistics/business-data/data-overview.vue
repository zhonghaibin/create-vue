<template>
  <div class="box">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">门店</span>
          <Select v-model="store" style="width: 180px" transfer>
            <Option
              v-for="item in store_list"
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
            format="yyyy-MM-dd"
            placeholder="开始时间-结束时间"
            style="width: 180px"
            transfer
            type="datetimerange"
            value-format="yyyy-MM-dd"
            @on-change="changeDatePicker"
            @on-clear="clearDate"
            @on-open-change="changeDatePicker"
          />
        </div>
        <div class="box">
          <Input
            v-model="searchData.search"
            enter-button
            placeholder="搜索卡名称/大类/小类"
            search
            style="width: 250px"
            @on-search="changeValue"
          />
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="row">
      <div class="card">
        <div class="header">
          <div class="l">关键数据指标</div>
          <div class="r"><div class="explain">?字段说明</div></div>
        </div>
        <div class="content">
          <div class="c-cell">
            <div class="c-row">总业绩(实收金额)</div>
            <div class="c-row">
              <span class="text">￥324234</span>
            </div>
            <div class="c-row">
              环比：
              <span class="color1">-￥1,33423423</span>
            </div>
          </div>
          <div class="c-cell">
            <div class="c-row">总耗卡</div>
            <div class="c-row">
              <span class="text">￥324234</span>
            </div>
            <div class="c-row">
              环比：
              <span class="color1">-￥1,33423423</span>
            </div>
          </div>
          <div class="c-cell">
            <div class="c-row">到店消费人数</div>
            <div class="c-row">
              <span class="text">￥324234</span>
            </div>
            <div class="c-row">
              环比：
              <span class="color1">-￥1,33423423</span>
            </div>
          </div>
          <div class="c-cell">
            <div class="c-row">到店消费人次</div>
            <div class="c-row">
              <span class="text">￥324234</span>
            </div>
            <div class="c-row">
              环比：
              <span class="color1">-￥1,33423423</span>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="c-cell">
            <div class="c-row">人效</div>
            <div class="c-row">
              <span class="text">￥324234</span>
            </div>
            <div class="c-row">
              环比：
              <span class="color2">￥1,33423423</span>
            </div>
          </div>
          <div class="c-cell">
            <div class="c-row">坪效</div>
            <div class="c-row">
              <span class="text">￥324234</span>
            </div>
            <div class="c-row">
              环比：
              <span class="color1">-￥1,33423423</span>
            </div>
          </div>
          <div class="c-cell">
            <div class="c-row">新增持卡会员</div>
            <div class="c-row">
              <span class="text">￥324234</span>
            </div>
            <div class="c-row">
              环比：
              <span class="color1">-￥1,33423423</span>
            </div>
          </div>
          <div class="c-cell">
            <div class="c-row"></div>
            <div class="c-row">
              <span class="text"></span>
            </div>
            <div class="c-row">
              <span class="color1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="cell">
        <Achievements />
      </div>
      <div class="cell">
        <ChannelData />
      </div>
    </div>
    <div class="row">
      <MonthlyTarget />
    </div>
    <div class="row">
      <div class="cell">
        <NewVipList />
      </div>
      <div class="cell">
        <OldVipList />
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <CompletionList />
      </div>
      <div class="cell">
        <HotSalesStatisticsList />
      </div>
    </div>
    <div class="row">
      <MonthlyTrafficList />
    </div>
  </div>
</template>

<script>
  import Achievements from '@/components/statistics/business-data/data-overview/achievements'
  import ChannelData from '@/components/statistics/business-data/data-overview/channel-data'
  import MonthlyTarget from '@/components/statistics/business-data/data-overview/monthly-target'
  import NewVipList from '@/components/statistics/business-data/data-overview/new-vip-list'
  import OldVipList from '@/components/statistics/business-data/data-overview/old-vip-list'
  import CompletionList from '@/components/statistics/business-data/data-overview/completion-list'
  import HotSalesStatisticsList from '@/components/statistics/business-data/data-overview/hot-sales-statistics-list'
  import MonthlyTrafficList from '@/components/statistics/business-data/data-overview/monthly-traffic-list'
  export default {
    name: 'DataOverview',
    components: {
      MonthlyTrafficList,
      HotSalesStatisticsList,
      CompletionList,
      OldVipList,
      NewVipList,
      MonthlyTarget,
      ChannelData,
      Achievements,
    },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
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
        store_list: [],
        store: '',
        event_type_list: [],
        event_type: '',
        searchData: { search: '', start: '', end: '' },
      }
    },
    activated() {},
    created() {},
    methods: {
      changeValue() {},
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
      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
      search() {},
    },
  }
</script>

<style lang="less" scoped>
  .box {
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
    .row {
      margin-top: 10px;
      border-radius: 8px;

      display: flex;
      justify-content: space-between;
      .cell {
        border-radius: 8px;
        width: 49%;
        background: white;
      }
      .card {
        background: white;
        width: 100%;
        .color1 {
          color: green;
        }
        .color2 {
          color: red;
        }
        .text {
          font-weight: bold;
          font-size: 18px;
        }
        .header {
          padding: 10px;
          display: flex;
          align-items: center;
          .l {
            font-weight: bold;
            flex: 1;
          }
          .r {
          }
        }
        .content {
          border-bottom: 1px solid #eeeeee;
          display: flex;
          .c-cell {
            padding: 0 10px 10px 10px;
            border-right: 1px solid #f8f8f8;
            flex: 1;
            .c-row {
              padding: 4px;
            }
          }
        }
      }
    }
    .explain {
      border: 1px solid #e1e1e1;
      padding: 2px 4px;
      border-radius: 4px;
      margin-right: 10px;
      cursor: pointer;
    }
  }
</style>
