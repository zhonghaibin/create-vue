<template>
  <div class="VipDividendsInfo">
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
      <div class="right">
        <div class="add-bt" @click="showModal('添加寄存商品', 'Deposit')">
          添加寄存商品
        </div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list" :loading="loading">
        <!-- slot对应data里面的slot-->
        <template slot-scope="{ row }" slot="action">
          <span class="bt" @click="showModal('操作存取商品', 'Take', row)">
            存取商品
          </span>
        </template>
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
    <Modal v-model="modal.show" :footer-hide="true" :title="modal.title">
      <Deposit
        v-if="modal.type === 'Deposit' && modal.show"
        :member-info="memberInfo"
        @cancelModal="cancelModal"
        @changeDeposit="changeDeposit"
      />
      <Take
        v-if="modal.type === 'Take' && modal.show"
        :deposit="deposit"
        :member-info="memberInfo"
        @cancelModal="cancelModal"
        @changeDeposit="changeDeposit"
      />
    </Modal>
  </div>
</template>

<script>
  import Deposit from '@/components/vip-details/vip-goods-deposit/deposit'
  import Take from '@/components/vip-details/vip-goods-deposit/take'
  import { getGoodsDeposit } from '@/api/vip'
  export default {
    name: 'VipDividendsInfo',
    components: {
      Deposit,
      Take,
    },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        deposit: {},
        modal: {
          show: false,
          title: '',
          type: false,
        },
        columns: [
          {
            title: '寄存时间',
            key: 'addtime',
            width: '200px',
          },
          {
            title: '寄存商品名称',
            key: 'goods_name',
          },
          {
            title: '数量',
            key: 'use_num',
          },

          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
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
      showModal(title, type, data = {}) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.deposit = data
      },
      cancelModal(status) {
        this.modal.show = status
      },
      currentPage(current) {
        this.page.current = current
        this.searchData.p = current
        this.getGoodsDeposit()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.searchData.page = pageSize
        this.getGoodsDeposit()
      },
      search() {
        this.searchData.p = 1
        this.getGoodsDeposit()
      },
      async getGoodsDeposit() {
        this.loading = true
        const { data } = await getGoodsDeposit(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
      changeDeposit() {
        this.modal.show = false
        this.search()
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipDividendsInfo {
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
