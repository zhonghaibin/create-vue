<template>
  <div class="VipNodeList">
    <Table :columns="columns" :data="list" :loading="loading">
      <!-- slot对应data里面的slot-->

      <template slot-scope="{ row }" slot="action">
        <span class="bt" @click="showModal('修改备注信息', 'VipNode', row)">
          修改
        </span>
        <span class="bt" @click="confirm(row)">删除</span>
      </template>
    </Table>
    <div class="page">
      <Page
        :current="page.current"
        :page-size="page.pageSize"
        show-elevator
        size="small"
        :total="page.total"
        @on-change="currentPage"
        @on-page-size-change="pageSizeChange"
      />
    </div>
    <div class="footer">
      <div class="add-node" @click="showModal('新增备注信息', 'VipNode')">
        <Icon style="font-size: 12px" type="md-add" />
        新增备注信息
      </div>
    </div>
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :title="modal.title"
      :width="400"
    >
      <VipNode
        v-if="modal.type === 'VipNode' && modal.show"
        :card-vid="cardVid"
        :member-info="memberInfo"
        :remarks="remarks"
        @cancelModal="cancelModal"
        @saveModal="saveModal"
      />
    </Modal>
  </div>
</template>

<script>
  import { getVipCardRemarks, delVipCardRemarks } from '@/api/vip'
  import VipNode from '@/components/vip-details/vip-account/vip-card-info1/vip-node-list/vip-node'
  export default {
    name: 'VipNodeList',
    components: {
      VipNode,
    },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
      cardVid: {
        type: Number,
        default: () => 0,
      },
    },
    data: function () {
      return {
        loading: true,
        modal: {
          show: false,
          title: '',
          type: false,
        },
        columns: [
          {
            title: '备注内容',
            key: 'info',
          },
          {
            title: '操作时间',
            key: 'addtime',
          },
          {
            title: '最后操作人',
            key: 'suname',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        list: [],
        searchData: {
          page: 5,
          p: 1,
        },
        remarks: {},
        page: {
          total: 0,
          pageSize: 5,
          current: 1,
        },
      }
    },
    activated() {
      this.search()
    },
    created() {
      this.search()
    },
    methods: {
      cancelModal(status) {
        this.modal.show = status
      },
      saveModal() {
        this.search()
      },
      showModal(title, type, remarks = {}) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.remarks = remarks
      },
      currentPage(current) {
        this.searchData.p = current
        this.getVipCardRemarks()
      },
      pageSizeChange(pageSize) {
        this.searchData.page = pageSize
        this.getVipCardRemarks()
      },
      search() {
        this.$set(this.searchData, 'card_vid', this.cardVid)
        this.searchData.p = 1
        this.getVipCardRemarks()
      },
      confirm(remarks = {}) {
        this.$Modal.confirm({
          title: '警告？',
          content: '确定要删除吗？',
          onOk: () => {
            this.delVipCardRemarks({
              remarks_id: remarks.id,
            })
          },
          onCancel: () => {},
        })
      },
      async delVipCardRemarks(params) {
        const { msg, status } = await delVipCardRemarks(params)
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.$Message.info('操作成功')
          this.search()
        }
      },

      async getVipCardRemarks() {
        this.loading = true
        const { data } = await getVipCardRemarks(this.searchData)
        this.loading = false
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipNodeList {
    .bt {
      color: blue;
      margin-right: 20px;
      cursor: pointer;
    }
    .page {
      clear: both;
      height: 40px;
      padding: 8px 0;
      text-align: center;
      background: white;
    }
    .footer {
      .add-node {
        margin-top: 4px;
        background: #f19ec2;
        color: white;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
</style>
