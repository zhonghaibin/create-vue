<template>
  <div class="VipRemindList">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            v-model="searchData.search"
            enter-button
            placeholder=""
            search
            style="width: 250px"
            @on-clear="search"
            @on-search="search"
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
      <Table :columns="columns" :data="list" :loading="loading">
        <!-- slot对应data里面的slot-->
        <template slot-scope="{ row }" slot="action">
          <!--          <span class="bt">查看详情</span>-->
          <!--          <br />-->
          <span
            v-if="row.is_send === '0'"
            class="bt"
            @click="warningCancel(row)"
          >
            取消提醒
          </span>
          <span v-else class="bt">--</span>
          <span v-if="row.status !== 2" class="bt" @click="warningStatus(row)">
            确认执行
          </span>
          <span v-else class="bt">--</span>
        </template>
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
    <div>
      <Modal
        v-model="modal.show"
        :footer-hide="true"
        :title="modal.title"
        :width="700"
      >
        <VipRemind
          v-if="modal.type === 'VipRemind' && modal.show"
          :member-info="memberInfo"
          @change="change"
        />
      </Modal>
    </div>
  </div>
</template>

<script>
  import VipRemind from '@/components/vip-details/return-visit/vip-remind'
  import { getWarningList, setWarningCancel, setWarningStatus } from '@/api/vip'
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
        loading: false,
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
            title: '提醒时间',
            key: 'time',
            width: '200px',
          },
          {
            title: '提醒人员',
            key: 'staff_name',
          },
          {
            title: '提醒内容',
            key: 'info',
          },
          {
            title: '状态',
            key: 'status_name',
          },
          {
            title: '操作',
            slot: 'action',
            width: 200,
            align: 'center',
          },
        ],
        list: [],
        searchData: {
          search: '',
          start: '',
          end: '',
          vid: this.memberInfo.id,
          p: 1,
          page: 5,
        },
        modal: {
          show: false,
          title: '',
          type: false,
        },
      }
    },
    activated() {},
    created() {
      this.search()
    },
    methods: {
      showModal(title, type, data = {}) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.data = data
      },

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
        this.searchData.p = current
        this.getWarningList()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getWarningList()
      },
      change() {
        this.modal.show = false
        this.search()
      },
      search() {
        this.searchData.p = 1
        this.getWarningList()
      },
      async getWarningList() {
        this.loading = true
        const { data } = await getWarningList(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
      warningCancel(row) {
        this.$Modal.confirm({
          title: '警告？',
          content: '确定要取消提醒吗？',
          onOk: () => {
            this.setWarningCancel(row)
          },
          onCancel: () => {},
        })
      },
      async setWarningCancel(row) {
        const { status, msg } = await setWarningCancel({
          warning_id: row.id,
          vid: this.memberInfo.id,
        })
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.$Message.success(msg)
          this.search()
        }
      },
      warningStatus(row) {
        this.$Modal.confirm({
          title: '警告？',
          content: '确定要确认执行吗？',
          onOk: () => {
            this.setWarningStatus(row)
          },
          onCancel: () => {},
        })
      },
      async setWarningStatus(row) {
        const { status, msg } = await setWarningStatus({
          warning_id: row.id,
          vid: this.memberInfo.id,
          status: 2,
        })
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.$Message.success(msg)
          this.search()
        }
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipRemindList {
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
