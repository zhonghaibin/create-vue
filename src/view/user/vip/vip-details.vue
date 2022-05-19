<template>
  <div class="VipDetails">
    <div class="top">
      <div class="left">客户详情</div>
      <div class="right"><Icon type="md-close" @click="jumpLink" /></div>
    </div>
    <div class="box">
      <div class="header">
        <div class="left">
          <div class="img">
            <img
              class="ui"
              src="https://cdn.learnku.com//uploads/communities/WtC3cPLHzMbKRSZnagU9.png!/both/44x44"
            />
          </div>
          <div class="content">
            <div class="row1">
              <div class="name">曾文敏</div>
              <div class="tel">15307523643</div>
              <div class="level">
                <div class="bt">铂金会员</div>
              </div>
            </div>
            <div class="row2">
              <div class="member_no">卡号k10001</div>
              <div class="bind">
                <div class="box">
                  <div class="img">
                    <img :src="WeComImgUrl" />
                  </div>
                  <div class="title">绑定</div>
                </div>
                <div class="box">
                  <div class="img">
                    <img :src="WeChatImgUrl" />
                  </div>
                  <div class="title">绑定</div>
                </div>
              </div>
            </div>
            <div class="row3">
              <div class="title">专属顾问：黄强</div>
              <div class="title">专属产康师：黄强</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="row1">
            <div class="bt">预约</div>
            <div class="bt">开单</div>
            <div class="bt">开卡</div>
            <div class="bt">提醒</div>
            <div class="bt">回访</div>
            <div class="bt">寄存</div>
            <div class="bt">转店</div>
            <div class="bt">寄存</div>
            <div class="bt">积分兑换</div>
            <div class="bt">积分修改</div>
          </div>
          <div class="row2">
            <div class="label">
              <span class="title">个性标签：</span>

              <Tag v-for="label in labels" :key="label" :name="label">
                {{ label }}
              </Tag>
              <Button
                icon="ios-add"
                size="small"
                type="dashed"
                @click="showPersonalityTabel"
              >
                添加标签
              </Button>
            </div>
            <div class="node">
              <span class="title">备注信息：</span>
              <div class="info"></div>
            </div>
          </div>
        </div>
      </div>
      <div ref="tab" class="tab">
        <Tabs type="card" @on-click="handleTabClick">
          <TabPane v-for="item in tab_list" :key="item.id" :label="item.name">
            <VipAccount v-if="tab_index === 1 && item.id === 1" />
            <VipInfo v-if="tab_index === 2 && item.id === 2" />
            <VipData v-if="tab_index === 3 && item.id === 3" />
            <VipReturnVisitRecord v-if="tab_index === 4 && item.id === 4" />
            <VipAppointment v-if="tab_index === 5 && item.id === 5" />
            <VipAssetsRecord v-if="tab_index === 6 && item.id === 6" />
            <CustomerInfo v-if="tab_index === 7 && item.id === 7" />
            <VipShareholderDividends v-if="tab_index === 8 && item.id === 8" />
            <Attachment v-if="tab_index === 9 && item.id === 9" />
            <VipGoodsDeposit v-if="tab_index === 10 && item.id === 10" />
          </TabPane>
        </Tabs>
      </div>
    </div>

    <Modal v-model="is_show_modal" :footer-hide="true" :title="modal_title">
      <PersonalityLabel
        v-if="modal_type === 'PersonalityLabel'"
        :labels="labels"
        @cancelModal="cancelModal"
        @changeLabels="changeLabels"
      />
    </Modal>
  </div>
</template>

