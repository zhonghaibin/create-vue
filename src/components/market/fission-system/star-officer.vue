<template>
  <div class="box">
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <StarOfficerList
          v-if="item.name === '星推官列表' && tab_index === '星推官列表'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import StarOfficerList from '@/components/market/fission-system/star-officer/star-officer-list'
  export default {
    name: 'StarOfficer',
    components: { StarOfficerList },
    data: function () {
      return {
        tab_index: '星推官列表',
        tab_list: [
          { name: '星推官列表', id: 1 },
          { name: '推荐奖励详情', id: 2 },
          { name: '星推官发展星推官记录', id: 3 },
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
