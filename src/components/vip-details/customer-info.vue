<template>
  <div class="CustomerInfo">
    <div class="header">
      <div class="right">
        <div class="add-bt" @click="showCustomer">添加客情</div>
      </div>
    </div>
    <div class="content">
      <div class="box">
        <div class="row">
          <div class="l">体重：</div>
          <div class="r">
            <Input placeholder="" style="width: 200px" />
            公斤
          </div>
        </div>
        <div class="row">
          <div class="l">身高：</div>
          <div class="r">
            <Input placeholder="" style="width: 200px" />
            CM
          </div>
        </div>

        <div class="row">
          <div class="l">血型：</div>
          <div class="r">
            <Select v-model="blood_type" style="width: 200px" transfer>
              <Option
                v-for="item in blood_type_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">性格：</div>
          <div class="r">
            <Select v-model="character" style="width: 200px" transfer>
              <Option
                v-for="item in character_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">婚姻状况：</div>
          <div class="r">
            <Select v-model="marriage" style="width: 200px" transfer>
              <Option
                v-for="item in marriage_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">宗教信仰：</div>
          <div class="r">
            <Select v-model="religion" multiple style="width: 200px" transfer>
              <Option
                v-for="item in religion_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">意识观念：</div>
          <div class="r">
            <Select v-model="concept" multiple style="width: 200px" transfer>
              <Option
                v-for="item in concept_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">饮食偏重：</div>
          <div class="r">
            <Select v-model="dietary" multiple style="width: 200px" transfer>
              <Option
                v-for="item in dietary_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">喜好：</div>
          <div class="r">
            <Select v-model="love" multiple style="width: 200px" transfer>
              <Option
                v-for="item in love_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">生活：</div>
          <div class="r">
            <Select v-model="live" multiple style="width: 200px" transfer>
              <Option
                v-for="item in live_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">休闲：</div>
          <div class="r">
            <Select v-model="relaxation" multiple style="width: 200px" transfer>
              <Option
                v-for="item in relaxation_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">消费：</div>
          <div class="r">
            <Select v-model="consumption" style="width: 200px" transfer>
              <Option
                v-for="item in consumption_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">睡眠质量：</div>
          <div class="r">
            <Select v-model="sleep" style="width: 200px" transfer>
              <Option
                v-for="item in sleep_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="row">
          <div class="l">睡眠质量：</div>
          <div class="r">
            <Select v-model="sleep_quality" style="width: 200px" transfer>
              <Option
                v-for="item in sleep_quality_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">睡前习惯：</div>
          <div class="r">
            <Select
              v-model="before_sleeping_habits"
              style="width: 200px"
              transfer
            >
              <Option
                v-for="item in before_sleeping_habits_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">工作性质：</div>
          <div class="r">
            <Select v-model="nature_office" style="width: 200px" transfer>
              <Option
                v-for="item in nature_office_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">资产状况：</div>
          <div class="r">
            <Select v-model="balance_sheets" style="width: 200px" transfer>
              <Option
                v-for="item in balance_sheets_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">社会背景：</div>
          <div class="r">
            <Select v-model="social_background" style="width: 200px" transfer>
              <Option
                v-for="item in social_background_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">社会地位：</div>
          <div class="r">
            <Select v-model="social_status" style="width: 200px" transfer>
              <Option
                v-for="item in social_status_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">信任度：</div>
          <div class="r">
            <Select v-model="credibility" style="width: 200px" transfer>
              <Option
                v-for="item in credibility_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">服务要求：</div>
          <div class="r">
            <Select v-model="service_requirement" style="width: 200px" transfer>
              <Option
                v-for="item in service_requirement_list"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
        <div class="row">
          <div class="l">单次消费：</div>
          <div class="r">
            <Input placeholder="" style="width: 200px" />
            元
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="is_show_modal" :footer-hide="true" :title="modal_title">
      <Customer v-if="modal_type === 'Customer'" @cancelModal="cancelModal" />
    </Modal>
  </div>
</template>

