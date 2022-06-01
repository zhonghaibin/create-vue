<template>
  <div class="Tag">
    <div class="box">
      <div class="row">
        <div class="left">类别名称</div>
        <div class="right">
          <Input placeholder="" style="width: 200px" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="bt">保存</div>
      <div class="bt" @click="cancel">取消</div>
    </div>
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :title="modal.title"
      :width="700"
    >
      <TagTypeList
        v-if="modal.type === 'TagTypeList'"
        @cancelModal="cancelModal"
      />
    </Modal>
  </div>
</template>

<script>
  import TagTypeList from '@/components/setting/system/tag-type-list'
  export default {
    name: 'Tag',
    components: {
      TagTypeList,
    },
    data: function () {
      return {
        modal: {
          show: false,
          title: '',
          type: false,
        },
        tag_type_list: [],
        tag_type: '',
        color: '',
      }
    },
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },
      cancelModal(status) {
        this.modal.show = status
      },
    },
  }
</script>

<style lang="less" scoped>
  .Tag {
    .box {
      .row {
        display: flex;
        align-items: center;
        margin: 30px 0;
        .left {
          width: 120px;
          text-align: right;
          margin-right: 10px;
        }
        .right {
        }
      }
    }
    .footer {
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      .bt {
        margin-right: 10px;
        width: 80px;
        text-align: center;
        background: #f19ec2;
        border-radius: 2px;
        color: white;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
      }
    }
  }
</style>
