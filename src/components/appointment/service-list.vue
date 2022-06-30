<template>
  <div class="ServiceList">
    <div class="search">
      <div class="left">
        <div class="box">
          <Select
            v-model="store"
            placeholder="选择门店"
            style="width: 200px"
            transfer
          >
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
          <Select
            v-model="store"
            placeholder="选择部门"
            style="width: 200px"
            transfer
          >
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
          <Select
            v-model="store"
            placeholder="选择人员"
            style="width: 200px"
            transfer
          >
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
          <Select
            v-model="store"
            placeholder="选择项目分类"
            style="width: 200px"
            transfer
          >
            <Option
              v-for="item in store_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="right">
        <div
          class="add-bt"
          @click="showModal('批量设置提成', 'BatchSet', 1200)"
        >
          批量设置
        </div>
        <div
          class="add-bt"
          @click="showModal('批量修改提成', 'BatchEdit', 1200)"
        >
          批量修改
        </div>
        <div class="add-bt">批量清空</div>
      </div>
    </div>
    <div class="list">
      <Table
        ref="selection"
        :columns="columns"
        :data="list"
        @on-select="handleSelect"
      >
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
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :title="modal.title"
      :width="modal.width"
    >
      <Results v-if="modal.type === 'Results'" />
      <ConsumptionCard v-if="modal.type === 'ConsumptionCard'" />
      <NominalFee v-if="modal.type === 'NominalFee'" />
      <Deduct v-if="modal.type === 'Deduct'" />
      <BatchSet v-if="modal.type === 'BatchSet'" />
      <BatchEdit v-if="modal.type === 'BatchEdit'" />
    </Modal>
  </div>
</template>

<script>
  import Results from '@/components/appointment/service-list/results'
  import ConsumptionCard from '@/components/appointment/service-list/consumption-card'
  import NominalFee from '@/components/appointment/service-list/nominal-fee'
  import Deduct from '@/components/appointment/service-list/deduct'
  import BatchSet from '@/components/appointment/service-list/batch-set'
  import BatchEdit from '@/components/appointment/service-list/batch-edit'
  export default {
    name: 'ServiceList',
    components: {
      Results,
      ConsumptionCard,
      NominalFee,
      Deduct,
      BatchSet,
      BatchEdit,
    },
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
        store_list: [],
        store: '',
        columns: [
          {
            type: 'selection',
            width: 60,
            align: 'center',
          },
          {
            title: '项目名称',
            key: 'name',
            width: '200px',
          },
          {
            title: '会员提成',
            key: 'name',
            render: (h, params) => {
              console.log(params)
              let html = h('div', [
                // 插入文本
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '业绩提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                console.log(params.row)
                                this.showModal('修改提成', 'Results')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),

                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '耗卡提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'ConsumptionCard')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '手工提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'NominalFee')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),
              ])

              return html
            },
          },
          {
            title: '散客提成',
            key: 'name',
            render: (h, params) => {
              console.log(params)
              let html = h('div', [
                // 插入文本
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '业绩提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'Results')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),

                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '耗卡提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'ConsumptionCard')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '手工提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'NominalFee')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),
              ])

              return html
            },
          },
          {
            title: '赠送提成',
            key: 'name',
            render: (h, params) => {
              console.log(params)
              let html = h('div', [
                // 插入文本
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      marginTop: '10px',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '会员业绩提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'Results')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),

                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '会员耗卡提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'ConsumptionCard')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '会员手工提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'NominalFee')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '散户业绩提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'Results')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),

                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '散户耗卡提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'ConsumptionCard')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      marginBottom: '10px',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '散户手工提成：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('修改提成', 'NominalFee')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),
              ])

              return html
            },
          },
          {
            title: '扣除成本',
            key: 'name',
            render: (h, params) => {
              console.log(params)
              let html = h('div', [
                // 插入文本
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '扣除：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('扣除', 'Deduct')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),

                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                    },
                  },
                  [
                    h(
                      'div',
                      {
                        style: {},
                      },
                      '扣除（赠送）：'
                    ),
                    h(
                      'div',
                      {
                        style: {},
                      },
                      [
                        h(
                          'span',
                          {
                            style: {
                              color: '#1298e6',
                              cursor: 'pointer',
                            },
                            attrs: {
                              type: 'text',
                            },
                            on: {
                              click: () => {
                                this.showModal('扣除', 'Deduct')
                              },
                            },
                          },
                          '设置'
                        ),
                      ]
                    ),
                  ]
                ),
              ])

              return html
            },
          },
        ],
        list: [
          {
            name: '111',
          },
        ],
        searchData: { search: '' },
        date: [],
        modal: {
          show: false,
          title: '',
          type: false,
          width: 500,
        },
      }
    },
    activated() {},
    created() {},
    methods: {
      handleSelect(row) {
        console.log(row)
      },
      showModal(title, type, width = 500) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.modal.width = width
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
  .ServiceList {
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
        flex-flow: wrap;
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
      margin-top: 10px;
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
