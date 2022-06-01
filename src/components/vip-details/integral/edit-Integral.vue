<template>
  <div class="EditIntegral">
    <div class="box">
      <div class="row">
        <div class="left">会员信息</div>
        <div class="right">曾文敏 1584512412</div>
      </div>
      <div class="row">
        <div class="left">当前积分</div>
        <div class="right">1000</div>
      </div>
      <div class="row">
        <div class="left">修改类型</div>
        <div class="right">
          <Select v-model="type" style="width: 200px" transfer>
            <Option
              v-for="item in type_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="row">
        <div class="left">须修正积分</div>
        <div class="right">
          <Input placeholder="" style="width: 200px" />
        </div>
      </div>
      <div class="row">
        <div class="left">备注</div>
        <div class="right">
          <Input placeholder="" style="width: 200px" />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="bt">保存</div>
      <div class="bt" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EditIntegral',
    data: function () {
      return {
        template_type: '',
        template_type_list: [
          {
            label: '预约提醒',
            value: '1',
          },
        ],
        type: '',
        type_list: [
          {
            label: '增加',
            value: '1',
          },
          {
            label: '扣除',
            value: '2',
          },
        ],
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
  .EditIntegral {
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
          width: 100%;
          .tag {
            display: block;
            float: left;
            border: 1px solid #ccc;
            margin: 2px;
            padding: 2px;
          }
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
