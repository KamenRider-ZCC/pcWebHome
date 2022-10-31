<template>
  <div class="chart-container">
    <div class="date-unit">
      <div
        v-for="item in unitList"
        :key="item"
        :class="['unit', { active: dataUnit === item }]"
        @click="chooseUnit(item)"
      >
        {{ item }}
      </div>
    </div>
    <div id="abnormalConditions" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataUnit: "年",
      unitList: ["年", "月", "周"],
      colorLits: ["rgba(52, 204, 255, 1)", "rgba(104, 95, 193, 1)"],
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    chooseUnit(unit) {
      this.dataUnit = unit;
    },
    initChart() {
      let myChart = this.$echarts.init(
        document.getElementById("abnormalConditions")
      );
      myChart.setOption({
        grid: {
          left: "3%",
          right: "4%",
          top: "10%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "bar",
            itemStyle: {
              color: "rgba(52, 204, 255, 1)",
            },
          },
        ],
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
  #abnormalConditions {
    flex: 1;
  }
}
</style>
