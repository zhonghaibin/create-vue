<template>
  <div class="goodsTop">
    <div class="title">
      <div class="cell">
        <Icon style="font-size: 24px; color: #f19ec2" type="ios-trophy" />
        商品销量TOP
      </div>
      <div class="cell">
        <Select v-model="store" transfer>
          <Option
            v-for="item in store_list"
            :key="item.value"
            :value="item.value"
          >
            {{ item.label }}
          </Option>
        </Select>
      </div>
    </div>
    <div class="date">
      <div class="date-time">
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

      <div class="add-bt">导出</div>
    </div>
    <div class="list">
      <table class="table">
        <thead>
          <tr>
            <th>排名</th>
            <th>商品名</th>
            <th>销售额</th>
            <th>销量</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01</td>
            <td>骨盆修复</td>
            <td>￥32132</td>
            <td>1000</td>
          </tr>
          <tr>
            <td>02</td>
            <td>骨盆修复</td>
            <td>￥32132</td>
            <td>1000</td>
          </tr>
        </tbody>
      </table>
      <div class="page">
        <Page
          :current="page.current"
          :page-size="page.pageSize"
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
    name: 'GoodsTop',
    data: function () {
      return {
        store_list: [],
        store: '',
        list: [
          {
            info: 1,
          },
        ],
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        searchData: { end: '', start: '' },
      }
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
      },
      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
    },
  }
</script>

<style lang="less" scoped>
  .goodsTop {
    border: 1px solid #edbad0;
    background: white;
    .title {
      align-items: center;
      display: flex;
      padding: 12px;
      font-weight: bold;
      font-size: 14px;
      color: black;
      .cell {
        flex: 1;
        padding: 0 2px;
      }
    }
    .date {
      display: flex;
      text-align: left;
      padding-left: 8px;
      padding-bottom: 8px;
      .date-time {
        flex: 1;
      }
    }
    .list {
      .table {
        border-spacing: 0;
        width: 100%;
        text-align: center;
        background: white;
      }
      tr {
        color: black;
        height: 40px;
        th {
          background: #ffe1ef;
        }
        td {
          border-bottom: 1px solid #eeeeee;
        }
        .text {
          color: #1298e6;
          cursor: pointer;
        }
      }
      .page {
        height: 40px;
        padding: 8px 0;
        text-align: center;
        background: white;
      }
    }
    .add-bt {
      margin-right: 10px;
      color: white;
      cursor: pointer;
      background: #f19ec2;
      padding: 6px 14px;
      border-radius: 4px;
      margin-bottom: 1px;
    }
  }
</style>
