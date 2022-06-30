<template>
  <div class="box">
    <div class="column">基础设置</div>
    <div class="list">
      <table class="table">
        <tr>
          <td style="width: 400px">
            库存不足无法进行开单：
            <i-switch v-model="switch1" @on-change="change" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            调拨自动确认收货设置：
            <i-switch v-model="switch1" @on-change="change" />
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            库存预警提示：
            <i-switch v-model="switch1" @on-change="change" />
          </td>
          <td>
            请设置率存预警提示值
            <Input placeholder="1-100" style="width: 100px" />
          </td>
        </tr>
        <tr>
          <td>
            请设置率存预警提示值：
            <i-switch v-model="switch1" @on-change="change" />
          </td>
          <td>
            设置商品保医期提醒,到期前
            <Select v-model="model1" style="width: 100px">
              <Option
                v-for="item in dayList"
                :key="item.value"
                :value="item.value"
              >
                {{ item.value }}
              </Option>
            </Select>
            个月进行预警提示
          </td>
        </tr>
        <tr>
          <td>通过销售开单的商品：</td>
          <td>
            <RadioGroup>
              <Radio label="1">
                <span>扣除系统库存</span>
              </Radio>
              <span style="color: #ccc">仅扣除已入库商品,未入库商品不扣除</span>
              <br />
              <Radio label="2">
                <span>不扣除系统库存</span>
              </Radio>
            </RadioGroup>
          </td>
        </tr>
        <tr>
          <td>微信商城销售的商品：</td>
          <td>
            <RadioGroup>
              <Radio label="1">
                <span>扣除系统库存</span>
              </Radio>
              <span style="color: #ccc">仅扣除已入库商品,未入库商品不扣除</span>
              <br />
              <Radio label="2">
                <span>不扣除系统库存</span>
              </Radio>
            </RadioGroup>
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <div class="add-bt">保存</div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BaseSet',
    data: function () {
      return {
        dayList: [
          {
            value: '1',
          },
          {
            value: '2',
          },
          {
            value: '3',
          },
          {
            value: '4',
          },
          {
            value: '5',
          },
          {
            value: '6',
          },
          {
            value: '7',
          },
          {
            value: '8',
          },
          {
            value: '9',
          },
          {
            value: '10',
          },
          {
            value: '11',
          },
          {
            value: '12',
          },
        ],
        model1: '',
        switch1: false,
      }
    },
    methods: {
      change(status) {
        this.$Message.info('开关状态：' + status)
      },
    },
  }
</script>

<style lang="less" scoped>
  .box {
    .list {
      padding: 8px;
      border-radius: 8px;
      background: white;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
      margin-bottom: 20px;
      tr {
        td {
          border: 1px solid #eeee;
          padding: 20px;
          .add-bt {
            width: 100px;
            color: white;
            margin-right: 20px;
            cursor: pointer;
            background: #f19ec2;
            padding: 6px 14px;
            border-radius: 4px;
            margin-bottom: 1px;
            text-align: center;
          }
        }
      }
    }
  }
</style>
