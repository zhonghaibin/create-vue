<template>
  <div class="index">
    <VipSearch @change="change" @search="search" />
    <div class="list-top">
      <span class="black">共{{ vip_total }}个会员</span>
      <span class="black">（所有会员总余额：￥{{ money }}元</span>
      <span class="red">所有会员总欠款：{{ arrears }}员</span>
      <span class="black">）</span>
    </div>

    <div class="list">
      <Table :columns="columns" :data="list" :loading="loading">
        <!-- slot对应data里面的slot-->

        <template slot-scope="{ row }" slot="action">
          <span class="bt" @click="showModal('客户详情', 'VipDetails', row)">
            详情
          </span>
          <Poptip placement="right">
            <div slot="content">
              <div class="more">
                <p
                  v-for="(item, index) in moreList"
                  :key="index"
                  @click="choose(item, row)"
                >
                  {{ item.label }}
                </p>
              </div>
            </div>
            <span class="bt">更多</span>
          </Poptip>
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
      :scrollable="modal.scrollable"
      :styles="modal.styles"
      :title="modal.title"
      :width="modal.width"
    >
      <VipDetails v-if="modal.type === 'VipDetails' && modal.show" />
      <VipInfoDetails
        v-if="modal.type === 'VipInfoDetails' && modal.show"
        :member-info="memberInfo"
        @refreshMemberInfo="refreshMemberInfo"
      />
    </Modal>
  </div>
</template>

