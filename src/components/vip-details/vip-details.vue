<template>
  <div class="VipDetails">
    <div class="box">
      <div class="header">
        <div class="left">
          <div class="img">
            <img
              class="ui"
              :src="
                memberInfo.pic_url === '' ? default_avatar : memberInfo.pic_url
              "
            />
          </div>
          <div class="content">
            <div class="row1">
              <div class="name">{{ memberInfo.name }}</div>
              <div class="tel">{{ memberInfo.tel }}</div>
              <div class="level">
                <div class="bt">{{ memberInfo.tname }}</div>
              </div>
            </div>
            <div class="row2">
              <div class="member_no">卡号{{ memberInfo.vip_id }}</div>
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
              <div class="title">
                专属顾问：{{ memberInfo.dispose_staff_name }}
              </div>
              <div class="title">
                专属产康师：{{ memberInfo.dispose_staff_name }}
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="row1">
            <div class="bt" @click="jump('预约记录')">预约</div>
            <div class="bt">收银</div>
            <div class="bt">赠送</div>
            <div class="bt" @click="showModal('添加回访', 'VipRemind')">
              提醒
            </div>
            <div class="bt" @click="showModal('添加回访', 'VipReturnVisit')">
              回访
            </div>
            <div class="bt" @click="showModal('添加寄存商品', 'Deposit')">
              寄存
            </div>
            <div class="bt" @click="showModal('会员转店', 'GoShop')">转店</div>
            <div class="bt" @click="showModal('积分兑换', 'Exchange')">
              积分兑换
            </div>
            <div class="bt" @click="showModal('积分修改', 'EditIntegral')">
              积分修改
            </div>
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
                @click="showModal('个性标签', 'PersonalityLabel')"
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
        <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
          <TabPane
            v-for="item in tab_list"
            :key="item.id"
            :label="item.name"
            :name="item.name"
          >
            <VipAccount
              v-if="tab_index === '会员账户' && item.name === '会员账户'"
            />
            <VipInfo
              v-if="tab_index === '会员资料' && item.name === '会员资料'"
              :member-info="memberInfo"
            />
            <VipData
              v-if="tab_index === '会员数据' && item.name === '会员数据'"
            />
            <ReturnVisit
              v-if="tab_index === '回访记录' && item.name === '回访记录'"
              :member-info="memberInfo"
            />
            <VipAppointment
              v-if="tab_index === '预约记录' && item.name === '预约记录'"
              :member-info="memberInfo"
            />
            <VipAssetsRecord
              v-if="tab_index === '资产记录' && item.name === '资产记录'"
            />
            <CustomerInfo
              v-if="tab_index === '客情管理' && item.name === '客情管理'"
            />
            <VipShareholderDividends
              v-if="tab_index === '股东分红' && item.name === '股东分红'"
            />
            <Attachment
              v-if="tab_index === '附件管理' && item.name === '附件管理'"
            />
            <VipGoodsDeposit
              v-if="tab_index === '商品寄存' && item.name === '商品寄存'"
            />
          </TabPane>
        </Tabs>
      </div>
    </div>

    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :scrollable="true"
      :title="modal.title"
    >
      <PersonalityLabel
        v-if="modal.type === 'PersonalityLabel'"
        :labels="labels"
        @cancelModal="cancelModal"
        @changeLabels="changeLabels"
      />
      <Exchange
        v-if="modal.type === 'Exchange'"
        :labels="labels"
        @cancelModal="cancelModal"
        @changeLabels="changeLabels"
      />
      <EditIntegral
        v-if="modal.type === 'EditIntegral'"
        :labels="labels"
        @cancelModal="cancelModal"
        @changeLabels="changeLabels"
      />
      <GoShop
        v-if="modal.type === 'GoShop'"
        :labels="labels"
        @cancelModal="cancelModal"
        @changeLabels="changeLabels"
      />
      <Deposit
        v-if="modal.type === 'Deposit'"
        :labels="labels"
        @cancelModal="cancelModal"
        @changeLabels="changeLabels"
      />
      <VipReturnVisit
        v-if="modal.type === 'VipReturnVisit'"
        :labels="labels"
        @cancelModal="cancelModal"
        @changeLabels="changeLabels"
      />
      <VipRemind
        v-if="modal.type === 'VipRemind'"
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
  import VipShareholderDividends from '@/components/vip-details/vip-shareholder-dividends'
  import VipGoodsDeposit from '@/components/vip-details/vip-goods-deposit'
  import Attachment from '@/components/vip-details/attachment'
  import CustomerInfo from '@/components/vip-details/customer-info'
  import PersonalityLabel from '@/components/vip-details/personality-label'
  import Exchange from '@/components/vip-details/integral/exchange'
  import EditIntegral from '@/components/vip-details/integral/edit-Integral'
  import GoShop from '@/components/vip-details/go-shop'
  import Deposit from '@/components/vip-details/vip-goods-deposit/deposit'
  import ReturnVisit from '@/components/vip-details/return-visit'
  import VipReturnVisit from '@/components/vip-details/return-visit/vip-return-visit'
  import VipRemind from '@/components/vip-details/return-visit/vip-remind'
  import { getMemberInfo } from '@/api/vip'
  import default_avatar from '@/assets/default_avatar.png'
  import cookie from 'js-cookie'
  export default {
    name: 'VipDetails',
    components: {
      VipAccount,
      VipInfo,
      VipData,
      VipAppointment,
      VipAssetsRecord,
      VipReturnVisit,
      VipShareholderDividends,
      VipGoodsDeposit,
      Attachment,
      CustomerInfo,
      PersonalityLabel,
      Exchange,
      EditIntegral,
      GoShop,
      Deposit,
      ReturnVisit,
      VipRemind,
    },
    data: function () {
      return {
        default_avatar: default_avatar,
        modal: {
          show: false,
          title: '',
          type: false,
        },
        tab_index: '会员账户',
        WeComImgUrl: require('../../assets/企业微信.png'),
        WeChatImgUrl: require('../../assets/微信.png'),
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
        memberInfo: [],
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.tabHeight()
      })
    },
    activated() {
      this.getMemberInfo()
    },
    deactivated() {},
    created() {
      this.getMemberInfo()
    },
    methods: {
      tabHeight() {
        let orgTreeHeight = window.innerHeight
        let divHeight = orgTreeHeight - 330
        this.$refs.tab.style.minHeight = divHeight + 'px'
        console.log(orgTreeHeight, divHeight)
      },
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
      cancelModal(status) {
        this.modal.show = status
      },
      jump(string) {
        this.tab_index = string
      },
      handleTabClick(index) {
        this.tabHeight()
        this.tab_index = index
      },
      changeLabels() {
        this.modal.show = false
        //刷新接口
      },

      async getMemberInfo() {
        const { data } = await getMemberInfo({
          vid: cookie.get('vid'),
        })
        this.memberInfo = data
        console.log('memberInfo', data)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipDetails {
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
                      width: 25px;
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
