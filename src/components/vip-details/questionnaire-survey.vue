<template>
  <div class="QuestionnaireSurvey">
    <div class="search">
      <div class="left"></div>
      <div class="right">
        <div class="add-bt">推送问卷</div>
      </div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list" :loading="loading">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <div
            class="bt"
            @click="showModal('问卷详情', 'QuestionnaireDetails', 800)"
          >
            详情
          </div>
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
      :width="modal.width"
    >
      <QuestionnaireDetails
        v-if="modal.type === 'QuestionnaireDetails' && modal.show"
      />
    </Modal>
  </div>
</template>

<script>
  import QuestionnaireDetails from '@/components/vip-details/questionnaire-survey/questionnaire-details'
  export default {
    name: 'QuestionnaireSurvey',
    components: {
      QuestionnaireDetails,
    },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        modal: {
          show: false,
          title: '',
          type: false,
          width: 600,
        },
        columns: [
          {
            title: '问卷名称',
            key: 'make_time',
            width: '200px',
          },
          {
            title: '提交时间',
            key: 'shop_name',
          },
          {
            title: '专家建议',
            key: 'staff',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        list: [{}],
        searchData: {
          vip_id: this.memberInfo.vip_id,
          search: '',
          start: '',
          end: '',
          page: 5,
          p: 1,
        },
        page: {
          total: 0,
          pageSize: 5,
          current: 1,
        },
        loading: false,
      }
    },
    activated() {
      this.search()
    },
    created() {
      this.search()
    },
    methods: {
      clearDate() {
        this.searchData.start = ''
        this.searchData.end = ''
        this.search()
      },
      changeDatePicker: function (date) {
        if (date) {
          this.searchData.start = date[0]
          this.searchData.end = date[1]
        }
        this.search()
      },
      currentPage(current) {
        this.page.current = current
        this.searchData.p = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
      search() {
        this.searchData.p = 1
      },
      showModal(title, type, width) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.modal.width = width
      },
    },
  }
</script>

<style lang="less" scoped>
  .QuestionnaireSurvey {
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
