<template>
  <div class="chart-container">
    <div class="date-unit">
      <div
        v-for="item in unitList"
        :key="item.value"
        :class="['unit', { active: dataUnit === item.value }]"
        @click="chooseUnit(item.value)"
      >
        {{ item.label }}
      </div>
    </div>
    <div id="equipmentTrend" />
  </div>
</template>
<script>
import { equipmentGetTrendgram } from "@/api/bigScreen";

export default {
  data() {
    return {
      dataUnit: "year",
      unitList: [
        { label: "年", value: "year" },
        { label: "月", value: "month" },
        { label: "周", value: "week" },
      ],
      myChart: null,
      colorList: ["rgba(52, 204, 255, 1)", "rgba(233, 34, 188, 1)"],
    };
  },
  mounted() {
    this.myChart = this.$echarts.init(
      document.getElementById("equipmentTrend")
    );
    this.initChart();
  },
  methods: {
    chooseUnit(unit) {
      this.dataUnit = unit;
      this.initChart();
    },
    async initChart() {
      const { x, y } = (
        await equipmentGetTrendgram({
          type: this.dataUnit,
        })
      ).data;
      this.myChart.setOption({
        grid: {
          left: "3%",
          right: "6%",
          top: "10%",
          bottom: "5%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: x,
          axisLine: {
            lineStyle: {
              color: "rgba(63, 107, 175, 1)",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#D2E9FF", //更改坐标轴文字颜色
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#D2E9FF", //更改坐标轴文字颜色
          },
          splitLine: {
            //分割线配置
            lineStyle: {
              color: "rgba(54, 91, 149, 0.3900)",
            },
          },
        },
        series: y.map((item, index) => ({
          ...item,
          type: "line",
          smooth: true,
          symbolSize: 8,
          symbol: "circle",
          itemStyle: {
            color: this.colorList[index], //改变折线点的颜色
          },
          lineStyle: {
            color: this.colorList[index],
            width: 2,
          },
        })),
      });
    },
  },
};
</script>
<style scoped lang="scss">
.chart-container {
  border-top: 1px solid #315c86;
  flex: 1;
  display: flex;
  flex-direction: column;
  .date-unit {
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    padding-right: 13px;
    .unit {
      font-size: 14px;
      font-weight: 400;
      color: #ffffff;
      cursor: pointer;
      &.active {
        font-weight: 800;
        color: #24b4f4;
        text-decoration: underline;
      }
      & + .unit {
        margin-left: 6px;
      }
    }
  }
  #equipmentTrend {
    flex: 1;
  }
}
</style>
