<template>
  <div class="box">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">门店</span>
          <Select v-model="store" style="width: 180px" transfer>
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
          <DatePicker
            format="yyyy-MM-dd"
            placeholder="开始时间-结束时间"
            style="width: 180px"
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
            enter-button
            placeholder="搜索员工姓名"
            search
            style="width: 200px"
            @on-search="changeValue"
          />
        </div>
        <div class="box">
          <span class="text">在职</span>
          <Select v-model="event_type" style="width: 100px" transfer>
            <Option
              v-for="item in event_type_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="right">
        <div class="add-bt">导出</div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <div class="bt">校准</div>
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
  </div>
</template>

<script>
  export default {
    name: 'AttendanceList',
    components: {},
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
        event_type_list: [],
        event_type: '',
        columns: [
          {
            title: '员工姓名',
            key: 'time',
          },
          {
            title: '当天排班',
            key: 'suname',
          },
          {
            title: '当天上班时间',
            key: 'name',
          },
          {
            title: '当天下班时间',
            key: 'info',
          },
          {
            title: '上班考勤情况',
            key: 'info',
            render: (h, params) => {
              console.log(params)
              let html = h('div', [
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '08:00'
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '北京路(外出)'
                  ),
                ]),
              ])

              return html
            },
          },
          {
            title: '状态',
            key: 'info',
          },
          {
            title: '下班考勤情况',
            key: 'info',
            render: (h, params) => {
              console.log(params)
              let html = h('div', [
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '08:00'
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '北京路(外出)'
                  ),
                ]),
              ])

              return html
            },
          },
          {
            title: '状态',
            key: 'info',
          },
          {
            title: '操作',
            slot: 'action',
            width: 250,
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
    .checkbox-bt {
      padding: 6px 14px;
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
