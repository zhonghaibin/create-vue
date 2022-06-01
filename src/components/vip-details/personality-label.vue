<template>
  <div class="PersonalityLabel">
    <div class="content">
      <div class="box">
        <div class="row">
          <div class="left">标签名称</div>
          <div class="right">
            <div class="labs">
              <Tag
                v-for="label in labels_list"
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
        <div class="title">已添加标签</div>
        <div class="content">
          <Tag closable color="default">不吃香菜芹菜</Tag>
          <Tag closable color="default">不能吹空调</Tag>
        </div>
      </div>
      <div class="tab-list">
        <div class="tab-list-row">
          <div class="left">禁忌事项</div>
          <div class="right">
            <Tag color="default">不吃香菜芹菜</Tag>
            <Tag color="default">不吃香菜芹菜</Tag>
            <Tag color="default">不吃香菜芹菜</Tag>
            <Tag color="default">不吃香菜芹菜</Tag>
            <Tag color="default">不吃香菜芹菜</Tag>
            <Tag color="default">不吃香菜芹菜</Tag>
            <Tag color="default">不吃香菜芹菜</Tag>
            <Tag color="default">不吃香菜芹菜</Tag>
          </div>
        </div>
        <div class="tab-list-row">
          <div class="left">消费能力</div>
          <div class="right">
            <Tag color="default">不吃香菜芹菜</Tag>
            <Tag color="default">不吃香菜芹菜</Tag>
            <Tag color="default">不吃香菜芹菜</Tag>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left"></div>
      <div class="right">
        <div class="bt" @click="changeLabels">保存</div>
        <div class="bt" @click="cancel">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PersonalityLabel',
    components: {},
    props: {
      labels: {
        type: Array,
        default: function () {
          return []
        },
      },
    },
    data: function () {
      return {
        labels_list: [],
        labels_title: '',
      }
    },
    created() {
      this.labels_list = JSON.parse(JSON.stringify(this.labels))
    },
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
      changeLabels() {
        this.$emit('changeLabels')
      },

      handleClose(val) {
        let index = this.labels_list.indexOf(val)
        if (index > -1) {
          this.labels_list.splice(index, 1)
        }
      },
      keyupClick() {
        if (
          this.labels_title &&
          this.labels_list.indexOf(this.labels_title) < 0
        ) {
          this.labels_list.push(this.labels_title)
        }

        this.labels_title = ''
      },
    },
  }
</script>

<style lang="less" scoped>
  .PersonalityLabel {
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
      .tab-list {
        border-top: 1px solid #ccc;
        margin-top: 10px;
        .tab-list-row {
          display: flex;
          padding: 4px 2px;
          align-items: center;
          border-bottom: 1px solid #f3f3f3;
          margin: 1px;
          .left {
            min-width: 80px;
            padding: 2px 4px;
            font-weight: bold;
          }
          .right {
          }
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
