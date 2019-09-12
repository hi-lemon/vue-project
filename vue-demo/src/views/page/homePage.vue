<!--
 * @Author: yyl
 * @Description: 菜单布局
 -->
<template>
  <div class="home">
    <!-- 地图 -->
    <Navbar />
    <AppMain />
  </div>
</template>
<script>
import Navbar from "@/views/layout/Navbar";
import AppMain from "@/views/layout/AppMain";
export default {
  name: "HomePage",
  components: {
    Navbar,
    AppMain
  },
  data() {
    return {
      socketObj: null
    };
  },
  computed: {

  },
  created() {

  },
  beforeDestroy() {

  },
  methods: {

  }
};
</script>

<style lang="scss">
// 滚动条样式调整
::-webkit-scrollbar {
  width: 3px; /*垂直流动条宽度*/
  height: 3px; /*水平流动条宽度*/
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  background: rgb(68, 70, 74);
}

/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 6px;
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
  background: rgb(0, 146, 255);
}

// /*定义右下角汇合处的样式*/
::-webkit-scrollbar-corner {
  background: khaki;
}
.home {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
