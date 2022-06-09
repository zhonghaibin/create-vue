<template>
  <div class="VipDepositDetails">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            v-model="searchData.search"
            clearable
            enter-button
            placeholder="搜索商品名称"
            search
            style="width: 250px"
            @on-clear="search"
            @on-search="search"
          />
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list" :loading="loading">
        <!-- slot对应data里面的slot-->
        <template slot="action"></template>
      </Table>
    </div>

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
  import { getGoodsDepositLog } from '@/api/vip'

  export default {
    name: 'VipDepositDetails',
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        columns: [
          {
            title: '寄存时间',
            key: 'addtime',
            width: '200px',
          },
          {
            title: '寄存类型',
            key: 'type_name',
          },
          {
            title: '寄存商品名称',
            key: 'goods_name',
          },
          {
            title: '寄存数量',
            key: 'use_num',
          },
          {
            title: '寄取后剩余数量',
            key: 'count',
          },
        ],
        list: [],
        searchData: {
          p: 1,
          vid: this.memberInfo.id,
          search: '',
          search2: '',
          sid: '',
          page: 5,
        },
        page: {
          total: 0,
          pageSize: 5,
          current: 1,
        },
        loading: false,
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
        this.searchData.p = current
        this.getGoodsDepositLog()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.searchData.page = pageSize
        this.getGoodsDepositLog()
      },
      search() {
        this.searchData.p = 1
        this.getGoodsDepositLog()
      },
      async getGoodsDepositLog() {
        this.loading = true
        const { data } = await getGoodsDepositLog(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipDepositDetails {
    .search {
      display: flex;
      padding: 2px 10px;
      .left {
        flex: 1;
        display: flex;
        .box {
          margin-right: 20px;
          .text {
            font-weight: bold;
            margin: 0px 5px;
          }
        }
      }
      .right {
        .bt {
          border: 1px solid #c1c1c1;
          color: #000;
          display: inline-block;
          margin-bottom: 0;
          font-weight: 400;
          text-align: center;
          vertical-align: middle;
          touch-action: manipulation;
          cursor: pointer;
          white-space: nowrap;
          line-height: 1.5;
          -webkit-user-select: none;
          -ms-user-select: none;
          user-select: none;
          padding: 5px 15px 6px;
          font-size: 12px;
          border-radius: 4px;
          transition: color 0.2s linear, background-color 0.2s linear,
            border 0.2s linear, box-shadow 0.2s linear;
        }
      }
    }
    .list {
      margin-top: 20px;
    }
    .page {
      clear: both;
      height: 40px;
      padding: 8px 0;
      text-align: center;
      background: white;
    }
    .bt {
      color: blue;
      margin-right: 4px;
      cursor: pointer;
    }
    .add-bt {
      color: white;
      margin-right: 20px;
      cursor: pointer;
      background: #f19ec2;
      padding: 6px 14px;
      border-radius: 4px;
      margin-bottom: 1px;
    }
  }
</style>
