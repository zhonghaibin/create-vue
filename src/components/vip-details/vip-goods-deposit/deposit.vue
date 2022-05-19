<template>
  <div class="Deposit">
    <div class="box">
      <div class="row">
        <div class="left">当前会员</div>
        <div class="right">
          <div class="name">曾文明</div>
          <div class="phone">13823232512</div>
        </div>
      </div>
      <div class="row">
        <div class="left">寄存商品</div>
        <div class="right"><Input placeholder="请输入寄存商品名称" /></div>
      </div>
      <div class="row">
        <div class="left">寄存数量</div>
        <div class="right"><Input placeholder="请输入寄存的数量" /></div>
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
    name: 'Deposit',
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
    },
  }
</script>

<style lang="less" scoped>
  .Deposit {
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
          .name {
          }
          .phone {
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
