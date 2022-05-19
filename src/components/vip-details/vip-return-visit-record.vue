<template>
  <div class="VipReturnVisitRecord">
    <div class="search">
      <div class="left">
        <div class="box">
          <span class="text">时间</span>
          <DatePicker
            placeholder="开始时间-结束时间"
            style="width: 280px"
            type="datetimerange"
          />
        </div>
        <div class="box">
          <Input
            enter-button
            placeholder="搜索回访内容"
            search
            style="width: 300px"
          />
        </div>
      </div>
      <div class="right">
        <div class="add-bt" @click="showReturnVisit">添加回访</div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns1" :data="data1">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">编辑</span>
          <span class="bt">删除</span>
        </template>
      </Table>
    </div>
    <div class="page">
      <Page show-elevator show-sizer size="small" :total="40" transfer />
    </div>
    <Modal v-model="is_show_modal" :footer-hide="true" :title="modal_title">
      <ReturnVisit
        v-if="modal_type === 'ReturnVisit'"
        @cancelModal="cancelModal"
      />
    </Modal>
  </div>
</template>

<script>
  import ReturnVisit from '@/components/vip-details/vip-return-visit-record/return-visit'
  export default {
    name: 'VipReturnVisitRecord',
    components: {
      ReturnVisit,
    },
    data: function () {
      return {
        is_show_modal: false,
        modal_title: '添加回访',
        modal_type: 'ReturnVisit',
        columns1: [
          {
            title: '回访日期',
            key: 'name',
            width: '200px',
          },
          {
            title: '回访人员',
            key: 'username',
          },
          {
            title: '回访主题',
            key: 'money',
          },
          {
            title: '回访内容',
            key: 'count',
          },
          {
            title: '附件',
            key: 'money1',
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
          },
        ],
      }
    },
    created() {},
    methods: {
      showReturnVisit() {
        this.is_show_modal = true
        this.modal_title = '添加回访'
        this.modal_type = 'ReturnVisit'
      },
      cancelModal(status) {
        this.is_show_modal = status
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipReturnVisitRecord {
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
    }
    .page {
      display: flex;
      justify-content: center;
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
      background: #db528d;
      padding: 6px 14px;
      border-radius: 4px;
    }
  }
</style>
