<template>
  <div class="TodayAppointment">
    <div class="header">
      <div class="left">
        <div class="h-cel title">今日预约客户</div>
        <div class="h-cel">
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
      </div>
      <div class="right">
        <div class="bt">查看详情 ></div>
      </div>
    </div>
    <div class="content">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action"></template>
      </Table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TodayAppointment',
    components: {},
    data: function () {
      return {
        storeList: [],
        store: '',
        list: [],
        columns: [
          {
            title: '预约时间',
            key: 'name',
          },
          {
            title: '会员信息',
            key: 'name',
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
            title: '预约项目',
            key: 'name',
          },
          {
            title: '预约产康师',
            key: 'name',
          },
          {
            title: '预约门店',
            key: 'name',
          },
          {
            title: '状态',
            key: 'name',
          },
        ],
      }
    },
    methods: {},
  }
</script>
<style lang="less" scoped>
  /deep/.ivu-table th {
    background-color: #e0efef;
  }
  .TodayAppointment {
    border: 1px solid #dadada;
    border-radius: 6px;
    height: 300px;
    padding: 2px;
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
          color: blue;
          cursor: pointer;
        }
      }
    }
    .content {
      clear: both;
    }
  }
</style>
