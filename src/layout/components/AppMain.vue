<template>
  <div class="app-main-wrap">
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view :key="key" />
        </keep-alive>
      </transition>
    </section>
    <!--<page-footer />-->
  </div>
</template>

<script>
import pageFooter from './footer'
export default {
  name: 'AppMain',
  components: {
    pageFooter
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
	.app-main-wrap {
		min-height: calc(100vh - 80px);
		width: 100%;
		/*padding-top: 80px;*/

		.app-main {
			/* 50= navbar  50  */
			width: 100%;
			min-height: calc(100vh - 80px);
			position: relative;
			overflow: hidden;
			margin: 0 auto;
		}
	}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
