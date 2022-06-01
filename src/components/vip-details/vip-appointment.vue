<template>
  <div class="VipAppointment">
    <div class="search">
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
          placeholder="可搜索服务人员/消费内容"
          search
          style="width: 300px"
          @on-search="changeValue"
        />
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list" />
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
  import { getMemberAppointmentList } from '@/api/vip'

  export default {
    name: 'VipAppointment',
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
        columns: [
          {
            title: '预约时间',
            key: 'timeer',
            width: '200px',
          },
          {
            title: '预约门店',
            key: 'shop_name',
          },
          {
            title: '预约产康师',
            key: 'staff',
          },
          {
            title: '预约内容',
            key: 'service',
          },
          {
            title: '项目第X次',
            key: 'service_num',
          },
          {
            title: '预约状态',
            key: 'status_name',
          },
        ],
        list: [],
        searchData: { search: '', start: '', end: '' },
        date: [],
      }
    },
    activated() {
      this.getMemberAppointmentList()
    },
    created() {
      this.getMemberAppointmentList()
    },
    methods: {
      changeValue() {
        this.getMemberAppointmentList()
      },
      clearDate() {
        this.searchData.start = ''
        this.searchData.end = ''
      },
      changeDatePicker: function (date) {
        if (date) {
          this.searchData.start = date[0]
          this.searchData.end = date[1]
        }
      },
      currentPage(current) {
        this.page.current = current
        this.getMemberAppointmentList()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getMemberAppointmentList()
      },
      search() {
        this.getMemberAppointmentList()
      },
      async getMemberAppointmentList() {
        console.log('this.memeberInfo', this.memberInfo)
        this.$set(this.searchData, 'vip_id', this.memberInfo.vip_id)
        this.$set(this.searchData, 'page', this.page.pageSize)
        this.$set(this.searchData, 'p', this.page.current)
        const { data } = await getMemberAppointmentList(this.searchData)
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipAppointment {
    .search {
      display: flex;
      padding: 2px 10px;
      .box {
        margin-right: 20px;
        .text {
          font-weight: bold;
          margin: 0px 5px;
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
  }
</style>
