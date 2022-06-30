<template>
  <div class="VipCardList">
    <Table :columns="columns1" :data="data1">
      <!-- slot对应data里面的slot-->

      <template slot="action"></template>
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
            title: '使用范围',
            key: 'username',
          },
          {
            title: '指定门店',
            key: 'money',
          },
          {
            title: '独立折扣',
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
  .VipCardList {
    .bt {
      color: #1298e6;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>
