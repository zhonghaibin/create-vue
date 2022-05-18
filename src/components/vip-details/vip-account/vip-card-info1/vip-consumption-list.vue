<template>
  <div class="VipConsumptionList">
    <Table :columns="columns1" :data="data1">
      <!-- slot对应data里面的slot-->
      <template slot="action"></template>
    </Table>
  </div>
</template>

<script>
  export default {
    name: 'VipConsumptionList',
    data: function () {
      return {
        columns1: [
          {
            title: '耗卡门店',
            key: 'name',
          },
          {
            title: '耗卡金额',
            key: 'username',
          },
          {
            title: '消耗次数',
            key: 'money',
          },
          {
            title: '服务人员',
            key: 'count',
          },
          {
            title: '服务时间',
            key: 'count',
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
