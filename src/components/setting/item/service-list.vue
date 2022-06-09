<template>
  <div class="service-list">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            enter-button
            placeholder="输入项目分类/项目名称"
            search
            style="width: 250px"
            @on-search="changeValue"
          />
        </div>
        <div class="box">
          <span class="text">项目分类</span>
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
        <div class="add-bt" @click="showModal('新增项目', 'Service')">
          新增项目
        </div>
        <div class="add-bt">导入项目</div>
        <div class="add-bt">导出项目</div>
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
      <Service v-if="modal.type === 'Service'" @cancelModal="cancelModal" />
    </Modal>
  </div>
</template>

<script>
  import Service from '@/components/setting/item/service'
  export default {
    name: 'ServiceList',
    components: { Service },
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
            title: '项目分类',
            key: 'name',
            width: '200px',
          },
          {
            title: '项目名称',
            key: 'name',
          },
          {
            title: '所属部门',
            key: 'name',
          },
          {
            title: '销售价',
            key: 'name',
          },
          {
            title: '项目时长',
            key: 'name',
          },
          {
            title: '项目状态',
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
      cancelModal(status) {
        this.modal.show = status
      },
    },
  }
</script>

<style lang="less" scoped>
  .service-list {
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
      .page {
        height: 40px;
        padding: 8px 0;
        text-align: center;
        background: white;
      }
    }

    .bt {
      color: blue;
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
