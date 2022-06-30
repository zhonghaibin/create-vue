<template>
  <div ref="box1" class="box">
    <div class="column">开单收银</div>
    <div class="top">
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
            <div class="bt" @click="showModal('新增会员', 'VipInfoDetails')">
              新增会员
            </div>
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
    <div>
      <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
        <TabPane
          v-for="item in tab_list"
          :key="item.id"
          :label="item.name"
          :name="item.name"
        >
          <StampCard v-if="item.name === '划卡' && tab_index === '划卡'" />
          <Buy v-if="item.name === '购买' && tab_index === '购买'" />
          <Renewal v-if="item.name === '卡续充' && tab_index === '卡续充'" />
          <IntegralRecharge
            v-if="item.name === '积分充值' && tab_index === '积分充值'"
          />
        </TabPane>
      </Tabs>
    </div>
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :scrollable="modal.scrollable"
      :styles="modal.styles"
      :title="modal.title"
      :width="modal.width"
    >
      <VipInfoDetails v-if="modal.type === 'VipInfoDetails' && modal.show" />
    </Modal>
  </div>
</template>
<script>
  import StampCard from '@/components/cashier/cashier/stamp-card'
  import Buy from '@/components/cashier/cashier/buy'
  import Renewal from '@/components/cashier/cashier/renewal'
  import IntegralRecharge from '@/components/cashier/cashier/integral-recharge'
  import VipInfoDetails from '@/components/vip-details/vip-info/vip-info-details'
  export default {
    name: 'Cashier',
    components: { IntegralRecharge, StampCard, Buy, Renewal, VipInfoDetails },
    data: function () {
      return {
        modal: {
          show: false,
          title: '',
          type: false,
          width: 600,
          scrollable: true,
          styles: { top: '50px' },
        },
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
      this.$nextTick(() => {})
    },
    methods: {
      handleTabClick() {},
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
    },
  }
</script>
<style lang="less" scoped>
  .box {
    .top {
      background: white;
      padding: 10px 16px 20px 16px;
      border-radius: 8px;
      margin-bottom: 10px;
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
          padding: 16px 10px;
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
                padding: 2px 12px;
              }
              .r {
                padding: 0 10px;
                .text {
                  color: #1298e6;
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
              height: 40px;
              line-height: 40px;
            }
            .remark {
              width: 100%;
              height: 40px;
              border: 1px dashed #505050;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
</style>
