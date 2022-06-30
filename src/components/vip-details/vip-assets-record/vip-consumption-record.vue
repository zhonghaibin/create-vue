<template>
  <div class="VipConsumptionRecord">
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
          <span class="text">消费类型</span>
          <Select v-model="searchData.type" style="width: 200px" transfer>
            <Option
              v-for="item in typeList"
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
            clearable
            enter-button
            placeholder="可搜索服务人员/消费内容"
            search
            style="width: 250px"
            @on-clear="search"
            @on-search="search"
          />
        </div>
      </div>
      <div class="right"><div class="bt">导出报表</div></div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list" :loading="loading">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">查看</span>
        </template>
      </Table>
    </div>

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
</template>

<script>
  import { getCapital } from '@/api/vip'

  export default {
    name: 'VipConsumptionRecord',
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        typeList: [
          {
            value: '0',
            label: '全部',
          },
          {
            value: '1',
            label: '收银',
          },
          {
            value: '2',
            label: '套餐',
          },
          {
            value: '3',
            label: '充值',
          },
          {
            value: '4',
            label: '退款',
          },
        ],
        columns: [
          {
            title: '消费时间',
            key: 'time',
            width: '200px',
          },
          {
            title: '消费门店',
            key: 'shop_name',
          },
          {
            title: '服务/销售人员',
            render: (h, params) => {
              let list = []
              params.row.staff.forEach((item) => {
                list.push(
                  h(
                    'div',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    item
                  )
                )
              })

              let html = h('div', [h('div', list)])

              return html
            },
          },
          {
            title: '消费类型',
            key: 'title',
          },
          {
            title: '消费内容',
            render: (h, params) => {
              let list = []
              params.row.content.forEach((item) => {
                list.push(
                  h(
                    'div',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    item
                  )
                )
              })

              let html = h('div', [h('div', list)])

              return html
            },
          },
          {
            title: '消费金额',
            key: 'total',
            render: (h, params) => {
              let html = h('div', [
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '￥' + params.row.total
                  ),
                  h(
                    'span',
                    {
                      style: {
                        borderRadius: '4px',
                        border: '1px solid #ccc',
                        padding: '0px 2px',
                        height: '10px',
                        cursor: 'pointer',
                        marginLeft: '4px',
                        display: 'none',
                      },
                    },
                    '业绩'
                  ),
                ]),
              ])

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
          type: '',
          is_check: '',
          p: 1,
          page: 5,
        },
        loading: false,
        page: {
          total: 0,
          pageSize: 5,
          current: 1,
        },
      }
    },
    created() {
      this.search()
    },
    methods: {
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
        this.getCapital()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getCapital()
      },

      search() {
        this.searchData.p = 1
        this.getCapital()
      },
      async getCapital() {
        this.loading = true
        const { data } = await getCapital(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipConsumptionRecord {
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
    }
    .page {
      height: 40px;
      padding: 8px 0;
      text-align: center;
      background: white;
    }
    .bt {
      color: #1298e6;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>
