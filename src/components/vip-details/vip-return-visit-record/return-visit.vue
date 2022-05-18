<template>
  <div class="ReturnVisit">
    <div class="box">
      <div class="row">
        <div class="left">回访人员</div>
        <div class="right">
          <Input placeholder="" search style="width: 200px" />
        </div>
      </div>
      <div class="row">
        <div class="left">回访内容</div>
        <div class="right">
          <Input placeholder="" style="width: 200px" type="textarea" />
        </div>
      </div>
      <div class="row">
        <div class="left">附件</div>
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
    </div>

    <div class="footer">
      <div class="bt">保存</div>
      <div class="bt" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ReturnVisit',
    data: function () {
      return {
        defaultList: [
          {
            name: 'a42bdcc1178e62b4694c830f028db5c0',
            url: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar',
          },
          {
            name: 'bc7521e033abdd1e92222d733590f104',
            url: 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar',
          },
        ],
        imgName: '',
        visible: false,
        uploadList: [],
      }
    },
    mounted() {
      this.uploadList = this.$refs.upload.fileList
    },
    methods: {
      cancel() {
        this.$emit('cancelModal', false)
      },
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
  .ReturnVisit {
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
      justify-content: end;
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
