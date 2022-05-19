<template>
  <div class="VipCardInfo1">
    <div class="header">
      <div class="left">
        <div class="card">
          <div class="title">骨盆修复套餐</div>
          <div class="content">
            <div class="row">
              <div class="l">购买价格</div>
              <div class="r">323456</div>
            </div>
            <div class="row">
              <div class="l">推销人员</div>
              <div class="r">323456</div>
            </div>
            <div class="row">
              <div class="l">购买时间</div>
              <div class="r">323456</div>
            </div>
            <div class="row">
              <div class="l">启用时间</div>
              <div class="r">323456</div>
            </div>
            <div class="row">
              <div class="l">到期时间</div>
              <div class="r">323456</div>
            </div>
            <div class="row">
              <div class="l">套餐类型</div>
              <div class="r">323456</div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="bt">未锁卡</div>
        <div class="bt">续次</div>
        <div class="bt">换卡</div>
        <div class="bt">退次</div>
      </div>
    </div>
    <div class="tab">
      <Tabs size="small" @on-click="handleTabClick">
        <TabPane v-for="item in lab_list" :key="item.id" :label="item.name">
          <VipCardList v-if="item.id === 1 && tab_index === 1" />
          <VipConsumptionList v-if="item.id === 2 && tab_index === 2" />
          <VipChangeList v-if="item.id === 3 && tab_index === 3" />
          <VipNodeList v-if="item.id === 4 && tab_index === 4" />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import VipCardList from '@/components/vip-details/vip-account/vip-card-info1/vip-card-list'
  import VipConsumptionList from '@/components/vip-details/vip-account/vip-card-info1/vip-consumption-list'
  import VipChangeList from '@/components/vip-details/vip-account/vip-card-info1/vip-change-list'
  import VipNodeList from '@/components/vip-details/vip-account/vip-card-info1/vip-node-list'
  export default {
    name: 'VipCardInfo1',
    components: {
      VipCardList,
      VipConsumptionList,
      VipChangeList,
      VipNodeList,
    },
    data: function () {
      return {
        tab_index: 1,
        lab_list: [
          {
            id: 1,
            name: '次卡内容',
          },
          {
            id: 2,
            name: '消费记录',
          },
          {
            id: 3,
            name: '修改记录',
          },
          {
            id: 4,
            name: '备注信息',
          },
        ],
      }
    },
    methods: {
      handleTabClick(index) {
        this.tab_index = index + 1
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipCardInfo1 {
    .header {
      display: flex;
      margin-left: 10px;
      .left {
        .card {
          border: 1px solid #fceef4;
          width: 420px;
          height: 100px;
          background: #fceef4;
          border-radius: 10px;
          box-shadow: 1px 1px 5px rgb(0 0 0 / 30%);
          margin: 4px 2px;
          .title {
            height: 30px;
            line-height: 30px;
            font-size: 14px;
            font-weight: bold;
            padding: 0 16px;
            border-bottom: 1px dashed #cc749a;
          }
          .content {
            display: flex;
            flex-flow: wrap;
            .row {
              display: flex;
              justify-content: flex-end;
              padding: 2px 20px;
              width: 50%;
              .l {
                flex: 1;
              }
              .r {
              }
            }
          }
        }
      }
      .right {
        display: flex;
        flex-flow: wrap;
        padding: 2px 30px;
        .bt {
          width: 40%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          margin: 10px 8px;
          background: #c75181;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
</style>
