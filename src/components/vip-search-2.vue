<template>
  <div class="VipSearch2">
    <Row>
      <Col>
        <Row class="row">
          <Col class="label">选择分类:</Col>
          <Col v-for="row in type_list" :key="row.id">
            <div class="bt">{{ row.name }}</div>
          </Col>
        </Row>
        <Row class="row">
          <Col class="label">选择条件:</Col>
          <Col class="text">性别</Col>
          <Col class="text">来源渠道</Col>
          <Col class="text">近期生日</Col>
        </Row>
        <Row class="row">
          <Col class="label">具体筛选:</Col>
          <Col class="text">女</Col>
          <Col class="text">男</Col>
          <Col class="text">
            <Button type="primary">添加筛选</Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row class="terms">
      <Col>
        <Row class="row">
          <Col class="label">筛选条件:</Col>
          <Col>
            <Tag closable>性别：女</Tag>
          </Col>
          <Col>
            <Tag closable>性别：男</Tag>
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
        type_list: [
          {
            name: '基本信息',
            id: 1,
          },
          {
            name: '高级信息',
            id: 2,
          },
          {
            name: '资产信息',
            id: 3,
          },
          {
            name: '消费能力',
            id: 4,
          },
        ],

        search_data: {
          type: 1,
          other_type: 1,
        },
      }
    },
  }
</script>

<style lang="less" scoped>
  .VipSearch2 {
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
