<template>
  <div class="TodayEvent">
    <div class="box">
      <TodayAppointment />
    </div>
    <div class="box">
      <TodayImportantDate />
    </div>
    <div class="box">
      <TodayRemindEvent />
    </div>
    <div class="box">
      <TodayDueService />
    </div>
  </div>
</template>
<script>
  import TodayAppointment from '@/components/business-track/today-event/today-appointment'
  import TodayImportantDate from '@/components/business-track/today-event/today-important-date'
  import TodayRemindEvent from '@/components/business-track/today-event/today-remind-event'
  import TodayDueService from '@/components/business-track/today-event/today-due-service'
  export default {
    name: 'TodayEvent',
    components: {
      TodayAppointment,
      TodayImportantDate,
      TodayRemindEvent,
      TodayDueService,
    },
    data: function () {
      return {}
    },
    methods: {},
  }
</script>
<style lang="less" scoped>
  .TodayEvent {
    background: white;
    display: flex;
    flex-flow: wrap;
    padding-bottom: 20px;
    .box {
      padding: 20px 20px 0 20px;
      width: 50%;
      border-radius: 6px;
    }
  }
</style>
