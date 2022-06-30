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
      </div>
      <div class="right"></div>
    </div>
    <div class="row">
      <GuestTrend />
    </div>
    <div class="row">
      <StoreGuestTrend1 />
    </div>
    <div class="row">
      <div class="cell">
        <GuestAnalysis />
      </div>
      <div class="cell">
        <PerCapitaReception />
      </div>
    </div>
    <div class="row">
      <div class="cell">
        <StoreAnalysis />
      </div>
      <div class="cell">
        <ConsumptionRank />
      </div>
    </div>
    <div class="row">
      <StoreGuestTrend2 />
    </div>
  </div>
</template>

<script>
  import StoreGuestTrend2 from '@/components/statistics/business-data/business-analysis/passenger-flow-analysis/store-guest-trend2'
  import StoreAnalysis from '@/components/statistics/business-data/business-analysis/passenger-flow-analysis/store-analysis'
  import ConsumptionRank from '@/components/statistics/business-data/business-analysis/passenger-flow-analysis/consumption-rank'
  import GuestAnalysis from '@/components/statistics/business-data/business-analysis/passenger-flow-analysis/guest-analysis'
  import PerCapitaReception from '@/components/statistics/business-data/business-analysis/passenger-flow-analysis/per-capita-reception'
  import StoreGuestTrend1 from '@/components/statistics/business-data/business-analysis/passenger-flow-analysis/store-guest-trend1'
  import GuestTrend from '@/components/statistics/business-data/business-analysis/passenger-flow-analysis/guest-trend'
  export default {
    name: 'PassengerFlowAnalysis',
    components: {
      GuestTrend,
      StoreGuestTrend1,
      PerCapitaReception,
      GuestAnalysis,
      ConsumptionRank,
      StoreAnalysis,
      StoreGuestTrend2,
    },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {}
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
      display: flex;
      justify-content: space-between;
      .cell {
        width: 49%;
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
