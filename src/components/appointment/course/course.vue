<template>
  <div class="Course">
    <div class="info">
      <div class="row">
        <div class="cell">
          <div class="l">课室名称：</div>
          <div class="r">瑜伽室</div>
        </div>
        <div class="cell">
          <div class="l">上课老师：</div>
          <div class="r">
            <Select v-model="model1" style="width: 200px">
              <Option
                v-for="item in cityList"
                :key="item.value"
                :value="item.value"
              >
                {{ item.label }}
              </Option>
            </Select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="l">上课人数最多：</div>
          <div class="r">
            <Input placeholder="" style="width: 200px" />
            <p class="not">超过当前人数,当前课程不可继续预约</p>
          </div>
        </div>
        <div class="cell">
          <div class="l">上课人数最少：</div>
          <div class="r">
            <Input placeholder="" style="width: 200px" />
            <p class="not">低于当前人数,当前课程不开设</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="cell">
          <div class="l">需提前预约：</div>
          <div class="r">
            <RadioGroup v-model="appointment">
              <Radio
                v-for="(item, index) in appointmentList"
                :key="index"
                :label="item.value"
              >
                <span>{{ item.label }}</span>
              </Radio>
            </RadioGroup>
            <p class="not">"是"，只能提前预约</p>
            <p class="not">”否“，可当天预约</p>
          </div>
        </div>
        <div class="cell">
          <div class="l">课程日期：</div>
          <div class="r">
            <DatePicker
              placeholder="请选择日期"
              style="width: 200px"
              transfer
              type="date"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="search">
      <div class="left"></div>
      <div class="right"><div class="add-bt">添加预约</div></div>
    </div>
    <div class="list">
      <Table :columns="columns" :data="list">
        <!-- slot对应data里面的slot-->
        <template slot="action">
          <span class="bt">编辑</span>
        </template>
      </Table>
      <div class="page">
        <Page
          :current="page.current"
          :page-size="page.pageSize"
          show-elevator
          show-sizer
          size="small"
          :total="page.total"
          @on-change="currentPage"
          @on-page-size-change="pageSizeChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Course',
    data: function () {
      return {
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
        columns: [
          {
            title: '会员信息',
            key: 'time',
          },

          {
            title: '状态',
            key: 'info',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        list: [
          {
            info: '1',
          },
        ],
        appointmentList: [
          {
            label: '是',
            value: '1',
          },
          {
            label: '否',
            value: '2',
          },
        ],
        appointment: '1',
        cityList: [
          {
            value: 'Canberra',
            label: 'Canberra',
          },
        ],
        model1: '',
      }
    },
  }
</script>

<style lang="less" scoped>
  .Course {
    .info {
      font-size: 15px;

      .row {
        padding: 2px 0;
        display: flex;
        align-items: center;
        .cell {
          flex: 1;
          padding: 4px 0;
          display: flex;
          .l {
            width: 120px;
          }
          .r {
          }
          .not {
            color: #c8021c;
            font-size: 12px;
          }
        }
      }
    }
    .search {
      display: flex;
      padding: 10px;
      background: white;
      .left {
        flex: 1;
        display: flex;
        align-items: center;
        .box {
          margin-right: 20px;
          .text {
            font-weight: bold;
            margin: 0 5px;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        .add-bt {
          margin-right: 10px;
          color: white;
          cursor: pointer;
          background: #f19ec2;
          padding: 6px 14px;
          border-radius: 4px;
          margin-bottom: 1px;
        }
      }
    }
    .list {
      margin-top: 10px;
      .page {
        height: 40px;
        padding: 8px 0;
        text-align: center;
        background: white;
      }
    }
  }
</style>
