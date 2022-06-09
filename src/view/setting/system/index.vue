<template>
  <div class="box">
    <Row>
      <Col class="column" span="12">系统设置</Col>
    </Row>
    <Row>
      <Col>
        <div ref="tab" class="tab">
          <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
            <TabPane
              v-for="item in tab_list"
              :key="item.id"
              :label="item.name"
              :name="item.name"
            >
              <PayList
                v-if="item.name === '支付方式' && tab_index === '支付方式'"
              />
              <Appointment
                v-if="item.name === '预约设置' && tab_index === '预约设置'"
              />
              <Cashier
                v-if="item.name === '收银设置' && tab_index === '收银设置'"
              />
              <VipSet
                v-if="item.name === '会员设置' && tab_index === '会员设置'"
              />
              <SpendTypeList
                v-if="
                  item.name === '支出类别设置' && tab_index === '支出类别设置'
                "
              />
              <TagList
                v-if="item.name === '标签管理' && tab_index === '标签管理'"
              />
              <CustomFieldList
                v-if="item.name === '自定义字段' && tab_index === '自定义字段'"
              />
              <Attendance
                v-if="item.name === '考勤设置' && tab_index === '考勤设置'"
              />
              <PushTemplateList
                v-if="
                  item.name === '企业微信推送' && tab_index === '企业微信推送'
                "
              />
            </TabPane>
          </Tabs>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import PayList from '@/components/setting/system/pay-list'
  import PushTemplateList from '@/components/setting/system/push-template-list'
  import CustomFieldList from '@/components/setting/system/custom-field-list'
  import TagList from '@/components/setting/system/tag-list'
  import SpendTypeList from '@/components/setting/system/spend-type-list'
  import Appointment from '@/components/setting/system/appointment'
  import Cashier from '@/components/setting/system/cashier'
  import VipSet from '@/components/setting/system/vip-set'
  import Attendance from '@/components/setting/system/attendance'
  export default {
    name: 'Index',
    components: {
      PayList,
      TagList,
      CustomFieldList,
      PushTemplateList,
      SpendTypeList,
      Appointment,
      Cashier,
      VipSet,
      Attendance,
    },
    data: function () {
      return {
        tab_index: '支付方式',
        tab_list: [
          { name: '支付方式', id: 1 },
          { name: '预约设置', id: 2 },
          { name: '收银设置', id: 3 },
          { name: '会员设置', id: 4 },
          { name: '支出类别设置', id: 5 },
          { name: '标签管理', id: 6 },
          { name: '自定义字段', id: 7 },
          { name: '考勤设置', id: 8 },
          { name: '企业微信推送', id: 9 },
        ],
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.tabHeight()
      })
    },
    methods: {
      handleTabClick(index) {
        this.tabHeight()
        this.tab_index = index
      },
      tabHeight() {
        let orgTreeHeight = window.innerHeight
        let divHeight = orgTreeHeight - 210

        this.$refs.tab.style.minHeight = divHeight + 'px'
        console.log(orgTreeHeight, divHeight)
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
</style>
