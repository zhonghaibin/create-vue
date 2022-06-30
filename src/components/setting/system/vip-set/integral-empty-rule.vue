<template>
  <div class="IntegralEmptyRule">
    <div class="box">
      <div class="row">
        <div class="left">清零规则名称</div>
        <div class="right">
          <Input placeholder="" style="width: 200px" />
        </div>
      </div>
      <div class="row">
        <div class="left">适用门店</div>
        <div class="right">
          <Select
            v-model="store"
            clearable
            filterable
            multiple
            style="width: 200px"
          >
            <div slot="empty">未找到数据</div>
            <Option
              v-for="item in storeList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="row">
        <div class="left">清零规则</div>
        <div class="right">
          <RadioGroup v-model="emptyRule">
            <Radio
              v-for="item in emptyRuleList"
              :key="item.value"
              :label="item.value"
            >
              <span>{{ item.label }}</span>
            </Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="row">
        <div class="left">清零时间</div>
        <div class="right">
          <DatePicker
            placeholder="请选择时间"
            style="width: 200px"
            type="date"
          />
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="bt">保存</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IntegralEmptyRule',
    data: function () {
      return {
        storeList: [],
        store: '',
        emptyRuleList: [
          {
            label: '指定时间统一清零',
            value: '1',
          },
          {
            label: '积分发放后N天清零',
            value: '2',
          },
        ],
        emptyRule: '',
      }
    },
    methods: {},
  }
</script>

<style lang="less" scoped>
  .IntegralEmptyRule {
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
