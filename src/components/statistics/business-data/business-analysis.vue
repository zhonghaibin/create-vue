<template>
  <div class="box">
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <BusinessAnalysisList
          v-if="item.name === '经营分析' && tab_index === '经营分析'"
        />
        <CustomerUnitPriceAnalysis
          v-if="item.name === '客单价分析' && tab_index === '客单价分析'"
        />
        <PassengerFlowAnalysis
          v-if="item.name === '客流分析' && tab_index === '客流分析'"
        />
        <StorePeopleWork
          v-if="item.name === '门店人效' && tab_index === '门店人效'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import BusinessAnalysisList from '@/components/statistics/business-data/business-analysis/business-analysis-list'
  import CustomerUnitPriceAnalysis from '@/components/statistics/business-data/business-analysis/customer-unit-price-analysis'
  import StorePeopleWork from '@/components/statistics/business-data/business-analysis/store-people-work'
  import PassengerFlowAnalysis from '@/components/statistics/business-data/business-analysis/passenger-flow-analysis'
  export default {
    name: 'BusinessAnalysis',
    components: {
      PassengerFlowAnalysis,
      StorePeopleWork,
      CustomerUnitPriceAnalysis,
      BusinessAnalysisList,
    },
    data: function () {
      return {
        tab_index: '经营分析',
        tab_list: [
          { name: '经营分析', id: 1 },
          { name: '客单价分析', id: 2 },
          { name: '客流分析', id: 3 },
          { name: '门店人效', id: 4 },
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
<style lang="less" scoped></style>
