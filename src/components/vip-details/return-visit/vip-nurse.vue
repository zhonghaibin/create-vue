<template>
  <div class="VipNurse">
    <div class="box">
      <div class="row">
        <div class="left">会员信息</div>
        <div class="right">
          <div class="name">曾文明</div>
          <div class="phone">13823232512</div>
        </div>
      </div>
      <div class="row">
        <div class="left">护理时间</div>
        <div class="right">
          <DatePicker placeholder="选择时间" style="width: 200px" type="date" />
        </div>
      </div>
      <div class="row">
        <div class="left">护理项目</div>
        <div class="right">
          <Select v-model="store" clearable filterable style="width: 200px">
            <Option
              v-for="item in storeList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="row">
        <div class="left">护理人员</div>
        <div class="right">
          <Select v-model="store" clearable filterable style="width: 200px">
            <Option
              v-for="item in storeList"
              :key="item.value"
              :value="item.value"
            >
              {{ item.label }}
            </Option>
          </Select>
        </div>
      </div>
      <div class="row">
        <div class="left">下次护理时间</div>
        <div class="right">
          <DatePicker placeholder="选择时间" style="width: 200px" type="date" />
        </div>
      </div>
      <div class="row">
        <div class="left">护理详情</div>
        <div class="right">
          <Input
            placeholder="请输入寄存的数量"
            rows="4"
            style="width: 250px"
            type="textarea"
          />
        </div>
      </div>
      <div class="row">
        <div class="left">附件上传</div>
        <div class="right">
          <div
            v-for="(item, index) in uploadList"
            :key="index"
            class="upload-list"
          >
            <template v-if="item.status === 'finished'">
              <img :src="item.url" />
              <div class="upload-list-cover">
                <Icon
                  type="ios-eye-outline"
                  @click.native="handleView(item.name)"
                />
                <Icon
                  type="ios-trash-outline"
                  @click.native="handleRemove(item)"
                />
              </div>
            </template>
            <template v-else>
              <Progress
                v-if="item.showProgress"
                hide-info
                :percent="item.percentage"
              />
            </template>
          </div>
          <Upload
            ref="upload"
            action="//jsonplaceholder.typicode.com/posts/"
            :before-upload="handleBeforeUpload"
            :default-file-list="defaultList"
            :format="['jpg', 'jpeg', 'png']"
            :max-size="2048"
            multiple
            :on-exceeded-size="handleMaxSize"
            :on-format-error="handleFormatError"
            :on-success="handleSuccess"
            :show-upload-list="false"
            style="display: inline-block; width: 58px"
            type="drag"
          >
            <div style="width: 58px; height: 58px; line-height: 58px">
              <Icon size="20" type="ios-camera" />
            </div>
          </Upload>
        </div>
      </div>
      <div class="row">
        <div class="left">店长批阅</div>
        <div class="right">
          <Input
            placeholder="只能店长操作"
            rows="4"
            style="width: 250px"
            type="textarea"
          />
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="bt">保存</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VipNurse',
    data: function () {
      return {
        storeList: [],
        store: '',
        defaultList: [],
        imgName: '',
        visible: false,
        uploadList: [],
      }
    },
    methods: {
      handleView(name) {
        this.imgName = name
        this.visible = true
      },
      handleRemove(file) {
        const fileList = this.$refs.upload.fileList
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
      },
      handleSuccess(res, file) {
        file.url =
          'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
        file.name = '7eb99afb9d5f317c912f08b5212fd69a'
      },
      handleFormatError(file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc:
            'File format of ' +
            file.name +
            ' is incorrect, please select jpg or png.',
        })
      },
      handleMaxSize(file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.',
        })
      },
      handleBeforeUpload() {
        const check = this.uploadList.length < 5
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.',
          })
        }
        return check
      },
    },
  }
</script>

<style lang="less" scoped>
  .VipNurse {
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
          .name {
          }
          .phone {
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
