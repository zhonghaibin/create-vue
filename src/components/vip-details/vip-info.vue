<template>
  <div class="VipInfo">
    <div class="left">
      <div class="header">
        <div class="l"><div class="text">基础信息</div></div>
        <div class="r">
          <div class="bt" @click="editUserInfo">编辑资料</div>
        </div>
      </div>
      <div class="content">
        <div class="row">
          <div class="l">会员姓名：</div>
          <div class="r">曾文敏</div>
        </div>
        <div class="row">
          <div class="l">会员等级：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">手机号：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">会员有效期：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">实体卡号：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">会员折扣：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">会员性别：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">会员状态：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">会员生日：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">会员密码：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">车牌号：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">当前积分：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">推荐人：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">会员类型：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">顾问：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">身份证号码：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">孕期：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">来源：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">当前胎数：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">会员地址：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">专属产康师：</div>
          <div class="r"></div>
        </div>
        <div class="row">
          <div class="l">预产期：</div>
          <div class="r"></div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="row1">
        <div class="header">
          <div class="label">过敏禁忌</div>
          <div class="lab">不吃香菜芹菜</div>
          <div class="lab_bt" @click="showTabooLabel">
            <Icon type="ios-add ico" />
            添加禁忌
          </div>
        </div>
      </div>
      <div class="row2">
        <div class="header">
          <div class="label">重要日期</div>
          <div class="info">
            <div class="title">结婚纪念日</div>
            <div class="date">2020-01-01</div>
          </div>
          <div class="lab_bt" @click="showAddDate">
            <Icon type="ios-add ico" />
            添加日期
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="is_show_modal" :footer-hide="true" :title="modal_title">
      <VipInfoDetails
        v-if="modal_type === 'VipInfoDetails'"
        @cancelModal="cancelModal"
      />
      <AddDate v-if="modal_type === 'AddDate'" @cancelModal="cancelModal" />
      <TabooLabel
        v-if="modal_type === 'TabooLabel'"
        @cancelModal="cancelModal"
      />
    </Modal>
  </div>
</template>

<script>
  import VipInfoDetails from '@/components/vip-details/vip-info/vip-info-details'
  import AddDate from '@/components/vip-details/vip-info/add-date'
  import TabooLabel from '@/components/vip-details/vip-info/taboo-label'
  export default {
    name: 'VipInfo',
    components: {
      VipInfoDetails,
      AddDate,
      TabooLabel,
    },
    data: function () {
      return {
        is_show_modal: false,
        modal_title: '编辑会员资料',
        modal_type: 'VipInfoDetails',
      }
    },
    created() {
      console.log('VipInfo')
    },
    methods: {
      showAddDate() {
        this.is_show_modal = true
        this.modal_title = '添加重要日期'
        this.modal_type = 'AddDate'
      },
      editUserInfo() {
        this.is_show_modal = true
        this.modal_title = '编辑会员资料'
        this.modal_type = 'VipInfoDetails'
      },
      showTabooLabel() {
        this.is_show_modal = true
        this.modal_title = '会员禁忌标签'
        this.modal_type = 'TabooLabel'
      },
      cancelModal(status) {
        this.is_show_modal = status
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipInfo {
    display: flex;
    .left {
      width: 52%;
      padding: 0 10px;
      .header {
        display: flex;
        .l {
          flex: 1;
          .text {
            font-weight: bold;
            font-size: 16px;
          }
        }
        .r {
          display: flex;
          justify-content: end;
          .bt {
            width: 80px;
            min-width: 60px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background: #fceef4;
            color: #cc749a;
            margin: 1px 20px;
            border-radius: 3px;
            cursor: pointer;
          }
        }
      }
      .content {
        display: flex;
        flex-flow: wrap;
        align-items: center;
        font-size: 14px;
        padding: 0 5px;
        .row {
          width: 50%;
          display: flex;
          height: 37px;

          .l {
            font-size: 14px;
            height: 37px;
            line-height: 37px;
          }
          .r {
            height: 37px;
            line-height: 37px;
          }
        }
      }
    }
    .right {
      border-left: 1px solid #efefef;
      flex: 1;
      padding: 0 20px;
      .row1 {
        border: 1px dashed #dcdcdc;
        height: 210px;
        width: 100%;
        margin-bottom: 20px;
        border-radius: 6px;
        .header {
          padding: 20px;
          display: flex;
          align-items: center;
          flex-flow: wrap;
          .label {
            font-weight: bold;
            font-size: 14px;
            padding: 2px;
          }
          .lab {
            height: 20px;
            line-height: 20px;
            background: #f5f5f5;
            color: #d07b9f;
            width: 80px;
            text-align: center;
            margin: 2px 6px;
          }
          .lab_bt {
            margin: 2px;
            display: flex;
            align-items: center;
            width: 80px;
            border-radius: 4px;
            border: 1px dashed #dcdcdc;
            height: 26px;
            line-height: 26px;
            cursor: pointer;
            .ico {
              margin-left: 6px;
            }
          }
        }
      }
      .row2 {
        border: 1px dashed #dcdcdc;
        height: 250px;
        width: 100%;
        border-radius: 6px;
        .header {
          padding: 20px;
          display: flex;
          align-items: center;
          flex-flow: wrap;
          .label {
            font-weight: bold;
            font-size: 14px;
            padding: 2px;
          }
          .info {
            height: 20px;
            line-height: 20px;
            display: flex;
            flex: 1;
            padding: 0px 20px;
            .title {
              flex: 1;
            }
            .date {
            }
          }
          .lab_bt {
            margin: 2px;
            display: flex;
            align-items: center;
            width: 80px;
            border-radius: 4px;
            border: 1px dashed #dcdcdc;
            height: 26px;
            line-height: 26px;
            cursor: pointer;
            .ico {
              margin-left: 6px;
            }
          }
        }
      }
    }
  }
</style>
