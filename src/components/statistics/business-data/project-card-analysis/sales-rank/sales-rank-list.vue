<template>
  <div class="SalesRankList">
    <div class="header">
      <div class="left">
        <div class="h-cel title">套餐次卡/储值卡/续卡排行</div>
      </div>
      <div class="right">
        <div class="bt">
          <RadioGroup v-model="type" size="small" type="button">
            <Radio
              v-for="(item, index) in typeList"
              :key="index"
              :label="item.label"
            />
          </RadioGroup>
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
    name: 'SalesRankList',
    components: {},
    data: function () {
      return {
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        type: '1',
        typeList: [
          {
            label: '卡大类',
            value: '1',
          },
          {
            label: '具体卡',
            value: '2',
          },
        ],
        storeList: [],
        store: '',
        list: [
          {
            name: 1,
          },
          {
            name: 1,
          },
          {
            name: 1,
          },
          {
            name: 1,
          },
          {
            name: 1,
          },
          {
            name: 1,
          },
          {
            name: 1,
          },
          {
            name: 1,
          },
          {
            name: 1,
          },
          {
            name: 1,
          },
        ],
        columns: [
          {
            title: '排名',
            key: 'name',
          },
          {
            title: '类别',
            key: 'name',
          },
          {
            title: '业绩',
            key: 'name',
          },
          {
            title: '销量',
            key: 'name',
          },
          {
            title: '人数',
            key: 'name',
          },
          {
            title: '占比',
            key: 'name',
          },
        ],
      }
    },
    methods: {
      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
    },
  }
</script>
<style lang="less" scoped>
  .SalesRankList {
    border: 1px solid #eeeeee;
    border-radius: 6px;
    height: 604px;
    background: white;
    .header {
      display: flex;
      height: 40px;
      .left {
        display: flex;
        align-items: center;
        padding: 0 5px;
        flex: 1;
        .title {
          font-weight: bold;
        }
        .h-cel {
          padding: 0 4px;
          float: left;
        }
      }
      .right {
        display: flex;
        align-items: center;
        .bt {
          padding: 5px;
          color: #1298e6;
          cursor: pointer;
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
  }
</style>
