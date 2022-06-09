<template>
  <div class="Deposit">
    <div class="box">
      <div class="row">
        <div class="left">当前会员</div>
        <div class="right">
          <div class="name">{{ memberInfo.name }}</div>
          <div class="phone">{{ memberInfo.tel }}</div>
        </div>
      </div>
      <div class="row">
        <div class="left">寄存商品</div>
        <div class="right">
          <Select
            v-model="formData.gid"
            clearable
            filterable
            :loading="loading"
            style="width: 200px"
          >
            <div slot="empty">未找到数据</div>
            <Option v-for="item in goodsList" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="row">
        <div class="left">寄存数量</div>
        <div class="right">
          <Input
            v-model="formData.use_num"
            placeholder="请输入寄存的数量"
            style="width: 200px"
          />
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="bt" @click="save">保存</div>
      <div class="bt" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
  import { getGoodsList, setDeposit } from '@/api/vip'

  export default {
    name: 'Deposit',
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        goodsList: [],
        formData: {
          gid: '',
          vid: this.memberInfo.id,
          use_num: '',
        },
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        loading: false,
      }
    },
    created() {
      this.getGoodsList()
    },
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
      save() {
        this.setDeposit()
      },
      async getGoodsList() {
        this.loading = true
        const { data } = await getGoodsList({
          search: '',
          tid: '',
          sid: '',
          p: 1,
          page: 10000,
        })
        this.loading = false
        this.goodsList = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
      async setDeposit() {
        const { status, msg } = await setDeposit(this.formData)
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.$Message.success(msg)
          this.$emit('changeDeposit')
        }
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
