<template>
  <div class="TodayRemindEvent">
    <div class="header">
      <div class="left">
        <div class="h-cel title">今日提醒事件</div>
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
    name: 'TodayRemindEvent',
    components: {},
    data: function () {
      return {
        storeList: [],
        store: '',
        list: [],
        columns: [
          {
            title: '提醒时间',
            key: 'name',
          },
          {
            title: '提醒内容',
            key: 'name',
          },
          {
            title: '提醒人员',
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
            title: '所属门店',
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
    background-color: #e6e7fb;
  }
  .TodayRemindEvent {
    border: 1px solid #eeeeee;
    border-radius: 6px;
    height: 300px;
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
    .content {
      clear: both;
    }
  }
</style>
