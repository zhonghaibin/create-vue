<template>
  <div class="VipChangeList">
    <Table :columns="columns1" :data="data1">
      <!-- slot对应data里面的slot-->
      <template slot="action"></template>
    </Table>
  </div>
</template>

<script>
  export default {
    name: 'VipChangeList',
    data: function () {
      return {
        columns1: [
          {
            title: '员工姓名',
            key: 'name',
          },
          {
            title: '操作类型',
            key: 'username',
          },
          {
            title: '操作日志',
            key: 'money',
          },
          {
            title: '操作时间',
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
    color: #1298e6;
    margin-right: 20px;
    cursor: pointer;
  }
</style>
