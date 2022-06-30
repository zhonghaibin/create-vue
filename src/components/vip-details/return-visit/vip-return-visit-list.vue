<template>
  <div class="VipReturnVisitList">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">时间</span>
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
        <div class="box">
          <Input
            v-model="searchData.search"
            clearable
            enter-button
            placeholder="搜索回访内容"
            search
            style="width: 250px"
            @on-clear="search"
            @on-search="search"
          />
        </div>
      </div>
      <div class="right">
        <div class="add-bt" @click="showModal('添加回访', 'VipReturnVisit')">
          添加回访
        </div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list" :loading="loading">
        <!-- slot对应data里面的slot-->
        <template slot-scope="{ row }" slot="action">
          <span
            class="bt"
            @click="showModal('编辑回访', 'VipReturnVisit', row)"
          >
            编辑
          </span>
          <span class="bt" @click="delVisitAct(row.id)">删除</span>
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
    <Modal v-model="modal.show" :footer-hide="true" :title="modal.title">
      <VipReturnVisit
        v-if="modal.type === 'VipReturnVisit' && modal.show"
        :data="data"
        :member-info="memberInfo"
        @change="change"
      />
      <img
        v-if="modal.type === 'Look' && modal.show"
        :src="file"
        style="width: 100%"
      />
    </Modal>
  </div>
</template>

<script>
  import VipReturnVisit from '@/components/vip-details/return-visit/vip-return-visit'
  import { getMemberVisitList, delVisitAct } from '@/api/vip'
  export default {
    name: 'VipReturnVisitList',
    components: {
      VipReturnVisit,
    },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        data: {},
        page: {
          total: 0,
          pageSize: 5,
          current: 1,
        },
        modal: {
          show: false,
          title: '',
          type: false,
        },
        file: '',
        columns: [
          {
            title: '回访日期',
            key: 'time',
            width: '200px',
          },
          {
            title: '回访人员',
            key: 'suname',
          },
          {
            title: '回访主题',
            key: 'name',
          },
          {
            title: '回访内容',
            key: 'info',
          },
          {
            title: '附件',
            key: 'money1',
            render: (h, params) => {
              let arr = []
              if (params.row.img) {
                arr = [
                  h(
                    'span',
                    {
                      on: {
                        click: () => {
                          this.file = params.row.img
                          this.showModal('预览查看', 'Look')
                        },
                      },
                      style: {
                        color: '#1298e6',
                        cursor: 'pointer',
                      },
                    },
                    '预览查看'
                  ),
                ]
              } else {
                arr = [h('span', '无')]
              }

              let html = h(
                'div',
                {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                  },
                },
                arr
              )

              return html
            },
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
          search: '',
          start: '',
          end: '',
          vid: this.memberInfo.id,
          p: 1,
          page: 5,
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
        this.data = data
      },

      change() {
        this.modal.show = false
        this.search()
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
        this.getMemberVisitList()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getMemberVisitList()
      },

      search() {
        this.searchData.p = 1
        this.getMemberVisitList()
      },
      async getMemberVisitList() {
        this.loading = true
        const { data } = await getMemberVisitList(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
      async delVisitAct(id) {
        const { status, msg } = await delVisitAct({
          visit_id: id,
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
  .VipReturnVisitList {
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
