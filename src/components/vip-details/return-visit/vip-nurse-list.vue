<template>
  <div class="VipNurseList">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            enter-button
            placeholder="搜索护理内容/护理人员"
            search
            style="width: 250px"
            @on-search="changeValue"
          />
        </div>
        <div class="box">
          <DatePicker
            format="yyyy-MM-dd"
            placeholder="开始时间-结束时间"
            style="width: 200px"
            transfer
            type="datetimerange"
            value-format="yyyy-MM-dd"
            @on-change="changeDatePicker"
            @on-clear="clearDate"
            @on-open-change="changeDatePicker"
          />
        </div>
      </div>
      <div class="right">
        <div class="add-bt" @click="showModal('添加护理档案', 'VipNurse')">
          添加护理档案
        </div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">编辑</span>
          <span class="bt">删除</span>
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
    <div>
      <Modal
        v-model="modal.show"
        :footer-hide="true"
        :title="modal.title"
        :width="700"
      >
        <VipNurse v-if="modal.type === 'VipNurse'" />
      </Modal>
    </div>
  </div>
</template>

<script>
  import VipNurse from '@/components/vip-details/return-visit/vip-nurse'
  export default {
    name: 'VipNurseList',
    components: { VipNurse },
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
            title: '护理时间',
            key: 'name',
            width: '200px',
          },
          {
            title: '下次护理时间',
            key: 'name',
          },
          {
            title: '护理人员',
            key: 'name',
          },
          {
            title: '护理项目',
            key: 'name',
          },
          {
            title: '护理详情',
            key: 'name',
          },
          {
            title: '附件',
            key: 'name',
          },
          {
            title: '店长批阅',
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
        searchData: { search: '', start: '', end: '' },
        modal: {
          show: false,
          title: '',
          type: false,
        },
      }
    },
    activated() {},
    created() {},
    methods: {
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },

      changeValue() {},
      clearDate() {
        this.searchData.start = ''
        this.searchData.end = ''
        this.search()
      },
      changeDatePicker: function (date) {
        if (date) {
          this.searchData.start = date[0]
          this.searchData.end = date[1]
        }
        this.search()
      },
      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
      search() {},
    },
  }
</script>

<style lang="less" scoped>
  .VipNurseList {
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
