<template>
  <div class="EvaluationStatisticsList">
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
        <div class="box">
          <Input
            v-model="searchData.search"
            enter-button
            placeholder="搜索员工姓名"
            search
            style="width: 200px"
          />
        </div>
      </div>
      <div class="right">
        <div class="add-bt">导出</div>
      </div>
    </div>
    <div class="big-box">
      <div class="left-box">
        <div class="content">
          <div class="list">
            <Table :columns="columns" :data="list">
              <!-- slot对应data里面的slot-->
              <template slot="action"></template>
            </Table>
            <div class="page">
              <Page
                :current="page.current"
                :page-size="page.pageSize"
                show-elevator
                show-sizer
                size="small"
                :total="page.total"
                @on-change="currentPage"
                @on-page-size-change="pageSizeChange"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="right-box">
        <div class="box">
          <div class="title">排行榜</div>
          <EvaluationStatisticsTop />
        </div>
      </div>
    </div>
    <div class="chart">
      <div class="title">评价统计图</div>
      <div class="content">
        <v-chart class="e-chart" :option="chart.option" />
      </div>
    </div>

    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :title="modal.title"
      :width="modal.width"
    />
  </div>
</template>

<script>
  import EvaluationStatisticsTop from '@/components/statistics/staff-data/consume/evaluation-statistics-top'
  import { use } from 'echarts/core'
  import {
    DatasetComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
  } from 'echarts/components'
  import { BarChart } from 'echarts/charts'
  import { CanvasRenderer } from 'echarts/renderers'
  import VChart from 'vue-echarts'
  use([
    DatasetComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    BarChart,
    CanvasRenderer,
  ])

  export default {
    name: 'EvaluationStatisticsList',
    components: { EvaluationStatisticsTop, VChart },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        chart: {
          option: {
            legend: {},
            tooltip: {},
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true,
            },
            dataset: {
              source: [
                ['名称', '1星', '2星', '3星', '4星', '5星'],
                ['郭贝贝1', 43.3, 85.8, 93.7, 35.8, 23.7],
                ['郭贝贝2', 82.1, 73.4, 55.1, 13.4, 25.1],
                ['郭贝贝3', 86.4, 65.2, 82.5, 63.4, 75.1],
                ['郭贝贝4', 72.4, 53.9, 39.1, 56.4, 75.1],
              ],
            },
            xAxis: { type: 'category' },
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
              {
                type: 'bar',
                barWidth: '16',
                itemStyle: {
                  color: '#01e8e5',
                },
                label: {
                  // 柱图头部显示值
                  show: true,
                  position: 'top',
                  color: '#333',
                  fontSize: '12px',
                  formatter: (params) => {
                    return params.value[params.encode.x[1]]
                  },
                },
              },
              {
                type: 'bar',
                barWidth: '16',
                itemStyle: {
                  color: '#f9accb',
                },
                label: {
                  // 柱图头部显示值
                  show: true,
                  position: 'top',
                  color: '#333',
                  fontSize: '12px',
                  formatter: (params) => {
                    return params.value[params.encode.x[1]]
                  },
                },
              },
              {
                type: 'bar',
                barWidth: '16',
                itemStyle: {
                  color: '#a282fc',
                },
                label: {
                  // 柱图头部显示值
                  show: true,
                  position: 'top',
                  color: '#333',
                  fontSize: '12px',
                  formatter: (params) => {
                    return params.value[params.encode.x[1]]
                  },
                },
              },
              {
                type: 'bar',
                barWidth: '16',
                itemStyle: {
                  color: '#01e8e5',
                },
                label: {
                  // 柱图头部显示值
                  show: true,
                  position: 'top',
                  color: '#333',
                  fontSize: '12px',
                  formatter: (params) => {
                    return params.value[params.encode.x[1]]
                  },
                },
              },
              {
                type: 'bar',
                barWidth: '16',
                itemStyle: {
                  color: '#f9accb',
                },
                label: {
                  // 柱图头部显示值
                  show: true,
                  position: 'top',
                  color: '#333',
                  fontSize: '12px',
                  formatter: (params) => {
                    return params.value[params.encode.x[1]]
                  },
                },
              },
            ],
          },
        },
        modal: {
          show: false,
          title: '',
          type: false,
          width: 600,
        },
        columns: [
          {
            title: '服务人员',
            key: 'time',
          },
          {
            title: '服务1星',
            key: 'suname',
          },
          {
            title: '服务2星',
            key: 'name',
          },
          {
            title: '服务3星',
            key: 'info',
          },
          {
            title: '服务4星',
            key: 'info',
          },
          {
            title: '服务5星',
            key: 'info',
          },
          {
            title: '平均分',
            key: 'info',
          },
          {
            title: '评分总人数',
            key: 'info',
          },
          {
            title: '服务总人数',
            key: 'info',
          },
        ],
        list: [
          {
            info: 1,
          },
        ],
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        store_list: [],
        store: '',
        searchData: { search: '', start: '', end: '' },
        column1: {
          left: 0,
          top: 0,
        },
      }
    },
    computed: {},
    activated() {},
    created() {},
    mounted() {
      this.setHeight()
    },
    methods: {
      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
      showModal(title, type, width) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.modal.width = width
      },

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
      save() {},
      setHeight() {},
    },
  }
</script>

<style lang="less" scoped>
  .EvaluationStatisticsList {
    position: relative;

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
    .big-box {
      display: flex;
      .left-box {
        width: 73%;

        .content {
          margin-top: 20px;
          background: white;

          .list {
            .page {
              height: 40px;
              padding: 8px 0;
              text-align: center;
              background: white;
            }
          }
        }
      }
      .right-box {
        margin-top: 20px;
        margin-left: 10px;
        width: 420px;
        float: right;
        padding: 0 10px;

        .box {
          border-radius: 8px;
          border: 1px solid #dcdee2;
          box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
          padding: 1px;
          .title {
            padding: 12px;
            font-weight: bold;
            font-size: 14px;
            color: black;
            background: white;
          }
        }
      }
    }
    .chart {
      padding: 1px;
      margin-top: 20px;
      background: white;

      .title {
        padding: 5px 0;
        font-size: 14px;
        line-height: 30px;
        font-weight: bold;
        text-indent: 1em;
        border-bottom: 1px solid #eeeeee;
      }
      .content {
        height: 400px;
      }
    }

    .bt {
      color: #1298e6;
      margin-right: 20px;
      cursor: pointer;
    }
    .add-bt {
      margin-right: 10px;
      color: white;
      cursor: pointer;
      background: #f19ec2;
      padding: 6px 14px;
      border-radius: 4px;
      margin-bottom: 1px;
    }
  }
</style>
