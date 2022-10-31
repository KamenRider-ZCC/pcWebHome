<template>
  <div id="rankingChart" />
</template>
<script>
export default {
  data() {
    return {
      colorLits: ["rgba(36, 180, 244, 1)", "rgba(104, 95, 193, 1)"],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      let myChart = this.$echarts.init(document.getElementById("rankingChart"));
      myChart.setOption({
        grid: {
          left: "3%",
          right: "4%",
          top: "10%",
          bottom: "5%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          textStyle: {
            color: "#D2E9FF",
          },
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          axisLabel: {
            color: "#D2E9FF", //更改坐标轴文字颜色
          },
          splitLine: {
            //分割线配置
            lineStyle: {
              color: "rgba(26, 59, 101, 1)",
            },
          },
        },
        yAxis: {
          type: "category",
          data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
          axisLine: {
            lineStyle: {
              color: "rgba(63, 107, 175, 1)",
            },
          },
          axisLabel: {
            color: "#D2E9FF", //更改坐标轴文字颜色
          },
        },
        series: [
          {
            name: "2011",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            itemStyle: {
              color: "rgba(36, 180, 244, 1)",
            },
          },
          {
            name: "2012",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            itemStyle: {
              color: "rgba(104, 95, 193, 1)",
            },
          },
        ],
      });
    },
  },
};
</script>
<style scoped lang="scss">
#rankingChart {
  border-top: 1px solid #315c86;
  flex: 1;
  padding-top: 5px;
}
</style>
