<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less" scoped>
  /deep/.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar {
    color: #f19ec2;
  }
  /deep/.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    color: #f19ec2;
  }
  /deep/ .ivu-tabs-nav .ivu-tabs-tab:hover {
    color: #f19ec2;
  }
  /deep/.ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: #f19ec2;
    border-bottom: none;
  }
  /deep/.ivu-tabs-bar .ivu-tabs-tab:hover {
    border-color: #f19ec2;
  }
  /deep/.ivu-input-search {
    background: #f19ec2 !important;
    border-color: #f19ec2 !important;
  }

  /deep/.ivu-btn-primary {
    background: #f19ec2;
    border-color: #f19ec2;
  }
  /deep/.ivu-table-wrapper {
    border: none;
  }
  /deep/.ivu-table-header {
    color: #000000;
  }
  /deep/.ivu-table th {
    background-color: #ffe1ef;
    //text-align: center;
  }
</style>
