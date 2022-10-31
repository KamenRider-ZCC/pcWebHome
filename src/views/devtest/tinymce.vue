<template>
  <div class="editorText">
    <editor id="tinymce" v-model="content" :init="tinymceInit"></editor>
  </div>
</template>

<script>
import tinymce from 'tinymce'; //http://tinymce.ax-z.cn/general/basic-setup.php 中文文档
import Editor from '@tinymce/tinymce-vue';
import * as tinymcePC from '@/utils/custom-plugins-config.js';

export default {
  components: { Editor },
  data() {
    return {
      content: '<p>内容。。。</p>',
      tinymceInit: {
        selector: '#tinymce', //tinymce的id
        ...tinymcePC.config, //引入自定义配置文件
        height: 400, //高度
        image_list: [
          { title: '预置图片1', value: 'https://www.tiny.cloud/images/glyph-tinymce@2x.png' },
          { title: '预置图片2', value: 'https://www.baidu.com/img/bd_logo1.png' }
        ],
        //自定义文件选择器的回调内容
        file_picker_types: 'file image media',
        file_picker_callback: (callback, value, meta) => {
          let uinput = document.createElement('input');
          uinput.setAttribute('type', 'file');
          //uinput.setAttribute('accept', filetype);
          uinput.click();
          uinput.onchange = async file => {
            const filename = file.path[0].files[0].name;
            console.log('文件名:', filename);
            //判断当前
            let url_src = '';
            switch (meta.filetype) {
              case 'image':
                //这里判断图片格式 jpg png gif'
                const imgReg = /(\.jpg|\.png|\.jpeg|\.gif|\.svg)/gi;
                if (!imgReg.test(filename)) {
                  this.$message.warning('请上传图片格式');
                  return;
                }
                break;
              case 'media':
                console.log('这里判断视频格式');
                break;
              case 'file':
                console.log('这里判断文件格式');
                break;
            }
            //插入地址
            callback(await this.file_picker_upload());
          };
        },
        //图片上传功能
        images_upload_handler: (blobInfo, success, failure) => {}
      }
    };
  },
  methods: {
    /**
     * 富文本中文件上传
     * */
    file_picker_upload() {
      return new Promise((resolve, reject) => {
        resolve('https://im.qq.com/assets/images/logo@2x.png');
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