<script>
  import Customer from '@/components/vip-details/customer-info/customer'
  export default {
    name: 'CustomerInfo',
    components: { Customer },
    data: function () {
      return {
        is_show_modal: false,
        modal_title: '添加自定义客情记录',
        modal_type: 'Customer',
        blood_type: '',
        blood_type_list: [
          {
            value: '1',
            label: 'A型',
          },
          {
            value: '2',
            label: 'B型',
          },
          {
            value: '3',
            label: 'AB型',
          },
          {
            value: '4',
            label: 'O型',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        character: '',
        character_list: [
          {
            value: '1',
            label: '内向',
          },
          {
            value: '2',
            label: '外向',
          },
          {
            value: '3',
            label: '内外兼修',
          },
        ],
        marriage: '',
        marriage_list: [
          {
            value: '1',
            label: '已婚',
          },
          {
            value: '2',
            label: '未婚',
          },
          {
            value: '3',
            label: '离异',
          },
          {
            value: '4',
            label: '再婚',
          },

          {
            value: '0',
            label: '未告知',
          },
        ],
        religion: '',
        religion_list: [
          {
            value: '1',
            label: '佛教',
          },
          {
            value: '2',
            label: '道教',
          },
          {
            value: '3',
            label: '伊斯兰教',
          },
          {
            value: '4',
            label: '天主教',
          },
          {
            value: '5',
            label: '无宗教信仰',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        concept: '',
        concept_list: [
          {
            value: '1',
            label: '健康意识',
          },
          {
            value: '2',
            label: '预防意识',
          },
          {
            value: '3',
            label: '美丽意识',
          },
          {
            value: '0',
            label: '无意识',
          },
        ],
        dietary: '',
        dietary_list: [
          {
            value: '1',
            label: '早餐',
          },
          {
            value: '2',
            label: '午餐',
          },
          {
            value: '3',
            label: '宵夜',
          },
          {
            value: '4',
            label: '肉食',
          },
          {
            value: '5',
            label: '素食',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        love: '',
        love_list: [
          {
            value: '1',
            label: '糕点',
          },
          {
            value: '2',
            label: '咖啡',
          },
          {
            value: '3',
            label: '饮料',
          },
          {
            value: '4',
            label: '水果',
          },
          {
            value: '5',
            label: '素菜',
          },
          {
            value: '6',
            label: '辛辣',
          },
          {
            value: '7',
            label: '清淡',
          },
          {
            value: '8',
            label: '咸味',
          },
          {
            value: '9',
            label: '甜食',
          },
          {
            value: '10',
            label: '煎炸',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        live: '',
        live_list: [
          {
            value: '1',
            label: '购物',
          },
          {
            value: '2',
            label: '服装',
          },
          {
            value: '3',
            label: '珠宝',
          },
          {
            value: '4',
            label: '名车',
          },
          {
            value: '5',
            label: '名表',
          },
          {
            value: '6',
            label: '健身房',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        relaxation: '',
        relaxation_list: [
          {
            value: '1',
            label: '美容',
          },
          {
            value: '2',
            label: '旅游',
          },
          {
            value: '3',
            label: '音乐',
          },
          {
            value: '4',
            label: '唱歌',
          },
          {
            value: '5',
            label: '舞蹈',
          },
          {
            value: '6',
            label: '慈善',
          },
          {
            value: '7',
            label: '打麻将',
          },
          {
            value: '8',
            label: '看书',
          },
          {
            value: '9',
            label: '养花',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        consumption: '',
        consumption_list: [
          {
            value: '1',
            label: '理性',
          },
          {
            value: '2',
            label: '冲动',
          },
          {
            value: '3',
            label: '贪小便宜',
          },
        ],
        sleep: '',
        sleep_list: [
          {
            value: '1',
            label: '很好',
          },
          {
            value: '2',
            label: '一般',
          },
          {
            value: '3',
            label: '失眠',
          },
          {
            value: '4',
            label: '多梦',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        sleep_quality: '',
        sleep_quality_list: [
          {
            value: '1',
            label: '23点前',
          },
          {
            value: '2',
            label: '23点后',
          },
          {
            value: '3',
            label: '凌晨1点后',
          },
          {
            value: '4',
            label: '不定时',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        before_sleeping_habits: '',
        before_sleeping_habits_list: [
          {
            value: '1',
            label: '睡前喝水',
          },
          {
            value: '2',
            label: '睡前吃点东西',
          },
          {
            value: '3',
            label: '早晨起床后喝水',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        nature_office: '',
        nature_office_list: [
          {
            value: '1',
            label: '室内办公',
          },
          {
            value: '2',
            label: '市区流动',
          },
          {
            value: '3',
            label: '常外地出差',
          },
          {
            value: '4',
            label: '本地做生意',
          },
          {
            value: '5',
            label: '压力大',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        balance_sheets: '',
        balance_sheets_list: [
          {
            value: '1',
            label: '工薪（10-100万）',
          },
          {
            value: '2',
            label: '中产（100-500万）',
          },
          {
            value: '3',
            label: '富人（500以上）',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        social_background: '',
        social_background_list: [
          {
            value: '1',
            label: '有',
          },
          {
            value: '2',
            label: '无',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        social_status: '',
        social_status_list: [
          {
            value: '1',
            label: '有',
          },
          {
            value: '2',
            label: '无',
          },
          {
            value: '0',
            label: '未告知',
          },
        ],
        credibility: '',
        credibility_list: [
          {
            value: '1',
            label: '认可企业',
          },
          {
            value: '2',
            label: '认可效果',
          },
          {
            value: '3',
            label: '认可服务',
          },
        ],
        service_requirement: '',
        service_requirement_list: [
          {
            value: '1',
            label: '注重细节',
          },
          {
            value: '2',
            label: '不受力',
          },
          {
            value: '3',
            label: '有洁癖',
          },
          {
            value: '4',
            label: '要求固定理疗师',
          },
          {
            value: '5',
            label: '注重产品品质',
          },
        ],
      }
    },
    created() {
      console.log('VipInfo')
    },
    methods: {
      showCustomer() {
        this.is_show_modal = true
        this.modal_title = '添加自定义客情记录'
        this.modal_type = 'Customer'
      },
      cancelModal(status) {
        this.is_show_modal = status
      },
    },
  }
</script>

<style lang="less" scoped>
  .CustomerInfo {
    .header {
      .right {
        float: right;
        width: 100px;
        margin-right: 10px;
        .add-bt {
          width: 100px;
          text-align: center;
          color: white;
          margin-right: 20px;
          cursor: pointer;
          background: #db528d;
          padding: 6px 14px;
          border-radius: 4px;
        }
      }
    }

    .content {
      display: flex;

      .box {
        width: 400px;
        flex-flow: wrap;
        align-items: center;
        font-size: 14px;
        padding: 0 5px;
        border-right: 1px solid #eeeeee;
        .row {
          flex: 1;
          display: flex;

          .l {
            padding: 0 10px;
            font-size: 14px;
            height: 37px;
            line-height: 37px;
            width: 100px;
            text-align: right;
          }

          .r {
            height: 37px;
            line-height: 37px;
          }
        }
      }
    }
  }
</style>
