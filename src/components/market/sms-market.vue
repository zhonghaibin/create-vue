<template>
  <div class="box">
    <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <SendSms v-if="item.name === '发短信' && tab_index === '发短信'" />
        <SmsSet v-if="item.name === '短信设置' && tab_index === '短信设置'" />
        <SmsRecharge
          v-if="item.name === '余量与充值' && tab_index === '余量与充值'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import SmsSet from '@/components/market/sms-market/sms-set'
  import SmsRecharge from '@/components/market/sms-market/sms-recharge'
  import SendSms from '@/components/market/sms-market/send-sms'

  export default {
    name: 'SmsMarket',
    components: { SendSms, SmsRecharge, SmsSet },
    data: function () {
      return {
        tab_index: '发短信',
        tab_list: [
          { name: '发短信', id: 1 },
          { name: '短信设置', id: 2 },
          { name: '短信模板管理', id: 3 },
          { name: '余量与充值', id: 4 },
          { name: '手动群发记录', id: 5 },
          { name: '系统推送记录', id: 6 },
        ],
      }
    },
    methods: {
      handleTabClick(index) {
        this.tab_index = index
      },
    },
  }
</script>
<style lang="less" scoped>
  /deep/.ivu-tabs-bar {
    margin-bottom: 0;
  }
</style>
