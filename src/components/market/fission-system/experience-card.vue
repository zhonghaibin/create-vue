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
    name: 'ExperienceCard',
    components: {},
    data: function () {
      return {
        tab_index: '体验卡列表',
        tab_list: [
          { name: '体验卡列表', id: 1 },
          { name: '领卡详情', id: 2 },
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
