<template>
  <div class="InventoryWarningList">
    <div class="left-box">
      <div class="search">
        <div class="left">
          <div class="box">
            <span class="text">门店</span>
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
          <div class="box">
            <span class="text">分类</span>
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
          <div class="box">
            <span class="text">品牌</span>
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
          <div class="box">
            <Input
              v-model="searchData.search"
              enter-button
              placeholder="可搜索商品名称/编号"
              search
            />
          </div>
        </div>
        <div class="right">
          <div class="add-bt">导出</div>
        </div>
      </div>
      <div ref="content" class="content">
        <div class="list">
          <Table :columns="columns" :data="list">
            <!-- slot对应data里面的slot-->
            <template slot="action">
              <div class="bt">查看入库明细</div>
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
    </div>
    <div class="right-box">
      <GoodsTop />
    </div>

    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :title="modal.title"
      :width="modal.width"
    />
  </div>
</template>

<script>
  import GoodsTop from '@/components/inventory/overview/goods-top'
  export default {
    name: 'InventoryWarningList',
    components: { GoodsTop },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        modal: {
          show: false,
          title: '',
          type: false,
          width: 600,
        },
        columns: [
          {
            title: '仓库/门店',
            key: 'time',
            width: '200px',
          },
          {
            title: '商品分类',
            key: 'suname',
          },
          {
            title: '商品名称',
            key: 'name',
          },
          {
            title: '品牌',
            key: 'info',
          },
          {
            title: '单位',
            key: 'info',
          },
          {
            title: '库存数量',
            key: 'info',
          },
          {
            title: '库存下限',
            key: 'info',
          },
          {
            title: '预警值 ',
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
            info: 1,
          },
        ],
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        store_list: [],
        store: '',
        searchData: { start: '', end: '' },
      }
    },
    computed: {},
    activated() {},
    created() {},
    mounted() {
      this.setHeight()
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
      showModal(title, type, width) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.modal.width = width
      },

      save() {},
      setHeight() {},
    },
  }
</script>

<style lang="less" scoped>
  .InventoryWarningList {
    position: relative;
    display: flex;
    .left-box {
      width: 80%;
      .search {
        display: flex;
        padding: 10px 0;
        background: white;
        .left {
          flex: 1;
          display: flex;
          .box {
            display: flex;
            margin-right: 20px;
            align-items: center;
            .text {
              font-weight: bold;
              margin: 0 5px;
              display: block;
              padding: 0 2px;
              width: 100%;
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
      .content {
        margin-top: 20px;
        background: white;
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
    }
    .right-box {
      margin-left: 10px;
      width: 320px;
      float: right;
    }

    .bt {
      color: #1298e6;
      margin-right: 20px;
      cursor: pointer;
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
