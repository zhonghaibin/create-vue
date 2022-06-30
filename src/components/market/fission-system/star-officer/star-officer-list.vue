<template>
  <div class="box">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">门店</span>
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
          <Input
            v-model="searchData.search"
            enter-button
            placeholder="输入星推官姓名/手机号"
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
        <div class="box"><div class="add-bt">导出</div></div>
      </div>
      <div class="right">
        <div class="add-bt" @click="showModal('添加星推官', 'StarOfficer')">
          添加星推官
        </div>
      </div>
    </div>
    <div class="header">
      <div class="header-box">
        <div class="header-row">
          <div class="header-cell">累计获得分红：22</div>
          <div class="header-cell">可用分红：22</div>
          <div class="header-cell">已用分红：22</div>
        </div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <div class="bt">编辑</div>
          <div class="bt">删除</div>
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
      :width="600"
    >
      <StarOfficer v-if="modal.type === 'StarOfficer' && modal.show" />
    </Modal>
  </div>
</template>

<script>
  import StarOfficer from '@/components/market/fission-system/star-officer/star-officer'
  export default {
    name: 'StarOfficerList',
    components: { StarOfficer },
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
        },
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        store_list: [],
        store: '',
        event_type_list: [],
        event_type: '',
        columns: [
          {
            title: '所属门店',
            key: 'time',
          },
          {
            title: '星推官信息',
            key: 'suname',
          },
          {
            title: '星推官等级',
            key: 'name',
          },
          {
            title: '投入金额',
            key: 'info',
          },
          {
            title: '规则',
            key: 'info',
          },
          {
            title: '分红百分比',
            key: 'info',
          },
          {
            title: '累计所得分红',
            key: 'info',
          },
          {
            title: '累计已使用分红',
            key: 'info',
          },
          {
            title: '可使用分红',
            key: 'info',
          },
          {
            title: '银行卡号',
            key: 'info',
          },
          {
            title: '身份到期时间',
            key: 'info',
          },
          {
            title: '添加时间',
            key: 'info',
          },
          {
            title: '操作',
            slot: 'action',

            align: 'center',
          },
        ],
        list: [
          {
            info: 1,
          },
        ],
        searchData: { search: '', start: '', end: '' },
      }
    },
    activated() {},
    created() {},
    methods: {
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
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
    },
  }
</script>

<style lang="less" scoped>
  .box {
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
    .header {
      background: white;
      .header-box {
        background: #daebff;
        border-radius: 10px;
        .header-row {
          width: 600px;
          margin: 0 auto;
          height: 60px;
          line-height: 60px;
          display: flex;
          .header-cell {
            width: 300px;
          }
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
