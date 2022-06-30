<template>
  <div class="box">
    <Tabs v-model="tab_index" type="card" @on-click="handleTabClick">
      <TabPane
        v-for="item in tab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <Client v-if="item.name === '客户预约' && tab_index === '客户预约'" />
        <Temporary
          v-if="item.name === '临时占用' && tab_index === '临时占用'"
        />
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  import Client from '@/components/appointment/card/appointment/client'
  import Temporary from '@/components/appointment/card/appointment/temporary'
  export default {
    name: 'Appointment',
    components: { Client, Temporary },
    data: function () {
      return {
        tab_index: '客户预约',
        tab_list: [
          { name: '客户预约', id: 1 },
          { name: '临时占用', id: 2 },
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
