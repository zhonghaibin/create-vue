<template>
  <div class="VipCardList">
    <Table :columns="columns1" :data="data1">
      <!-- slot对应data里面的slot-->

      <template slot="action">
        <span class="bt">立即消费</span>
      </template>
    </Table>
  </div>
</template>

<script>
  export default {
    name: 'VipCardList',
    data: function () {
      return {
        columns1: [
          {
            title: '项目名称',
            key: 'name',
          },
          {
            title: '类别',
            key: 'username',
          },
          {
            title: '余次',
            key: 'money',
          },
          {
            title: '单次耗卡金额',
            key: 'count',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        data1: [
          {
            name: 'John Brown',
            username: 18,
            money: '11',
            count: '2016-10-03',
          },
        ],
      }
    },
  }
</script>

<style lang="less" scoped>
  .bt {
    color: blue;
    margin-right: 20px;
    cursor: pointer;
  }
</style>
