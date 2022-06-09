<template>
  <div class="VipConsumptionList">
    <Table :columns="columns" :data="list" :loading="loading">
      <!-- slot对应data里面的slot-->
      <template slot="action"></template>
    </Table>
    <div class="page">
      <Page
        :current="page.current"
        :page-size="page.pageSize"
        show-elevator
        size="small"
        :total="page.total"
        @on-change="currentPage"
        @on-page-size-change="pageSizeChange"
      />
    </div>
  </div>
</template>

<script>
  import { getVipCardOrderInfo } from '@/api/vip'

  export default {
    name: 'VipConsumptionList',
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
            title: '耗卡门店',
            key: 'shop_name',
          },
          {
            title: '耗卡金额',
            key: 'hk_price',
          },
          {
            title: '消耗次数',
            key: 'number',
          },
          {
            title: '服务人员',
            key: 'staff_name',
          },
          {
            title: '服务时间',
            key: 'time',
            width: '150px',
          },
        ],
        list: [],
        searchData: {
          page: 5,
          p: 1,
        },
        page: {
          total: 0,
          pageSize: 5,
          current: 1,
        },
      }
    },
    activated() {
      this.search()
    },
    created() {
      this.search()
    },
    methods: {
      currentPage(current) {
        this.page.current = current
        this.getVipCardOrderInfo()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getVipCardOrderInfo()
      },
      search() {
        this.$set(this.searchData, 'card_vid', this.cardVid)
        this.searchData.p = 1
        this.getVipCardOrderInfo()
      },
      async getVipCardOrderInfo() {
        this.loading = true
        const { data } = await getVipCardOrderInfo(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
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
  .page {
    clear: both;
    height: 40px;
    padding: 8px 0;
    text-align: center;
    background: white;
  }
</style>
