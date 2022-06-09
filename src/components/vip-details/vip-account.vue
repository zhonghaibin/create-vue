<template>
  <div>
    <Tabs v-model="tab_index" size="small" @on-click="handleTabClick">
      <TabPane
        v-for="item in lab_list"
        :key="item.id"
        :label="item.name"
        :name="item.name"
      >
        <VipCardList1
          v-if="item.name === '套餐次卡' && tab_index === '套餐次卡'"
          :member-info="memberInfo"
        />
        <VipCardList2 v-if="item.name === '储值卡' && tab_index === '储值卡'" />
        <CouponList v-if="item.name === '优惠券' && tab_index === '优惠券'" />
        <GiftList v-if="item.name === '赠送' && tab_index === '赠送'" />
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  import VipCardList1 from '@/components/vip-details/vip-account/vip-card-list1'
  import VipCardList2 from '@/components/vip-details/vip-account/vip-card-list2'
  import CouponList from '@/components/vip-details/vip-account/coupon-list'
  import GiftList from '@/components/vip-details/vip-account/gift-list'
  export default {
    name: 'VipAccount',
    components: {
      VipCardList1,
      VipCardList2,
      CouponList,
      GiftList,
    },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        tab_index: '套餐次卡',
        lab_list: [
          {
            id: '套餐次卡',
            name: '套餐次卡',
          },
          {
            id: 2,
            name: '储值卡',
          },
          {
            id: 3,
            name: '优惠券',
          },
          {
            id: 4,
            name: '赠送',
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
  /deep/.ivu-tabs-nav {
    .ivu-tabs-tab-active {
      color: #cc749a;
    }
  }
</style>
