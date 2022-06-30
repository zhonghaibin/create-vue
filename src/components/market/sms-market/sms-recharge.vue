<template>
  <div class="SmsRecharge">
    <div class="box">
      <div class="row">
        <div class="sms">
          <div class="t">
            <div class="l">
              <img :src="smsUrl" />
            </div>
            <div class="r">
              <div class="title">当前剩余短信条数</div>
              <div class="number">42343</div>
            </div>
          </div>
          <div class="b">
            <Icon
              style="font-size: 28px; color: #3c7a89"
              type="md-information-circle"
            />
            请用支付宝/微信扫码,选择合适的套餐进行购买,支持在线支付
          </div>
        </div>
      </div>
      <div class="row">
        <div class="list">
          <div class="cell">
            <div class="content">
              <div class="title">1000条短信包</div>
              <div class="pay">￥60</div>
            </div>
            <div class="bottom">立即支付</div>
          </div>
          <div class="cell">
            <div class="content">
              <div class="title">1000条短信包</div>
              <div class="pay">￥60</div>
            </div>
            <div class="bottom">立即支付</div>
          </div>
          <div class="cell">
            <div class="content">
              <div class="title">1000条短信包</div>
              <div class="pay">￥60</div>
            </div>
            <div class="bottom">立即支付</div>
          </div>
          <div class="cell">
            <div class="content">
              <div class="title">1000条短信包</div>
              <div class="pay">￥60</div>
            </div>
            <div class="bottom">立即支付</div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="bt">查看短信充值记录</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SmsRecharge',
    components: {},
    data: function () {
      return { smsUrl: require('../../../assets/market/sms-red.png') }
    },
    methods: {},
  }
</script>

<style lang="less" scoped>
  .SmsRecharge {
    .box {
      .row {
        margin-top: 40px;
        .sms {
          width: 480px;
          margin: 0 auto;

          .t {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            .l {
              display: flex;
              justify-content: center;
              padding: 0 10px;
            }
            .r {
              .title {
                font-size: 16px;
              }
              .number {
                color: #931062;
                font-size: 18px;
              }
            }
          }
          .b {
            padding: 10px;
            background: #eef3f4;
            text-align: center;
            font-size: 14px;
          }
        }
        .list {
          display: flex;
          justify-content: space-between;
          margin: 0 auto;
          .cell {
            width: 300px;
            margin-right: 20px;
            background: #eef3f4;

            .content {
              height: 400px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              .title {
                padding: 4px;
                font-size: 18px;
              }
              .pay {
                padding: 4px;
                color: #931062;
                font-size: 16px;
              }
            }
            .bottom {
              line-height: 50px;
              height: 50px;
              background: #3c7a89;
              color: white;
              text-align: center;
              cursor: pointer;
              font-size: 14px;
            }
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
