<template>
  <v-scale-screen width="1920" height="1080">
    <div class="container">
      <div class="header">
        <div class="title">大唐工业互联网DTiip</div>
        <div class="time">{{ time }}</div>
      </div>
      <div class="map-box">
        <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
          <bm-overlay pane="labelPane" class="info-box" @draw="draw">
            <div class="inside-box">
              <div class="title">易政达信息科技有限公司</div>
              <div class="info">经营状态：续存（在营、开业、在册）</div>
              <div class="info">法定代表人：孟松</div>
              <div class="info">统一社会信用代码：91330602712</div>
              <div class="info">成立日期：2000-08-09</div>
              <div class="info">组织机构代码：28921</div>
              <div class="info">企业（机构）类型：私营独资企业</div>
            </div>
          </bm-overlay>
        </baidu-map>
        <DataColumn class="data-column" />
        <EnterpriseTree
          class="enterprise-tree"
          title="星级上云企业"
          :num="10"
          :parent-node-src="require('@/assets/bigScreen/enterpriseNode.png')"
        />
        <EnterpriseTree
          class="device-tree"
          title="上云设备"
          :num="10"
          :parent-node-src="require('@/assets/bigScreen/deviceNode.png')"
        />
        <div class="frame star-trend">
          <Header title="企业星级上云趋势" />
          <StarTrend />
        </div>
        <div class="frame type-distribution">
          <Header title="上云企业类型分布" />
          <TypeDistribution />
        </div>
        <div class="frame equipment-ranking">
          <Header title="区域企业/设备上云排行" />
          <EquipmentRanking />
        </div>
        <div class="frame equipment-trend">
          <Header title="设备上云趋势图" />
          <EquipmentTrend />
        </div>
        <div class="frame abnormal-conditions">
          <Header title="设备/采集点异常情况" />
          <AbnormalConditions />
        </div>
        <div class="frame latest-status">
          <Header title="工业互联网最新状态" />
          <LatestStatus />
        </div>
        <div class="frame alarm-list">
          <Header title="设备异常报警列表" />
          <AlarmList />
        </div>
      </div>
    </div>
  </v-scale-screen>
</template>
<script>
import { dateFormat } from "@/filters/index";
import Header from "./components/Header.vue";
import StarTrend from "./components/StarTrend.vue";
import TypeDistribution from "./components/TypeDistribution.vue";
import EquipmentRanking from "./components/EquipmentRanking.vue";
import EquipmentTrend from "./components/EquipmentTrend.vue";
import AbnormalConditions from "./components/AbnormalConditions.vue";
import LatestStatus from "./components/LatestStatus.vue";
import AlarmList from "./components/AlarmList.vue";
import DataColumn from "./components/DataColumn.vue";
import EnterpriseTree from "./components/EnterpriseTree.vue";
let mapv = null;
export default {
  name: "bigScreen",
  components: {
    Header,
    StarTrend,
    TypeDistribution,
    EquipmentRanking,
    EquipmentTrend,
    AbnormalConditions,
    LatestStatus,
    AlarmList,
    DataColumn,
    EnterpriseTree,
  },
  data() {
    return {
      center: { lng: 116.404, lat: 39.915 },
      zoom: 3,
      time: "",
      map: null,
    };
  },
  mounted() {
    setInterval(() => {
      this.time = dateFormat(new Date().getTime());
    }, 1000); //实时请求
  },
  methods: {
    handler({ BMap, map }) {
      mapv = require("mapv");
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      // map.setMapStyle({ style: "midnight" });
      this.map = map;
      this.addMarker([
        { lng: 116.404, lat: 39.925, type: "enterprise" },
        { lng: 116.404, lat: 39.915, type: "device" },
      ]);
    },
    addMarker(list) {
      this.map.clearOverlays(); //清除覆盖物
      if (list.length) {
        const pointList = [];
        list.forEach((item) => {
          item.lng &&
            item.lat &&
            pointList.push(new BMap.Point(item.lng, item.lat));
        });
        let centerPoint = this.map.getViewport(eval(pointList));
        this.center = centerPoint.center;
        this.zoom = centerPoint.zoom;
        let arr = list.map((v) => ({
          ...v,
          geometry: {
            type: "Point",
            coordinates: [v.lng, v.lat],
          },
          icon: require(`@/assets/bigScreen/${v.type}Point.png`),
        }));
        var dataSet = new mapv.DataSet(arr);
        var options = {
          draw: "icon",
          width: 53,
          height: 53,
          size: 53,
          methods: {
            click: (e) => {
              if (e) {
                console.log(e);
              }
            },
          },
        };
        new mapv.baiduMapLayer(this.map, dataSet, options);
      }
    },
    draw({ el, BMap, map }) {
      const pixel = map.pointToOverlayPixel(new BMap.Point(116.404, 39.915));
      el.style.left = pixel.x + "px";
      el.style.top = pixel.y - 187 - 39 + "px";
    },
  },
};
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
