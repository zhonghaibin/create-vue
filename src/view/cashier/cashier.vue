<template>
  <div class="Cashier">
    <div class="top">
      <Row>
        <Col class="column" span="12">开单收银</Col>
      </Row>
      <div class="vin-info">
        <div class="header">
          <div class="left">
            <Input
              enter-button
              placeholder="可搜索会员姓名/电话/卡号 "
              search
              style="width: 220px"
            />
          </div>
          <div class="right">
            <div class="bt">新增会员</div>
          </div>
        </div>
        <div class="content">
          <div class="head">
            <div class="img">
              <img
                class="ui"
                src="https://cdn.learnku.com//uploads/communities/WtC3cPLHzMbKRSZnagU9.png!/both/44x44"
              />
            </div>
          </div>
          <div class="info">
            <div class="row">
              <div class="l">
                <div class="row">曾文敏 卡号 ：k12313</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">15856252354</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">所属门店：惠城总店</div>
              </div>
              <div class="r"><span class="text">会员详情></span></div>
            </div>
          </div>
          <div class="info">
            <div class="row">
              <div class="l">
                <div class="row">&nbsp;</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">持有效卡：5</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">会员等级：铂金</div>
              </div>
              <div class="r"><span class="text">变更等级></span></div>
            </div>
          </div>
          <div class="info">
            <div class="row">
              <div class="l">
                <div class="row">余额：￥234</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">积分：34243</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">欠款：￥234</div>
              </div>
              <div class="r"><span class="text">去还款></span></div>
            </div>
          </div>
          <div class="info">
            <div class="row">
              <div class="l">
                <div class="row">总计到店：324次</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">上次消费：2001-12-10</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">消费内容：骨盆修复</div>
              </div>
              <div class="r"></div>
            </div>
          </div>
          <div class="info" style="border-right: none">
            <div class="row">
              <div class="l">
                <div class="row">推荐人：张三</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">累计推荐：0人</div>
              </div>
              <div class="r"></div>
            </div>
            <div class="row">
              <div class="l">
                <div class="row">可用分红：￥234</div>
              </div>
              <div class="r"><span class="text">股东信息></span></div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="row">
            <div class="left">备注信息：</div>
            <div class="remark"></div>
          </div>
        </div>
      </div>
    </div>

    <Row>
      <Col>
        <div ref="tab" class="tab">
          <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
            <TabPane
              v-for="item in tab_list"
              :key="item.id"
              :label="item.name"
              :name="item.name"
            />
          </Tabs>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  export default {
    name: 'Cashier',
    components: {},
    data: function () {
      return {
        tab_index: '划卡',
        tab_list: [
          { name: '划卡', id: 1 },
          { name: '购买', id: 2 },
          { name: '卡续充', id: 3 },
          { name: '换卡/升卡', id: 4 },
          { name: '积分充值', id: 5 },
          { name: '赠送', id: 6 },
        ],
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.tabHeight()
      })
    },
    methods: {
      tabHeight() {
        let orgTreeHeight = window.innerHeight
        let divHeight = orgTreeHeight - 400
        this.$refs.tab.style.minHeight = divHeight + 'px'
        console.log(orgTreeHeight, divHeight)
      },
      handleTabClick() {
        this.tabHeight()
        this.tab_index = cashier
      },
    },
  }
</script>
<style lang="less" scoped>
  .tab {
    margin-top: 20px;
    background: white;
    padding-bottom: 10px;
    /deep/ .ivu-tabs-ink-bar {
      background: #cc749a;
    }
  }
  .Cashier {
    .top {
      background: white;
      padding: 4px 16px 20px 16px;
      .column {
        font-weight: bold;
        font-size: 14px;
        padding: 10px 2px;
        height: 100%;
      }
      .vin-info {
        .header {
          display: flex;
          .left {
            flex: 1;
          }
          .right {
            .bt {
              margin-right: 10px;
              width: 80px;
              text-align: center;
              background: #f19ec2;
              border-radius: 2px;
              color: white;
              height: 30px;
              line-height: 30px;
              cursor: pointer;
            }
          }
        }
        .content {
          padding: 20px 10px;
          display: flex;
          .head {
            .img {
              border-radius: 60px;
              height: 60px;
              width: 60px;
              overflow: hidden;
              .ui {
                height: 60px;
                width: 60px;
              }
            }
          }
          .info {
            width: 300px;
            border-right: 1px solid #dcdcdc;

            .row {
              display: flex;
              .l {
                flex: 1;
                padding: 0 10px;
              }
              .r {
                padding: 0 10px;
                .text {
                  color: blue;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .footer {
          .row {
            display: flex;
            align-content: center;
            .left {
              width: 80px;
              margin-left: 120px;
            }
            .remark {
              width: 100%;
              height: 46px;
              border: 1px dashed #505050;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
</style>
