<template>
  <div class="customer">
    <div class="content">
      <div class="row">
        <div class="left">
          <Input placeholder="输入自定义名称" style="width: 200px" />
        </div>
        <div class="right">
          <Input placeholder="输入内容" style="width: 200px" />
        </div>
      </div>
      <div class="row">
        <div class="bt">
          <Icon type="md-add" />
          继续添加一项
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
    name: 'Customer',
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
    },
  }
</script>

<style lang="less" scoped>
  .customer {
    .content {
      margin: 0 auto;
      .row {
        display: flex;
        justify-content: center;
        padding: 10px 0;
        .left {
          margin-right: 2px;
        }
        .right {
        }
        .bt {
          width: 300px;
          margin-top: 4px;
          background: #f19ec2;
          color: white;
          text-align: center;
          height: 30px;
          line-height: 30px;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
    .footer {
      margin-top: 10px;
      display: flex;
      justify-content: end;
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
