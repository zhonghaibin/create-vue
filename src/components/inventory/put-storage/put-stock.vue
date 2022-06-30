<template>
  <div class="box">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">仓库/门店</span>
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
          <span class="text">入库时间</span>
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
          <span class="text">入库类型</span>
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
          <span class="text">供应商</span>
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
          <span class="text">经办人</span>
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
      </div>
      <div class="right">
        <div class="add-bt" @click="showModal('选择入库商品', 'GoodsList')">
          选择入库商品
        </div>
      </div>
    </div>

    <div class="list">
      <table>
        <thead>
          <tr>
            <td class="color">商品编号</td>
            <td class="color">商品名称</td>
            <td class="color">单位</td>
            <td class="color">当前库存</td>
            <td class="color" style="width: 120px">入库数量</td>
            <td class="color">成本价</td>
            <td class="color">成本总额</td>
            <td class="color">生产日期</td>
            <td class="color">保质期（月）</td>
            <td class="color">批号</td>
            <td class="color" style="width: 140px">备注</td>
            <td class="color">操作</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>￥0</td>
            <td>￥0</td>
            <td>0</td>
            <td><Input placeholder="" /></td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><Input placeholder="" /></td>
            <td><div class="bt">删除</div></td>
          </tr>
          <tr>
            <td>合计</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>2</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">制单人:郭贝贝</td>

            <td colspan="10">
              备注:
              <Input placeholder="" style="width: 200px" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colspan="3">
              <div class="add-bt" style="width: 100px; float: right">提交</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :scrollable="modal.scrollable"
      :styles="modal.styles"
      :title="modal.title"
      :width="modal.width"
    >
      <GoodsList v-if="modal.type === 'GoodsList' && modal.show" />
    </Modal>
  </div>
</template>

<script>
  import GoodsList from '@/components/inventory/goods-list'
  export default {
    name: 'PutStock',
    components: { GoodsList },
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
          width: 1000,
          scrollable: true,
          styles: { top: '50px' },
        },
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        store_list: [],
        store: '',
        event_type_list: [],
        event_type: '',
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
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.modal.width = window.innerWidth - 300
      },

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
          display: flex;
          align-items: center;
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

    .color {
      background: #fdeff5;
    }

    .list {
      margin-top: 10px;
      border-top: 1px solid #eeeeee;
      padding: 16px;
      table {
        text-align: center;
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
        tr {
          td {
            height: 40px;
            border: 1px solid #f8f8f8;
            .text {
              color: #1298e6;
              cursor: pointer;
            }
          }
        }
      }
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
