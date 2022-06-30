<template>
  <div class="VipCardList1">
    <div class="search">
      <div class="box">
        <Input
          v-model="searchData.search"
          clearable
          enter-button
          placeholder="输入次卡名称"
          search
          @on-clear="search"
          @on-search="search"
        />
      </div>
      <div class="box">
        <span class="text">状态</span>
        <Select
          v-model="searchData.status"
          style="width: 200px"
          transfer
          @on-change="search"
        >
          <Option
            v-for="item in status_list"
            :key="item.value"
            :value="item.value"
          >
            {{ item.label }}
          </Option>
        </Select>
      </div>
    </div>
    <div class="list">
      <div v-for="item in list" :key="item.id" class="card">
        <div class="header">{{ item.cname }}</div>
        <div class="content">
          <div class="row">
            <div class="left">购卡日期</div>
            <div class="right">
              <div class="text">{{ item.time }}</div>
            </div>
          </div>
          <div class="row">
            <div class="left">卡有效期</div>
            <div class="right">
              <div class="text">{{ item.end_time }}</div>
            </div>
          </div>
          <div class="row">
            <div class="left">剩余次数</div>
            <div class="right">
              <div class="text">{{ item.use_num }}次</div>
            </div>
          </div>
          <div class="more">
            <div
              class="details"
              @click="showModal('卡详情', 'VipCardInfo1', item)"
            >
              详情
            </div>
          </div>
        </div>
      </div>
      <div v-if="list.length === 0" class="nodata">没有数据</div>
    </div>
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
    <div>
      <Modal
        v-model="modal.show"
        :footer-hide="true"
        :title="modal.title"
        :width="700"
      >
        <VipCardInfo1
          v-if="modal.type === 'VipCardInfo1' && modal.show"
          :card-vid="current_card_id"
          :member-info="memberInfo"
        />
      </Modal>
    </div>
  </div>
</template>

<script>
  import VipCardInfo1 from '@/components/vip-details/vip-account/vip-card-info1'
  import { getVipCardList } from '@/api/vip'

  export default {
    name: 'VipCardList1',
    components: {
      VipCardInfo1,
    },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        status_list: [
          {
            value: '0',
            label: '全部',
          },
          {
            value: '1',
            label: '使用中',
          },
          {
            value: '2',
            label: '已用完',
          },
          {
            value: '3',
            label: '未使用',
          },
          {
            value: '4',
            label: '已过期',
          },
        ],
        modal: {
          show: false,
          title: '',
          type: false,
        },
        searchData: {
          search: '',
          status: '0',
          page: 10,
          p: 1,
          vip_id: this.memberInfo.vip_id,
        },
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        list: [],
        current_card_id: 0,
      }
    },
    activated() {
      this.search()
    },
    created() {
      this.search()
    },
    methods: {
      showModal(title, type, cardInfo) {
        this.current_card_id = Number(cardInfo.id)
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
      currentPage(current) {
        this.page.current = current
        this.searchData.p = current
        this.getVipCardList()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.searchData.page = pageSize
        this.getVipCardList()
      },
      search() {
        this.searchData.p = 1
        this.getVipCardList()
      },
      async getVipCardList() {
        const { data } = await getVipCardList(this.searchData)
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipCardList1 {
    .search {
      display: flex;
      padding: 10px;
      background: white;

      .box {
        .text {
          font-weight: bold;
          margin: 0 5px;
        }
      }
    }
    .list {
      margin-top: 10px;
      display: flex;
      flex-flow: wrap;

      .card {
        margin: 12px 60px 20px 20px;
        border-radius: 8px;
        border: 1px solid #dcdee2;
        box-shadow: 1px 1px 5px rgb(0 0 0 / 30%);
        cursor: pointer;

        .header {
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          width: 300px;
          height: 40px;
          line-height: 40px;
          background: #fceef4;
          font-weight: bold;
          padding: 0 10px;
          font-size: 14px;
        }

        .content {
          padding: 12px 12px;

          .row {
            line-height: 30px;
            height: 30px;
            display: flex;

            .left {
              flex: 1;
              margin-left: 12px;
            }

            .right {
              display: flex;
              justify-content: flex-end;
            }
          }

          .more {
            display: flex;
            justify-content: flex-end;

            .details {
              color: #1298e6;
              cursor: pointer;
            }
          }
        }
      }

      .card:hover {
        border: 1px solid #fcbad7;
      }
      .nodata {
        text-align: center;
        width: 100%;
      }
    }
    .page {
      clear: both;
      height: 40px;
      padding: 8px 0;
      text-align: center;
      background: white;
    }
  }
</style>
