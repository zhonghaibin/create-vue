<template>
  <div class="box">
    <div class="column">成本核算</div>
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">门店</span>
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
          <span class="text">分类</span>
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
            placeholder="可搜索商品名称/编号"
            search
            style="width: 250px"
            @on-search="changeValue"
          />
        </div>
        <div class="box">
          <div class="add-bt">查询</div>
          <div class="add-bt">导出</div>
          <div class="add-bt" @click="showModal('成本调整', 'CostEdit')">
            成本调整
          </div>
          <div
            class="add-bt"
            @click="showModal('成本调整记录', 'CostEditList')"
          >
            成本调整记录
          </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="baseInfo">
      <div class="box color1">
        <div class="header"><span class="text">营业总数据</span></div>
        <div class="content">
          <div class="cell">￥2342342.22</div>
        </div>
      </div>
      <div class="box color2">
        <div class="header"><span class="text">收入金额明细</span></div>
        <div class="content">
          <div class="cell">￥2342342.22</div>
        </div>
      </div>
      <div class="box color3">
        <div class="header"><span class="text">收入来源统计</span></div>
        <div class="content">
          <div class="cell">￥2342342.22</div>
        </div>
      </div>
      <div class="box color4">
        <div class="header"><span class="text">客数客次统计</span></div>
        <div class="content">
          <div class="cell">￥2342342.22</div>
        </div>
      </div>
    </div>
    <div class="list">
      <table>
        <thead>
          <tr>
            <td class="color" rowspan="2">商品信息</td>
            <td class="color" rowspan="2">分类</td>
            <td class="color" rowspan="2">品牌</td>
            <td class="color" rowspan="2">仓库门店</td>
            <td class="color1" colspan="3">期初</td>
            <td class="color2" colspan="3">入库</td>
            <td class="color3" colspan="3">出库</td>
            <td class="color4" colspan="3">期末</td>
            <td class="color" rowspan="2">操作</td>
          </tr>
          <tr>
            <td class="color1">数量</td>
            <td class="color1">单个成本</td>
            <td class="color1">总成本</td>
            <td class="color2">数量</td>
            <td class="color2">单个成本</td>
            <td class="color2">总成本</td>
            <td class="color3">数量</td>
            <td class="color3">单个成本</td>
            <td class="color3">总成本</td>
            <td class="color4">数量</td>
            <td class="color4">单个成本</td>
            <td class="color4">总成本</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="2">
              茶树精油
              <br />
              编号: 20104
              <br />
              单位:瓶
            </td>
            <td rowspan="2">精油</td>
            <td rowspan="2">欧莱雅</td>
            <td rowspan="2">惠城总店</td>
            <td class="color1">0</td>
            <td class="color1">0</td>
            <td class="color1">0</td>
            <td class="color2">0</td>
            <td class="color2">0</td>
            <td class="color2">0</td>
            <td class="color3">0</td>
            <td class="color3">0</td>
            <td class="color3">0</td>
            <td class="color4">0</td>
            <td class="color4">0</td>
            <td class="color4">0</td>
            <td rowspan="2">
              <span class="text" @click="showModal('商品明细', 'CostDetail')">
                明细
              </span>
            </td>
          </tr>
        </tbody>
      </table>
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
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :scrollable="modal.scrollable"
      :styles="modal.styles"
      :title="modal.title"
      :width="modal.width"
    >
      <CostDetail v-if="modal.type === 'CostDetail' && modal.show" />
      <CostEdit v-if="modal.type === 'CostEdit' && modal.show" />
      <CostEditList v-if="modal.type === 'CostEditList' && modal.show" />
    </Modal>
  </div>
</template>

<script>
  import CostDetail from '@/components/inventory/cost/cost-detail'
  import CostEdit from '@/components/inventory/cost/cost-edit'
  import CostEditList from '@/components/inventory/cost/cost-edit-list'
  export default {
    name: 'Cost',
    components: { CostDetail, CostEdit, CostEditList },
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
    .baseInfo {
      background: white;
      padding: 10px 14px;
      display: flex;

      .box {
        flex: 1;
        margin-right: 24px;
        border-radius: 12px;
        padding: 14px;
        cursor: pointer;
        text-align: center;
        .header {
          .text {
            padding: 18px 0 0 0;
            font-size: 12px;
          }
        }
        .content {
          justify-content: center;
          margin-top: 2px;
          display: flex;
          .cell {
            font-size: 22px;
            padding: 10px 0;
          }
        }
      }
    }
    .color {
      background: #fdeff5;
    }
    .color1 {
      background: #e6e7fb;
    }
    .color2 {
      background: #e0efef;
    }
    .color3 {
      background: #fceae8;
    }
    .color4 {
      background: #efe9e0;
    }
    .list {
      margin-top: 10px;
      border-top: 1px solid #eeeeee;
      background: white;
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
