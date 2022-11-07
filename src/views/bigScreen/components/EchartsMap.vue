<template>
  <div class="map-container">
    <div ref="mapCharts" class="mapCharts"></div>
  </div>
</template>

<script>
import axios from "axios";
import { getEnterpriseMap } from "@/api/bigScreen";
import china from "./map.json";
export default {
  created() {
    this.$nextTick(() => {
      this.initCharts();
    });
  },
  methods: {
    async initCharts() {
      const mapCharts = this.$echarts.init(this.$refs["mapCharts"]);
      const data = (await getEnterpriseMap()).data;
      const option = {
        // 背景颜色
        backgroundColor: "rgba(23, 64, 125, 0.5)",
        // 提示浮窗样式
        tooltip: {
          show: true,
          padding: [10, 20],
          trigger: "item",
          alwaysShowContent: false,
          backgroundColor: "#0C121C",
          borderColor: "rgba(0, 0, 0, 0.16);",
          hideDelay: 100,
          triggerOn: "mousemove",
          enterable: true,
          textStyle: {
            color: "#DADADA",
            fontSize: "18",
            // width: 20,
            // height: 30,
            overflow: "break",
          },
          showDelay: 100,
          formatter(params) {
            return `企业数：${params.data.value[0]}</br>销售额：${params.data.value[1]}`;
          },
        },
        // 地图配置
        geo: {
          map: "china",
          label: {
            // 通常状态下的样式
            show: true,
            color: "#fff",
          },
          zoom: 1, //当前视角的缩放比例
          roam: true, //是否开启平游或缩放
          // 地图区域的样式设置
          itemStyle: {
            borderColor: "rgba(147, 235, 248, 1)",
            borderWidth: 1,
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
            shadowColor: "rgba(128, 217, 248, 1)",
            shadowOffsetX: -2,
            shadowOffsetY: 2,
            shadowBlur: 10,
          },
          // 鼠标放上去的样式
          emphasis: {
            itemStyle: {
              areaColor: "#389BB7",
              borderWidth: 0,
            },
            label: {
              color: "#fff",
            },
          },
        },
        series: [
          {
            type: "map",
            data,
            geoIndex: 0, //将数据和第0个geo配置关联在一起
          },
        ],
      };
      // 地图注册，第一个参数的名字必须和option.geo.map一致
      // const features = (
      //   await axios.get(
      //     `https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json`
      //   )
      // ).data;
      this.$echarts.registerMap("china", china);
      mapCharts.setOption(option);
    },
  },
};
</script>
<style lang="scss" scoped>
.map-container {
  position: absolute;
  z-index: 1;
  width: 1034px;
  height: 568px;
  left: 443px;
  top: 100px;
  border-radius: 4px;
  border: 1px solid #315c86;
  backdrop-filter: blur(3px);
  .mapCharts {
    width: 1034px;
    height: 568px;
  }
}
</style>
