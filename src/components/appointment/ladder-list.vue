<template>
  <div class="LadderList">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            v-model="searchData.search"
            enter-button
            placeholder="搜索方案名称"
            search
            style="width: 250px"
            @on-search="changeValue"
          />
        </div>
      </div>
      <div class="right">
        <div class="add-bt" @click="showModal('阶梯提成设置', 'Ladder', 1200)">
          新赠方案
        </div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">编辑</span>
          <span class="bt">删除</span>
          <span class="bt">查看</span>
        </template>
      </Table>
      <div class="page">
        <Page
          :current="page.current"
          :page-size="page.pageSize"
          show-elevator
          show-sizer
          size="small"
          :total="page.total"
          @on-change="currentPage"
          @on-page-size-change="pageSizeChange"
        />
      </div>
    </div>
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :title="modal.title"
      :width="modal.width"
    >
      <Ladder v-if="modal.type === 'Ladder'" />
    </Modal>
  </div>
</template>

<script>
  import Ladder from '@/components/appointment/ladder-list/ladder'
  export default {
    name: 'LadderList',
    components: { Ladder },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        modal: {
          show: false,
          title: '',
          type: false,
          width: 500,
        },
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        columns: [
          {
            title: '提成方案名称',
            key: 'name',
            width: '200px',
          },
          {
            title: '提成类型',
            key: 'name',
          },
          {
            title: '计算周期',
            key: 'name',
          },
          {
            title: '计算方式',
            key: 'name',
          },
          {
            title: '适用职位',
            key: 'name',
          },
          {
            title: '适用门店',
            key: 'name',
          },
          {
            title: '操作',
            slot: 'action',
            width: 200,
            align: 'center',
          },
        ],
        list: [
          {
            name: 1,
          },
        ],
        searchData: { search: '' },
        date: [],
      }
    },
    activated() {},
    created() {},
    methods: {
      changeValue() {},
      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
      search() {},
      showModal(title, type, width = 500) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.modal.width = width
      },
    },
  }
</script>

<style lang="less" scoped>
  .LadderList {
    .search {
      display: flex;
      padding: 10px;
      background: white;
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        .box {
          margin-right: 20px;
          .text {
            font-weight: bold;
            margin: 0 5px;
          }
        }
      }
      .right {
        display: flex;
        flex-flow: wrap;
        align-items: center;
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
      margin-top: 10px;
      .page {
        height: 40px;
        padding: 8px 0;
        text-align: center;
        background: white;
      }
    }

    .bt {
      color: #1298e6;
      margin-right: 20px;
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
