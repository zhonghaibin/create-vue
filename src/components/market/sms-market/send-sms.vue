<template>
  <div class="SendSms">
    <div class="box">
      <div class="header">第一步:编辑短信内容</div>
      <div class="content">
        <div class="top">
          提示:短信内容请勿涉及政治、宗教信仰、个人隐私、人身攻击、微信等敏感内容;同时避免使用“回车”
          “【】”等特殊符号。另使用模板内如存在(本店名称)等,还请按照内容手动修改哦~
        </div>
        <div class="center">
          <div class="left">
            <Input placeholder="" :rows="3" type="textarea" />
          </div>
          <div class="right">
            <div class="add-bt">送券给客户</div>
            <div class="add-bt">常用短信模板</div>
          </div>
        </div>

        <div class="bottom">当前已输入0个字=0条短信</div>
      </div>
    </div>
    <div class="box">
      <div class="header">第二步:筛选发送名单</div>
      <div class="content">
        <div class="tab">
          <div class="cell">全部客户</div>
          <div class="cell">高级筛选</div>
          <div class="cell">精准筛选</div>
        </div>
        <div class="list">
          <Table :columns="columns" :data="list">
            <!-- slot对应data里面的slot-->
            <template slot="action"></template>
          </Table>
          <div class="page">
            <Page
              :current="page.current"
              :page-size="page.pageSize"
              show-elevator
              show-sizer
              size="small"
              :total="page.total"
              @on-change="currentPage"
              @on-page-size-change="pageSizeChange"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="header">第三步:确认发送短信</div>
      <div class="content">
        <div class="sms-info">
          <div class="left">
            <p>
              接收人数：
              <span class="color">0</span>
              人
            </p>
          </div>
          <div class="right">
            <div class="text">
              当前短信剩余条数:
              <span class="color">0</span>
              条
            </div>
            <div class="text">
              本次消耗条数:
              <span class="color">0</span>
              条
            </div>
            <div class="text">
              发送后剩余条数:
              <span class="color">0</span>
              条
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SendSms',
    components: {},
    data: function () {
      return {
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        columns: [
          {
            title: '姓名',
            key: 'time',
          },
          {
            title: '手机号',
            key: 'suname',
          },
          {
            title: '门店名称',
            key: 'name',
          },
          {
            title: '来源渠道',
            key: 'info',
          },
        ],
        list: [
          {
            info: 1,
          },
        ],
      }
    },
    methods: {
      currentPage(current) {
        this.page.current = current
      },
      pageSizeChange(pageSize) {
        this.page.pageSize = pageSize
      },
    },
  }
</script>

<style lang="less" scoped>
  .SendSms {
    .box {
      .header {
        padding: 10px;
        font-size: 16px;
        font-weight: bold;
      }
      .content {
        border: 1px solid #eeeeee;
        .top {
          color: #c85754;
          padding: 10px;
        }
        .tab {
          display: flex;
          .cell {
            cursor: pointer;
            padding: 10px;
            border-right: 1px solid #eeeeee;
          }
        }
        .list {
          .page {
            height: 40px;
            padding: 8px 0;
            text-align: center;
            background: white;
          }
        }
        .center {
          display: flex;
          .left {
            flex: 1;
            padding: 10px;
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            width: 300px;
          }
        }
        .color {
          color: #93105d;
        }
        .sms-info {
          padding: 10px;
          display: flex;
          justify-content: space-between;
          .left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 16px;
          }
          .right {
            text-align: right;
            padding: 0 10px;
            width: 300px;
            .text {
              font-size: 14px;
              padding: 4px;
            }
          }
        }
        .bottom {
          padding: 10px;
        }
      }
    }
    .add-bt {
      margin-bottom: 10px;
      text-align: center;
      width: 120px;
      color: white;
      margin-right: 20px;
      cursor: pointer;
      background: #f19ec2;
      padding: 6px 14px;
      border-radius: 4px;
    }
  }
</style>
