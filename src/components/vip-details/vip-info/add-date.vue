<template>
  <div class="AddDate">
    <div class="details">
      <div class="box">
        <div class="content">
          <div class="row">
            <div class="left"><Input placeholder="输入自定义名称" /></div>
            <div class="center">
              <DatePicker
                placeholder="选择日期"
                style="width: 200px"
                type="date"
              />
            </div>
            <div class="right"><Icon type="ios-trash" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="left">
        <div class="bt">
          <Icon type="md-add" />
          添加自定义
        </div>
      </div>
      <div class="right">
        <div class="bt">保存</div>
        <div class="bt" @click="cancel">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddDate',
    data: function () {
      return {
        source_list: [
          {
            value: '1',
            label: '自然进店',
          },
          {
            value: '2',
            label: '老客转介绍',
          },
        ],
        source: '',
        store_list: [
          {
            value: '1',
            label: '惠城总店',
          },
          {
            value: '2',
            label: '武汉分店',
          },
        ],
        store: '',
        grade_list: [
          {
            value: '0',
            label: '默认等级',
          },
        ],
        grade: '',
        status_list: [
          {
            value: '1',
            label: '正常使用',
          },
          {
            value: '2',
            label: '挂失锁定',
          },
        ],
        status: '',
        counselor_list: [],
        counselor: '',
        obstetrician_list: [],
        obstetrician: '',
      }
    },
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
    },
  }
</script>

<style lang="less" scoped>
  .AddDate {
    .details {
      overflow: auto;
      height: 500px;
      .box {
        .content {
          .row {
            display: flex;
            height: 30px;
            align-items: center;
            margin: 4px auto;

            .left {
              width: 150px;
              text-align: right;
              padding: 2px 4px;
            }

            .right {
              padding-left: 10px;
              font-size: 18px;
              color: #cc749a;
              cursor: pointer;
            }
          }
        }
      }
    }
    .footer {
      .left {
        float: left;
        .bt {
          margin-right: 10px;
          width: 120px;
          text-align: center;
          border: 1px solid #afafaf;
          border-radius: 4px;
          padding: 2px;
          color: #000000;
          height: 30px;
          line-height: 26px;
          cursor: pointer;
        }
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
