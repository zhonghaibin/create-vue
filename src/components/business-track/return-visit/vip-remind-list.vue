<template>
  <div class="VipRemindList">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">门店</span>
          <Select v-model="store" style="width: 200px" transfer>
            <Option
              v-for="item in storeList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <Input
            enter-button
            placeholder=""
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
        <div class="add-bt" @click="showModal('添加提醒', 'VipRemind')">
          添加提醒
        </div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">查看详情</span>
          <br />
          <span class="bt">取消提醒</span>
          <span class="bt">确认执行</span>
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
        <VipRemind
          v-if="modal.type === 'VipRemind'"
          @cancelModal="cancelModal"
        />
      </Modal>
    </div>
  </div>
</template>

<script>
  import VipRemind from '@/components/vip-details/return-visit/vip-remind'
  export default {
    name: 'VipRemindList',
    components: { VipRemind },
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
        storeList: [],
        store: '',
        status_list: [],
        status: '',
        columns: [
          {
            title: '提醒时间',
            key: 'name',
            width: '200px',
          },
          {
            title: '会员信息',
            key: 'name',
            render: (h, params) => {
              let html = h('div', [
                // 插入文本
                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  '曾文敏'
                ),

                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  '13813131313'
                ),
              ])
              console.log(params)
              return html
            },
          },
          {
            title: '所属门店',
            key: 'name',
          },
          {
            title: '提醒人员',
            key: 'name',
          },
          {
            title: '提醒内容',
            key: 'name',
          },
          {
            title: '状态',
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
      cancelModal(status) {
        this.modal.show = status
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
  .VipRemindList {
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
