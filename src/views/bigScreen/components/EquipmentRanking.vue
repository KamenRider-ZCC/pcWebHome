<template>
  <div id="rankingChart" />
</template>
<script>
import { getEnterpriseAndEquipmentRanking } from "@/api/bigScreen";

const colorList = ["rgba(36, 180, 244, 1)", "rgba(104, 95, 193, 1)"];
export default {
  mounted() {
    this.initChart();
  },
  methods: {
    async initChart() {
      const { x, y } = await (
        await getEnterpriseAndEquipmentRanking({ type: 2, address: "北京市" })
      ).data;
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
          data: x,
          axisLine: {
            lineStyle: {
              color: "rgba(63, 107, 175, 1)",
            },
          },
          axisLabel: {
            color: "#D2E9FF", //更改坐标轴文字颜色
          },
        },
        series: y.map((item, index) => ({
          ...item,
          type: "bar",
          itemStyle: {
            color: colorList[index],
          },
        })),
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
