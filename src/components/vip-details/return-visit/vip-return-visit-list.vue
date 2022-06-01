<template>
  <div class="VipReturnVisitList">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">时间</span>
          <DatePicker
            v-model="date"
            format="yyyy-MM-dd"
            placeholder="开始时间-结束时间"
            style="width: 280px"
            transfer
            type="datetimerange"
            value-format="yyyy-MM-dd"
            @on-change="searchData.date = $event"
            @on-clear="clearDate"
            @on-open-change="changeDatePicker(searchData.date)"
          />
        </div>
        <div class="box">
          <Input
            v-model="searchData.search"
            enter-button
            placeholder="搜索回访内容"
            search
            style="width: 300px"
            @on-search="changeValue"
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
    <Modal v-model="modal.show" :footer-hide="true" :title="modal.title">
      <VipReturnVisit
        v-if="modal.type === 'VipReturnVisit'"
        @cancelModal="cancelModal"
      />
    </Modal>
  </div>
</template>

<script>
  import VipReturnVisit from '@/components/vip-details/return-visit/vip-return-visit'
  import { getMemberVisitList } from '@/api/vip'
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
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        modal: {
          show: false,
          title: '',
          type: false,
        },
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
              let html = h(
                'div',
                {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                  },
                },
                [
                  h(
                    'div',
                    {
                      style: {
                        width: '40px',
                        height: '40px',
                        position: 'relative',
                        borderRadius: '100%',
                      },
                    },
                    [
                      h('img', {
                        attrs: {
                          src: params.row.img,
                        },
                        style: {
                          width: '40px',
                          height: '40px',
                          overflow: 'hidden',
                        },
                      }),
                    ]
                  ),
                ]
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
        searchData: { search: '', start_time: '', end_time: '' },
        date: [],
      }
    },
    activated() {
      this.getMemberVisitList()
    },
    created() {
      this.getMemberVisitList()
    },
    methods: {
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
      cancelModal(status) {
        this.modal.show = status
      },
      changeValue() {
        this.getMemberVisitList()
      },
      clearDate() {
        this.searchData.start_time = ''
        this.searchData.end_time = ''
      },
      changeDatePicker: function (date) {
        if (date) {
          this.searchData.start_time = date[0]
          this.searchData.end_time = date[1]
        }
      },
      currentPage(current) {
        this.page.current = current
        this.getMemberList()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getMemberList()
      },
      search() {
        this.getMemberList()
      },
      async getMemberVisitList() {
        this.$set(this.searchData, 'vid', this.memberInfo.id)
        this.$set(this.searchData, 'page', this.page.pageSize)
        this.$set(this.searchData, 'p', this.page.current)
        const { data } = await getMemberVisitList(this.searchData)
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipReturnVisitList {
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
    .add-bt {
      color: white;
      margin-right: 20px;
      cursor: pointer;
      background: #db528d;
      padding: 6px 14px;
      border-radius: 4px;
    }
  }
</style>
