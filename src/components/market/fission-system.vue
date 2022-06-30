<template>
  <div class="box">
    <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <StarOfficer
          v-if="item.name === '星推官管理' && tab_index === '星推官管理'"
        />
        <YiYe v-if="item.name === '异业管理' && tab_index === '异业管理'" />
        <RulesSet v-if="item.name === '规则设置' && tab_index === '规则设置'" />
        <ExperienceCard
          v-if="item.name === '体验卡设置' && tab_index === '体验卡设置'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import StarOfficer from '@/components/market/fission-system/star-officer'
  import YiYe from '@/components/market/fission-system/yi-ye'
  import ExperienceCard from '@/components/market/fission-system/experience-card'
  import RulesSet from '@/components/market/fission-system/rules-set'

  export default {
    name: 'FissionSystem',
    components: { RulesSet, ExperienceCard, YiYe, StarOfficer },
    data: function () {
      return {
        tab_index: '星推官管理',
        tab_list: [
          { name: '星推官管理', id: 1 },
          { name: '异业管理', id: 2 },
          { name: '规则设置', id: 3 },
          { name: '体验卡设置', id: 4 },
          { name: '提现记录', id: 5 },
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
