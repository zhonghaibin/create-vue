<template>
  <div class="StampCard">
    <div ref="content" class="content">
      <div class="left">
        <table>
          <thead>
            <tr>
              <th>名称</th>
              <th>剩余次数</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, index) in list">
              <tr :key="index">
                <td
                  colspan="2"
                  style="padding: 0 10px; text-align: left"
                  @click="show(index, $event)"
                >
                  <Icon style="font-size: 16px" type="md-arrow-dropright" />
                  {{ item.name }}
                </td>
              </tr>
              <tr
                v-for="(val, key) in item.children"
                :key="`${index}.${key}`"
                :ref="`children${index}`"
                style="display: none"
                @click="addRow"
              >
                <td>{{ val.name }}</td>
                <td>{{ val.number }}</td>
              </tr>
            </template>
            <tr>
              <td colspan="2">
                <Page
                  :current="page.current"
                  :page-size="page.pageSize"
                  size="small"
                  :total="page.total"
                  @on-change="currentPage"
                  @on-page-size-change="pageSizeChange"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="right">
        <div class="list">
          <div class="header">
            <div class="cell title">名称</div>
            <div class="cell title">单价</div>
            <div class="cell title">数量</div>
            <div class="cell title">支付金额</div>
            <div style="width: 40px"></div>
          </div>
          <div v-for="(item, index) in data" :key="index" class="item">
            <div class="item-left">
              <div class="row">
                <div class="cell row-center"><h3>骨盆修复</h3></div>
                <div class="cell row-center">￥2324</div>
                <div class="cell row-center">
                  <Input placeholder="" size="small" style="width: 80px" />
                </div>
                <div class="cell row-center">
                  小计：
                  <Input placeholder="" size="small" style="width: 80px" />
                </div>
              </div>
              <div v-for="(val, key) in item.staffList" :key="key" class="row">
                <div class="cell row-left">
                  <div class="b">
                    <div class="box1">服务人员</div>
                    <div class="box2">
                      <Select v-model="model1">
                        <Option
                          v-for="city in cityList"
                          :key="city.value"
                          :value="city.value"
                        >
                          {{ city.label }}
                        </Option>
                      </Select>
                    </div>
                  </div>
                  <div class="b">
                    <div class="box1">手工费</div>
                    <div class="box2">
                      <Input placeholder="" size="small" style="width: 80px" />
                    </div>
                  </div>
                  <div class="b">
                    <div class="box1">耗卡业绩</div>
                    <div class="box2">
                      <Input placeholder="" size="small" style="width: 80px" />
                    </div>
                  </div>
                  <div class="b">
                    <div class="box1">业绩</div>
                    <div class="box2">
                      <Input placeholder="" size="small" style="width: 80px" />
                    </div>
                  </div>
                  <div class="b">
                    <div class="box1">比例</div>
                    <div class="box2">
                      <Input placeholder="" size="small" style="width: 80px" />
                      <Icon
                        v-if="key === 0"
                        style="font-size: 18px; color: #00b8ec; cursor: pointer"
                        type="ios-add-circle-outline"
                        @click="addStaff(item)"
                      />
                      <Icon
                        v-else
                        style="font-size: 18px; color: #00b8ec; cursor: pointer"
                        type="ios-remove-circle-outline"
                        @click="delStaff(key, item)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="item-right" @click="delRow(index)">X</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-left">
        <div class="cell"><Checkbox>补单</Checkbox></div>
        <div class="cell">
          流水单号
          <Input placeholder="没有则不填" size="small" style="width: 200px" />
        </div>
        <div class="cell">
          备注信息
          <Input
            placeholder="填写订单备注信息"
            size="small"
            style="width: 200px"
          />
        </div>
        <div class="cell">
          会员到店
          <Input placeholder="" size="small" style="width: 60px" />
        </div>
        <div class="cell">
          散客到店
          <Input placeholder="" size="small" style="width: 60px" />
        </div>
      </div>
      <div class="footer-right">
        <div class="money">
          还需支付:
          <span class="text">￥3033</span>
        </div>
        <div class="cell">
          <div class="add-bt color">确认收款</div>
        </div>
        <div class="cell">
          <div class="add-bt color1">挂单待结</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StampCard',
    data: function () {
      return {
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        cityList: [
          {
            value: 'New York',
            label: 'New York',
          },
        ],
        model1: '',
        list: [
          {
            name: '产后修复3大项',
            children: [
              {
                name: '骨盆修复 1-1',
                number: 1,
              },
              {
                name: '骨盆修复 2-1',
                number: 1,
              },
            ],
          },
        ],
        data: [],
      }
    },
    computed: {},
    activated() {},
    created() {},
    mounted() {
      this.setHeight()
      window.onresize = () => {
        this.setHeight()
      }
    },
    destroyed() {},
    methods: {
      show(index, obj) {
        if (
          obj.currentTarget.children[0].className ===
          'ivu-icon ivu-icon-md-arrow-dropright'
        ) {
          obj.currentTarget.children[0].className =
            'ivu-icon ivu-icon-md-arrow-dropdown'
        } else {
          obj.currentTarget.children[0].className =
            'ivu-icon ivu-icon-md-arrow-dropright'
        }

        this.$refs[`children${index}`].forEach((item) => {
          if (item.style.display === 'none') {
            item.style.display = 'table-row'
          } else {
            item.style.display = 'none'
          }
        })
      },
      addRow() {
        this.data.push({
          staffList: [{}],
        })
      },
      delRow(index) {
        this.data.splice(index, 1)
      },
      addStaff(item) {
        item.staffList.push({})
      },
      delStaff(index, item) {
        item.staffList.splice(index, 1)
      },
      setHeight() {
        let height = window.innerHeight - 415
        this.$refs.content.style.height = height + 'px'
      },
      currentPage(current) {
        this.page.current = current
        this.searchData.p = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.searchData.page = pageSize
      },
    },
  }
