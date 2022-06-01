<template>
  <div class="ServiceRemind">
    <div class="box">
      <div class="row">
        <div class="left">选择项目</div>
        <div class="right">
          <Select v-model="service" style="width: 200px" transfer>
            <Option
              v-for="item in service_list"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="row">
        <div class="left">服务周期</div>
        <div class="right">
          <Input placeholder="服务周期" style="width: 200px" />
        </div>
      </div>
      <div class="row">
        <div class="left">停止提醒次数</div>
        <div class="right">
          <Input placeholder="停止提醒次数" style="width: 200px" />
        </div>
      </div>
      <div class="bt">
        <Icon type="md-add" />
        继续添加
      </div>
      <div class="footer">
        <div class="bt">保存</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServiceRemind',
    data: function () {
      return {
        service_list: [
          {
            value: '0',
            label: '全部',
          },
        ],
        service: '0',
      }
    },
  }
</script>

<style lang="less" scoped>
  .ServiceRemind {
    .box {
      padding: 10px 40px;
      .row {
        display: flex;
        align-items: center;
        height: 40px;
        line-height: 40px;
        margin: 10px auto;
        .left {
          width: 145px;
          padding: 0 10px;
          text-align: right;
        }
        .right {
        }
      }
      .bt {
        border: 1px solid #ccc;
        height: 30px;
        line-height: 30px;
        width: 200px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        margin: 0 auto;
      }
      .footer {
        padding: 10px 40px;
        .bt {
          border: 1px solid #f19ec2;
          height: 30px;
          line-height: 30px;

          text-align: center;
          border-radius: 5px;
          cursor: pointer;
          background: #f19ec2;
          color: white;
        }
      }
    }
  }
</style>
