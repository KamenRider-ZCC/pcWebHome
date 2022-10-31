<template>
  <div class="carousel">
    <swiper id="mySwiper" :options="swiperOption">
      <!--必须的组件-->
      <!--每页幻灯片使用swiper-slide标签-->
      <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
      <swiper-slide v-for="item in 4" :key="item" class="swiper_slide_item">
        <img src="@/assets/images/MainTop.jpg" />
        <div class="title">江苏无锡打造“永不落幕”物博会</div>
      </swiper-slide>
      <!--分页器-->
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
      swiperOption: {
        //分页器配置项
        pagination: {
          el: ".swiper-pagination", //分页器的类名
          clickable: true, // 点击分页器跳切换到相应的幻灯片
          type: "progressbar",
        },

        //幻灯片播放配置项
        loop: true, //是否循环播放
        speed: 1000, // 发生页面切换动画时，动画的切换速度
        autoplay: {
          delay: 2000, // 幻灯片停留时间
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  border-top: 1px solid #315c86;
  flex: 1;
  padding: 10px;
  ::v-deep #mySwiper {
    width: 100%;
    height: 100%;
    .swiper-slide.swiper_slide_item {
      height: 100%;
      img {
        width: 396px;
        height: 221px;
      }
      .title {
        margin-top: 2px;
        font-size: 14px;
        font-weight: 800;
        color: #d2e9ff;
      }
    }
    .swiper-pagination {
      top: auto;
      bottom: 0;
      height: 4px;
      background: rgba(255, 255, 255, 0.13);
      border-radius: 3px;
      .swiper-pagination-progressbar-fill {
        background: #34ccff;
        border-radius: 3px;
      }
    }
  }
}
</style>
