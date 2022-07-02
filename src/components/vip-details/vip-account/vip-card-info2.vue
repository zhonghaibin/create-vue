<template>
  <div class="VipCardInfo2">
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
      <div class="right"></div>
    </div>
    <div class="tab">
      <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
        <TabPane
          v-for="item in lab_list"
          :key="item.id"
          :label="item.name"
          :name="item.name"
        >
          <VipCardList
            v-if="item.name === '储值卡内容' && tab_index === '储值卡内容'"
          />
          <VipCardList1
            v-if="item.name === '随卡赠送' && tab_index === '随卡赠送'"
          />
          <VipCardList2
            v-if="item.name === '消费记录' && tab_index === '消费记录'"
          />
          <VipCardList3
            v-if="item.name === '操作记录' && tab_index === '操作记录'"
          />
          <VipNodeList
            v-if="item.name === '备注信息' && tab_index === '备注信息'"
          />
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
  import VipCardList from '@/components/vip-details/vip-account/vip-card-info2/vip-card-list'
  import VipCardList1 from '@/components/vip-details/vip-account/vip-card-info2/vip-card-list1'
  import VipCardList2 from '@/components/vip-details/vip-account/vip-card-info2/vip-card-list2'
  import VipCardList3 from '@/components/vip-details/vip-account/vip-card-info2/vip-card-list3'
  import VipNodeList from '@/components/vip-details/vip-account/vip-card-info2/vip-node-list'
  export default {
    name: 'VipCardInfo2',
    components: {
      VipCardList,
      VipCardList1,
      VipCardList2,
      VipCardList3,
      VipNodeList,
    },
    data: function () {
      return {
        tab_index: '储值卡内容',
        lab_list: [
          {
            id: 1,
            name: '储值卡内容',
          },
          {
            id: 2,
            name: '随卡赠送',
          },
          {
            id: 3,
            name: '消费记录',
          },
          {
            id: 4,
            name: '操作记录',
          },
          {
            id: 5,
            name: '备注信息',
          },
        ],
      }
    },
    methods: {
      handleTabClick(index) {
        this.tab_index = index
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipCardInfo2 {
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
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
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
