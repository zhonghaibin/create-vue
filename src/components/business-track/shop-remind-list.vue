<template>
  <div class="ShopRemindList">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">门店</span>
          <Select v-model="store" style="width: 200px" transfer>
            <Option
              v-for="item in storeList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
        <div class="box">
          <span class="text">预警不超过</span>
          <Input placeholder="输入预警天数" style="width: 100px" />
          天
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
        storeList: [],
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
                  '曾文敏'
                ),

                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  '13813131313'
                ),
              ])
              console.log(params)
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
            key: 'info',
          },
          {
            title: '超出天数',
            key: 'info',
          },
          {
            title: '专属产康师',
            key: 'info',
          },
          {
            title: '专属顾问',
            key: 'info',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        list: [
          {
            name: 1,
          },
        ],
        searchData: { search: '' },
        date: [],
      }
    },
    activated() {},
    created() {},
    methods: {
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
      cancelModal(status) {
        this.modal.show = status
      },
      changeValue() {},

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
  .ShopRemindList {
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
      margin-bottom: 1px;
    }
  }
</style>
