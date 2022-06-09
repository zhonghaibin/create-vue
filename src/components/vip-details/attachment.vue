<template>
  <div class="Attachment">
    <div class="list">
      <div v-for="item in list" :key="item.id" class="card">
        <div class="img">
          <img
            class="ui"
            :src="item.file"
            @click="showModal('查看', 'Look', item)"
          />
          <div class="content">
            <div class="title">{{ item.name }}</div>
            <div class="date">{{ item.add_time }}</div>
          </div>
          <div class="footer">
            <div class="row">
              <div
                class="edit"
                @click="showModal('编辑客户附件', 'UploadFile', item)"
              >
                <Icon type="ios-create" />
                编辑
              </div>
              <div class="delete" @click="delFile(item.id)">
                <Icon type="ios-trash" />
                删除
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="add-card" @click="showModal('添加客户附件', 'UploadFile')">
        <div class="text">
          <Icon type="md-add" />
          添加附件
        </div>
      </div>
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
    <Modal v-model="modal.show" :footer-hide="true" :title="modal.title">
      <UploadFile
        v-if="modal.type === 'UploadFile' && modal.show"
        :data="data"
        :member-info="memberInfo"
        @cancelModal="cancelModal"
        @change="change"
      />
      <img
        v-if="modal.type === 'Look' && modal.show"
        :src="file"
        style="width: 100%"
      />
    </Modal>
  </div>
</template>

<script>
  import UploadFile from '@/components/vip-details/attachment/upload-file'
  import { getFiles, delFiles } from '@/api/vip'
  export default {
    name: 'Attachment',
    components: {
      UploadFile,
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
        },
        searchData: {
          p: 1,
          vid: this.memberInfo.id,
          page: 10,
        },
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        list: [],
        data: {},
        file: '',
      }
    },
    activated() {
      this.search()
    },
    created() {
      this.search()
    },
    methods: {
      showModal(title, type, data = {}) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
        this.data = data
        this.file = data.file
      },
      cancelModal(status) {
        this.modal.show = status
      },

      currentPage(current) {
        this.page.current = current
        this.searchData.p = current
        this.getFiles()
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
        this.searchData.page = pageSize
        this.getFiles()
      },
      search() {
        this.searchData.p = 1
        this.getFiles()
      },
      async getFiles() {
        const { data } = await getFiles(this.searchData)
        this.list = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
      delFile(file_id) {
        this.delFiles(file_id)
      },
      async delFiles(file_id) {
        const { status, msg } = await delFiles({
          file_id: file_id,
        })
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.$Message.success(msg)
          this.search()
        }
      },
      change() {
        this.modal.show = false
        this.search()
      },
    },
  }
</script>

<style lang="less" scoped>
  .Attachment {
    .list {
      display: flex;
      flex-flow: wrap;
      .card {
        margin: 10px;
        border-radius: 10px;
        border: 1px solid #e8e7e7;
        height: 300px;
        width: 180px;
        display: flex;
        align-items: center;
        cursor: pointer;
        .img {
          .ui {
            height: 230px;
            width: 180px;
          }
          .content {
            text-align: center;
            .title {
            }
            .date {
            }
          }
          .footer {
            .row {
              display: flex;
              justify-content: center;
              text-align: center;
              .edit {
                width: 60px;
                height: 30px;
                line-height: 30px;
                cursor: pointer;
              }

              .edit:hover {
                color: #cc749a;
              }

              .delete {
                width: 60px;
                height: 30px;
                line-height: 30px;
                cursor: pointer;
              }

              .delete:hover {
                color: #cc749a;
              }
            }
          }
        }
      }
      .add-card {
        margin: 10px;
        border-radius: 10px;
        border: 1px dashed #e8e7e7;
        height: 300px;
        width: 180px;
        display: flex;
        align-items: center;
        .text {
          margin: 0 auto;
          cursor: pointer;
        }
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
