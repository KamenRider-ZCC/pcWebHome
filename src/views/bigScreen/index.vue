<template>
  <v-scale-screen width="1920" height="1080">
    <div class="container">
      <div class="header">
        <div class="title">大唐工业互联网DTiip</div>
        <div class="time">{{ time }}</div>
      </div>
      <div class="map-box">
        <baidu-map class="map" :center="center" :zoom="zoom" @ready="handler">
          <bm-info-window
            :position="{
              lng: currentPoint.longitude,
              lat: currentPoint.latitude,
            }"
            :show="infoShow"
            :closeOnClick="false"
            @clickclose="infoClose"
          >
            <div class="inside-box">
              <template v-if="currentPoint.type === 'enterprise'">
                <div class="title">{{ currentPoint.enterpriseName }}</div>
                <div class="info">经营状态：{{ currentPoint.manageState }}</div>
                <div class="info">
                  法定代表人：{{ currentPoint.representative }}
                </div>
                <div class="info">
                  统一社会信用代码：{{ currentPoint.creditCode }}
                </div>
                <div class="info">
                  成立日期：{{ currentPoint.registerDate }}
                </div>
                <div class="info">
                  组织机构代码：{{ currentPoint.companyCode }}
                </div>
                <div class="info">
                  企业（机构）类型：{{ currentPoint.enterpriseType }}
                </div>
              </template>
              <template v-else-if="currentPoint.type === 'device'">
                <div class="title">客户：{{ currentPoint.customerName }}</div>
                <div class="info">
                  设备名称：{{ currentPoint.equipmentName }}
                </div>
                <div class="info">
                  设备编号：{{ currentPoint.equipmentCode }}
                </div>
                <div
                  class="info"
                  :style="{
                    color: getColor(currentPoint.equipmentState),
                  }"
                >
                  设备状态：{{ currentPoint.equipmentState }}
                </div>
                <div class="info">传感器数量：{{ currentPoint.sensorNum }}</div>
                <div class="info">所在车间：{{ currentPoint.workshop }}</div>
              </template>
            </div>
          </bm-info-window>
        </baidu-map>
        <DataColumn class="data-column" />
        <EnterpriseTree
          class="enterprise-tree"
          title="星级上云企业"
          placeholder="请输入企业名称"
          :num="10"
          :parent-node-src="require('@/assets/bigScreen/enterpriseNode.png')"
          :tree-data="enterpriseTree"
          @treeClick="(data) => treeClick(data, 'enterprise')"
        />
        <EnterpriseTree
          class="device-tree"
          title="上云设备"
          placeholder="请输入设备名称"
          :num="10"
          :parent-node-src="require('@/assets/bigScreen/deviceNode.png')"
          :tree-data="deviceTree"
          @treeClick="(data) => treeClick(data, 'device')"
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
import {
  findByEnterpriseName,
  findByEquipmentName,
  getCoordinateList,
  getEquipmentList,
  findEnterpriseById,
  findEquipmentById,
} from "@/api/bigScreen";

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
      enterpriseTree: [],
      deviceTree: [],
      infoShow: false,
      currentPoint: {},
    };
  },
  async mounted() {
    this.enterpriseTree = (await findByEnterpriseName()).data;
    this.deviceTree = (await findByEquipmentName()).data;
    setInterval(() => {
      this.time = dateFormat(new Date().getTime());
    }, 1000); //实时请求
  },
  methods: {
    async handler({ BMap, map }) {
      mapv = require("mapv");
      map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
      map.setMapStyle({ style: "midnight" });
      this.map = map;
      const enterpriseList = (await getCoordinateList()).data.map((item) => ({
        ...item,
        type: "enterprise",
      }));
      const equipmentList = (await getEquipmentList()).data.map((item) => ({
        ...item,
        type: "device",
      }));
      this.addMarker([...enterpriseList, ...equipmentList]);
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
              e.id && this.getInfo(e.id, e.type);
            },
          },
        };
        new mapv.baiduMapLayer(this.map, dataSet, options);
      }
    },
    async getInfo(id, type) {
      let currentPoint = null;
      if (type === "enterprise") {
        currentPoint = (await findEnterpriseById({ id })).data;
      } else if (type === "device") {
        currentPoint = (await findEquipmentById({ id })).data;
      }
      this.$set(this, "currentPoint", { ...currentPoint, type });
      this.infoShow = true;
    },
    treeClick(node, type) {
      this.center = {
        lng: node.longitude,
        lat: node.latitude,
      };
      this.zoom = 15;
      node.id && this.getInfo(node.id, type);
    },
    infoClose() {
      this.infoShow = false;
    },
    getColor(state) {
      let color = "";
      switch (state) {
        case "运行中":
          color = "#67C23A";
          break;
        case "故障中":
          color = "#F56C6C";
          break;
        case "待机中":
          color = "#E6A23C";
          break;
        default:
          color = "#909399";
          break;
      }
      return color;
    },
  },
};
</script>
<style scoped lang="scss">
@import "./index.scss";
</style>
