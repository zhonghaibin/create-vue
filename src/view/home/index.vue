<template>
  <div class="Home">
    <div class="header">
      <div class="left">
        <div class="box">
          <Select v-model="select" style="width: 160px">
            <Option
              v-for="item in selectList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <span class="text">门店</span>
          <Select v-model="store" style="width: 200px" transfer>
            <Option
              v-for="item in storeList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="right">
        <div class="details" @click="jumpRouter('cashier/order')">详情></div>
      </div>
    </div>
    <div class="content">
      <div class="top">
        <div class="left">
          <div class="box">
            <div class="title">总收入</div>
            <div class="price">￥341212.12</div>
            <div class="proportion">
              环比：
              <span class="green">-￥1342.12</span>
            </div>
          </div>
          <div class="box">
            <div class="title">总收入</div>
            <div class="price">￥341212.12</div>
            <div class="proportion">
              环比：
              <span class="red">-￥1342.12</span>
            </div>
          </div>
        </div>
        <div class="right">
          <v-chart class="chart" :option="chart.option" />
        </div>
      </div>
      <div class="bottom">
        <div class="cell l">
          <StoreData />
        </div>
        <div class="cell c">
          <div class="row">
            <div class="row-top">
              <div class="title">待办事项</div>
              <div
                class="details"
                @click="jumpRouter('statistics/business-data')"
              >
                详情>
              </div>
            </div>
            <div class="content">
              <Tabs
                v-model="tab_index"
                :style="{ marginBottom: 0 }"
                @on-click="handleTabClick"
              >
                <TabPane
                  v-for="item in tab_list"
                  :key="item.id"
                  :label="item.name"
                  :name="item.name"
                  :style="{ marginBottom: 0 }"
                >
                  <AppointmentList
                    v-if="
                      item.name === '3天内预约' && tab_index === '3天内预约'
                    "
                  />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
        <div class="cell r">
          <TargetData />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { use } from 'echarts/core'
  import StoreData from '@/components/home/store-data'
  import TargetData from '@/components/home/target-data'
  import AppointmentList from '@/components/home/appointment-list'
  import {
    GridComponent,
    MarkLineComponent,
    TooltipComponent,
  } from 'echarts/components'
  import { BarChart } from 'echarts/charts'
  import { CanvasRenderer } from 'echarts/renderers'
  import VChart from 'vue-echarts'
  use([
    GridComponent,
    BarChart,
    CanvasRenderer,
    MarkLineComponent,
    TooltipComponent,
  ])

  export default {
    name: 'Index',
    components: {
      VChart,
      StoreData,
      TargetData,
      AppointmentList,
    },
    data() {
      return {
        storeList: [],
        store: '',
        dat: [
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'green',
            },
          },
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'red',
            },
          },
          {
            value: '环比：0',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'gray',
            },
          },
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'red',
            },
          },
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'red',
            },
          },
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'red',
            },
          },
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'red',
            },
          },
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'red',
            },
          },
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'red',
            },
          },
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'red',
            },
          },
          {
            value: '环比：+100',
            // 突出周一
            textStyle: {
              fontSize: 12,
              color: 'red',
            },
          },
        ],
        selectList: [
          {
            value: '1',
            label: '当天数据',
          },
          {
            value: '2',
            label: '上周数据',
          },
          {
            value: '3',
            label: '本周数据',
          },
          {
            value: '4',
            label: '上月数据',
          },
          {
            value: '5',
            label: '本月数据',
          },
        ],
        select: '',
        chart: {
          option: {
            backgroundColor: '#FFFFFFFF',
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
              },
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '12%',
              containLabel: true,
            },
            xAxis: [
              {
                axisLine: {
                  show: false, // 不显示坐标轴线
                },
                axisTick: {
                  //x轴刻度线
                  show: false,
                  alignWithLabel: true,
                },
                type: 'category',
                data: [
                  '次卡套餐/续次',
                  '储值卡充值',
                  '耗卡金额',
                  '储值卡消费',
                  '商品销售',
                  '项目销售',
                  '新客业绩',
                  '老客业绩',
                  '还款金额',
                  '退款金额',
                  '手工费',
                ],
              },
              {
                axisLine: {
                  show: false, // 不显示坐标轴线
                },
                axisTick: {
                  //x轴刻度线
                  show: false,
                  alignWithLabel: true,
                },
                offset: -220,
                type: 'category',
                data: [],
              },
            ],
            yAxis: [
              {
                axisLabel: {
                  show: false, // 不显示坐标轴上的文字
                },
                axisLine: {
                  show: false, // 不显示坐标轴线
                },
                type: 'value',
                splitLine: {
                  show: false,
                },
              },
            ],
            series: [
              {
                name: '数量',
                type: 'bar',
                barWidth: '17',
                label: {
                  // 柱图头部显示值
                  show: true,
                  position: 'top',
                  color: '#333',
                  fontSize: '12px',
                  formatter: (params) => {
                    return params.value[params.encode.x[0]]
                  },
                },
                data: [
                  {
                    value: 100,
                    itemStyle: {
                      color: '#c39ef1',
                    },
                  },
                  {
                    value: 20,
                    itemStyle: {
                      color: '#f1a89e',
                    },
                  },
                  {
                    value: 400,
                    itemStyle: {
                      color: '#85bd7f',
                    },
                  },
                  {
                    value: 60,
                    itemStyle: {
                      color: '#bd7f8d',
                    },
                  },
                  {
                    value: 220,
                    itemStyle: {
                      color: '#7fbdbb',
                    },
                  },
                  {
                    value: 130,
                    itemStyle: {
                      color: '#7f9abd',
                    },
                  },
                  {
                    value: 230,
                    itemStyle: {
                      color: '#9ea3f1',
                    },
                  },
                  {
                    value: 300,
                    itemStyle: {
                      color: '#f1da9e',
                    },
                  },
                  {
                    value: 240,
                    itemStyle: {
                      color: '#9ed8f1',
                    },
                  },
                  {
                    value: 120,
                    itemStyle: {
                      color: '#e79ef1',
                    },
                  },
                  {
                    value: 230,
                    itemStyle: {
                      color: '#1298e6',
                    },
                  },
                ],
              },
            ],
          },
        },
        tab_index: '3天内预约',
        tab_list: [
          { name: '3天内预约', id: 1 },
          { name: '重要日期', id: 2 },
          { name: '超30天未到店会员', id: 3 },
        ],
      }
    },
    created() {
      this.dd()
    },
    methods: {
      dd() {
        this.chart.option.xAxis[1].data = this.dat
      },
      handleTabClick(index) {
        this.tab_index = index
      },
      jumpRouter(path) {
        this.$router.push(path)
      },
    },
  }
