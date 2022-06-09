<template>
  <div class="VipRemind">
    <div class="box">
      <div class="row">
        <div class="left">会员信息</div>
        <div class="right">
          <div class="name">{{ memberInfo.name }}</div>
          <div class="phone">{{ memberInfo.tel }}</div>
        </div>
      </div>
      <div class="row">
        <div class="left">提醒时间</div>
        <div class="right">
          <DatePicker
            v-model="formData.time"
            format="yyyy-MM-dd"
            placeholder="请选择时间"
            style="width: 200px"
            transfer
            type="date"
            :value="formData.time"
            value-format="yyyy-MM-dd"
            @on-change="formData.time = $event"
          />
        </div>
      </div>
      <div class="row">
        <div class="left">提醒人员</div>
        <div class="right">
          <Select
            v-model="formData.staff_id"
            clearable
            filterable
            :loading="loading"
            style="width: 200px"
          >
            <div slot="empty">未找到数据</div>
            <Option v-for="item in staffList" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="row">
        <div class="left">提醒内容</div>
        <div class="right">
          <Input
            v-model="formData.info"
            placeholder="请输入提醒内容"
            style="width: 200px"
            type="textarea"
          />
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="bt" @click="setWarningAct">保存</div>
      <div class="bt" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
  import { getStaffList, setWarningAct } from '@/api/vip'

  export default {
    name: 'VipRemind',
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        loading: false,
        staffList: [],
        formData: {
          vid: this.memberInfo.id,
          info: '',
          staff_id: '',
          time: '',
        },
        page: {
          total: 0,
          pageSize: 5,
          current: 1,
        },
      }
    },
    created() {
      this.getStaffList()
    },
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
      save() {
        this.setWarningAct()
      },
      async setWarningAct() {
        const { status, msg } = await setWarningAct(this.formData)
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.$Message.success(msg)
          this.$emit('change')
        }
      },
      async getStaffList() {
        this.loading = true
        const { data } = await getStaffList({
          search: '',
          tid: '',
          status: '',
          page: '1000',
        })
        this.loading = false
        this.staffList = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipRemind {
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
