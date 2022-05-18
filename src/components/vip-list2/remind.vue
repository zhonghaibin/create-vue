<template>
  <div class="Remind">
    <div class="box">
      <div class="header">
        <div class="cell">
          <div class="userInfo">
            <div class="left">
              <div class="img">
                <img
                  class="ui"
                  src="https://cdn.learnku.com//uploads/communities/WtC3cPLHzMbKRSZnagU9.png!/both/44x44"
                />
              </div>
            </div>
            <div class="right">
              <div class="name">曾文敏</div>
              <div class="phone">15852123252</div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="td">
            <div class="row">
              <div class="left">
                <span>服务项目：</span>
              </div>
              <div class="right">
                <span>钻石美睫</span>
              </div>
            </div>
            <div class="row">
              <div class="left">
                <span>最近一次服务时间：</span>
              </div>
              <div class="right">
                <span>2020-11-12 11:10</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="td">
            <div class="row">
              <div class="left">
                <span>首次服务时间：</span>
              </div>
              <div class="right">
                <span>2020-12-12 16:10</span>
              </div>
            </div>
            <div class="row">
              <div class="left">
                <span>据下一次服务时间：</span>
              </div>
              <div class="right">
                <span>6天</span>
              </div>
            </div>
          </div>
        </div>
        <div class="cell">
          <div class="td">
            <div class="row">
              <div class="left">
                <span>首次次数：</span>
              </div>
              <div class="right">
                <span>2</span>
              </div>
            </div>
            <div class="row">
              <div class="left">
                <span>&nbsp;</span>
              </div>
              <div class="right">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="row1">
          <RadioGroup>
            <Radio label="短信提醒" />
            <Radio label="我已电话提醒会员" />
            <Radio label="我已微信提醒会员" />
          </RadioGroup>
        </div>
        <div class="row2">
          <Input
            :autosize="{ minRows: 3, maxRows: 6 }"
            placeholder=" 你于(最近一次服务时间)消费了（服务项目），距离下次服务时间还有（**）天，请您抽出宝贵的时间，预约再次到店哦~"
            type="textarea"
          />
        </div>
        <div class="row3">
          *（）里面的文字是系统自带参数，不可修改，但可删除
        </div>
        <div class="row4">
          <div class="bt">
            <Icon type="ios-send" />
            发送短信
          </div>
        </div>
      </div>
      <div class="footer"><span class="text">短信剩余条数：1114条</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Remind',
  }
</script>

<style lang="less" scoped>
  .Remind {
    .box {
      margin: 10px 20px 0 20px;
      padding: 10px 0;
      .header {
        border-radius: 10px;
        display: flex;
        border: 1px solid #d1d1d1;
        align-items: center;
        .cell {
          margin: 6px 12px;
          display: flex;
          .userInfo {
            display: flex;
            .left {
              .img {
                .ui {
                  border-radius: 50%;
                }
              }
            }
            .right {
              height: 20px;
              line-height: 20px;
              padding-left: 5px;
              .name {
              }
              .phone {
              }
            }
          }
          .td {
            .row {
              display: flex;
              .left {
                height: 20px;
                line-height: 20px;
              }
              .right {
                height: 20px;
                line-height: 20px;
              }
            }
          }
        }
      }
      .content {
        margin-top: 20px;
        border-radius: 10px;
        border: 1px solid #d1d1d1;
        align-items: center;
        height: 300px;
        .row1 {
          display: flex;
          height: 40px;
          line-height: 40px;
          margin: 0 40px;
        }
        .row2 {
          border: 1px solid #d1d1d1;
          margin: 20px 40px 4px 40px;
          padding: 6px;
          border-radius: 10px;
        }
        .row3 {
          margin-left: 40px;
          color: red;
        }
        .row4 {
          display: flex;
          justify-content: end;
          .bt {
            width: 100px;
            height: 30px;
            line-height: 30px;
            background: #f19ec2;
            color: white;
            margin-right: 20px;
            text-align: center;
            border-radius: 6px;
            cursor: pointer;
            /deep/.ivu-icon {
              font-size: 16px;
            }
          }
        }
      }
      .footer {
        .text {
          height: 40px;
          line-height: 40px;
          font-size: 14px;
        }
      }
    }
  }
</style>
