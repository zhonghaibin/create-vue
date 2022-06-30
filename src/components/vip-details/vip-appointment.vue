<template>
  <div class="VipAppointment">
    <div class="search">
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
          enter-button
          placeholder="可搜索服务人员/预约内容"
          search
          style="width: 250px"
          @on-search="search"
        />
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list" :loading="loading" />
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
        columns: [
          {
            title: '预约时间',
            key: 'make_time',
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
        searchData: {
          vip_id: this.memberInfo.vip_id,
          search: '',
          start: '',
          end: '',
          page: 5,
          p: 1,
        },
        page: {
          total: 0,
          pageSize: 5,
          current: 1,
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
        this.getMemberAppointmentList()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getMemberAppointmentList()
      },
      search() {
        this.searchData.p = 1
        this.getMemberAppointmentList()
      },
      async getMemberAppointmentList() {
        this.loading = true
        const { data } = await getMemberAppointmentList(this.searchData)
        this.loading = false
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
      padding: 10px;
      background: white;
      .box {
        margin-right: 20px;
        .text {
          font-weight: bold;
          margin: 0 5px;
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
  }
</style>