</script>

<style lang="less" scoped>
  .Home {
    .header {
      display: flex;
      padding: 10px 20px;
      background: #ffffff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      .left {
        display: flex;
        align-items: center;
        flex: 1;
        .box {
          color: #cc749a;
          .text {
            color: black;
            padding: 0 10px;
          }
        }
      }
      .right {
      }
    }
    .content {
      .top {
        background: white;
        padding: 0 20px 10px 10px;
        display: flex;
        .left {
          padding: 10px 20px;
          .box {
            width: 200px;
            padding: 26px 10px;
            .title {
              font-size: 20px;
            }
            .price {
              font-size: 24px;
              font-weight: bold;
            }
            .proportion {
              .green {
                color: green;
              }
              .red {
                color: red;
              }
            }
          }
        }
        .right {
          flex: 1;
          height: 300px;
        }
      }
      .bottom {
        display: flex;
        .l {
          width: 26%;
        }
        .c {
          margin: 20px 0 0 20px;
          border-radius: 10px;
          flex: 1;
        }
        .r {
          width: 50%;
          margin: 20px 0 0 20px;
          border-radius: 10px;
        }
        .cell {
          display: flex;
          background: #ffffff;
          line-height: normal;
          .row {
            .row-top {
              height: 30px;
              line-height: 30px;
              padding: 2px;
              margin-right: 10px;
              margin-left: 10px;
              font-size: 16px;
              display: flex;
              .title {
                height: 30px;
                line-height: 30px;
                padding: 2px;
                color: #f19ec4;
                font-size: 16px;
                flex: 1;
              }
            }

            /deep/ .content > .ivu-tabs > .ivu-tabs-bar {
              margin-bottom: 0;
            }
          }
        }
      }
    }
    .details {
      color: #1298e6;
      cursor: pointer;
      font-size: 14px;
      padding: 2px;
    }
  }
</style>
