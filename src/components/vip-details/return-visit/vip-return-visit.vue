<template>
  <div class="VipReturnVisit">
    <div class="box">
      <div class="row">
        <div class="left">回访人员</div>
        <div class="right">
          <Select
            v-model="formData.staff_id"
            clearable
            filterable
            :loading="loading"
            style="width: 200px"
          >
            <div slot="empty">未找到数据</div>
            <Option v-for="item in staffList" :key="item.id" :value="item.id">
              {{ item.name }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="row">
        <div class="left">回访标题</div>
        <div class="right">
          <Input v-model="formData.name" placeholder="" style="width: 200px" />
        </div>
      </div>
      <div class="row">
        <div class="left">回访内容</div>
        <div class="right">
          <Input
            v-model="formData.info"
            placeholder=""
            style="width: 200px"
            type="textarea"
          />
        </div>
      </div>
      <div class="row">
        <div class="left">附件</div>
        <div class="right">
          <UploadImage
            :default-list="defaultList"
            @remove="removeFile"
            @uploadFile="uploadFile"
          />
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="bt" @click="save">保存</div>
      <div class="bt" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
  import UploadImage from '@/components/upload-image'
  import { getStaffList, setVisitAct } from '@/api/vip'
  export default {
    name: 'VipReturnVisit',
    components: { UploadImage },
    props: {
      memberInfo: {
        type: Object,
        default: () => {},
      },
      data: {
        type: Object,
        default: () => {},
      },
    },
    data: function () {
      return {
        loading: false,
        formData: {
          vid: this.memberInfo.id,
          name: '',
          staff_id: '',
          img_id: '',
          info: '',
          visit_id: '',
        },
        defaultList: [],
        staffList: [],
        page: {
          total: 0,
          pageSize: 10,
          current: 1,
        },
      }
    },
    created() {
      this.getStaffList()
      console.log(this.data, 'data')
      this.defaultList = []
      if (Object.keys(this.data).length > 0) {
        this.formData.img_id = this.data.img_id
        this.formData.name = this.data.name
        this.formData.info = this.data.info
        this.formData.staff_id = this.data.staff_id
        if (this.data.img_id > 0) {
          this.defaultList.push({
            name: this.data.img_id,
            url: this.data.img,
          })
        }
      }

      console.log(this.defaultList, 'this.defaultList')
    },
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
      removeFile(res) {
        console.log(res, 'removeFile')
        this.formData.img_id = ''
      },
      uploadFile(res) {
        this.formData.img_id = res.id
        console.log(res, 'uploadFile')
      },
      save() {
        this.setVisitAct()
      },
      async setVisitAct() {
        const { status, msg } = await setVisitAct(this.formData)
        if (status !== 1) {
          this.$Message.error(msg)
        } else {
          this.$Message.success(msg)
          this.$emit('change')
        }
      },
      async getStaffList() {
        this.loading = true
        const { data } = await getStaffList({
          search: '',
          tid: '',
          status: '',
          page: '1000',
        })
        this.loading = false
        this.staffList = data.list
        this.page.total = Number(data.count)
        this.page.current = Number(data.p)
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipReturnVisit {
    .box {
      .row {
        display: flex;
        align-items: center;
        margin: 30px 0;
        .left {
          width: 120px;
          text-align: right;
          margin-right: 10px;
        }
        .right {
          .upload-list {
            display: inline-block;
            width: 60px;
            height: 60px;
            text-align: center;
            line-height: 60px;
            border: 1px solid transparent;
            border-radius: 4px;
            overflow: hidden;
            background: #fff;
            position: relative;
            box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
            margin-right: 4px;
          }
          .upload-list img {
            width: 100%;
            height: 100%;
          }
          .upload-list-cover {
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, 0.6);
          }
          .upload-list:hover .demo-upload-list-cover {
            display: block;
          }
          .upload-list-cover i {
            color: #fff;
            font-size: 20px;
            cursor: pointer;
            margin: 0 2px;
          }
        }
      }
    }

    .footer {
      margin-top: 10px;
      display: flex;
      justify-content: flex-end;
      .bt {
        margin-right: 10px;
        width: 80px;
        text-align: center;
        background: #f19ec2;
        border-radius: 2px;
        color: white;
        height: 30px;
        line-height: 30px;
        cursor: pointer;
      }
    }
  }
</style>
