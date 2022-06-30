<template>
  <div class="GoShop">
    <div class="box">
      <div class="row">
        <div class="left">会员信息</div>
        <div class="right">{{ memberInfo.name }} {{ memberInfo.tel }}</div>
      </div>
      <div class="row">
        <div class="left">当前所属门店</div>
        <div class="right">{{ memberInfo.shop_name }}</div>
      </div>
      <div class="row">
        <div class="left">转移目标门店</div>
        <div class="right">
          <Select
            v-model="formData.shop_id"
            clearable
            filterable
            :loading="loading"
            style="width: 200px"
            @on-select="selectShop"
          >
            <div slot="empty">未找到数据</div>
            <Option v-for="item in shopList" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
        </div>
      </div>
      <div v-if="formData.shop_id > 0" class="row">
        <div class="left">会员等级</div>
        <div class="right">
          <Select
            v-model="formData.tid"
            clearable
            filterable
            :loading="loading"
            style="width: 200px"
          >
            <div slot="empty">未找到数据</div>
            <Option v-for="item in typeList" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="bt" @click="save">保存</div>
    </div>
  </div>
</template>

<script>
  import { getShopList, getMemberGradeList, setTransferShop } from '@/api/vip'

  export default {
    name: 'GoShop',
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        formData: {
          vid: this.memberInfo.id,
          shop_id: '',
          tid: '',
        },
        loading: false,
        shopList: [],
        typeList: [],
      }
    },
    created() {
      this.getShopList()
    },
    methods: {
      save() {
        this.setTransferShop()
      },
      async setTransferShop() {
        if (!this.formData.shop_id) {
          this.$Message.error('请选择目标门店')
          return
        }
        if (!this.formData.tid) {
          this.$Message.error('请选择会员等级')
          return
        }

        const { status, msg } = await setTransferShop(this.formData)
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.$Message.success(msg)
          this.$emit('change')
          this.$emit('refreshMemberInfo')
        }
      },
      async getShopList() {
        this.loading = true
        const { data } = await getShopList({
          search: '',
          page: '1000',
        })
        this.loading = false
        this.shopList = data.list
      },
      selectShop(shop_id) {
        this.getMemberGradeList(shop_id)
      },
      async getMemberGradeList(shop_id) {
        this.loading = true
        const { data } = await getMemberGradeList({
          sid: shop_id,
          search: '',
          page: 1000,
          p: 1,
        })
        this.loading = false
        this.typeList = data.list
      },
    },
  }
</script>

<style lang="less" scoped>
  .GoShop {
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
          width: 100%;
          .tag {
            display: block;
            float: left;
            border: 1px solid #ccc;
            margin: 2px;
            padding: 2px;
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