<script>
  import VipSearch from '@/components/vip/vip-list/vip-search'
  import { getMemberList, getMemberTotal } from '@/api/vip'
  import default_avatar from '../../assets/default_avatar.png'
  import cookie from 'js-cookie'
  import VipDetails from '@/components/vip-details/vip-details'
  import VipInfoDetails from '@/components/vip-details/vip-info/vip-info-details'
  export default {
    name: 'VipList1',
    components: {
      VipSearch,
      VipDetails,
      VipInfoDetails,
    },
    data: function () {
      return {
        moreList: [
          { label: '编辑', value: '1' },
          { label: '开单', value: '2' },
          { label: '补卡', value: '3' },
        ],
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        searchData: {},
        default_avatar: default_avatar,
        vip_total: 0,
        arrears: 0,
        money: 0,
        loading: true,
        memberInfo: {},
        columns: [
          {
            title: '会员信息',
            key: 'name',
            width: '200px',
            render: (h, params) => {
              let html = h(
                'div',
                {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                  },
                },
                [
                  h(
                    'div',
                    {
                      style: {
                        width: '40px',
                        height: '40px',
                        position: 'relative',
                        borderRadius: '100%',
                        top: '-12px',
                        left: '-8px',
                      },
                    },
                    [
                      h('img', {
                        attrs: {
                          src:
                            params.row.pic_url === '' ||
                            params.row.pic_url === null
                              ? this.default_avatar
                              : params.row.pic_url,
                        },
                        style: {
                          width: '40px',
                          height: '40px',
                          borderRadius: '100%',
                          overflow: 'hidden',
                        },
                      }),
                    ]
                  ),

                  h('div', {}, [
                    h(
                      'div',
                      {
                        style: {
                          color: '#80808c',
                          paddingTop: '10px',
                        },
                      },
                      params.row.name
                    ),
                    h(
                      'div',
                      {
                        style: {
                          color: '#80808c',
                        },
                      },
                      params.row.tel
                    ),
                    h(
                      'div',
                      {
                        style: {
                          color: '#80808c',
                        },
                      },
                      params.row.vip_id
                    ),
                    h(
                      'div',
                      {
                        style: {
                          textAlign: 'center',
                          border: '1px solid #228d57',
                          borderRadius: ' 32px',
                          background: '#228d57',
                          height: '18px',
                          lineHeight: '18px',
                          color: '#ffffff',
                          marginTop: '4px',
                          marginBottom: '10px',
                          width: '80px',
                        },
                      },
                      params.row.type_name
                    ),
                  ]),
                ]
              )

              return html
            },
          },
          {
            title: '会员账户',
            key: 'username',
            render: (h, params) => {
              let html = h('div', [
                // 插入文本
                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                      color: '#80808c',
                    },
                  },
                  '持卡:' + params.row.card_num + '张'
                ),

                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                      color: '#80808c',
                    },
                  },
                  '余额:' + params.row.money
                ),
                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                      color: '#80808c',
                    },
                  },
                  '积分:' + params.row.integral
                ),
                h('span', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    '欠款:'
                  ),
                  h(
                    'span',
                    {
                      style: {
                        color: '#f62727',
                      },
                    },
                    params.row.arrears
                  ),
                ]),
              ])

              return html
            },
          },
          {
            title: '总消费',
            key: 'money',
            render: (h, params) => {
              let html = h('div', [
                h('span', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    '消费总计:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.order_total
                  ),
                ]),
              ])

              return html
            },
          },
          {
            title: '到店次数',
            key: 'count',
            render: (h, params) => {
              let html = h('div', [
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    '到店次数:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.arrival_count
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    '本月到店:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.arrival_month
                  ),
                ]),
              ])

              return html
            },
          },
          {
            title: '上次消费',
            key: 'money1',
            render: (h, params) => {
              let html = h('div', [
                h('span', [
                  h(
                    'div',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    params.row.arrival_new_time
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    '服务人员:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.arrival_new_staff
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    '消费:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.arrival_new_money
                  ),
                ]),
              ])

              return html
            },
          },
          {
            title: '来源',
            key: 'source_name',
          },
          {
            title: '生日',
            key: 'birthday',
            render: (h, params) => {
              let html = h('div', [
                h('span', [
                  h(
                    'div',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    params.row.birthday_type === '1' ? '阳历' : '阴历'
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    params.row.birthday
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#80808c',
                      },
                    },
                    '据生日'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.birthday_num + '天'
                  ),
                ]),
              ])

              return html
            },
          },
          {
            title: '顾问',
            key: 'adviser_name',
          },
          {
            title: '绑定状态',
            key: 'status',
            render: (h) => {
              let html = h('div', [
                h(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                    },
                  },
                  [
                    h(
                      'span',
                      {
                        style: {
                          color: '#80808c',
                        },
                      },
                      '已绑定'
                    ),
                    h('img', {
                      attrs: { src: this.WeComImgUrl },
                      style: {
                        width: '20px',
                        height: '20px',
                        borderRadius: '100%',
                        overflow: 'hidden',
                      },
                    }),
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
                      'span',
                      {
                        style: {
                          color: '#80808c',
                        },
                      },
                      '已绑定'
                    ),
                    h('img', {
                      attrs: { src: this.WeChatImgUrl },
                      style: {
                        width: '20px',
                        height: '20px',
                        borderRadius: '100%',
                        overflow: 'hidden',
                      },
                    }),
                  ]
                ),
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
        list: [],
        WeComImgUrl: require('../../assets/企业微信.png'),
        WeChatImgUrl: require('../../assets/微信.png'),
        modal: {
          show: false,
          title: '',
          type: false,
          width: 1000,
          scrollable: true,
          styles: { top: '50px' },
        },
      }
    },
    created() {
      this.getMemberTotal()
      this.getMemberList()
    },
    methods: {
      change() {
        this.getMemberTotal()
        this.getMemberList()
      },
      currentPage(current) {
        this.page.current = current
        this.getMemberList()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.getMemberList()
      },
      search(search) {
        this.searchData = search
        this.page.current = 1
        this.page.pageSize = 10
        this.getMemberList()
      },
      async getMemberList() {
        this.loading = true
        this.$set(this.searchData, 'page', this.page.pageSize)
        this.$set(this.searchData, 'p', this.page.current)
        const { data } = await getMemberList(this.searchData)
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
        this.loading = false
      },
      async getMemberTotal() {
        const { data } = await getMemberTotal({})
        this.money = data.money
        this.vip_total = data.vip_total
        this.arrears = data.arrears
      },

      showModal(title, type, data) {
        cookie.set('vid', data.id)
        console.log(data.id)
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.modal.width = window.innerWidth - 300
      },

      choose(item, row) {
        this.memberInfo = row
        switch (item.label) {
          case '编辑':
            this.showModal('编辑会员资料', 'VipInfoDetails', row)
            break
          case '开单':
            this.jumpRouter('/cashier/index')
            break
          case '补卡':
            break
        }
        console.log(item)
      },
      jumpRouter(path) {
        this.$router.push(path)
      },
      refreshMemberInfo() {
        this.modal.show = false
        this.getMemberList()
      },
    },
  }
</script>

<style lang="less" scoped>
  .index {
    .list-top {
      background: white;
      padding: 0 10px;
      margin-top: 10px;
      height: 36px;
      line-height: 36px;
      font-size: 12px;
      .black {
        color: black;
        font-weight: bold;
      }
      .red {
        color: #e8694a;
        font-weight: bold;
        margin-left: 20px;
      }
    }
    .list {
      .page {
        height: 40px;
        padding: 8px 0;
        text-align: center;
        background: white;
      }
      .bt {
        color: #1298e6;
        margin-right: 20px;
        cursor: pointer;
      }
    }
    .more {
      text-align: center;
      p {
        padding: 4px;
        cursor: pointer;
      }
      p:hover {
        color: #1298e6;
      }
    }
  }
</style>