</script>

<style lang="less" scoped>
  .StampCard {
    position: relative;
    background: white;
    padding: 10px;
    .content {
      display: flex;
      overflow: auto;

      justify-content: space-between;
      table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        text-align: center;
        background: white;
        tr {
          height: 40px;
          cursor: pointer;
          th {
            background: #fdf1f6;
          }
          td {
            border: 1px solid #eeeeee;
          }
          .text {
            color: #1298e6;
            cursor: pointer;
          }
        }
      }
      .left {
        width: 260px;
        border: 1px solid #eeeeee;
      }
      .right {
        margin-left: 10px;

        flex: 1;
        .list {
          padding-bottom: 70px;
          .header {
            display: flex;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #fdf1f6;
            .title {
              font-weight: bold;
            }
            .cell {
              flex: 1;
            }
          }
          .item {
            border: 1px solid #eeeeee;
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            .item-left {
              flex: 1;
              .row {
                padding: 6px;
                text-align: center;
                display: flex;
                justify-content: center;

                .cell {
                  flex: 1;
                  display: flex;
                  align-items: center;
                  .b {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    .box1 {
                      padding: 2px;
                    }
                    .box2 {
                      padding: 2px;
                    }
                    padding: 2px;
                  }
                }
                .row-center {
                  justify-content: center;
                }
                .row-left {
                  text-align: left;
                  margin-left: 20px;
                }
              }
            }
            .item-right {
              cursor: pointer;
              width: 40px;
            }
          }
        }
      }
    }
    .footer {
      display: flex;
      clear: both;
      position: absolute;
      bottom: 0;
      border-top: 1px solid #dedede;
      left: 0;
      right: 0;
      padding: 10px 0;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);

      background: white;
      .footer-left {
        width: 70%;
        display: flex;
        align-items: center;
        .cell {
          padding: 0 10px;
        }
      }
      .footer-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        .money {
          flex: 1;
          font-size: 20px;
          .text {
            font-size: 24px;
            color: #f46b53;
          }
        }
        .cell {
        }
      }
    }
    .color {
      border: 1px solid #f19ec2;
      background: #f19ec2;
      color: white;
    }
    .color1 {
      background: white;
      color: #2c2c2c;
      border: 1px solid #2c2c2c;
    }
    .add-bt {
      margin-right: 20px;
      cursor: pointer;
      padding: 6px 14px;
      border-radius: 4px;
      margin-bottom: 1px;
    }
  }
</style>
