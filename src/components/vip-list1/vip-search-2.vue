<template>
  <div class="VipSearch2">
    <Row>
      <Col>
        <Row class="row">
          <Col class="label">选择分类:</Col>
          <Col v-for="row in search.data" :key="row.id">
            <div
              :class="['bt', current.one.id === row.id ? 'isActive' : 'bt']"
              @click="changeType1(row)"
            >
              {{ row.name }}
            </div>
          </Col>
        </Row>
        <Row class="row">
          <Col class="label">选择条件:</Col>
          <Col v-for="item in search.select1" :key="item.id" class="text">
            <span
              :class="['', current.tow.id === item.id ? 'isActive' : '']"
              @click="changeType2(item)"
            >
              {{ item.name }}
            </span>
          </Col>
        </Row>
        <Row class="row">
          <Col class="label">具体筛选:</Col>
          <div class="flex">
            <Col v-for="item in search.select2" :key="item.id" class="text">
              <template v-if="item.type == 'text'">
                <span
                  :class="[
                    '',
                    current.thirdly.id === item.id ? 'isActive' : '',
                  ]"
                  @click="changeType3(item)"
                >
                  {{ item.name }}
                </span>
              </template>

              <template v-if="item.type == 'daterange'">
                <span
                  :class="[
                    '',
                    current.thirdly.id === item.id ? 'isActive' : '',
                  ]"
                  @click="changeType3(item)"
                >
                  自定义日期
                </span>
                <DatePicker
                  placeholder="选择日期"
                  style="width: 180px; margin-left: 2px"
                  transfer
                  type="daterange"
                />
              </template>
            </Col>
          </div>
          <Col class="text">
            <Button type="primary" @click="addSearch">添加筛选</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row class="terms">
      <Col>
        <Row class="row">
          <Col class="label">筛选条件:</Col>
          <Col v-for="(item, index) in search_list" :key="index">
            <Tag closable :name="index" @on-close="handleClose">
              {{ item.title }}:{{ item.value }}
            </Tag>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'VipSearch2',
    data: function () {
      return {
        search: {
          data: [
            {
              name: '基本信息',
              id: 1,
              children: [
                {
                  id: 1,
                  name: '性别',
                  value: '',
                  children: [
                    {
                      id: 1,
                      name: '女',
                      value: '',
                      type: 'text',
                    },
                    {
                      id: 2,
                      name: '男',
                      value: '',
                      type: 'text',
                    },
                  ],
                },
                {
                  id: 2,
                  name: '来源渠道',
                  value: '',
                  children: [
                    {
                      id: 1,
                      name: '自然进店',
                      value: '',
                      type: 'text',
                    },
                    {
                      id: 2,
                      name: '美团',
                      value: '',
                      type: 'text',
                    },
                  ],
                },
                {
                  id: 3,
                  name: '近期生日',
                  value: '',
                  children: [
                    {
                      id: 1,
                      name: '近3天',
                      value: '',
                      type: 'text',
                    },
                    {
                      id: 2,
                      name: '近7天',
                      value: '',
                      type: 'text',
                    },
                    {
                      id: 3,
                      name: '近半天',
                      value: '',
                      type: 'text',
                    },
                    {
                      id: 4,
                      name: '自定义',
                      value: '',
                      type: 'daterange',
                    },
                  ],
                },
              ],
            },
          ],
          select1: [],
          select2: [],
        },
        search_list: [],
        current: {
          one: [],
          tow: [],
          thirdly: [],
        },
      }
    },
    created() {},
    methods: {
      changeType1: function (item) {
        this.search.select1 = item.children
        this.current.one = item
      },
      changeType2: function (item) {
        this.search.select2 = item.children
        this.current.tow = item
        this.current.thirdly = []
      },
      changeType3: function (item) {
        if (this.current.tow.length < 1) {
          return false
        }
        this.current.thirdly = item
      },
      addSearch: function () {
        if (this.current.tow.length < 1) {
          return false
        }
        if (this.current.thirdly.length < 1) {
          return false
        }

        let id = this.current.one.id + '_' + this.current.tow.id

        for (let i = 0; i < this.search_list.length; i++) {
          if (this.search_list[i].id == id) {
            this.search_list.splice(i, 1)
          }
        }

        this.search_list.push({
          id: id,
          title: this.current.tow.name,
          value: this.current.thirdly.name,
        })
        this.current.tow = []
        this.current.thirdly = []
      },
      handleClose(event, index) {
        this.search_list.splice(index, 1)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipSearch2 {
    .isActive {
      color: #ff7db6;
      border: 1px solid #f19ec2;
      padding: 2px;
    }
    .terms {
      border-top: 1px dashed #ccc;
      margin-top: 20px;
      .ivu-tag {
        border: 1px solid #f19ec2;
        color: #f19ec2;
        background-color: white;
        /deep/ .ivu-tag-text {
          color: #f19ec2;
        }
        /deep/ .ivu-icon-ios-close {
          color: #f19ec2;
        }
      }
    }
    .row {
      height: 34px;
      line-height: 20px;
      padding: 4px 4px 1px 4px;
      display: flex;
      align-items: center;
    }

    .bt {
      width: 80px;
      text-align: center;
      padding: 4px 2px;
      border: 1px solid #ccc;
      margin-right: 10px;
      border-radius: 5px;
      cursor: pointer;
    }

    .bt:hover {
      border: 1px solid #f19ec2;
      color: #f19ec2;
    }
    .flex {
      display: flex;
      align-items: center;
    }
    .text {
      display: block;
      cursor: pointer;
      padding: 4px 10px;
      margin-right: 10px;
    }
    .text:hover {
      text-align: center;
      cursor: pointer;
      color: #f19ec2;
    }
    .label {
      font-weight: bold;
      padding: 4px 10px;
    }
  }
</style>
