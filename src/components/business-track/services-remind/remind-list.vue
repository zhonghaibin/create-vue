<template>
  <div class="RemindList">
    <Table :columns="columns1" :data="data1">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot="action"></template>
    </Table>
  </div>
</template>

<script>
  export default {
    name: 'RemindList',
    data: function () {
      return {
        columns1: [
          {
            title: '提醒时间',
            key: 'name',
          },
          {
            title: '提醒状态',
            key: 'username',
          },
          {
            title: '提醒方式',
            key: 'money',
          },
          {
            title: '提醒备注',
            key: 'count',
          },
          {
            title: '操作',
            key: 'money1',
          },
        ],
        data1: [
          {
            name: 'John Brown',
            username: 18,
            money: 'New York No. 1 Lake Park',
            count: '2016-10-03',
            money1: '2016-10-03',
          },
        ],
      }
    },
  }
</script>

<style lang="less" scoped></style>
