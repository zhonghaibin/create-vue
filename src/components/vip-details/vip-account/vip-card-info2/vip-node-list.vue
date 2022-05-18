<template>
  <div class="VipNodeList">
    <Table :columns="columns1" :data="data1">
      <!-- slot对应data里面的slot-->

      <template slot="action">
        <span class="bt">修改</span>
        <span class="bt">删除</span>
      </template>
    </Table>
    <div class="footer">
      <div class="add-node">
        <Icon style="font-size: 12px" type="md-add" />
        新增备注信息
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VipNodeList',
    data: function () {
      return {
        columns1: [
          {
            title: '备注内容',
            key: 'name',
          },
          {
            title: '操作时间',
            key: 'username',
          },
          {
            title: '最后操作人',
            key: 'money',
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center',
          },
        ],
        data1: [
          {
            name: 'John Brown',
            username: 18,
            money: '11',
          },
        ],
      }
    },
  }
</script>

<style lang="less" scoped>
  .VipNodeList {
    .bt {
      color: blue;
      margin-right: 20px;
      cursor: pointer;
    }
    .footer {
      .add-node {
        margin-top: 4px;
        background: #f19ec2;
        color: white;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
  }
</style>
