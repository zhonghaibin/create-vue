<template>
  <div class="VipSearch1">
    <Row>
      <Col span="12">
        <Row class="row">
          <Col class="label" span="2">消费金额:</Col>
          <Col class="all" span="2">全部</Col>
          <Col span="4">
            <Input placeholder="输入金额" size="small" />
          </Col>
          <Col span="1" style="text-align: center">-</Col>
          <Col span="4">
            <Input placeholder="输入金额" size="small" />
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row class="row">
          <Col class="label" span="2">未到店:</Col>
          <Col class="all" span="2">全部</Col>
          <Col class="text" span="4">超过一个月未到店</Col>
          <Col class="text" span="4">超过两个月未到店</Col>
          <Col class="text" span="4">超过三个月未到店</Col>
          <Col class="text" span="4">超过半年未到店</Col>
          <Col class="search-bt" span="3">
            <Input
              enter-button="确定"
              placeholder="自定义天"
              search
              size="small"
            />
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row class="row">
          <Col class="label" span="2">到店频次:</Col>
          <Col class="all" span="2">全部</Col>
          <Col class="text" span="3">1次以内/月</Col>
          <Col class="text" span="3">2次以内/月</Col>
          <Col class="text" span="3">3次以内/月</Col>
          <Col span="3">
            <Input
              enter-button="确定"
              placeholder="自定义天"
              search
              size="small"
            />
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row class="row">
          <Col class="label" span="2">宝宝生日:</Col>
          <Col class="all" span="2">全部</Col>
          <Col class="text" span="3">近三天过生日</Col>
          <Col class="text" span="3">近一周过生日</Col>
          <Col class="text" span="3">近三周过生日</Col>
          <Col span="3">
            <Input
              enter-button="确定"
              placeholder="自定义天"
              search
              size="small"
            />
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row class="row">
          <Col class="label" span="2">近期生日:</Col>
          <Col class="all" span="2">全部</Col>
          <Col class="text" span="3">近三天过生日</Col>
          <Col class="text" span="3">近一周过生日</Col>
          <Col class="text" span="3">近三周过生日</Col>
          <Col span="3">
            <Input
              enter-button="确定"
              placeholder="自定义天"
              search
              size="small"
            />
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row class="row">
          <Col class="label" span="2">经期时间:</Col>
          <Col class="all" span="2">全部</Col>
          <Col class="text" span="3">近三天过</Col>
          <Col class="text" span="3">近一周过</Col>
          <Col span="3">
            <Input
              enter-button="确定"
              placeholder="自定义天"
              search
              size="small"
            />
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row class="row">
          <Col class="label" span="2">会员等级:</Col>
          <Col class="all" span="2">全部</Col>
          <Col class="text" span="3">铂金</Col>
          <Col class="text" span="3">黑钻</Col>
          <Col class="text" span="3">黄金</Col>
          <Col class="text" span="3">
            <Input
              enter-button="确定"
              placeholder="自定义天"
              search
              size="small"
            />
          </Col>
        </Row>
      </Col>
      <Col span="12">
        <Row class="row">
          <Col class="label" span="2">来源渠道:</Col>
          <Col class="all" span="2">全部</Col>
          <Col class="text" span="3">自然进店</Col>
          <Col class="text" span="3">美团</Col>
          <Col class="text" span="3">大众点评</Col>
          <Col class="text" span="3">未设置</Col>
          <Col class="text" span="3">
            <Input
              enter-button="确定"
              placeholder="自定义天"
              search
              size="small"
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'VipSearch1',
  }
</script>

<style lang="less" scoped>
  .VipSearch1 {
    border-top: 1px solid #e9e7e7;

    .row {
      height: 34px;
      line-height: 34px;
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
    }

    .text {
      text-align: center;
      cursor: pointer;
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
      padding: 4px 10px;
    }
  }
</style>
