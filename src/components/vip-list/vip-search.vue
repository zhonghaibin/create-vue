<template>
  <div class="VipSearch">
    <Row :gutter="16">
      <Col order="4" span="4">
        <Input enter-button placeholder="输入姓名/手机号/卡号" search />
      </Col>
      <Col order="3" span="2">
        <Button icon="md-person-add" type="primary">添加会员</Button>
      </Col>
      <Col order="2" span="2">
        <Button icon="ios-cloud-upload" type="primary">导入会员</Button>
      </Col>
      <Col order="1" span="2">
        <Button icon="ios-cloud-download" type="primary">导出会员</Button>
      </Col>
      <Col order="0" span="2">
        <Button icon="md-mail" type="primary">批量群发</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'VipSearch',
  }
</script>

<style lang="less" scoped>
  .VipSearch {
    padding: 4px 2px 16px 2px;
  }
</style>
