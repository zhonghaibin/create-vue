<template>
  <div class="VipCardList1">
    <div class="search">
      <div class="box">
        <Input enter-button placeholder="输入次卡名称" search />
      </div>
      <div class="box">
        <span class="text">状态</span>
        <Select v-model="status" style="width: 200px" transfer>
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
      <div class="card">
        <div class="header">骨盆修复套餐</div>
        <div class="content">
          <div class="row">
            <div class="left">购卡日期</div>
            <div class="right"><div class="text">2020/02/10 15:12</div></div>
          </div>
          <div class="row">
            <div class="left">卡有效期</div>
            <div class="right"><div class="text">永久有效</div></div>
          </div>
          <div class="row">
            <div class="left">剩余次数</div>
            <div class="right"><div class="text">8次</div></div>
          </div>
          <div class="more">
            <div class="details" @click="showModal('卡详情', 'VipCardInfo1')">
              详情
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Modal
        v-model="modal.show"
        :footer-hide="true"
        :title="modal.title"
        :width="700"
      >
        <VipCardInfo1 v-if="modal.type === 'VipCardInfo1'" />
      </Modal>
    </div>
  </div>
</template>

<script>
  import VipCardInfo1 from '@/components/vip-details/vip-account/vip-card-info1'
  export default {
    name: 'VipCardList1',
    components: {
      VipCardInfo1,
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
            label: '未使用',
          },
          {
            value: '3',
            label: '已过期',
          },
          {
            value: '4',
            label: '已用完',
          },
        ],
        status: '0',
        modal: {
          show: false,
          title: '',
          type: false,
        },
      }
    },
    methods: {
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipCardList1 {
    .search {
      display: flex;
      padding: 2px 10px;

      .box {
        .text {
          font-weight: bold;
          margin: 0px 5px;
        }
      }
    }
    .list {
      margin-top: 20px;
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
              color: blue;
              cursor: pointer;
            }
          }
        }
      }

      .card:hover {
        border: 1px solid #fcbad7;
      }
    }
  }
</style>
