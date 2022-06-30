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
          <span class="text">时间</span>
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
        <div class="box">
          <span class="text">全部职位</span>
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
        <Checkbox class="checkbox-bt">包含跨店数据</Checkbox>
        <span class="explain">?字段说明</span>
        <div class="add-bt">导出</div>
      </div>
    </div>
    <div class="filter">
      <div class="left">数据筛选</div>
      <div class="right">
        <div v-for="(item, index) in filterList" :key="index" class="cell">
          <Checkbox class="checkbox-bt">{{ item.label }}</Checkbox>
        </div>
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
    name: 'StaffDataList',
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
        filterList: [
          {
            label: '总业绩',
            value: '1',
          },
          {
            label: '项目业绩',
            value: '2',
          },

          {
            label: '商品业绩',
            value: '3',
          },
          {
            label: '套餐次卡业绩',
            value: '4',
          },
          {
            label: '储值卡业绩',
            value: '5',
          },
          {
            label: '优惠券业绩',
            value: '6',
          },
          {
            label: '爆品业绩',
            value: '7',
          },
          {
            label: '耗卡',
            value: '8',
          },
          {
            label: '赠品耗卡',
            value: '9',
          },
          {
            label: '项目数',
            value: '10',
          },
          {
            label: '服务客人(客次)',
            value: '11',
          },
          {
            label: '服务散客',
            value: '12',
          },
          {
            label: '服务新客(客次)',
            value: '13',
          },
          {
            label: '服务老客(客次)',
            value: '14',
          },
          {
            label: '服务新客数',
            value: '15',
          },
          {
            label: '服务老客数',
            value: '16',
          },
          {
            label: '新会员转卡率',
            value: '17',
          },
          {
            label: '客单价(按客次)',
            value: '18',
          },
          {
            label: '客单价(按客数)',
            value: '19',
          },
          {
            label: '总服务时间长',
            value: '20',
          },
        ],
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
            title: '总业绩',
            key: 'suname',
          },
          {
            title: '项目业绩',
            key: 'name',
          },
          {
            title: '商品业绩',
            key: 'info',
          },
          {
            title: '套餐次卡业绩',
            key: 'info',
          },
          {
            title: '储值卡业绩',
            key: 'info',
          },
          {
            title: '优惠券业绩',
            key: 'info',
          },
          {
            title: '爆品业绩',
            key: 'info',
          },
          {
            title: '耗卡',
            key: 'info',
          },
          {
            title: '赠品耗卡',
            key: 'info',
          },
          {
            title: '项目数',
            key: 'info',
          },
          {
            title: '服务客人(客次)',
            key: 'info',
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
    .filter {
      margin-top: 10px;
      padding: 10px;
      display: flex;
      background: white;

      .left {
        width: 50px;
        font-weight: bold;
      }
      .right {
        flex: 1;
        display: flex;
        flex-flow: wrap;
        .cell {
          min-width: 150px;
          padding: 0 4px;
        }
      }
    }
    .list {
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
    .explain {
      border: 1px solid #e1e1e1;
      padding: 2px 4px;
      border-radius: 4px;
      margin-right: 10px;
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
