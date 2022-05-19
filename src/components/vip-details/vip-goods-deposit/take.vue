<template>
  <div class="Take">
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
        <div class="right">春暖花开盒</div>
      </div>
      <div class="row">
        <div class="left">寄存数量</div>
        <div class="right">2</div>
      </div>
      <div class="row">
        <div class="left">本次取走数量</div>
        <div class="right"><Input placeholder="请输入取走数" /></div>
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
    name: 'Take',
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
    },
  }
</script>

<style lang="less" scoped>
  .Take {
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
