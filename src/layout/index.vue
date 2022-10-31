<template>
  <div class="app-wrapper">
    <!-- <div
          v-if="device === 'mobile' && sidebar.opened"
          class="drawer-bg"
          @click="handleClickOutside"
        /> -->
    <!-- <sidebar class="sidebar-container" /> -->
    <div class="main-container">
      <div class="fixed-header-wrap">
        <div class="fixed-header">
          <navbar />
        </div>
      </div>
      <app-main />
    </div>
    <!--右侧悬浮-->
    <right-fixed />
    <page-footer />
  </div>
</template>

<script>
import pageFooter from './components/footer'
import { AppMain, Navbar } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import rightFixed from '@/views/robot/rightFixed'

export default {
  name: 'Layout',
  components: {
    pageFooter,
    AppMain, Navbar,
    rightFixed
  },
  mixins: [ResizeMixin],
  data() {
    return {}
  },
  methods: {

  }
}
</script>
<style>
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  min-width: 1286px;
	margin: 0 auto;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header-wrap {
	/*position: fixed;*/
	top: 0;
	right: 0;
	z-index: 999;
	width: 100%;
	transition: width 0.28s;
	border-bottom: 1px solid #f1f1f1;
	background: #fff;
	.fixed-header {
    box-shadow: 0 0 10px rgba(51, 51, 51, .25);
		width: 100%;
    min-width: 1286px;
		margin: 0 auto;
	}
}
</style>
