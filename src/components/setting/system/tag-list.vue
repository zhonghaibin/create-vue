<template>
  <div class="TagList">
    <div class="search">
      <div class="left">
        <div class="box">
          <span style="color: red">会员标签库（22/1000）</span>
        </div>
      </div>
      <div class="right">
        <div class="add-bt" @click="showModal('新增标签', 'Tag')">新增标签</div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">编辑</span>
          <span class="bt">下架</span>
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
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :title="modal.title"
      :width="700"
    >
      <Tag v-if="modal.type === 'Tag'" @cancelModal="cancelModal" />
    </Modal>
  </div>
</template>

<script>
  import Tag from '@/components/setting/system/tag'
  export default {
    name: 'TagList',
    components: { Tag },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
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
            title: '序号',
            key: 'name',
            width: '200px',
          },
          {
            title: '标签类别',
            key: 'name',
          },
          {
            title: '标签名称',
            key: 'name',
          },
          {
            title: '标签颜色',
            key: 'name',
            render: (h, params) => {
              let html = h('div', [
                h('span', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                        background: params.row.color,
                        width: '20px',
                        height: '20px',
                        display: 'block',
                      },
                    },
                    ''
                  ),
                ]),
              ])

              return html
            },
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
            name: '11',
            color: 'red',
          },
        ],
        searchData: { search: '', start_time: '', end_time: '' },
        date: [],
      }
    },
    activated() {},
    created() {},
    methods: {
      changeValue() {},
      clearDate() {
        this.searchData.start = ''
        this.searchData.end = ''
      },
      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
      search() {},
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
      cancelModal(status) {
        this.modal.show = status
      },
    },
  }
</script>

<style lang="less" scoped>
  .TagList {
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
