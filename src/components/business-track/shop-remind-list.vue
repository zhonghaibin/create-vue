<template>
  <div class="ShopRemindList">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">选择门店：</span>
          <Select
            v-model="searchData.sid"
            clearable
            filterable
            style="width: 200px"
          >
            <div slot="empty">未找到数据</div>
            <Option v-for="item in shopList" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <span class="text">预警不超过</span>
          <Input
            v-model="searchData.day"
            placeholder="输入预警天数"
            style="width: 100px"
          />
          天
        </div>
      </div>
      <div class="right">
        <div class="add-bt">导出</div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list" :loading="loading">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">添加回访</span>
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
    <Modal v-model="modal.show" :footer-hide="true" :title="modal.title" />
  </div>
</template>

<script>
  import { cashierWarning, getShopList } from '@/api/vip'

  export default {
    name: 'ShopRemindList',
    components: {},
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        loading: false,
        shopList: [],
        store: '',
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        modal: {
          show: false,
          title: '',
          type: false,
        },
        columns: [
          {
            title: '会员信息',
            key: 'suname',
            render: (h, params) => {
              let html = h('div', [
                // 插入文本
                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  params.row.name
                ),

                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  params.row.tel
                ),
              ])
              return html
            },
          },
          {
            title: '所属门店',
            key: 'name',
          },
          {
            title: '套餐次卡',
            key: 'name',
          },
          {
            title: '消费总次数',
            key: 'order_num',
          },
          {
            title: '超出天数',
            key: 'over_time',
          },
          {
            title: '专属产康师',
            key: 'adviser_name',
          },
          {
            title: '专属顾问',
            key: 'dispose_staff_name',
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
          p: 1,
          page: 5,
          sid: '',
          day: '',
        },
      }
    },
    activated() {},
    created() {
      this.getShopList()
      this.search()
    },
    methods: {
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },

      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
      search() {
        this.searchData.p = 1
        this.cashierWarning()
      },
      async cashierWarning() {
        this.loading = true
        const { data } = await cashierWarning(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
      async getShopList() {
        const { data } = await getShopList({
          search: '',
          page: '1000',
        })
        this.shopList = data.list
      },
    },
  }
</script>

<style lang="less" scoped>
  .ShopRemindList {
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
