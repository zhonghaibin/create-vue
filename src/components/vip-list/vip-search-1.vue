<template>
  <div class="VipSearch1">
    <div class="search">
      <div class="row">
        <div class="label">消费金额:</div>
        <div class="all">全部</div>
        <div>
          <Input placeholder="输入金额" size="small" />
        </div>
        <div style="text-align: center">-</div>
        <div>
          <Input placeholder="输入金额" size="small" />
        </div>
      </div>

      <div class="row">
        <div class="label">未到店:</div>
        <div class="all">全部</div>
        <div class="text">超过一个月未到店</div>
        <div class="text">超过两个月未到店</div>
        <div class="text">超过三个月未到店</div>
        <div class="text">超过半年未到店</div>
        <div class="search-bt">
          <Input
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">到店频次:</div>
        <div class="all">全部</div>
        <div class="text">1次以内/月</div>
        <div class="text">2次以内/月</div>
        <div class="text">3次以内/月</div>
        <div>
          <Input
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">宝宝生日:</div>
        <div class="all">全部</div>
        <div class="text">近三天过生日</div>
        <div class="text">近一周过生日</div>
        <div class="text">近三周过生日</div>
        <div>
          <Input
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">近期生日:</div>
        <div class="all">全部</div>
        <div class="text">近三天过生日</div>
        <div class="text">近一周过生日</div>
        <div class="text">近三周过生日</div>
        <div>
          <Input
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">经期时间:</div>
        <div class="all">全部</div>
        <div class="text">近三天过</div>
        <div class="text">近一周过</div>
        <div>
          <Input
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">会员等级:</div>
        <div class="all">全部</div>
        <div class="text">铂金</div>
        <div class="text">黑钻</div>
        <div class="text">黄金</div>
        <div class="text">
          <Input
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
          />
        </div>
      </div>

      <div class="row">
        <div class="label">来源渠道:</div>
        <div class="all">全部</div>
        <div class="text">自然进店</div>
        <div class="text">美团</div>
        <div class="text">大众点评</div>
        <div class="text">未设置</div>
        <div class="text">
          <Input
            enter-button="确定"
            placeholder="自定义天"
            search
            size="small"
            style="width: 120px"
          />
        </div>
      </div>
    </div>
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
    .search {
      display: flex;
      flex-flow: wrap;
      display: -webkit-flex;

      .row {
        align-items: center;
        width: 50%;
        display: flex;
        height: 34px;

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
        padding: 2px 10px;
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
        padding: 4px 6px;
        width: 80px;
      }
    }
  }
</style>
