<template>
  <div class="VipIntegralRecord">
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
          <span class="text">规则类型</span>
          <Select
            v-model="searchData.type"
            clearable
            style="width: 200px"
            transfer
            @on-change="search"
            @on-clear="search"
          >
            <Option
              v-for="item in typeList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="right"><div class="bt">导出报表</div></div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <template slot="action">
          <span class="bt">查看详情</span>
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
  import { getIntegralList } from '@/api/vip'

  export default {
    name: 'VipIntegralRecord',
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
            label: '增加',
          },
          {
            value: '2',
            label: '扣除',
          },
        ],

        columns: [
          {
            title: '时间',
            key: 'time',
            width: '200px',
          },
          {
            title: '生产门店',
            key: 'shop_name',
          },
          {
            title: '积分规则',
            key: 'name',
          },
          {
            title: '规则类型',
            key: 'type_name',
          },
          {
            title: '积分内容',
            render: (h, params) => {
              console.log(params)
              let html = h('div', [
                // 插入文本
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      params.row.type_name + ':' + params.row.integral
                    ),
                  ]
                ),

                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '现有：' + params.row.vip_integral
                    ),
                  ]
                ),
              ])

              return html
            },
          },
          {
            title: '备注',
            key: 'info',
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
          type: '',
          vip_id: this.memberInfo.vip_id,
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
        this.getIntegralList()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getIntegralList()
      },

      search() {
        this.searchData.p = 1
        this.getIntegralList()
      },
      async getIntegralList() {
        this.loading = true
        const { data } = await getIntegralList(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipIntegralRecord {
    .search {
      display: flex;
      padding: 2px;
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
    }
    .page {
      height: 40px;
      padding: 8px 0;
      text-align: center;
      background: white;
    }
    .bt {
      color: blue;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>
