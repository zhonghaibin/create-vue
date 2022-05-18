<template>
  <div>
    <VipSearch />
    <VipSearch1 />
    <div class="list-top">
      <span class="black">共6732个会员</span>
      <span class="black">（所有会员总余额：￥16653232.32元</span>
      <span class="red">所有会员总欠款：￥432423423.232员</span>
      <span class="black">）</span>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1">
        <!-- slot对应data里面的slot-->

        <template slot="action">
          <span class="bt" @click="jumpVipInfo">详情</span>
          <span class="bt">更多</span>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
  import VipSearch from '@/components/vip-list/vip-search'
  import VipSearch1 from '@/components/vip-list/vip-search-1'
  export default {
    name: 'VipList1',
    components: {
      VipSearch,
      VipSearch1,
    },
    data: function () {
      return {
        columns1: [
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
                        border: '1px solid',
                        top: '-12px',
                        left: '-8px',
                      },
                    },
                    [
                      h('img', {
                        attrs: { src: params.row.image },
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
                          color: '#f62727',
                          paddingTop: '10px',
                        },
                      },
                      params.row.name
                    ),
                    h(
                      'div',
                      {
                        style: {
                          color: '#f62727',
                        },
                      },
                      params.row.name
                    ),
                    h(
                      'div',
                      {
                        style: {
                          color: '#f62727',
                        },
                      },
                      params.row.name
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
                        },
                      },
                      '铂金会员'
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
                    },
                  },
                  '持卡:' + params.row.username
                ),

                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  '余额:' + params.row.username
                ),
                h(
                  'span',
                  {
                    style: {
                      display: 'block',
                    },
                  },
                  '积分:' + params.row.username
                ),
                h('span', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
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
                    params.row.username
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
                        color: '#31708f',
                      },
                    },
                    '消费总计:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.username
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
                        color: '#31708f',
                      },
                    },
                    '到店次数:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.username
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '本月到店:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.username
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
                        color: '#31708f',
                      },
                    },
                    params.row.username
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '服务人员:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.username
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '消费:'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.username
                  ),
                ]),
              ])

              return html
            },
          },
          {
            title: '来源',
            key: 'source',
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
                        color: '#31708f',
                      },
                    },
                    params.row.username
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    params.row.username
                  ),
                ]),
                h('div', [
                  h(
                    'span',
                    {
                      style: {
                        color: '#31708f',
                      },
                    },
                    '据生日'
                  ),
                  h(
                    'span',
                    {
                      style: {},
                    },
                    params.row.username + '天'
                  ),
                ]),
              ])

              return html
            },
          },
          {
            title: '顾问',
            key: 'counselor',
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
                          color: '#31708f',
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
                          color: '#31708f',
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
        data1: [
          {
            name: 'John Brown',
            username: 18,
            money: 'New York No. 1 Lake Park',
            count: '2016-10-03',
            money1: '2016-10-03',
            source: '2016-10-03',
            birthday: '2016-10-03',
            counselor: '2016-10-03',
            status: '2016-10-03',
            image:
              'http://iview.talkingdata.com/dist/e1cf12c07bf6458992569e67927d767e.png',
          },
        ],
        WeComImgUrl: require('../assets/企业微信.png'),
        WeChatImgUrl: require('../assets/微信.png'),
      }
    },
    methods: {
      jumpVipInfo() {
        this.$router.push('/user/vip/vip-details')
      },
    },
  }
</script>

<style lang="less" scoped>
  .list-top {
    margin-top: 14px;
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
    /deep/.ivu-table-row {
    }
    /deep/.ivu-table td {
    }

    .bt {
      color: blue;
      margin-right: 20px;
      cursor: pointer;
    }
  }
</style>
