<template>
  <div class="box">
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        22
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    name: 'SmsSet',
    components: {},
    data: function () {
      return {
        tab_index: '客户提醒',
        tab_list: [
          { name: '客户提醒', id: 1 },
          { name: '商家提醒', id: 2 },
          { name: '活动提醒', id: 3 },
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
