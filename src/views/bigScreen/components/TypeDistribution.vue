<template>
  <div id="typeDistribution" />
</template>

<script>
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";
import { getEnterpriseTypePieGraph } from "@/api/bigScreen";

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

const colorList = ["#0BB4FF", "#FFF146", "#FF9726", "#40FFCD"];

export default {
  async mounted() {
    const resData = (await getEnterpriseTypePieGraph()).data;
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
        labelFormatter: function () {
          let msg = `<a>`;
          if (this.name.length > 4) {
            msg += this.name.substring(0, 4);
            msg += "...";
          } else {
            msg += this.name;
          }
          msg += "</a>";
          return msg;
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
          name: "上云企业类型分布",
          data: resData.map((item, index) => ({
            name: item.name,
            y: Number(item.con),
            color: colorList[index],
          })),
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
