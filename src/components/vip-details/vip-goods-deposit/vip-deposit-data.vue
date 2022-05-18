<template>
  <div class="VipDividendsInfo">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            enter-button
            placeholder="搜索商品名称"
            search
            style="width: 300px"
          />
        </div>
      </div>
      <div class="right">
        <div class="add-bt" @click="addDepositGoods">添加寄存商品</div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt" @click="takeGoods">取走商品</span>
        </template>
      </Table>
    </div>

    <div class="page">
      <Page show-elevator show-sizer size="small" :total="40" transfer />
    </div>
    <Modal v-model="is_show_modal" :footer-hide="true" :title="modal_title">
      <Deposit v-if="modal_type === 'Deposit'" @cancelModal="cancelModal" />
      <Take v-if="modal_type === 'Take'" @cancelModal="cancelModal" />
    </Modal>
  </div>
</template>

<script>
  import Deposit from '@/components/vip-details/vip-goods-deposit/deposit'
  import Take from '@/components/vip-details/vip-goods-deposit/take'
  export default {
    name: 'VipDividendsInfo',
    components: {
      Deposit,
      Take,
    },
    data: function () {
      return {
        is_show_modal: false,
        modal_title: '添加寄存商品',
        modal_type: 'Deposit',
        columns1: [
          {
            title: '寄存时间',
            key: 'name',
            width: '200px',
          },
          {
            title: '寄存商品名称',
            key: 'username',
          },
          {
            title: '数量',
            key: 'money',
          },
          {
            title: '操作人',
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
            name: 'John Brown',
            username: 18,
            money: 'New York No. 1 Lake Park',
            count: '2016-10-03',
          },
        ],
      }
    },
    created() {},
    methods: {
      addDepositGoods() {
        this.is_show_modal = true
        this.modal_title = '添加寄存商品'
        this.modal_type = 'Deposit'
      },
      takeGoods() {
        this.is_show_modal = true
        this.modal_title = '操作取走商品'
        this.modal_type = 'Take'
      },
      cancelModal(status) {
        this.is_show_modal = status
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
      display: flex;
      justify-content: center;
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
    }
  }
</style>
