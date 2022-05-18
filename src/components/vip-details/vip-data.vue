<template>
  <div class="VipData">
    <div class="card">
      <div class="header">
        <div class="ico"><Icon type="logo-usd" /></div>
        <div class="title">客户资产</div>
      </div>
      <div class="content">
        <div class="row">
          <div class="left">会员余额</div>
          <div class="right">3333</div>
        </div>
        <div class="row">
          <div class="left">积分</div>
          <div class="right">333</div>
        </div>
        <div class="row">
          <div class="left">欠款金额</div>
          <div class="right">333</div>
        </div>
        <div class="little-row">
          <div class="left">&nbsp;</div>
          <div class="right"><spin class="bt">还款</spin></div>
        </div>
        <div class="row">
          <div class="left">名下套餐次卡</div>
          <div class="right">3</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="header">
        <div class="ico"><Icon type="ios-people" /></div>
        <div class="title">客户贡献</div>
      </div>
      <div class="content">
        <div class="row">
          <div class="left">累计消费余额</div>
          <div class="right">3333</div>
        </div>
        <div class="row">
          <div class="left">累计耗卡总额</div>
          <div class="right">333</div>
        </div>
        <div class="row">
          <div class="left">转介绍人数</div>
          <div class="right">333</div>
        </div>
        <div class="row">
          <div class="left">今年消费排名</div>
          <div class="right">3</div>
        </div>
        <div class="row">
          <div class="left">累计消费排名</div>
          <div class="right">3</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="header">
        <div class="ico"><Icon type="md-pie" /></div>
        <div class="title">客户粘性</div>
      </div>
      <div class="content">
        <div class="row">
          <div class="left">总到店次数</div>
          <div class="right">3333</div>
        </div>
        <div class="row">
          <div class="left">平均到店频率</div>
          <div class="right">333</div>
        </div>
        <div class="row">
          <div class="left">生命周期归类</div>
          <div class="right">333</div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="header">
        <div class="ico"><Icon type="ios-photos" /></div>
        <div class="title">股东收益</div>
      </div>
      <div class="content">
        <div class="row">
          <div class="left">可提现分红</div>
          <div class="right">3333</div>
        </div>
        <div class="row">
          <div class="left">累计分红</div>
          <div class="right">333</div>
        </div>
        <div class="row">
          <div class="left">分享闺蜜卡领取次数</div>
          <div class="right">333</div>
        </div>
        <div class="row">
          <div class="left">转化数</div>
          <div class="right">3</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VipData',
  }
</script>

<style lang="less" scoped>
  .VipData {
    display: flex;
    padding-bottom: 10px;
    .card {
      flex: 1;
      margin: 20px 90px 0px 30px;
      border-radius: 20px;
      border: 1px solid #dcdee2;
      box-shadow: 1px 1px 5px rgb(0 0 0 / 30%);

      height: 480px;
      cursor: pointer;
      .header {
        height: 45px;
        line-height: 45px;
        display: flex;
        align-items: center;
        .ico {
          width: 45px;
          height: 45px;
          text-align: center;
          font-size: 24px;
          margin-left: 16px;
        }
        .title {
          font-size: 16px;
          font-weight: bold;
        }
        .title:hover {
          color: #cc749a;
        }
      }
      .content {
        border-top: 1px dashed #cccc;
        margin: 0px 20px;
        padding-top: 20px;
        .row {
          display: flex;
          height: 50px;
          line-height: 50px;
          font-size: 14px;
          .left {
            flex: 1;
          }
          .right {
            font-weight: bold;
          }
        }
        .row:hover {
          color: #cc749a;
        }
        .little-row {
          display: flex;
          height: 10px;
          .left {
            flex: 1;
          }
          .right {
            .bt {
              cursor: pointer;
              color: blue;
            }
          }
        }
      }
    }
    .card:hover {
      border: 1px solid #fcbad7;
    }
  }
</style>
