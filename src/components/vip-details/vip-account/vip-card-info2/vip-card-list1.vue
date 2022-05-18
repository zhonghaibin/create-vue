<template>
  <div class="VipCardList1">
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
    name: 'VipCardList1',
    data: function () {
      return {
        columns1: [
          {
            title: '名称',
            key: 'username',
          },
          {
            title: '类别',
            key: 'money',
          },
          {
            title: '金额/次数',
            key: 'count',
          },
          {
            title: '当前剩余',
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
  .VipCardList1 {
    .bt {
      color: blue;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>
