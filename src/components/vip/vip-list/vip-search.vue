<template>
  <div class="VipSearch">
    <div class="topic-nav">
      <div class="left">
        <Input
          v-model="formData.search"
          clearable
          enter-button
          placeholder="输入姓名/手机号/卡号"
          search
          @on-clear="changeValue"
          @on-search="changeValue"
        />
      </div>
      <div class="right">
        <div class="cell">
          <Button
            icon="md-person-add"
            type="primary"
            @click="showModal('新增会员', 'VipInfoDetails')"
          >
            新增会员
          </Button>
        </div>
        <div class="cell">
          <Button icon="ios-cloud-upload" type="primary">导入会员</Button>
        </div>
        <div class="cell">
          <Button icon="ios-cloud-download" type="primary">导出会员</Button>
        </div>
        <div class="cell">
          <Button icon="md-mail" type="primary">批量群发</Button>
        </div>
      </div>
    </div>
    <div class="search">
      <div class="row">
        <div class="label">消费金额:</div>
        <div class="all" @click="clearValue(['money_start', 'money_end'])">
          全部
        </div>
        <div>
          <Input
            v-model="formData.money_start"
            placeholder="输入金额"
            size="small"
            style="width: 100px"
          />
        </div>
        <div style="text-align: center">-</div>
        <div>
          <Input
            v-model="formData.money_end"
            enter-button="确定"
            placeholder="输入金额"
            search
            size="small"
            style="width: 150px"
            @on-search="changeValue"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">未到店:</div>
        <div class="all" @click="clearValue(['day'])">全部</div>
        <div
          v-for="item in beforeShopList"
          :key="item.value"
          :class="['text', formData.day === item.value ? 'active' : '']"
          @click="beforeShop(item)"
        >
          {{ item.label }}
        </div>
        <div class="search-bt">
          <Input
            v-model="formData.day"
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
            @on-search="changeValue"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">到店频次:</div>
        <div class="all" @click="clearValue(['frequency'])">全部</div>
        <div
          v-for="item in shopFrequencyList"
          :key="item.value"
          :class="['text', formData.frequency === item.value ? 'active' : '']"
          @click="shopFrequency(item)"
        >
          {{ item.label }}
        </div>
        <div>
          <Input
            v-model="formData.frequency"
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
            @on-search="changeValue"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">宝宝生日:</div>
        <div class="all" @click="clearValue(['bb_birth'])">全部</div>
        <div
          v-for="item in babyBirthdayList"
          :key="item.value"
          :class="['text', formData.bb_birth === item.value ? 'active' : '']"
          @click="babyBirthday(item)"
        >
          {{ item.label }}
        </div>
        <div>
          <Input
            v-model="formData.bb_birth"
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
            @on-search="changeValue"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">近期生日:</div>
        <div class="all" @click="clearValue(['birth'])">全部</div>
        <div
          v-for="item in recentBirthdayList"
          :key="item.value"
          :class="['text', formData.birth === item.value ? 'active' : '']"
          @click="recentBirthday(item)"
        >
          {{ item.label }}
        </div>
        <div>
          <Input
            v-model="formData.birth"
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
            @on-search="changeValue"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">经期时间:</div>
        <div class="all" @click="clearValue(['period'])">全部</div>
        <div
          v-for="item in periodList"
          :key="item.value"
          :class="['text', formData.period === item.value ? 'active' : '']"
          @click="period(item)"
        >
          {{ item.label }}
        </div>
        <div>
          <Input
            v-model="formData.period"
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
            @on-search="changeValue"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">会员等级:</div>
        <div class="all" @click="clearValue(['tid'])">全部</div>
        <div
          v-for="item in memberGradeList"
          :key="item.id"
          :class="['text', formData.tid === item.id ? 'active' : '']"
          @click="memberGrade(item)"
        >
          {{ item.name }}
        </div>
      </div>

      <div class="row">
        <div class="label">来源渠道:</div>
        <div class="all" @click="clearValue(['source_id'])">全部</div>
        <div
          v-for="item in memberSourceList"
          :key="item.id"
          :class="['text', formData.source_id === item.id ? 'active' : '']"
          @click="memberSource(item)"
        >
          {{ item.name }}
        </div>
        <div
          :class="['text', formData.source_id === -1 ? 'active' : '']"
          @click="
            memberSource({
              id: -1,
              name: '未设置',
            })
          "
        >
          未设置
        </div>
      </div>

      <div class="row">
        <div class="label">所属门店:</div>
        <div class="all" @click="clearValue(['sid'])">全部</div>
        <div
          v-for="item in shopList"
          :key="item.id"
          :class="['text', formData.sid === item.id ? 'active' : '']"
          @click="shop(item)"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
    <Modal
      v-model="modal.show"
      :footer-hide="true"
      :scrollable="modal.scrollable"
      :styles="modal.styles"
      :title="modal.title"
      :width="modal.width"
    >
      <VipInfoDetails
        v-if="modal.type === 'VipInfoDetails' && modal.show"
        @change="change"
      />
    </Modal>
  </div>
