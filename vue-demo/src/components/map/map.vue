<!--
 * @Author: hwj
 * @Date: 2019-06-12 13:30:21
 * @LastEditors: wuhao
 * @LastEditTime: 2019-08-14 13:25:47
 * @Description: 地图
 -->
<template>
  <div class="map-div">
    <iframe
      id="iframepage"
      src="/webgis/2Dgis.vm?suanFaConfig"
      frameborder="0"
      scrolling="no"
      style="height:100%;width:100%;"
    />
  </div>
</template>

<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapMutations } = createNamespacedHelpers("map");
// import axios from "axios";
// import { socketFn } from "@/js/socketUtil.js";
export default {
  name: "Map",
  data() {
    return {
      loc: null,
      util: null, // 工具类
      layer: null,
      track: null,
      socketObj: null
    };
  },
  computed: {
  },
  watch: {
  },
  created() {
    window["gis_load_end"] = this.gis_load_end;
  },
  beforeDestroy() {
    // this.unsubscribeChannel();
  },
  mounted() {
  },
  methods: {
    // ...mapMutations([
    //   "SET_UTIL", "SET_LOCATION"
    // ]),
    // gis地图的入口方法
    gis_load_end(obj) {
      // 地图相关设置
      this.mapSettings(obj);
    },
    /**
     * @msg: 地图相关设置
     * @param {Object} obj
     */
    mapSettings(obj) {
      this.util = obj.getUtilObj(); // 公共类
      this.loc = obj.getLocation(); // 定位类
      this.layer = obj.getLayerObj(); // 图层管理类
      this.track = obj.getTrackObj(); // 轨迹类
      this.SET_UTIL(this.util);
      this.SET_LOCATION(this.loc);
    }
  }
};
</script>
<style lang="scss" scoped>
.map-div {
  position: absolute;
  width: 100%;
  height: calc(100% - 80px);
  min-width: 1300px;
  max-width: 1920px;
}
</style>

