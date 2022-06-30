<template>
  <div class="Ladder">
    <div class="box">
      <div class="row">
        <div class="left">提成方案名称</div>
        <div class="right">
          <Input placeholder="请输入品牌名称" style="width: 200px" />
        </div>
      </div>
      <div class="row">
        <div class="left">提成类型</div>
        <div class="right">
          <RadioGroup v-model="button1" type="button">
            <Radio label="北京" />
            <Radio label="上海" />
            <Radio label="深圳" />
            <Radio label="杭州" />
          </RadioGroup>
        </div>
      </div>

      <div class="row">
        <div class="left">计算方式</div>
        <div class="right"></div>
      </div>
    </div>

    <div class="footer">
      <div class="bt">保存</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Ladder',
    data: function () {
      return {
        commissionList: [
          {
            label: '业绩提成',
            value: '1',
          },
          {
            label: '耗卡提成',
            value: '2',
          },
          {
            label: '增品耗卡提成',
            value: '3',
          },
        ],
        commission: '',
        calculationList: [
          {
            label: '阶梯式计算',
            value: '1',
          },
          {
            label: '阶段性计算',
            value: '2',
          },
        ],
        calculation: '',
        dateList: [
          {
            label: '年',
            value: '1',
          },
          {
            label: '月',
            value: '2',
          },
          {
            label: '日',
            value: '3',
          },
        ],
        date: '',
      }
    },
    methods: {},
  }
</script>

<style lang="less" scoped>
  .Ladder {
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
