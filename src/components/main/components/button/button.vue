<template>
  <div class="button">
    <div class="cell">
      <div class="bt">
        <Icon type="md-cog" />
        控制中心
      </div>
    </div>
    <div class="cell">
      <div class="bt">
        <Icon type="ios-chatbubbles" />
        消息提醒
      </div>
    </div>
    <div class="cell">
      <div class="bt">
        <Icon type="md-lock" />
        离岗锁屏
      </div>
    </div>
    <div class="cell">
      <div class="bt">
        <Icon type="md-phone-portrait" />
        手机app
      </div>
    </div>
    <div class="cell">
      <div class="bt">
        <Icon type="md-magnet" />
        在线客服
      </div>
    </div>
  </div>
</template>

<script>
  import './button.less'
  export default {
    name: 'Button',
    methods: {},
  }
</script>
