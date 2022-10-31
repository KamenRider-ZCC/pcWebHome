<template>
  <div class="rightF">
    <div class="rightFixed" style="zoom: 95%">
      <div class="item firstItem" @mouseenter="changeImageSrc(1, 'hover')" @mouseleave="changeImageSrc(1, '')">
        <div class="img">
          <img :src="imgurl1">
        </div>
        <span>供需发布</span>
        <hr class="item_hr">
      </div>
      <el-popover
        ref="popverRef"
        placement="left"
        :width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        disabled
      >
        <div slot="reference" class="item" @click="openDia" @mouseenter="changeImageSrc(2, 'hover')" @mouseleave="changeImageSrc(2, '')">
          <div class="img">
            <img :src="imgurl2">
          </div>
          <span>服务咨询</span>
          <hr class="item_hr">
        </div>
        <div class="tanchu">
          <p style="font-size: 18px">咨询电话</p>
          <p style="color: #525797;font-size: 20px">400-123-4567</p>
        </div>
      </el-popover>
      <div class="item endItem" @mouseenter="changeImageSrc(3, 'hover')" @mouseleave="changeImageSrc(3, '')">
        <div class="img">
          <img :src="imgurl3">
        </div>
        <span>建议反馈</span>
      </div>
    </div>
    <div style="margin-top: 30px; text-align: center">
      <img src="@/assets/images/rightFixed/7.png" style="height: 150px">
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      append-to-body
      :lock-scroll="false"
      :modal="false"
      :close-on-click-modal="false"
      custom-class="myDia"
    >
      <span slot="title">
        在线咨询
      </span>
      <div id="scroll_body" class="body_content">
        <transition-group appear>
          <el-row v-for="(item, index) in bodyList" :key="index" style="margin-right: 10px">
            <el-row type="flex" justify="center">
              <span class="body_time">{{ item.body_time }}</span>
            </el-row>
            <el-row type="flex" style="margin-top: 20px">
              <el-col :span="3">
                <el-row type="flex" justify="center">
                  <img src="@/assets/images/rightFixed/robot_icon.png">
                </el-row>
              </el-col>
              <el-col :span="18" style="padding: 0 4px; position: relative">
                <span class="body_text">{{ item.robot_text }}</span>
                <div class="my_left_arrow" />
              </el-col>
            </el-row>
            <transition name="el-fade-in">
              <el-row v-if="item.user_text" type="flex" style="margin-top: 20px;text-align: right">
                <el-col :span="18" :offset="3" style="padding: 0 4px; position: relative">
                  <span class="body_text">{{ item.user_text }}</span>
                  <div class="my_right_arrow" />
                </el-col>
                <el-col :span="3">
                  <el-row type="flex" justify="center">
                    <img src="@/assets/images/rightFixed/user_icon.png">
                  </el-row>
                </el-col>
              </el-row>
            </transition>
          </el-row>
        </transition-group>
      </div>
      <span slot="footer">
        <el-input
          v-model="input"
          placeholder="发送您的问题"
          class="foot_input"
          @keypress.native.enter="getMessage"
        />
        <el-button class="mySend" round @click="getMessage">发送</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      input: '',
      dialogVisible: false,
      imgurl1: require('@/assets/images/rightFixed/1.png'),
      imgurl2: require('@/assets/images/rightFixed/3.png'),
      imgurl3: require('@/assets/images/rightFixed/5.png'),
      bodyList: [
        {
          body_time: '',
          user_text: '',
          robot_text: '您好，欢迎您来到DTiip客户咨询服务中心，很高兴为您服务。大唐融合物联科技无锡有限公司，隶属于中国信息通信科技集团有限公司（央企），致力于工业互联网和智能制造领域，可以为企业在智能研发、生产、制造、服务等领域提供整体的解决方案，您看是否方便沟通一下您的具体需求？'
        }
      ],
      visitorId: '',
      recordId: ''
    }
  },
  mounted() {

  },
  methods: {
    getMessage() {
      const inputText = this.input
      this.input = ''
      const len = this.bodyList.length - 1
      this.$set(this.bodyList[len], 'user_text', inputText)
      axios.post('http://datangiot.cn:10006/robot', {
        tenantId: 4,
        visitorId: this.visitorId,
        recordId: this.recordId,
        robotId: 43,
        info: {},
        timeout: false,
        storyId: 24,
        words: inputText
      }, {
        headers: {
          'AccessKey': 'MMI0YWY0NMFKMWQ4Y2M4ODBJODG1NJFJNMVIYMIXNWI='
        }
      }
      ).then(res => {
        res = res.data
        if (res.code === 0) {
          this.bodyList.push({
            body_time: this.$moment().format('HH:mm:ss'),
            user_text: '',
            robot_text: res.data.robotSay
          })
          this.$nextTick(() => {
            const div = document.getElementById('scroll_body')
            div.scrollTop = div.scrollHeight
          })
        }
      })
    },
    openDia() {
      this.visitorId = Math.ceil(Math.random() * 100).toString()
      this.recordId = Math.ceil(Math.random() * 100).toString()
      this.bodyList = [
        {
          body_time: this.$moment().format('HH:mm:ss'),
          user_text: '',
          robot_text: '您好，欢迎您来到DTiip客户咨询服务中心，很高兴为您服务。大唐融合物联科技无锡有限公司，隶属于中国信息通信科技集团有限公司（央企），致力于工业互联网和智能制造领域，可以为企业在智能研发、生产、制造、服务等领域提供整体的解决方案，您看是否方便沟通一下您的具体需求？'
        }
      ]
      this.dialogVisible = true
    },
    // 在methods中绑定鼠标悬浮事件
    changeImageSrc(key, way) {
      const tempStr = way === 'hover' ? 'Hover' : ''
      switch (key) {
        case 1:
          this.imgurl1 = require(`@/assets/images/rightFixed/1${tempStr}.png`)
          break
        case 2:
          this.imgurl2 = require(`@/assets/images/rightFixed/3${tempStr}.png`)
          break
        case 3:
          this.imgurl3 = require(`@/assets/images/rightFixed/5${tempStr}.png`)
          break
      }
    }
  }
}
</script>
<style lang="scss">
  .myDia{
    width: 550px;
    .el-dialog__header {
      background-color: #D80E19;
      color: #fff;
      padding: 16px !important;
    }
    .el-dialog__headerbtn .el-dialog__close {
      color: #fff;
    }
    .el-dialog__footer {
      padding: 16px !important;
      background-color: #E9E9E9;
      text-align: initial;
      .foot_input {
        width: 400px;
        .el-input__inner {
          border-radius: 12px;
        }
      }
      .mySend {
        background-color: #D80E19;
        color: #fff;
        width: 90px;
        margin-left: 15px;
      }
    }
    .el-dialog__body {
      background-color: #FCFCFC;
      padding-bottom: 20px;
    }
    .body_content {
      margin-right: -20px;
      overflow-y: scroll;
      height: 510px;
      padding-bottom: 10px;
      .body_time {
        color: #999999;
        font-size: 12px;
        font-family: MicrosoftYaHei, sans-serif;
        line-height: 14px;
      }
      .body_text {
        color: #333333;
        display:inline-block;
        padding: 10px 16px;
        background-color: #fff;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        font-family: MicrosoftYaHei, sans-serif;
        line-height: 19px;
      }
      .my_left_arrow {
        left: -8px;
        top: 12px;
        border-color: transparent;
        border-right-color: #fff;
        border-width: 6px;
        filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
      }
      .my_right_arrow {
        right: -8px;
        top: 12px;
        border-color: transparent;
        border-left-color: #fff;
        border-width: 6px;
        filter: drop-shadow(0 2px 12px rgba(0, 0, 0, .03));
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
      }
      .v-enter{
        opacity: 0;
      }
      .v-enter-to{
        opacity: 1;
      }
      .v-enter-active{
        transition: all .6s;
      }
      .v-leave{
        opacity: 1;
      }
      .v-leave-to{
        opacity: 0;
      }
      .v-leave-active{
        transition: all .6s;
      }
    }
    ::-webkit-scrollbar {
      position: absolute;
      /*滚动条整体样式*/
      width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
    }
    ::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
      background   : #D80E19;
    }
    ::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.15);
      border-radius: 10px;
      background   : #ededed;
    }
  }
</style>
<style lang="scss" scoped>
  .rightF {
    position: fixed;
    bottom: 10%;
    right: 5px;
    width: 207px;
    z-index: 99999;

    .rightFixed {
      width: 100px;
      height: 318px;
      background: #FFFFFF;
      border-radius: 10px;
      box-shadow: #bdbdbd 0px 0px 20px;
      margin: 0 auto;

      .item {
        color: #525797;
        text-align: center;
        padding: 15px 15px 0 15px;
        height: 106px;

        .img {
          margin-bottom: 10px;

          img {
            width: 40px;
          }
        }

        .item_hr {
          height: 1px;
          border: none;
          background: #525797;
          margin: 0;
          margin-top: 15px;
        }

        &:hover {
          background: #525797;
          color: #FFF;
        }

        &:hover.firstItem {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }

        &:hover.endItem {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }

      }

    }
  }
</style>
