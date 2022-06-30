<template>
  <div class="PackageCard">
    <div ref="body" class="body">
      <div class="body-left">
        <div class="title">分类筛选</div>
        <div class="row">全部</div>
        <div class="row">全部</div>
        <div class="row">全部</div>
      </div>
      <div class="body-right">
        <div class="search">
          <div class="box">
            <Input
              enter-button
              placeholder="输入次卡名称"
              search
              style="width: 220px"
            />
          </div>
        </div>
        <div class="list">
          <div class="card">
            <div class="header">骨盆修复套餐</div>
            <div class="content">
              <div class="row">
                <div class="left">售价</div>
                <div class="right"><div class="text">￥2342.33</div></div>
              </div>
              <div class="row">
                <div class="left">时限</div>
                <div class="right"><div class="text">永久有效</div></div>
              </div>
              <div class="more">
                <div class="details">购买</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PackageCard',
    data: function () {
      return {}
    },
    computed: {},
    activated() {},
    created() {},
    mounted() {
      this.setHeight()
      window.onresize = () => {
        this.setHeight()
      }
    },
    methods: {
      setHeight() {
        let height = window.innerHeight - 450
        this.$refs.body.style.minHeight = height + 'px'
      },
    },
  }
</script>

<style lang="less" scoped>
  .PackageCard {
    background: white;
    padding: 10px;
    .body {
      display: flex;
      justify-content: space-between;
      .body-left {
        border: 1px solid #eeeeee;
        width: 200px;
        text-align: center;
        .title {
          height: 40px;
          background: #fdf1f6;
          padding: 10px;
          font-size: 14px;
        }
        .row {
          height: 40px;
          padding: 10px;
          cursor: pointer;
        }
      }
      .body-right {
        margin-left: 20px;
        flex: 1;
        .search {
          display: flex;
          background: white;

          .box {
            display: flex;
            align-items: center;
            margin-right: 20px;
            .money {
              height: 32px;
              line-height: 32px;
              font-weight: bold;
              padding-right: 20px;
              color: #c75181;
            }

            .text {
              font-weight: bold;
              margin: 0 5px;
            }
          }
        }
        .list {
          margin-top: 10px;
          display: flex;
          flex-flow: wrap;

          .card {
            border-radius: 8px;
            border: 1px solid #dcdee2;
            cursor: pointer;
            background: white;
            margin: 10px 10px 10px 0;
            width: 220px;
            .header {
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;

              height: 30px;
              line-height: 30px;
              padding: 0 10px;
              font-size: 14px;
              text-align: center;
              background: #fdf1f6;
            }

            .content {
              padding: 8px 8px;

              .row {
                line-height: 26px;
                height: 26px;
                display: flex;

                .left {
                  flex: 1;
                  margin-left: 12px;
                }

                .right {
                  display: flex;
                  justify-content: flex-end;
                }
              }

              .more {
                display: flex;
                justify-content: flex-end;

                .details {
                  color: #1298e6;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
