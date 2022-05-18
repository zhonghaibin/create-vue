<template>
  <div class="VipInfoDetails">
    <div class="details">
      <div class="box">
        <div class="header">必填信息</div>
        <div class="content">
          <div class="row">
            <div class="left">*会员姓名</div>
            <div class="center">
              <Input placeholder="请输入会员姓名" />
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">*会员性别</div>
            <div class="center">
              <RadioGroup>
                <Radio label="male">女</Radio>
                <Radio label="female">男</Radio>
              </RadioGroup>
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">*手机号</div>
            <div class="center"><Input placeholder="请输入正确手机号" /></div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">*会员类型</div>
            <div class="center">
              <RadioGroup>
                <Radio label="male">会员</Radio>
                <Radio label="female">散客</Radio>
              </RadioGroup>
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">*来源渠道</div>
            <div class="center">
              <Select v-model="source" style="width: 162px">
                <Option
                  v-for="item in source_list"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </Option>
              </Select>
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">*所属门店</div>
            <div class="center">
              <Select v-model="store" style="width: 162px">
                <Option
                  v-for="item in store_list"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </Option>
              </Select>
            </div>
            <div class="right"></div>
          </div>
        </div>
      </div>
      <div class="box">
        <div class="header">选填信息</div>
        <div class="content">
          <div class="row">
            <div class="left">初始累计消费</div>
            <div class="center"><Input placeholder="请输入金额" /></div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">初始累计积分</div>
            <div class="center">
              <Input placeholder="请输入积分" />
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">会员生日</div>
            <div class="center">
              <DatePicker
                placeholder="开始时间"
                style="width: 162px"
                type="date"
              />
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">会员等级</div>
            <div class="center">
              <Select v-model="grade" style="width: 162px">
                <Option
                  v-for="item in grade_list"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </Option>
              </Select>
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">会员有效期</div>
            <div class="center">
              <DatePicker
                placeholder="开始时间"
                style="width: 162px"
                type="date"
              />
            </div>
            <div class="right">
              <Checkbox label="twitter">
                <span>永久有效</span>
              </Checkbox>
            </div>
          </div>
          <div class="row">
            <div class="left">会员状态</div>
            <div class="center">
              <Select v-model="status" style="width: 162px">
                <Option
                  v-for="item in status_list"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </Option>
              </Select>
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">专属顾问</div>
            <div class="center">
              <Select v-model="counselor" style="width: 162px">
                <Option
                  v-for="item in counselor_list"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </Option>
              </Select>
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">专属产康师</div>
            <div class="center">
              <Select v-model="obstetrician" style="width: 162px">
                <Option
                  v-for="item in obstetrician_list"
                  :key="item.value"
                  :value="item.value"
                >
                  {{ item.label }}
                </Option>
              </Select>
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">会员地址</div>
            <div class="center">
              <Input placeholder="请输入会员地址" />
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">*身份证</div>
            <div class="center">
              <Input placeholder="请输入会员身份证" />
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">孕期</div>
            <div class="center">
              <DatePicker
                placeholder="开始时间"
                style="width: 162px"
                type="date"
              />
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">预产期</div>
            <div class="center">
              <DatePicker
                placeholder="开始时间"
                style="width: 162px"
                type="date"
              />
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">当前胎数</div>
            <div class="center">
              <Input placeholder="请输入胎数" />
            </div>
            <div class="right"></div>
          </div>
          <div class="row">
            <div class="left">会员密码</div>
            <div class="center">
              <Input placeholder="请输入会员密码" />
            </div>
            <div class="right"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="bt">保存</div>
      <div class="bt" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VipInfoDetails',
    data: function () {
      return {
        source_list: [
          {
            value: '1',
            label: '自然进店',
          },
          {
            value: '2',
            label: '老客转介绍',
          },
        ],
        source: '',
        store_list: [
          {
            value: '1',
            label: '惠城总店',
          },
          {
            value: '2',
            label: '武汉分店',
          },
        ],
        store: '',
        grade_list: [
          {
            value: '0',
            label: '默认等级',
          },
        ],
        grade: '',
        status_list: [
          {
            value: '1',
            label: '正常使用',
          },
          {
            value: '2',
            label: '挂失锁定',
          },
        ],
        status: '',
        counselor_list: [],
        counselor: '',
        obstetrician_list: [],
        obstetrician: '',
      }
    },
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipInfoDetails {
    .details {
      overflow: auto;
      height: 500px;
      .box {
        padding: 0 50px;
        .header {
          font-size: 14px;
          font-weight: bold;
          flex: 1;
          margin: 10px 0;
        }

        .content {
          .row {
            display: flex;
            height: 30px;
            align-items: center;
            margin: 4px auto;

            .left {
              width: 80px;
              text-align: right;
              padding: 2px 4px;
            }

            .right {
              padding-left: 10px;
            }
          }
        }
      }
    }
    .footer {
      margin-top: 10px;
      display: flex;
      justify-content: end;
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