</template>

<script>
  import {
    getMemberGradeList,
    getMemberSourceList,
    getShopList,
  } from '@/api/vip'
  import VipInfoDetails from '@/components/vip-details/vip-info/vip-info-details'
  export default {
    name: 'VipSearch',
    components: {
      VipInfoDetails,
    },
    data: function () {
      return {
        modal: {
          show: false,
          title: '',
          type: false,
          width: 600,
          scrollable: true,
          styles: { top: '50px' },
        },
        formData: {
          money_start: '',
          money_end: '',
          start: '',
          end: '',
          tid: '',
          source_id: '',
          search: '',
          birth: '',
          bb_birth: '',
          period: '',
          day: '',
          frequency: '',
          sid: '',
        },
        beforeShopList: [
          {
            label: '超过一个月未到店',
            value: '30',
          },
          {
            label: '超过两个月未到店',
            value: '60',
          },
          {
            label: '超过三个月未到店',
            value: '90',
          },
          {
            label: '超过半年未到店',
            value: '180',
          },
        ],
        shopFrequencyList: [
          {
            label: '1次以内/月',
            value: '1',
          },
          {
            label: '2次以内/月',
            value: '2',
          },
          {
            label: '3次以内/月',
            value: '3',
          },
        ],
        babyBirthdayList: [
          {
            label: '近三天过生日',
            value: '3',
          },
          {
            label: '近一周过生日',
            value: '7',
          },
          {
            label: '近三周过生日',
            value: '21',
          },
        ],
        recentBirthdayList: [
          {
            label: '近三天过生日',
            value: '3',
          },
          {
            label: '近一周过生日',
            value: '7',
          },
          {
            label: '近三周过生日',
            value: '21',
          },
        ],
        memberGradeList: [],
        memberSourceList: [],
        shopList: [],
        periodList: [
          {
            label: '近三天过',
            value: '3',
          },
          {
            label: '近一周过',
            value: '7',
          },
        ],
      }
    },
    created() {
      this.getMemberGradeList()
      this.getMemberSourceList()
      this.getShopList()
    },
    methods: {
      change() {
        this.modal.show = false
        this.$emit('change')
      },
      showModal(title, type) {
        this.modal.show = true
        this.modal.title = title
        this.modal.type = type
      },

      beforeShop(item) {
        this.formData.day = item.value
        this.memberList()
      },
      shopFrequency(item) {
        this.formData.frequency = item.value
        this.memberList()
      },
      babyBirthday(item) {
        this.formData.bb_birth = item.value
        this.memberList()
      },
      recentBirthday(item) {
        this.formData.birth = item.value
        this.memberList()
      },
      memberGrade(item) {
        this.formData.tid = item.id
        this.memberList()
      },
      memberSource(item) {
        this.formData.source_id = item.id
        this.memberList()
      },
      shop(item) {
        this.formData.sid = item.id
        this.memberList()
      },
      period(item) {
        this.formData.period = item.value
        this.memberList()
      },
      clearValue(params) {
        params.forEach((param) => {
          this.formData[param] = ''
        })
        this.memberList()
      },
      changeValue() {
        this.memberList()
      },
      memberList() {
        this.$emit('search', this.formData)
      },
      async getMemberGradeList() {
        const { data } = await getMemberGradeList({
          search: '',
          page: 100,
          p: 1,
        })
        this.memberGradeList = data.list
      },
      async getMemberSourceList() {
        const { data } = await getMemberSourceList({
          search: '',
          page: 100,
          p: 1,
        })
        this.memberSourceList = data.list
      },
      async getShopList() {
        this.loading = true
        const { data } = await getShopList({
          search: '',
          page: 100,
          p: 1,
        })
        this.shopList = data.list
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipSearch {
    padding: 10px 0;
    background: white;
    .topic-nav {
      display: flex;
      align-items: center;
      padding: 0 10px;
      .left {
      }
      .right {
        display: flex;
        align-items: center;
        .cell {
          margin-left: 10px;
        }
      }
    }

    .search {
      flex-flow: wrap;
      display: -webkit-flex;
      padding: 10px 0;
      background: white;
      .row {
        align-items: center;
        width: 50%;
        display: flex;
        height: 34px;

        padding: 4px 4px 1px 4px;
      }

      .all {
        background: #ffecef;
        color: #f19ec2;
        text-align: center;
        height: 20px;
        line-height: 20px;
        width: 50px;
        padding: 1px 2px;
        margin: 8px;
        cursor: pointer;
      }

      .text {
        text-align: center;
        cursor: pointer;
        padding: 2px 10px;
      }

      .active {
        color: #f19ec2;
      }

      .text:hover {
        text-align: center;
        cursor: pointer;
        color: #f19ec2;
      }

      .search-bt {
        margin: 6px;
      }

      .label {
        font-weight: bold;
        padding: 4px 6px;
        width: 80px;
      }
    }
  }
</style>
