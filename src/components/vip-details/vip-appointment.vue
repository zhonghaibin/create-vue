<template>
  <div class="VipAppointment">
    <div class="search">
      <div class="box">
        <span class="text">时间</span>
        <DatePicker
          placeholder="开始时间-结束时间"
          style="width: 280px"
          type="datetimerange"
        />
      </div>
      <div class="box">
        <Input
          enter-button
          placeholder="可搜索服务人员/消费内容"
          search
          style="width: 300px"
        />
      </div>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1" />
    </div>
    <div class="page">
      <Page show-elevator show-sizer size="small" :total="40" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VipAppointment',
    data: function () {
      return {
        columns1: [
          {
            title: '预约时间',
            key: 'name',
            width: '200px',
          },
          {
            title: '预约门店',
            key: 'username',
          },
          {
            title: '预约产康师',
            key: 'money',
          },
          {
            title: '预约内容',
            key: 'count',
          },
          {
            title: '项目第X次',
            key: 'money1',
          },
          {
            title: '预约状态',
            key: 'source',
          },
        ],
        data1: [
          {
            name: 'John Brown',
            username: 18,
            money: 'New York No. 1 Lake Park',
            count: '2016-10-03',
            money1: '2016-10-03',
            source: '2016-10-03',
          },
        ],
      }
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
    }
    .page {
      display: flex;
      justify-content: center;
    }
  }
</style>
