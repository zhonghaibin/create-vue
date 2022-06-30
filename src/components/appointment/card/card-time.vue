<template>
  <div class="box">
    <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <CardTimeList
          v-if="item.name === '设置列表' && tab_index === '设置列表'"
        />
        <CardTimeSet
          v-if="item.name === '时间设置' && tab_index === '时间设置'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import CardTimeList from '@/components/appointment/card/card-time/card-time-list'
  import CardTimeSet from '@/components/appointment/card/card-time/card-time-set'
  export default {
    name: 'CourseTime',
    components: { CardTimeSet, CardTimeList },
    data: function () {
      return {
        tab_index: '设置列表',
        tab_list: [
          { name: '设置列表', id: 1 },
          { name: '时间设置', id: 2 },
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
