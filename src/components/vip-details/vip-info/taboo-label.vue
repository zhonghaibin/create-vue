<template>
  <div class="TabooLabel">
    <div class="content">
      <div class="box">
        <div class="row">
          <div class="left">标签名称</div>
          <div class="right">
            <div class="labs">
              <Tag
                v-for="label in labels"
                :key="label"
                closable
                @on-close="handleClose(label)"
              >
                {{ label }}
              </Tag>
            </div>
            <div class="input">
              <Input
                v-model="labels_title"
                placeholder="请输入标签名称后按回车"
                style="width: 180px"
                @keyup.enter.native="keyupClick"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="history">
        <div class="title">历史标签</div>
        <div class="content">
          <Tag color="default">不吃香菜芹菜</Tag>
          <Tag color="default">不能吹空调</Tag>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left"></div>
      <div class="right">
        <div class="bt">保存</div>
        <div class="bt" @click="cancel">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabooLabel',
    data: function () {
      return {
        labels: [],
        labels_title: '',
      }
    },
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },

      handleClose(val) {
        let index = this.labels.indexOf(val)
        if (index > -1) {
          this.labels.splice(index, 1)
        }
      },
      keyupClick() {
        if (this.labels_title && this.labels.indexOf(this.labels_title) < 0) {
          this.labels.push(this.labels_title)
        }

        this.labels_title = ''
      },
    },
  }
</script>

<style lang="less" scoped>
  .TabooLabel {
    .content {
      .box {
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
        .row {
          align-items: center;
          display: flex;
          .left {
            width: 60px;
            font-weight: bold;
            padding: 0 4px;
          }
          .right {
            flex: 1;
            display: flex;
            border: 1px solid #bdbdbd;
            border-radius: 4px;
            align-items: center;

            .labs {
            }
            .input {
              /deep/.ivu-input {
                border: none;
              }
            }
          }
        }
      }
      .history {
        .title {
          padding: 10px 0;
        }
        .content {
        }
      }
    }
    .footer {
      .left {
      }
      .right {
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
  }
</style>
