<template>
  <div class="carousel">
    <swiper
      :key="page"
      v-if="slideList.length"
      ref="mySwiper"
      id="mySwiper"
      :options="swiperOption"
    >
      <!--必须的组件-->
      <!--每页幻灯片使用swiper-slide标签-->
      <!--幻灯片组件生成的标签自带.swiper-slide的类名，但单类名选择器设置的部分css(如宽高)将被覆盖-->
      <swiper-slide
        v-for="item in slideList"
        :key="item.id"
        class="swiper_slide_item"
      >
        <img :src="item.newsImage" />
        <div class="title">{{ item.newsTitle }}</div>
      </swiper-slide>
      <!--分页器-->
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </div>
</template>

<script>
import { getRecentNews } from "@/api/bigScreen";

export default {
  data() {
    let _this = this;
    return {
      page: 1,
      size: 2,
      totalElements: 0,
      isLast: false,
      slideList: [],
      indexNum: 0,
      //swiperOption：swiper配置项信息，需要绑定在swiper标签的 :option 属性中
      swiperOption: {
        //分页器配置项
        pagination: {
          el: ".swiper-pagination", //分页器的类名
          clickable: true, // 点击分页器跳切换到相应的幻灯片
          type: "progressbar",
        },
        initialSlide: 0,
        //幻灯片播放配置项
        loop: true, //是否循环播放
        speed: 1000, // 发生页面切换动画时，动画的切换速度
        observer: true,
        autoplay: {
          delay: 2000, // 幻灯片停留时间
        },
        on: {
          slideChange: function () {
            _this.indexNum = this.realIndex;
            if (_this.totalElements <= _this.size) return;
            if (this.realIndex === _this.slideList.length - 1) {
              if (_this.isLast) {
                _this.page = 1;
              } else {
                _this.page++;
              }
              setTimeout(() => {
                this.realIndex = 0;
                // _this.getPage();
              }, 2000);
            }
          },
        },
      },
    };
  },
  mounted() {
    this.getPage();
  },
  // watch: {
  //   swiperOption: {
  //     handler(val) {
  //       console.log(val);
  //     },
  //     deep: true,
  //   },
  // },
  // watch: {
  //   indexNum(val) {
  //     if (val === this.slideList.length - 1) {
  //       if (this.isLast) {
  //         this.page = 1;
  //       } else {
  //         this.page++;
  //       }
  //       setTimeout(() => {
  //         this.getPage();
  //         // this.$refs.mySwiper && this.$refs.mySwiper.$swiper.init();
  //       }, 2000);
  //     }
  //   },
  // },
  methods: {
    async getPage() {
      const res = (
        await getRecentNews({
          page: this.page,
          size: this.size,
        })
      ).data;
      this.slideList = res.content;
      this.totalElements = res.totalElements;
      this.isLast = res.last;
    },
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
