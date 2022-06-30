<template>
  <div class="VipCardList2">
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
    name: 'VipCardList2',
    data: function () {
      return {
        columns1: [
          {
            title: '操作时间',
            key: 'username',
          },
          {
            title: '操作内容',
            key: 'money',
          },
          {
            title: '操作人',
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
      color: #1298e6;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>
