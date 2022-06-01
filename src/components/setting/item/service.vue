<template>
  <div class="Service">
    <div class="box">
      <div class="left">
        <div class="header">
          <span class="red">*</span>
          <span class="title">基础信息</span>
          <span class="notice">待*为必填项</span>
        </div>
        <div class="form">
          <div class="row">
            <div class="l">
              <span class="red">*</span>
              项目名称
            </div>
            <div class="r">
              <Input placeholder="请输入项目名称" style="width: 200px" />
            </div>
          </div>
          <div class="row">
            <div class="l">
              <span class="red">*</span>
              适用门店
            </div>
            <div class="r">
              <Select v-model="store" filterable multiple style="width: 200px">
                <div slot="empty">没有找到数据</div>
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
            <div class="l">
              <span class="red">*</span>
              统一售价
            </div>
            <div class="r">
              <Input
                placeholder="请输入金额"
                style="width: 200px; padding: 0 2px"
              />
              <span style="cursor: pointer" @click="dropdowns">
                {{ dropdown.title }}
                <Icon type="md-arrow-dropdown" />
              </span>
              <div v-if="dropdown.show" class="dropdown">
                <div class="row">
                  <div class="dropdown-l">武汉总店</div>
                  <div class="dropdown-r">
                    <Input placeholder="请输入金额" style="width: 200px" />
                    元
                  </div>
                </div>
                <div class="row">
                  <div class="dropdown-l">惠城总店</div>
                  <div class="dropdown-r">
                    <Input placeholder="请输入金额" style="width: 200px" />
                    元
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="l">
              <span class="red">*</span>
              服务时长
            </div>
            <div class="r">
              <Input placeholder="请输入数字" style="width: 100px" />
              小时
              <Input placeholder="请输入数字" style="width: 100px" />
              分钟
            </div>
          </div>
          <div class="row">
            <div class="l">
              <span class="red">*</span>
              项目分类
            </div>
            <div class="r">
              <Select v-model="store" style="width: 200px">
                <div slot="empty">没有找到数据</div>
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
        </div>
      </div>
      <div class="right">
        <div class="header">
          <span class="title">其他信息</span>
          <span class="explain" @click="drawer.show = true">?字段说明</span>
        </div>
        <div class="form">
          <div class="row">
            <div class="l">是否课程</div>
            <div class="r">
              <RadioGroup>
                <Radio label="是">
                  <span>是</span>
                </Radio>
                <Radio label="否">
                  <span>否</span>
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div class="row">
            <div class="l">所属部门</div>
            <div class="r">
              <Select v-model="store" style="width: 200px">
                <div slot="empty">没有找到数据</div>
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
            <div class="l">线上可预约</div>
            <div class="r">
              <RadioGroup>
                <Radio label="是">
                  <span>开启</span>
                </Radio>
                <Radio label="否">
                  <span>关闭</span>
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div class="row">
            <div class="l">项目体验价</div>
            <div class="r">
              <Input placeholder="请输入金额" style="width: 200px" />
            </div>
          </div>
          <div class="row">
            <div class="l">项目状态</div>
            <div class="r">
              <RadioGroup>
                <Radio label="是">
                  <span>上架</span>
                </Radio>
                <Radio label="否">
                  <span>下架</span>
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div class="row">
            <div class="l">项目配图</div>
            <div class="r">
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

              建议尺寸图片750*750
            </div>
          </div>
          <div class="row">
            <div class="l">项目详情</div>
            <div class="r">
              <div id="editor"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="bt" @click="getEditorData">保存</div>
    </div>
    <Drawer
      v-model="drawer.show"
      :closable="false"
      title="字段说明"
      :transfer="false"
    >
      <div class="brawer">
        <p class="text">
          项目名称:项目名称不要超过50个字。适用门店:设置哪些门店可以经营该项目。
        </p>
        <p class="text">
          统一售价:若存在不同门店不同的定价,请展开按门店设置价格。
        </p>
        <p class="text">
          服务时长:由此判断预约表每个会员预约的老师所需时长,避免控期。
        </p>
        <p class="text">是否课程:项口与课程预约表不同,如瑜伽、亲子洗游等。</p>
        <p class="text">
          项日分类:(推荐完善)方便收银和设置卡的时候快速筛选和指定折扣。
        </p>
        <p class="text">线上可预约:开启后该项目就会在公众号的预约中显示出来</p>
        <p class="text">项目关联商品:关联之后,项目所消耗的产品会从库存扣除</p>
        <p class="text">
          项口体验价:在客户第一次体验该项目的时候可以享受的特殊优惠价格。
        </p>
        <p class="text">
          项目状态:
          <br />
          上架:可以在系统中售卖该项目
          <br />
          下架:不可在系统中售卖该项日
        </p>
        <p class="text">项目配图:针对线上商城首图</p>
        <p class="text">
          项目详情:针对该项目的详情介绍,可文字、图片,主要在商城展示
        </p>
      </div>
    </Drawer>
  </div>
