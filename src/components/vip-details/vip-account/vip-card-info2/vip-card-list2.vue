<template>
  <div class="VipCardList2">
    <Table :columns="columns1" :data="data1">
      <!-- slot对应data里面的slot-->

      <template slot="action"></template>
    </Table>
  </div>
</template>

<script>
  export default {
    name: 'VipCardList2',
    data: function () {
      return {
        columns1: [
          {
            title: '消费时间',
            key: 'username',
          },
          {
            title: '消费内容',
            key: 'money',
          },
          {
            title: '服务人员',
            key: 'count',
          },
          {
            title: '消费前余额',
            key: 'count',
          },
          {
            title: '消费',
            key: 'count',
          },
          {
            title: '余额',
            key: 'count',
          },
        ],
        data1: [
          {
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
  .VipCardList2 {
    .bt {
      color: blue;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>
