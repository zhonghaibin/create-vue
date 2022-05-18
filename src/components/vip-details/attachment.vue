<template>
  <div class="Attachment">
    <div class="card">
      <div class="img">
        <img
          class="ui"
          src="https://cdn.learnku.com//uploads/communities/WtC3cPLHzMbKRSZnagU9.png!/both/44x44"
        />
        <div class="content">
          <div class="title">体质调查报告</div>
          <div class="date">2020/20/12</div>
        </div>
        <div class="footer">
          <div class="row">
            <div class="edit">
              <Icon type="ios-create" />
              编辑
            </div>
            <div class="delete">
              <Icon type="ios-trash" />
              删除
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="add-card" @click="showUploadFile">
      <div class="text">
        <Icon type="md-add" />
        添加附件
      </div>
    </div>
    <Modal v-model="is_show_modal" :footer-hide="true" :title="modal_title">
      <UploadFile
        v-if="modal_type === 'UploadFile'"
        @cancelModal="cancelModal"
      />
    </Modal>
  </div>
</template>

<script>
  import UploadFile from '@/components/vip-details/attachment/upload-file'
  export default {
    name: 'Attachment',
    components: {
      UploadFile,
    },
    data: function () {
      return {
        is_show_modal: false,
        modal_title: '添加客户附件',
        modal_type: 'UploadFile',
      }
    },
    methods: {
      showUploadFile() {
        this.is_show_modal = true
        this.modal_title = '添加客户附件'
        this.modal_type = 'UploadFile'
      },
      cancelModal(status) {
        this.is_show_modal = status
      },
    },
  }
</script>

<style lang="less" scoped>
  .Attachment {
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
</style>
