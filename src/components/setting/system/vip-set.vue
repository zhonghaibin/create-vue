<template>
  <div class="Cashier">
    <Tabs
      v-model="tab_index"
      class="tab"
      size="small"
      @on-click="handleTabClick"
    >
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <SourceList
          v-if="item.name === '来源渠道设置' && tab_index === '来源渠道设置'"
        />
        <IntegralRuleList
          v-if="item.name === '积分规则设置' && tab_index === '积分规则设置'"
        />
        <IntegralEmptyRuleList
          v-if="
            item.name === '积分清空规则设置' && tab_index === '积分清空规则设置'
          "
        />
        <LifeCycleList
          v-if="item.name === '生命周期设置' && tab_index === '生命周期设置'"
        />
        <CustomerSwitchList
          v-if="item.name === '顾客开关设置' && tab_index === '顾客开关设置'"
        />
        <VipGradeList
          v-if="item.name === '会员级别设置' && tab_index === '会员级别设置'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import SourceList from '@/components/setting/system/vip-set/source-list'
  import IntegralRuleList from '@/components/setting/system/vip-set/integral-rule-list'
  import IntegralEmptyRuleList from '@/components/setting/system/vip-set/integral-empty-rule-list'
  import LifeCycleList from '@/components/setting/system/vip-set/life-cycle-list'
  import CustomerSwitchList from '@/components/setting/system/vip-set/customer-switch-list'
  import VipGradeList from '@/components/setting/system/vip-set/vip-grade-list'
  export default {
    name: 'Cashier',
    components: {
      SourceList,
      IntegralRuleList,
      IntegralEmptyRuleList,
      LifeCycleList,
      CustomerSwitchList,
      VipGradeList,
    },
    data: function () {
      return {
        tab_index: '来源渠道设置',
        tab_list: [
          { name: '来源渠道设置', id: 1 },
          { name: '积分规则设置', id: 2 },
          { name: '积分清空规则设置', id: 3 },
          { name: '生命周期设置', id: 4 },
          { name: '顾客开关设置', id: 5 },
          { name: '会员级别设置', id: 6 },
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
  /deep/.tab {
    padding-bottom: 10px;
    /deep/ .ivu-tabs-ink-bar {
      background: #cc749a;
    }
  }
</style>
