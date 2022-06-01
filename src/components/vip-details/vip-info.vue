<template>
  <div class="VipInfo">
    <div class="left">
      <div class="header">
        <div class="l"><div class="text">基础信息</div></div>
        <div class="r">
          <div class="bt" @click="showModal('编辑会员资料', 'VipInfoDetails')">
            编辑资料
          </div>
        </div>
      </div>
      <div class="content">
        <div class="row">
          <div class="l">会员姓名：</div>
          <div class="r">{{ info.name }}</div>
        </div>
        <div class="row">
          <div class="l">会员等级：</div>
          <div class="r">{{ info.tname }}</div>
        </div>
        <div class="row">
          <div class="l">手机号：</div>
          <div class="r">{{ info.tel }}</div>
        </div>
        <div class="row">
          <div class="l">会员有效期：</div>
          <div class="r">{{ info.end_time }}</div>
        </div>
        <div class="row">
          <div class="l">实体卡号：</div>
          <div class="r">{{ info.vip_id }}</div>
        </div>
        <div class="row">
          <div class="l">会员状态：</div>
          <div class="r">{{ info.status === 1 ? '正常' : '禁用' }}</div>
        </div>
        <div class="row">
          <div class="l">会员性别：</div>
          <div class="r">{{ info.sex === 1 ? '女性' : '男性' }}</div>
        </div>
        <div class="row">
          <div class="l">会员密码：</div>
          <div class="r">{{ info.pwd }}</div>
        </div>
        <div class="row">
          <div class="l">会员生日：</div>
          <div class="r">{{ info.birthday_type_name }} {{ info.birthday }}</div>
        </div>
        <div class="row">
          <div class="l">当前积分：</div>
          <div class="r">{{ info.integral }}</div>
        </div>
        <div class="row">
          <div class="l">所属门店：</div>
          <div class="r">{{ info.shop_name }}</div>
        </div>
        <div class="row">
          <div class="l">会员类型：</div>
          <div class="r">{{ info.type_name }}</div>
        </div>
        <div class="row">
          <div class="l">推荐人：</div>
          <div class="r">{{ info.rname }}</div>
        </div>
        <div class="row">
          <div class="l">顾问：</div>
          <div class="r">{{ info.adviser_name }}</div>
        </div>
        <div class="row">
          <div class="l">身份证号码：</div>
          <div class="r">{{ info.id_card_no }}</div>
        </div>
        <div class="row">
          <div class="l">孕期：</div>
          <div class="r">{{ info.baby_birthday }}</div>
        </div>
        <div class="row">
          <div class="l">来源：</div>
          <div class="r">{{ info.source_name }}</div>
        </div>
        <div class="row">
          <div class="l">当前胎数：</div>
          <div class="r">{{ info.tai_num }}</div>
        </div>
        <div class="row">
          <div class="l">会员地址：</div>
          <div class="r">{{ info.address }}</div>
        </div>
        <div class="row">
          <div class="l">预产期：</div>
          <div class="r">{{ info.expected_date }}</div>
        </div>
        <div class="row">
          <div class="l">专属产康师：</div>
          <div class="r">{{ info.dispose_staff_name }}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="row1">
        <div class="header">
          <div class="label">过敏禁忌</div>
          <div class="lab">不吃香菜芹菜</div>
          <div class="lab_bt" @click="showModal('会员禁忌标签', 'TabooLabel')">
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
          <div class="lab_bt" @click="showModal('添加重要日期', 'AddDate')">
            <Icon type="ios-add ico" />
            添加日期
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="modal.show" :footer-hide="true" :title="modal.title">
      <VipInfoDetails
        v-if="modal.type === 'VipInfoDetails'"
        @cancelModal="cancelModal"
      />
      <AddDate v-if="modal.type === 'AddDate'" @cancelModal="cancelModal" />
      <TabooLabel
        v-if="modal.type === 'TabooLabel'"
        @cancelModal="cancelModal"
      />
    </Modal>
  </div>
</template>

<script>
  import VipInfoDetails from '@/components/vip-details/vip-info/vip-info-details'
  import AddDate from '@/components/vip-details/vip-info/add-date'
  import TabooLabel from '@/components/vip-details/vip-info/taboo-label'
  import { getMemberInfo } from '@/api/vip'
  import cookie from 'js-cookie'
  export default {
    name: 'VipInfo',
    components: {
      VipInfoDetails,
      AddDate,
      TabooLabel,
    },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        modal: {
          show: false,
          title: '',
          type: false,
        },
        info: [],
      }
    },
    activated() {
      this.getMemberInfo()
    },
    created() {
      this.getMemberInfo()
    },
    methods: {
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
      cancelModal(status) {
        this.modal.show = status
      },
      async getMemberInfo() {
        const { data } = await getMemberInfo({
          vid: cookie.get('vid'),
        })
        this.info = data
        console.log('memberInfo', data)
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
          justify-content: flex-end;
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
