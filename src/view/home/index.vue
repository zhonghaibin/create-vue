<template>
  <div class="Home">
    <div class="header">
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
          <v-chart class="chart" :option="chart.bar" />
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="box color1">
            <div class="title">预约总数</div>
            <div class="number">1</div>
            <div class="proportion">
              环比：
              <span class="red">+1</span>
            </div>
          </div>
          <div class="box color2">
            <div class="title">新客数量</div>
            <div class="number">1</div>
            <div class="proportion">
              环比：
              <span class="red">+1</span>
            </div>
          </div>
          <div class="box color3">
            <div class="title">进店客流</div>
            <div class="number">1</div>
            <div class="proportion">
              环比：
              <span class="red">+1</span>
            </div>
          </div>
          <div class="box color4">
            <div class="title">项目数量</div>
            <div class="number">1</div>
            <div class="proportion">
              环比：
              <span class="red">+1</span>
            </div>
          </div>
          <div class="box color5">
            <div class="title">服务人次</div>
            <div class="number">1</div>
            <div class="proportion">
              环比：
              <span class="red">+1</span>
            </div>
          </div>
          <div class="box color6">
            <div class="title">老客续单</div>
            <div class="number">1</div>
            <div class="proportion">
              环比：
              <span class="red">+1</span>
            </div>
          </div>
          <div class="box color7">
            <div class="title">服务人数</div>
            <div class="number">1</div>
            <div class="proportion">
              环比：
              <span class="red">+1</span>
            </div>
          </div>
          <div class="box color8">
            <div class="title">新课成单</div>
            <div class="number">1</div>
            <div class="proportion">
              环比：
              <span class="red">+1</span>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="left">
            <div class="title">待办事项</div>
            <div class="content"></div>
          </div>
          <div class="store-data">
            <div class="title">
              <div class="l">门店目标</div>
              <div class="r">详情></div>
            </div>
            <div class="box1">
              <div class="box2">
                <div class="row1">
                  <div class="text1">年度业绩目标(月目标累加)：</div>
                  <div class="text2">￥50000000,000,00</div>
                </div>
                <div class="row1">
                  <div class="text1">年度业绩目标(月目标累加)：</div>
                  <div class="text2">￥80000000,000,00</div>
                  <div class="row2">
                    <div class="circle" style="width: 120px; height: 120px">
                      <span class="text">160%</span>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div class="box3">
                <div class="box4">
                  <div class="l">
                    <div class="row1">
                      <div class="text1">
                        <div class="dot"></div>
                        年度耗卡目标(月目标累加)：
                      </div>
                      <div class="text2">￥50000000,000,00</div>
                    </div>
                    <div class="row2">
                      <div class="text1">年度累计完成耗卡：</div>
                      <div class="text2">￥80000000,000,00</div>
                    </div>
                  </div>
                  <div class="r">
                    <div class="circle">
                      <span class="text">160%</span>
                    </div>
                  </div>
                </div>
                <div class="box4">
                  <div class="l">
                    <div class="row1">
                      <div class="text1">
                        <div class="dot"></div>
                        年度客流目标(月目标累加)：
                      </div>
                      <div class="text2">300</div>
                    </div>
                    <div class="row2">
                      <div class="text1">年度累计完成客流：</div>
                      <div class="text2">417</div>
                    </div>
                  </div>
                  <div class="r">
                    <div class="circle">
                      <span class="text">160%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { use } from 'echarts/core'

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
    },
    data() {
      return {
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
          bar: {
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
              bottom: '3%',
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
      }
    },
  }
</script>

<style lang="less" scoped>
  .Home {
    .header {
      padding: 10px 20px;
      background: #ffffff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      .box {
        color: #cc749a;
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
        .left {
          float: left;
          background: white;
          width: 360px;
          .box {
            float: left;
            border-radius: 20px;
            margin: 6px 10px;
            width: 150px;
            text-align: center;
            padding: 10px 0;
            cursor: pointer;
            .title {
              font-weight: bold;
            }
            .number {
              font-weight: bold;
              font-size: 20px;
            }
            .proportion {
            }
            .red {
              color: red;
            }
            .green {
              color: green;
            }
          }
          .color1 {
            background: #e6e7fb;
          }
          .color2 {
            background: #f7e6fb;
          }
          .color3 {
            background: #e0efef;
          }
          .color4 {
            background: #fcc7c7;
          }
          .color5 {
            background: #fceae8;
          }
          .color6 {
            background: #fceae8;
          }
          .color7 {
            background: #efe9e0;
          }
          .color8 {
            background: #efe9e0;
          }
        }
        .right {
          display: flex;
          flex: 1;
          .left {
            border-radius: 10px;
            width: 480px;
            margin: 16px 20px 0 16px;
            padding: 4px;
            line-height: normal;
            .title {
              height: 30px;
              line-height: 30px;
              padding: 2px;
              margin-left: 10px;
              color: #f19ec4;
              font-size: 16px;
            }
          }
          .store-data {
            flex: 1;
            background: white;
            border-radius: 10px;
            margin: 16px 0 0 0px;
            padding: 4px;
            .title {
              height: 30px;
              line-height: 30px;
              padding: 2px;
              margin-right: 10px;
              margin-left: 10px;
              color: #f19ec4;
              font-size: 16px;
              .l {
                float: left;
                color: #f19ec4;
                flex: 1;
              }
              .r {
                float: right;
                color: blue;
                cursor: pointer;
                font-size: 14px;
              }
            }
            .box1 {
              width: 100%;
              display: flex;
              .circle {
                width: 100px;
                height: 100px;
                border: 10px solid #f46b53;
                border-radius: 50%;
                margin: auto; /*以下五个属性为水平垂直居中的方法*/
                box-sizing: border-box;
                align-items: center;
                display: flex;
                justify-content: center;
                cursor: pointer;
                .text {
                  font-size: 20px;
                  font-weight: bold;
                }
              }
              .box2 {
                padding: 20px;
                border-radius: 10px;
                width: 36%;
                float: left;
                border: 1px dashed #ccc;
                height: 320px;
                margin: 20px;
                .row1 {
                  margin-bottom: 20px;
                  .text1 {
                    color: #928c8a;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                  }
                  .text2 {
                    height: 30px;
                    line-height: 30px;
                    font-size: 24px;
                    font-weight: bold;
                  }
                  .row2 {
                    margin-top: 10px;
                  }
                }
              }
              .box3 {
                border-radius: 10px;

                float: left;
                height: 300px;
                margin: 20px 20px 20px 0;
                flex: 1;
                .box4 {
                  display: flex;
                  width: 100%;
                  padding: 15px 20px;
                  border: 1px dashed #ccc;
                  border-radius: 10px;
                  margin-bottom: 14px;
                  .l {
                    width: 240px;

                    .row1 {
                      .text1 {
                        color: #928c8a;
                        height: 30px;
                        line-height: 30px;
                        font-size: 14px;
                        .dot {
                          float: left;
                          background: #f19ec2;
                          width: 5px;
                          height: 26px;
                          padding: 2px;
                          margin-right: 4px;
                        }
                      }
                      .text2 {
                        height: 30px;
                        line-height: 30px;
                        font-size: 24px;
                        font-weight: bold;
                      }
                    }
                    .row2 {
                      .text1 {
                        color: #928c8a;
                        height: 30px;
                        line-height: 30px;
                        font-size: 14px;
                      }
                      .text2 {
                        height: 30px;
                        line-height: 30px;
                        font-size: 24px;
                        font-weight: bold;
                      }
                    }
                  }
                  .r {
                    flex: 1;
                    padding-top: 10px;
                    height: 120px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
