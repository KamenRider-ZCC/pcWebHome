<template>
  <div id="typeDistribution" />
</template>

<script>
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
export default {
  mounted() {
    const chart = Highcharts.chart("typeDistribution", {
      chart: {
        type: "pie",
        backgroundColor: "transparent",
        options3d: {
          enabled: true,
          alpha: 40,
          beta: 0,
        },
      },
      title: {
        text: null,
      },
      legend: {
        enabled: true,
        align: "right", //水平方向位置
        verticalAlign: "top", //垂直方向位置
        layout: "vertical",
        symbolWidth: 12,
        symbolRadius: 0,
        itemMarginBottom: 16,
        itemStyle: {
          cursor: "pointer",
          color: "#D2E9FF",
          fontSize: 15,
        },
      },
      credits: {
        //版权
        enabled: false,
      },
      // tooltip: {
      //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      // },
      accessibility: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          showInLegend: true,
          depth: 40,
          slicedOffset: 20, // 突出间距
          dataLabels: {
            enabled: false,
            format: "{point.name}",
          },
        },
      },
      series: [
        {
          type: "pie",
          name: "浏览器占比",
          data: [
            {
              name: "Firefox", // 名称设置
              y: 45.0, // 具体设置
              color: "#0BB4FF", // 颜色获取，全部用0号颜色则最终图形的颜色是一致的
            },
            {
              name: "IE", // 名称设置
              y: 26.8, // 具体设置
              color: "#FFF146", // 颜色获取，全部用0号颜色则最终图形的颜色是一致的
            },
            ["IE", 26.8],
            ["Chrome", 12.8],
            ["Safari", 8.5],
            ["Opera", 6.2],
            ["Others", 0.7],
          ],
        },
      ],
    });
  },
};
</script>

<style scoped>
#typeDistribution {
  flex: 1;
}
</style>
