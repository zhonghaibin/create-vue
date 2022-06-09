<template>
  <div class="box">
    <Row>
      <Col class="column" span="12">业务跟踪</Col>
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
              <TodayEvent
                v-if="item.name === '今日事项' && tab_index === '今日事项'"
              />
              <ShopRemindList
                v-if="item.name === '到店预警' && tab_index === '到店预警'"
              />
              <ImportantDateList
                v-if="item.name === '重要日期' && tab_index === '重要日期'"
              />
              <ReturnVisit
                v-if="item.name === '回访汇总' && tab_index === '回访汇总'"
              />
              <ServicesRemind
                v-if="item.name === '服务提醒' && tab_index === '服务提醒'"
              />
            </TabPane>
          </Tabs>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
  import ServicesRemind from '@/components/business-track/services-remind'
  import ReturnVisit from '@/components/business-track/return-visit'
  import ImportantDateList from '@/components/business-track/important-date-list'
  import ShopRemindList from '@/components/business-track/shop-remind-list'
  import TodayEvent from '@/components/business-track/today-event'
  export default {
    name: 'Index',
    components: {
      ServicesRemind,
      ReturnVisit,
      ImportantDateList,
      ShopRemindList,
      TodayEvent,
    },
    data: function () {
      return {
        tab_index: '今日事项',
        tab_list: [
          { name: '今日事项', id: 1 },
          { name: '到店预警', id: 2 },
          { name: '重要日期', id: 3 },
          { name: '回访汇总', id: 4 },
          { name: '服务提醒', id: 5 },
        ],
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
        let divHeight = orgTreeHeight - 230
        this.$refs.tab.style.minHeight = divHeight + 'px'
        console.log(orgTreeHeight, divHeight)
      },
      handleTabClick(index) {
        this.tabHeight()
        this.tab_index = index
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