</template>

<script>
  import wangEditor from 'wangeditor'
  import { mapMutations } from 'vuex'
  export default {
    name: 'Service',
    data: function () {
      return {
        storeList: [],
        store: '',
        defaultList: [],
        imgName: '',
        visible: false,
        uploadList: [],
        editor: null,
        editorData: '',
        drawer: {
          show: false,
        },
        dropdown: {
          show: false,
          title: '展开',
        },
      }
    },
    mounted() {
      const editor = new wangEditor(`#editor`)
      // 配置 onchange 回调函数，将数据同步到 vue 中
      editor.config.onchange = (newHtml) => {
        this.editorData = newHtml
        this.$emit('editorContent', newHtml)
      }
      // 创建编辑器
      editor.create()
      this.editor = editor
    },
    methods: {
      ...mapMutations(['closeTag']),
      dropdowns() {
        if (this.dropdown.show) {
          this.dropdown.title = '展开'
          this.dropdown.show = false
        } else {
          this.dropdown.show = true
          this.dropdown.title = '收起'
        }
      },
      close() {
        this.$store.state.app.tagNavList.forEach((item) => {
          if ('setting.service' === item.name) {
            this.closeTag(item)
            return false
          }
        })
      },

      getEditorData() {
        // 通过代码获取编辑器内容

        let data = this.editor.txt.html()

        alert(data)
      },
      beforeDestroy() {
        // 调用销毁 API 对当前编辑器实例进行销毁
        this.editor.destroy()
        this.editor = null
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
  /deep/.w-e-text-container {
    height: 200px !important; /*!important是重点，因为原div是行内样式设置的高度300px*/
  }
  .brawer {
    .text {
      padding: 4px;
      font-size: 14px;
    }
  }
  .Service {
    .box {
      display: flex;
      .left {
        flex: 1;
        background: white;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border: 1px solid #efefef;
        margin-right: 4px;
        .header {
          height: 40px;
          line-height: 40px;
          padding-left: 10px;
          .red {
            color: red;
            font-size: 16px;
          }
          .title {
            font-size: 14px;
            font-weight: bold;
          }
          .notice {
            padding-left: 10px;
            color: #8c8c8c;
          }
        }
        .form {
          padding: 2px 40px 20px 2px;
          .row {
            display: flex;
            margin-bottom: 10px;
            .l {
              padding: 2px 10px;
              width: 100px;
              font-size: 14px;
              text-align: right;
              .red {
                color: red;
              }
            }
            .r {
              flex: 1;
              .dropdown {
                .row {
                  margin-top: 10px;
                  display: flex;
                  height: 40px;
                  align-items: center;
                  .dropdown-l {
                    margin-right: 6px;
                  }
                  .dropdown-r {
                  }
                }
              }
            }
          }
        }
      }
      .right {
        flex: 1;
        background: white;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 1px solid #efefef;
        margin-left: 4px;
        .header {
          padding-left: 10px;
          display: flex;
          align-items: center;
          .title {
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            font-weight: bold;
            flex: 1;
          }
          .explain {
            border: 1px solid #e1e1e1;
            padding: 2px 4px;
            border-radius: 4px;
            margin-right: 10px;
            cursor: pointer;
          }
        }
        .form {
          padding: 2px 40px 20px 2px;
          .row {
            display: flex;
            margin-bottom: 10px;
            .l {
              padding: 2px 10px;
              width: 100px;
              font-size: 14px;
              text-align: right;
            }
            .r {
              flex: 1;
              z-index: 1;

              align-items: center;
              display: flex;
            }
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
