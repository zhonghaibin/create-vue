<template>
  <div class="VipGiftRecord">
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
        <!--        <div class="box">-->
        <!--          <span class="text">赠送来源</span>-->
        <!--          <Select v-model="gift_source" style="width: 200px" transfer>-->
        <!--            <Option-->
        <!--              v-for="item in gift_source_list"-->
        <!--              :key="item.value"-->
        <!--              :value="item.value"-->
        <!--            >-->
        <!--              {{ item.label }}-->
        <!--            </Option>-->
        <!--          </Select>-->
        <!--        </div>-->
        <div class="box">
          <span class="text">赠送类型</span>
          <Select v-model="searchData.type" style="width: 200px" transfer>
            <Option
              v-for="item in giftTypeList"
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
            placeholder="可搜索赠送内容"
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
        <template slot="action"></template>
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
  import { getGiveList } from '@/api/vip'

  export default {
    name: 'VipGiftRecord',
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        gift_source: '0',
        gift_source_list: [
          {
            value: '0',
            label: '全部',
          },
          {
            value: '1',
            label: '随手赠送',
          },
          {
            value: '2',
            label: '手动赠送',
          },
        ],
        giftTypeList: [
          {
            value: '0',
            label: '全部',
          },
          {
            value: '1',
            label: '商品',
          },
          {
            value: '2',
            label: '项目',
          },
        ],
        columns: [
          {
            title: '获赠时间',
            key: 'time',
            width: '200px',
          },
          {
            title: '赠送门店',
            key: 'shop_name',
          },
          {
            title: '赠送来源',
            key: 'card_name',
          },
          {
            title: '赠送类型',
            key: 'type_name',
          },
          {
            title: '赠送内容',
            key: 'data_name',
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
        this.getGiveList()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getGiveList()
      },

      search() {
        this.searchData.p = 1
        this.getGiveList()
      },
      async getGiveList() {
        this.loading = true
        const { data } = await getGiveList(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipGiftRecord {
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
      margin-right: 20px;
    }
  }
</style>