<script>
  import VipAccount from '@/components/vip-details/vip-account'
  import VipInfo from '@/components/vip-details/vip-info'
  import VipData from '@/components/vip-details/vip-data'
  import VipAppointment from '@/components/vip-details/vip-appointment'
  import VipAssetsRecord from '@/components/vip-details/vip-assets-record'
  import VipReturnVisitRecord from '@/components/vip-details/vip-return-visit-record'
  import VipShareholderDividends from '@/components/vip-details/vip-shareholder-dividends'
  import VipGoodsDeposit from '@/components/vip-details/vip-goods-deposit'
  import Attachment from '@/components/vip-details/attachment'
  import CustomerInfo from '@/components/vip-details/customer-info'
  import PersonalityLabel from '@/components/vip-details/personality-label'
  export default {
    name: 'VipDetails',
    components: {
      VipAccount,
      VipInfo,
      VipData,
      VipAppointment,
      VipAssetsRecord,
      VipReturnVisitRecord,
      VipShareholderDividends,
      VipGoodsDeposit,
      Attachment,
      CustomerInfo,
      PersonalityLabel,
    },
    data: function () {
      return {
        is_show_modal: false,
        modal_title: '个性标签',
        modal_type: 'PersonalityLabel',
        tab_index: 1,
        WeComImgUrl: require('../../../assets/企业微信.png'),
        WeChatImgUrl: require('../../../assets/微信.png'),
        labels_list: [],
        tab_list: [
          {
            id: 1,
            name: '会员账户',
          },
          {
            id: 2,
            name: '会员资料',
          },
          {
            id: 3,
            name: '会员数据',
          },
          {
            id: 4,
            name: '回访记录',
          },
          {
            id: 5,
            name: '预约记录',
          },
          {
            id: 6,
            name: '资产记录',
          },
          {
            id: 7,
            name: '客情管理',
          },
          {
            id: 8,
            name: '股东分红',
          },
          {
            id: 9,
            name: '附件管理',
          },
          {
            id: 10,
            name: '商品寄存',
          },
        ],
        labels: [],
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
        let divHeight = orgTreeHeight - 330
        this.$refs.tab.style.minHeight = divHeight + 'px'
        console.log(orgTreeHeight, divHeight)
      },
      showPersonalityTabel() {
        this.is_show_modal = true
        this.modal_title = '个性标签'
        this.modal_type = 'PersonalityLabel'
      },
      cancelModal(status) {
        this.is_show_modal = status
      },
      handleTabClick(index) {
        this.tabHeight()
        this.tab_index = index + 1
      },
      changeLabels() {
        this.is_show_modal = false
        //刷新接口
      },
      jumpLink() {
        this.$router.push('/user/vip/index')
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipDetails {
    .top {
      display: flex;
      align-items: center;
      background: white;
      padding: 6px;
      margin-bottom: 10px;
      .left {
        height: 30px;
        line-height: 30px;
        flex: 1;
        font-size: 14px;
        padding-left: 10px;
      }
      .right {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .box {
      height: 100%;
      .header {
        display: flex;

        .left {
          width: 390px;

          height: 120px;
          background: #cc749a;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
          display: flex;
          align-items: center;

          .img {
            margin-left: 20px;

            .ui {
              width: 80px;
              height: 80px;
              border: 1px solid #cc749a;
              border-radius: 50%;
            }
          }

          .content {
            flex: 1;
            display: flex;
            color: white;
            font-size: 14px;
            flex-direction: column;
            padding-left: 10px;
            padding-right: 10px;

            .row1 {
              font-weight: bold;
              display: flex;
              flex-wrap: wrap;
              display: -webkit-flex; /* Safari */

              .name {
                padding: 4px;
              }

              .tel {
                padding: 6px;
                text-align: center;
              }

              .level {
                flex: 1;
                justify-content: flex-end;
                display: flex;

                .bt {
                  border-radius: 30px;
                  border: 1px solid #56a688;
                  background: #56a688;
                  height: 20px;
                  line-height: 20px;
                  padding-left: 8px;
                  padding-right: 8px;
                  margin-top: 5px;
                  text-align: center;
                  font-size: 12px;
                  width: 80px;
                }
              }
            }

            .row2 {
              display: flex;

              .member_no {
                font-size: 12px;
                font-weight: bold;
              }

              .bind {
                flex: 1;
                justify-content: flex-end;
                margin: auto;
                padding-left: 4px;
                padding-right: 4px;
                display: flex;
                align-items: center;

                .box {
                  display: flex;

                  .img {
                    height: 20px;
                    line-height: 20px;

                    img {
                      padding: 2px;
                      width: 18px;
                      line-height: 18px;
                    }
                  }
                }
              }
            }

            .row3 {
              display: flex;
              font-weight: bold;
              padding: 10px 0px;

              .title {
                padding: 0px 6px;
              }
            }
          }
        }

        .right {
          flex: 1;

          .row1 {
            display: flex;
            align-items: center;
            flex-flow: wrap;
            min-height: 50px;
            background: white;
            margin-bottom: 6px;
            .bt {
              width: 80px;
              min-width: 60px;
              height: 28px;
              line-height: 28px;
              text-align: center;
              color: white;
              background: #cc749a;
              margin: 1px 20px;
              border-radius: 3px;
              cursor: pointer;
            }
          }

          .row2 {
            display: flex;
            padding: 10px;
            background: white;

            .label {
              flex: 1;
              .title {
                font-weight: bold;
              }

              .ivu-tag {
                height: 28px;
                line-height: 28px;
                border: 1px solid #b79dcb;
                background: #ede6f2;
                color: #b79dcb;
              }
            }

            .node {
              display: flex;
              justify-content: flex-end;

              .title {
                font-weight: bold;
              }

              .info {
                width: 300px;
                height: 46px;
                border: 1px dashed #505050;
                border-radius: 10px;
                margin-left: 10px;
              }
            }
          }
        }
      }

      .tab {
        margin-top: 20px;
        background: white;
        padding-bottom: 10px;
        /deep/ .ivu-tabs-ink-bar {
          background: #cc749a;
        }
      }
    }
  }
</style>
