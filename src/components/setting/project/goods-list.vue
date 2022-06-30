<template>
  <div class="GoodsList">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            enter-button
            placeholder="输入分类名称/商品名称"
            search
            style="width: 250px"
            @on-search="changeValue"
          />
        </div>
        <div class="box">
          <span class="text">商品分类</span>
          <Select v-model="store" style="width: 200px" transfer>
            <Option
              v-for="item in store_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <span class="text">适用门店</span>
          <Select v-model="store" style="width: 200px" transfer>
            <Option
              v-for="item in store_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <span class="text">状态</span>
          <Select v-model="status" style="width: 200px" transfer>
            <Option
              v-for="item in status_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="right">
        <div class="add-bt" @click="showModal('新增商品', 'Goods')">
          新增商品
        </div>
        <div class="add-bt">导入商品</div>
        <div class="add-bt">导出商品</div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">编辑</span>
          <span class="bt">下架</span>
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
      :scrollable="modal.scrollable"
      :styles="modal.styles"
      :title="modal.title"
      :width="modal.width"
    >
      <Goods v-if="modal.type === 'Goods'" />
    </Modal>
  </div>
</template>

<script>
  import Goods from '@/components/setting/project/goods'
  export default {
    name: 'GoodsList',
    components: { Goods },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        store_list: [],
        store: '',
        status_list: [],
        status: '',
        columns: [
          {
            title: '商品分类',
            key: 'name',
            width: '200px',
          },
          {
            title: '商品编号',
            key: 'name',
          },
          {
            title: '商品名称',
            key: 'name',
          },
          {
            title: '商品售价',
            key: 'name',
          },
          {
            title: '商品状态',
            key: 'name',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        list: [
          {
            name: '11',
          },
        ],
        searchData: { search: '', start_time: '', end_time: '' },
        date: [],
        modal: {
          show: false,
          title: '',
          type: false,
          width: 1000,
          scrollable: true,
          styles: { top: '50px' },
        },
      }
    },
    activated() {},
    created() {},
    methods: {
      jumpUrl() {
        this.$router.push({
          name: 'setting.goods',
        })
      },
      changeValue() {},
      clearDate() {
        this.searchData.start = ''
        this.searchData.end = ''
      },
      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
      search() {},
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.modal.width = window.innerWidth - 300
      },
    },
  }
</script>

<style lang="less" scoped>
  .GoodsList {
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
    .right {
      display: flex;
      flex-flow: wrap;
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
  }
</style>
