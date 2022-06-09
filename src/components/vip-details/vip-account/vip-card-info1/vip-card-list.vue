<template>
  <div class="VipCardList">
    <Table :columns="columns" :data="list" :loading="loading">
      <!-- slot对应data里面的slot-->

      <template slot="action">
        <span class="bt">立即消费</span>
      </template>
    </Table>
  </div>
</template>

<script>
  import { getVipCardDetails } from '@/api/vip'

  export default {
    name: 'VipCardList',
    props: {
      cardVid: {
        type: Number,
        default: () => 0,
      },
    },
    data: function () {
      return {
        loading: true,
        columns: [
          {
            title: '项目名称',
            key: 'name',
          },
          {
            title: '类别',
            key: 'type_name',
          },
          {
            title: '余次',
            key: 'use_num',
          },
          {
            title: '单次耗卡金额',
            key: 'card_hkprice',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        list: [],
        searchData: {},
      }
    },
    activated() {
      this.search()
    },
    created() {
      this.search()
    },
    methods: {
      search() {
        this.$set(this.searchData, 'card_vid', this.cardVid)
        this.getVipCardDetails()
      },
      async getVipCardDetails() {
        this.loading = true
        const { data } = await getVipCardDetails(this.searchData)
        this.loading = false
        console.log(data)
        this.list = data.list
      },
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
