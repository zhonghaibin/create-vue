<template>
  <div class="IntegralRecharge">
    <div ref="content" class="content">
      <div class="list">
        <div class="header">
          <div class="cell title">现有积分</div>
          <div class="cell title">充值积分</div>
          <div class="cell title">支付方式</div>
          <div class="cell title"></div>
          <div style="width: 40px"></div>
        </div>
        <div class="item">
          <div class="item-left">
            <div class="row">
              <div class="cell row-center"><h3>骨盆修复</h3></div>
              <div class="cell row-center">￥2324</div>
              <div class="cell row-center">应收款： ￥324234</div>
              <div class="cell row-center">添加支付方式</div>
            </div>
            <div v-for="(val, key) in data.staffList" :key="key" class="row">
              <div class="cell row-left">
                <div class="b">
                  <div class="box1">充值人员</div>
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
                      @click="addStaff(data)"
                    />
                    <Icon
                      v-else
                      style="font-size: 18px; color: #00b8ec; cursor: pointer"
                      type="ios-remove-circle-outline"
                      @click="delStaff(key, data)"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="item-right"></div>
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
    name: 'IntegralRecharge',
    data: function () {
      return {
        cityList: [
          {
            value: 'New York',
            label: 'New York',
          },
        ],
        model1: '',
        data: { staffList: [{}] },
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
      addStaff(item) {
        item.staffList.push({})
      },
      delStaff(index, item) {
        item.staffList.splice(index, 1)
      },
      setHeight() {
        let height = window.innerHeight - 416
        this.$refs.content.style.height = height + 'px'
      },
    },
  }
</script>

<style lang="less" scoped>
  .IntegralRecharge {
    position: relative;
    background: white;
    padding: 10px;
    .content {
      display: flex;
      overflow: auto;
      justify-content: space-between;
      .list {
        padding-bottom: 70px;
        width: 100%;
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
