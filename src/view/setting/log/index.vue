<template>
  <div class="index">
    <div class="search">
      <div class="left">
        <div class="box">
          <Input
            v-model="searchData.search"
            enter-button
            placeholder="可模糊搜索"
            search
            style="width: 300px"
            @on-search="changeValue"
          />
        </div>
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
          <span class="text">事件类型</span>
          <Select v-model="event_type" style="width: 200px" transfer>
            <Option
              v-for="item in event_type_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
        <div class="box">
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
      </div>
      <div class="right">
        <div class="add-bt">导出记录</div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action"></template>
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
    name: 'Index',
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
            title: '事件类型',
            key: 'time',
            width: '200px',
          },
          {
            title: '操作事件',
            key: 'suname',
          },
          {
            title: '操作时间',
            key: 'name',
          },
          {
            title: '操作门店',
            key: 'info',
          },
          {
            title: '操作人',
            key: 'info',
          },
        ],
        list: [],
        searchData: { search: '', start_time: '', end_time: '' },
        date: [],
      }
    },
    activated() {},
    created() {},
    methods: {
      changeValue() {},
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
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
      search() {},
    },
  }
</script>

<style lang="less" scoped>
  .index {
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
      background: #f19ec2;
      padding: 6px 14px;
      border-radius: 4px;
    }
  }
</style>
